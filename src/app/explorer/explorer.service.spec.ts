import { ExplorerService } from "./explorer.service";
import { IBlock, IBlockTree } from "../blockTree/blockTree.interfaces";
import { BlockTreeService } from "../blockTree/blockTree.service";
import { TestBed, inject } from "@angular/core/testing";
import { IFeature } from "./explorer.interfaces";

describe('ExplorerService', () =>
{
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [
                ExplorerService,
                BlockTreeService
            ]
        }).compileComponents();
    })

    let MOCK_BLOCK: IBlock = { Content: 'mock-block-code' };
    let MOCK_BLOCK_TREE: IBlockTree = { Blocks: [ MOCK_BLOCK ] };
    let MOCK_FEATURE_1: IFeature = { Name: 'feature1', BlockTree: MOCK_BLOCK_TREE };

    it('add a feature', async () => {
        inject([ExplorerService], (service: ExplorerService) => {
            var oldState = service.getState();
            service.addFeature(MOCK_FEATURE_1); 
            var state = service.getState();
            expect(oldState).not.toEqual(state);
            expect(state.Features.length).toBe(1);
            expect(state.Features[0]).toEqual(MOCK_FEATURE_1);
        });
    })

    it('activate feature', async () => {
        inject([ExplorerService], (service: ExplorerService) => {
            service.setActiveFeatureIndex(0);
            expect(service.getActiveFeature()).toEqual(MOCK_FEATURE_1);
        });
    })
}); 