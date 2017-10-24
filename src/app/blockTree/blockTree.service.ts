import { Injectable } from "@angular/core";
import { IBlock, IBlockTree } from "./blockTree.interfaces";
import { Subject } from "rxjs/Subject";
import { ExplorerService } from "../explorer/explorer.service";

@Injectable()
export class BlockTreeService {

    private state: IBlockTree;
    public stateChange: Subject<IBlockTree> = new Subject<IBlockTree>();

    private activeBlockIndex: number;

    constructor() {
        this.state = {
            Blocks: []
        };
    }

    // get/set state

    getState() : IBlockTree {
        return this.state;
    }

    setState(newState: IBlockTree) {
        this.state = newState;
        this.stateChange.next(newState);
    }

    // blocks

    addBlock(block: IBlock) {
        this.setState({
            Blocks: [...this.state.Blocks, block]
        });
    }

    getBlocks() : IBlock[] {
        return this.state.Blocks;
    }

    // get/set active block

    getActiveBlock() {
        return this.state.Blocks[this.activeBlockIndex];
    }

    setActiveBlockIndex(index: number) {
        this.activeBlockIndex = index;
    }

    setActiveBlock(newBlock: IBlock) {
        let newState = {
            Blocks: [...this.state.Blocks]
        };
        newState.Blocks[this.activeBlockIndex] = newBlock;
        this.setState(newState);
    }

    // update active block

    updateActiveBlockContent(newCode: string) {
        this.setActiveBlock({
            Content: newCode
        });
    }
} 