import { IFeature } from "./explorer.interfaces";
import { Injectable } from "@angular/core";

//Injectable()
export class ExplorerService {

    private features: IFeature[];

    constructor() {
        this.features = [];
    }

    addFeature(feature: IFeature) {
        this.features.push(feature);
    }

    getFeatures() : IFeature[] {
        return this.features;
    }
} 