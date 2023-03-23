import * as PIXI from "pixi.js";
import { Globals } from "./Globals";

export class MainScene {
    constructor() {
        this.container = new PIXI.Container();
        this.createBackground();
    }

    createBackground() {
        console.log(Globals);
        this.background = new PIXI.Sprite(Globals.resources["background"].texture);
        this.container.addChild(this.background);
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
    }
}