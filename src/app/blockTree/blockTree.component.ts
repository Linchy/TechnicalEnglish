import { Component, ChangeDetectionStrategy } from "@angular/core";
import { BlockTreeService } from "./blockTree.service";
import { ExplorerService } from "../explorer/explorer.service";
import { Subscription } from "rxjs/Subscription";
import { IBlockTree, IBlock } from "./blockTree.interfaces";

let MOCK_FEATURE_1 = { Name: 'feature1' };
let MOCK_FEATURE_2 = { Name: 'feature2' };

@Component ({
    selector: 'blockTree',
    templateUrl: './blockTree.component.html',
    styleUrls: [ './blockTree.component.css' ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class BlockTreeComponent {
    
    public state: IBlockTree;
    public blockTreeSub: Subscription;
    
    public config: any;
    public activeCodeMirrorContent: string;

    constructor(
        public explorerService: ExplorerService,
        public blockTreeService: BlockTreeService) {

        this.state = blockTreeService.getState();
        this.blockTreeSub = blockTreeService.stateChange.subscribe((value) => { 
            this.state = value;
        });

        this.config = { lineNumbers: true, mode: 'text/x-clojure', viewportMargin: Infinity };
    }

    onFocus(block: IBlock, index: number) {
        this.blockTreeService.setActiveBlockIndex(index);
        this.activeCodeMirrorContent = block.Content;
    }

    onChange(item, editorValue) {
        this.activeCodeMirrorContent = editorValue;
    }

    onBlur(block: IBlock) {
        this.blockTreeService.updateActiveBlockContent(this.activeCodeMirrorContent);
    }

    newBlock() {
        this.blockTreeService.addBlock({ Content: 'new' });
    }
}