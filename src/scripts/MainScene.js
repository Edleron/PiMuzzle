import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { PuzzleGrid } from "./PuzzleGrid";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
        this.createPuzzleGrid();
    }

    createBackground() {
        console.log(Globals);
        this.background = new PIXI.Sprite(Globals.resources["background"].texture);
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.container.addChild(this.background);
    }

    createPuzzleGrid() {
        const grid = new PuzzleGrid();
        this.container.addChild(grid.container);
    }
}