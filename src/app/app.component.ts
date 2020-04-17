import { Component } from '@angular/core';
import { PieceMapping } from './piece/pieceMapping';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    title = 'tetrix'

    constructor()
    {
        PieceMapping.init()
    }
}
