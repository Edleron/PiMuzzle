import * as PIXI from "pixi.js";
import TWEEN from "@tweenjs/tween.js";
import { Loader } from "./Loader";
import { MainScene } from "./MainScene";

export class App {
    run() {
        // Create Canvas
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);
        console.log(this.app);

        // Loader Resources
        this.loader = new Loader(this.app.loader);
        this.loader.preLoad().then(() => this.start());
    }

    start() {
        console.log("The game started");
        this.app.ticker.add(() => {
            TWEEN.update();
        });
        this.scene = new MainScene();
        this.app.stage.addChild(this.scene.container);
    }
}