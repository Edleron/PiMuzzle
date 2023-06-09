import * as PIXI from "pixi.js";
import { Globals } from "./Globals";
import { PuzzleGrid } from "./PuzzleGrid";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        Globals.resources.music.sound.play({
            loop: true,
            volume: 0.3
        });
        this.createBackground();
        this.createPuzzleGrid();
        console.log("test");
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