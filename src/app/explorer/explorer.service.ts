import { IFeature, IExplorerState } from "./explorer.interfaces";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

Injectable()
export class ExplorerService {

    private state: IExplorerState;
    public stateChange: Subject<IExplorerState> = new Subject<IExplorerState>();

    constructor() {
        this.state = {
            Features: []
        };
    }

    addFeature(feature: IFeature) {
        this.state = {
            ...this.state,
            Features: [...this.state.Features, feature]
        };
        
        this.stateChange.next(this.state);
    }

    getState() : IExplorerState {
        return this.state;
    }
} 