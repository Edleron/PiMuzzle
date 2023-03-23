import { LoaderConfig } from "./LoaderConfig";
import { Globals } from "./Globals";

export class Loader {
    constructor(loader) {
        this.loader = loader;
        this.resources = LoaderConfig;
    }

    preLoad() {
        return new Promise(resolve => {
            for (let key in this.resources) {
                this.loader.add(key, this.resources[key]);
            }
            this.loader.load((loader, resources) => {
                console.log("respurces loaded!", resources);
                Globals.resources = resources;
                resolve();
            });
        });
    }
}