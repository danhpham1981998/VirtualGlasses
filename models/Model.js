import { Glasses } from "./Glasses.js";

export class Model {
    glassesDetail = new Glasses();

    constructor() {}
    changGlasses(newGlasses) {
        this.glassesDetail = newGlasses;
    }
}