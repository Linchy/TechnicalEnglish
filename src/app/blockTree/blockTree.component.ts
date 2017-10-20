import { Component } from "@angular/core";
import { BlockTreeService } from "./blockTree.service";
import { ExplorerService } from "../explorer/explorer.service";

let MOCK_FEATURE_1 = { Name: 'feature1' };
let MOCK_FEATURE_2 = { Name: 'feature2' };

@Component ({
    selector: 'blockTree',
    templateUrl: './blockTree.component.html',
    styleUrls: [ './blockTree.component.css' ]
})
export class BlockTreeComponent {

    constructor(
        public blockTreeService: BlockTreeService) {
    }
}