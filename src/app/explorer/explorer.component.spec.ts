import { TestBed, async, inject } from "@angular/core/testing";
import { ExplorerComponent } from "./explorer.component";
import { ExplorerService } from "./explorer.service";

describe('ExplorerComponent', () =>
{
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                ExplorerComponent
            ],
            providers: [
                ExplorerService
            ]
        }).compileComponents();
    })

    // data

    let MOCK_FEATURE_1 = { Name: 'feature1' };
    let MOCK_FEATURE_2 = { Name: 'feature2' };

    // helpers

    let getDataElement = () => {
        const fixture = TestBed.createComponent(ExplorerComponent);
        const element = fixture.debugElement.componentInstance;
        return element;
    };

    let getUIElement = () : HTMLBaseElement => {
        const fixture = TestBed.createComponent(ExplorerComponent);
        fixture.detectChanges();
        const compiled : HTMLBaseElement = fixture.debugElement.nativeElement;
        return compiled;
    };

    // tests

    it('is created', () => {
        let element = getDataElement();
        expect(element).toBeTruthy();
    });

    it('has title', () => {
        let element = getUIElement();
        expect(element.querySelector('h3').textContent).toEqual('Features');
    });

    it('has 1 feature',  async () => {
        inject([ExplorerService], (service: ExplorerService) => {
            
            service.addFeature(MOCK_FEATURE_1);

            let element = getUIElement();
            let list = element.querySelector('li');
            
            expect(list.childNodes[0].textContent).toEqual(MOCK_FEATURE_1.Name);
        })
    });

    it('has 2 features', async () => {
        inject([ExplorerService], (service: ExplorerService) => {
            
            service.addFeature(MOCK_FEATURE_1);
            service.addFeature(MOCK_FEATURE_2);

            let element = getUIElement();
            let list = element.querySelector('li');
            
            expect(list.childNodes[0].textContent).toEqual(MOCK_FEATURE_1.Name);
            expect(list.childNodes[1].textContent).toEqual(MOCK_FEATURE_2.Name);
        })
    });
})