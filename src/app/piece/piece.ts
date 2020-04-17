import { Component, Input, OnInit } from '@angular/core';
import { Cell, Color } from '../cell/cell';
import { PieceMapping, PieceType } from './pieceMapping';

@Component({
    selector : 'piece',
    templateUrl : './piece.html',
    styleUrls: ['./piece.css']
})
export class Piece implements OnInit
{
    @Input('type')
    pieceType: PieceType

    matrix : Color[][]

    protected color : Color

    ngOnInit() : void 
    {
        this.color = PieceMapping.color(this.pieceType)
        this.build()
    }

    build() : void 
    {
        this.matrix = []
        let map = PieceMapping.map(this.pieceType)

        for (var i: number = 0; i < 5; i++) 
        {
            this.matrix[i] = [];

            for(var j: number = 0; j< 5; j++) 
            {
                let color = map[i][j] ? this.color : Color.Transparent
                this.matrix[i][j] = color
            }
        }
    }
}

export interface PieceRef 
{
    type : PieceType,
    serial : number
}

