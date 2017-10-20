import { TestBed, async, inject } from "@angular/core/testing";
import { BlockTreeComponent } from "./blockTree.component";
import { BlockTreeService } from "./blockTree.service";

describe('BlockTreeComponent', () =>
{
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                BlockTreeComponent
            ],
            providers: [
                BlockTreeService
            ]
        }).compileComponents();
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
}); 