import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ExplorerService } from "./explorer.service";
import { IFeature, IExplorerState } from "./explorer.interfaces";
import { Subscription } from "rxjs/Subscription";

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
        public explorerService: ExplorerService) {
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
    
    public open(event, item) {
      alert('Open ' + item);
    }
} 