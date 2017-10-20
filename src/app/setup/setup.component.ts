import { Component, OnInit } from "@angular/core";
import { ExplorerService } from "../explorer/explorer.service";
import { BlockTreeService } from "../blockTree/blockTree.service";

let MOCK_FEATURE_1 = { Name: 'feature1' };
let MOCK_FEATURE_2 = { Name: 'feature2' };

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
    }
}