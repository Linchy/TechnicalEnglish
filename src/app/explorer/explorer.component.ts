import { Component } from "@angular/core";
import { ExplorerService } from "./explorer.service";
import { IFeature } from "./explorer.interfaces";

let MOCK_FEATURE_1 = { Name: 'feature1' };
let MOCK_FEATURE_2 = { Name: 'feature2' };

@Component ({
    selector: 'explorer',
    templateUrl: './explorer.component.html',
    styleUrls: [ './explorer.component.css' ],
    providers: [ExplorerService]
})
export class ExplorerComponent {
    public title: string;
    public features: IFeature[];

    constructor(
        public explorerService: ExplorerService) {
        this.title = 'Features';
        explorerService.addFeature(MOCK_FEATURE_1);
        explorerService.addFeature(MOCK_FEATURE_2);
        this.features = explorerService.getFeatures();
    }
}