
import { Color } from '../cell/cell';

export enum PieceType
{
    Dot = "Dot",
    Block = "Block",
    BigL1 = "BigL1",
    BigL2 = "BigL2",
    BigL3 = "BigL3",
    BigL4 = "BigL4",
    SmallL1 = "SmallL1",
    SmallL2 = "SmallL2",
    SmallL3 = "SmallL3",
    SmallL4 = "SmallL4",
    LittleBlock = "LittleBlock",
    VerticalFullStick = "VerticalFullStick",
    Vertical4Stick = "Vertical4Stick",
    Vertical3Stick = "Vertical3Stick",
    Vertical2Stick = "Vertical2Stick",
    HorizontalFullStick = "HorizontalFullStick",
    Horizontal4Stick = "Horizontal4Stick",
    Horizontal3Stick = "Horizontal3Stick",
    Horizontal2Stick = "Horizontal2Stick",
}

export class PieceMapping
{
    static colors : { [id: string] : Color } = {}

    static mappings : { [id: string] : number[][]; } = {}

    static init()
    {
        this.colors[PieceType.Dot] = Color.Orange 
        this.colors[PieceType.Block] = Color.Yellow 
        this.colors[PieceType.LittleBlock] = Color.Blue 
        this.colors[PieceType.VerticalFullStick] = Color.Green 
        this.colors[PieceType.Vertical4Stick] = Color.Green 
        this.colors[PieceType.Vertical3Stick] = Color.Green 
        this.colors[PieceType.Vertical2Stick] = Color.Green 
        this.colors[PieceType.HorizontalFullStick] = Color.Red
        this.colors[PieceType.Horizontal4Stick] = Color.LightBlue
        this.colors[PieceType.Horizontal3Stick] = Color.Pink
        this.colors[PieceType.Horizontal2Stick] = Color.Violet
        this.colors[PieceType.BigL1] = Color.Olive
        this.colors[PieceType.BigL2] = Color.Olive
        this.colors[PieceType.BigL3] = Color.Brown
        this.colors[PieceType.BigL4] = Color.Brown
        this.colors[PieceType.SmallL1] = Color.Coral
        this.colors[PieceType.SmallL2] = Color.Coral
        this.colors[PieceType.SmallL3] = Color.Crimson
        this.colors[PieceType.SmallL4] = Color.Crimson

        this.mappings[PieceType.Dot] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Block] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.LittleBlock] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 0, 0 ],
            [ 0, 1, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.VerticalFullStick] = [
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ]
        ]

        this.mappings[PieceType.Vertical4Stick] = [
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Vertical3Stick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Vertical2Stick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.HorizontalFullStick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 1, 1, 1, 1, 1 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Horizontal4Stick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 1, 1, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Horizontal3Stick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.Horizontal2Stick] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.BigL1] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.BigL2] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.BigL3] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.BigL4] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 1, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.SmallL1] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 1, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.SmallL2] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 1, 1, 0, 0 ],
            [ 0, 1, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.SmallL3] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 1, 1, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]

        this.mappings[PieceType.SmallL4] = [
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 1, 1, 0 ],
            [ 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0 ]
        ]
    }
        
    static map(type : PieceType) : number[][]
    {
        return this.mappings[type]
    }

    static color(type : PieceType) : Color
    {
        return this.colors[type]
    }
}