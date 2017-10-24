import { Component, OnInit } from "@angular/core";
import { ExplorerService } from "../explorer/explorer.service";
import { BlockTreeService } from "../blockTree/blockTree.service";
import { IBlock, IBlockTree } from "../blockTree/blockTree.interfaces";
import { IFeature } from "../explorer/explorer.interfaces";

let MOCK_BLOCK: IBlock = { Content: 'mock-block-code' };

let MOCK_FEATURE_1: IFeature = { Name: 'feature1', BlockTree: { Blocks: [ MOCK_BLOCK ] } };
let MOCK_FEATURE_2: IFeature = { Name: 'feature2', BlockTree: { Blocks: [ MOCK_BLOCK, { ...MOCK_BLOCK }, { ...MOCK_BLOCK }, { ...MOCK_BLOCK } ] } };

@Component ({
    selector: 'setup',
    template: '',
})
export class SetupComponent implements OnInit {

    constructor(
        public explorerService: ExplorerService,
        public blockTreeService: BlockTreeService) {
            
    }

    ngOnInit() {
        this.explorerService.addFeature(MOCK_FEATURE_1);
        this.explorerService.addFeature(MOCK_FEATURE_2);

        this.explorerService.setActiveFeatureIndex(0);
    }
}