import { IFeature, IExplorerState } from "./explorer.interfaces";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { BlockTreeService } from "../blockTree/blockTree.service";
import { IBlockTree } from "../blockTree/blockTree.interfaces";

@Injectable()
export class ExplorerService {

    private state: IExplorerState;
    public stateChange: Subject<IExplorerState> = new Subject<IExplorerState>();

    public activeFeatureIndex: number;

    constructor(public blockTreeService: BlockTreeService) {
        this.state = {
            Features: []
        };

        blockTreeService.stateChange.subscribe((value: IBlockTree) => {
            this.updateActiveFeatureBlockTree(value);
        });
    }

    addFeature(feature: IFeature) {
        this.setState({
            ...this.state,
            Features: [...this.state.Features, feature]
        });
    }

    // get/set state

    getState() : IExplorerState {
        return this.state;
    }

    setState(newState: IExplorerState) {
        this.state = newState;        
        this.stateChange.next(newState);
    }

    // get/set feature

    getActiveFeature() {
        return this.state.Features[this.activeFeatureIndex]; 
    }

    setActiveFeatureIndex(index: number) {
      this.activeFeatureIndex = index;  
      this.blockTreeService.setState(this.getActiveFeature().BlockTree);
    }

    // update feature

    updateActiveFeature(feature: IFeature) {
        let newState = { ...this.state };
        newState.Features[this.activeFeatureIndex] = feature;
        this.setState(newState);
    }

    updateActiveFeatureBlockTree(blockTree: IBlockTree) {
        this.updateActiveFeature({
            ...this.getActiveFeature(),
            BlockTree: blockTree
        });
    }
} 