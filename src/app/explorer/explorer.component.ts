import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ExplorerService } from "./explorer.service";
import { IFeature, IExplorerState } from "./explorer.interfaces";
import { Subscription } from "rxjs/Subscription";
import { BlockTreeService } from "../blockTree/blockTree.service";

@Component ({
    selector: 'explorer',
    templateUrl: './explorer.component.html',
    styleUrls: [ './explorer.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExplorerComponent {
    public title: string;
    public state: IExplorerState;

    public explorerServiceSub: Subscription;

    constructor(
        public explorerService: ExplorerService,
        public blockTreeService: BlockTreeService) {
        this.title = 'Features';
        this.state = explorerService.getState();

        this.explorerServiceSub = explorerService.stateChange.subscribe((value) => { 
            this.state = value;
          });
    }

    ngOnDestroy() {
      //prevent memory leak when component destroyed
      this.explorerServiceSub.unsubscribe();
    }
    
    public open(event: Event, feature: IFeature, index: number) {
      //alert('Open ' + item);
      this.explorerService.setActiveFeatureIndex(index);
    }
} 