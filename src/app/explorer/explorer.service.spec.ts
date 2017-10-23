import { ExplorerService } from "./explorer.service";
import { IBlock, IBlockTree } from "../blockTree/blockTree.interfaces";
import { IFeature } from "./explorer.interfaces";

describe('ExplorerService', () =>
{
    let service: ExplorerService;

    beforeEach(() => {
        service = new ExplorerService();
    })

    let MOCK_BLOCK: IBlock = { Content: 'mock-block-code' };
    let MOCK_BLOCK_TREE: IBlockTree = { Blocks: [ MOCK_BLOCK ] };
    let MOCK_FEATURE_1: IFeature = { Name: 'feature1', BlockTree: MOCK_BLOCK_TREE };

    it('add a feature', () => {
        var oldState = service.getState();
        service.addFeature(MOCK_FEATURE_1); 
        var state = service.getState();
        expect(oldState).not.toEqual(state);
        expect(state.Features.length).toBe(1);
        expect(state.Features[0]).toEqual(MOCK_FEATURE_1);
    })
}); 