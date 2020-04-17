import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from "@angular/core"
import { Color } from '../cell/cell'
import { CdkDragEnd } from '@angular/cdk/drag-drop'
import { PieceRef } from '../piece/piece'
import { PieceType, PieceMapping } from '../piece/pieceMapping'

@Component({
    selector: 'board',
    templateUrl: './board.html',
    styleUrls: ['./board.css']
})
export class Board implements OnInit
{
    @ViewChild('table', { static: true })
    table : ElementRef

    matrix : Color[][]

    pieces : PieceRef[] = []

    count : number = 0

    constructor (private renderer: Renderer2) {}
    
    ngOnInit() : void 
    {
        this.matrix = []

        for (var i: number = 0; i < 10; i++) 
        {
            this.matrix[i] = [];

            for(var j: number = 0; j< 10; j++) 
                this.matrix[i][j] = Color.Black
        }

        this.fillHolder()
    }
    
    fillHolder() : void 
    {
        this.pieces.push({ type : randomEnumValue(PieceType), serial : this.count++})
        this.pieces.push({ type : randomEnumValue(PieceType), serial : this.count++})
        this.pieces.push({ type : randomEnumValue(PieceType), serial : this.count++})
    }
    
    dropped(event: CdkDragEnd<number>) : void
    {
        let data = event.source.data
        
        let dragged = event.source.getFreeDragPosition()

        let absolute = {
            x : event.source.element.nativeElement.offsetLeft + dragged.x,
            y : event.source.element.nativeElement.offsetTop + dragged.y
        }
      
        let type = this.pieces.find(p => p.serial == data).type

        let table = this.getTable()
        let piece = this.getActivePiece(type, absolute)

        if (!this.isAcceptable(table, piece))
        {
            event.source._dragRef.reset()
        }
        else
        {
            this.applyPiece(table, piece)
        
            this.checkLines()

            this.pieces = this.pieces.filter(p => p.serial != event.source.data)

            if (this.pieces.length == 0)
                this.fillHolder()
        }
    }

    checkLines() : void
    {
        var table = this.getTable()
        var rows = [], cols = []
        let row = true, col = true

        for (let i = 0; i < 10; i++)
        {
            row = true
            for (let j = 0; j < 10; j++)
                if (table[i][j].isBlack)
                {
                    row = false
                    break
                }
            
            if (row)
                rows.push(i)
        }

        for (let i = 0; i < 10; i++)
        {
            col = true
            for (let j = 0; j < 10; j++)
                if (table[j][i].isBlack)
                {
                    col = false
                    break
                }
            
            if (col)
                cols.push(i)
        }

        var renderer = this.renderer
        if (rows.length > 0)
        {
            setTimeout(function() {
                rows.forEach(r => {
                    for (let i = 0; i < 10; i++)
                        renderer.setStyle(table[r][i].cell, "background-color", Color.Grey)
                })
            }, 250)

            setTimeout(function() {
                rows.forEach(r => {
                    for (let i = 0; i < 10; i++)
                        renderer.setStyle(table[r][i].cell, "background-color", Color.Black)
                })
            }, 500)

        }
        
        if (cols.length > 0)
        {
            setTimeout(function() {
                cols.forEach(c => {
                    for (let i = 0; i < 10; i++)
                        renderer.setStyle(table[i][c].cell, "background-color", Color.Silver)
                })
            }, 250)

            setTimeout(function() {
                cols.forEach(c => {
                    for (let i = 0; i < 10; i++)
                        renderer.setStyle(table[i][c].cell, "background-color", Color.Black)
                })
            }, 750)
        }
    }

    applyPiece(table: any, piece : any) : void
    {
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (piece[i][j] != null)
                        this.renderer.setStyle(this.getMatchingTableCell(table, piece[i][j]), "background-color", piece[i][j].color)
    }

    getMatchingTableCell(table: any, pieceCell: any) : any 
    {
        for (let i = 0; i < 10; i++)
            for (let j = 0; j < 10; j++)
                if (this.matchPosition(table[i][j], pieceCell))
                    if (table[i][j].isBlack)
                        return table[i][j].cell

        return null
    }

    isAcceptable(table: any, piece : any) : boolean
    {
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 5; j++)
                if (piece[i][j] != null)
                    if (!this.match(table, piece[i][j]))
                        return false

        return true
    }

    match(table: any, pieceCell: any) : boolean
    {
        for (let i = 0; i < 10; i++)
            for (let j = 0; j < 10; j++)
                if (this.matchPosition(table[i][j], pieceCell))
                    if (table[i][j].isBlack)
                        return true
                    else
                        return false

        return false
    }

    matchPosition(tableCell: any, pieceCell: any) : boolean
    {
        let tolerance = 30 / 2

        let x1 = tableCell.x - tolerance
        let x2 = tableCell.x + tolerance
        let y1 = tableCell.y - tolerance
        let y2 = tableCell.y + tolerance

        let x = pieceCell.x
        let y = pieceCell.y

        return x > x1 && x < x2 && y > y1 && y < y2
    }

    getActivePiece(type: PieceType, absolute: { x: number; y: number }) : any
    {
        let piece = []
        let map = PieceMapping.map(type)
        let tolerance : number = 34

        for (let i = 0; i < 5; i++)
        {
            piece[i] = []
            
            for (let j = 0; j < 5; j ++)
                if (map[i][j])
                    piece[i][j] = {
                        color : PieceMapping.color(type),
                        x : absolute.x + (tolerance * j) + (tolerance / 2) + 2,
                        y : absolute.y + (tolerance * i) + (tolerance / 2) + 2
                    }
                else
                    piece[i][j] = null
        }

        return piece
    }

    getTable() : any
    {
        let table = []

        for (let i = 0; i < 10; i++)
        {
            table[i] = []
            for (let j = 0; j < 10; j++)
            {
                let cell = this.table.nativeElement.rows[i].cells[j]
                table[i][j] = { 
                    x : cell.offsetLeft + cell.offsetParent.offsetLeft + cell.offsetWidth / 2  , 
                    y : cell.offsetTop + cell.offsetParent.offsetTop + cell.offsetHeight / 2,
                    cell : cell.firstChild.firstElementChild,
                    isBlack : cell.firstChild.firstElementChild.style.cssText.includes(Color.Black)
                }
            }
        }

        return table
    }
}

const randomEnumValue = (enumeration) => 
{
    const values = Object.keys(enumeration)
    const enumKey = values[Math.floor(Math.random() * values.length)]

    return enumeration[enumKey]
}