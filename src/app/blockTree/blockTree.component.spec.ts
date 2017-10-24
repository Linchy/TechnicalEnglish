import { TestBed, async, inject } from "@angular/core/testing";
import { BlockTreeComponent } from "./blockTree.component";
import { BlockTreeService } from "./blockTree.service";
import { BrowserModule } from "@angular/platform-browser";
import { MatGridListModule, MatCardModule, MatButtonModule } from "@angular/material";
import { CodemirrorModule } from "ng2-codemirror";
import { ExplorerService } from "../explorer/explorer.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('BlockTreeComponent', () =>
{
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
              BlockTreeComponent
            ],
            imports: [
              BrowserModule,
              MatGridListModule, MatCardModule, MatButtonModule,
              CodemirrorModule
            ],
            providers: [
              ExplorerService, 
              BlockTreeService
            ],
            schemas: [
              NO_ERRORS_SCHEMA
            ]
        })
        .compileComponents();
    })

    // data

    let MOCK_FEATURE_1 = { Name: 'feature1' };
    let MOCK_FEATURE_2 = { Name: 'feature2' };

    // helpers

    let getDataElement = () => {
        const fixture = TestBed.createComponent(BlockTreeComponent);
        const element = fixture.debugElement.componentInstance;
        return element;
    };

    let getUIElement = () : HTMLBaseElement => {
        const fixture = TestBed.createComponent(BlockTreeComponent);
        fixture.detectChanges();
        const compiled : HTMLBaseElement = fixture.debugElement.nativeElement;
        return compiled;
    };

    // tests

    it('is created', () => {
        let element = getDataElement();
        expect(element).toBeTruthy();
    });

    it('have add button', () => {
        let element = getUIElement();
        expect(element.querySelector('button').textContent).toEqual('Add');
    })
}); 