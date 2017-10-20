import { Injectable } from "@angular/core";
import { IBlock } from "./blockTree.interfaces";

//Injectable()
export class BlockTreeService {

    private blocks: IBlock[];

    constructor() {
        this.blocks = [];
    }

    addBlock(block: IBlock) {
        this.blocks.push(block);
    }

    getBlocks() : IBlock[] {
        return this.blocks;
    }
} 