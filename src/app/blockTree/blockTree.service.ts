import { Injectable } from "@angular/core";
import { IBlock, IBlockTree } from "./blockTree.interfaces";
import { Subject } from "rxjs/Subject";
import { ExplorerService } from "../explorer/explorer.service";

@Injectable()
export class BlockTreeService {

    private state: IBlockTree;
    public stateChange: Subject<IBlockTree> = new Subject<IBlockTree>();

    constructor() {
        this.state = {
            Blocks: []
        };
    }

    addBlock(block: IBlock) {
        this.setState({
            ...this.state,
            Blocks: [...this.state.Blocks, block]
        });
    }

    getBlocks() : IBlock[] {
        return this.state.Blocks;
    }

    getState() : IBlockTree {
        return this.state;
    }

    setState(newState: IBlockTree) {
        this.state = newState;
        this.stateChange.next(newState);
    }
} 