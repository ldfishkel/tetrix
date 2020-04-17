import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector : 'cell',
    templateUrl : './cell.html',
    styleUrls: ['./cell.css']
})
export class Cell implements OnInit
{
    @Input('color')
    public color: string

    public border: string

    constructor() { }

    ngOnInit() : void 
    {
        this.border = this.color == Color.Transparent ? 'none' : 'solid #000 1px'
    }
}

export enum Color 
{
    Black       = 'black',
    Red         = 'red',
    Green       = 'green',
    Blue        = 'blue',
    Yellow      = 'yellow',
    Violet      = 'violet',
    Orange      = 'orange',
    Pink        = 'pink',
    LightBlue   = 'lightblue',
    Brown       = 'brown',
    Coral       = 'coral',
    Crimson     = 'crimson',
    Grey        = 'grey',
    Silver      = 'silver',
    Olive       = 'olive',
    Transparent = 'transparent'
}