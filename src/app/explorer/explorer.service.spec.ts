import { ExplorerService } from "./explorer.service";

describe('ExplorerService', () =>
{
    let service: ExplorerService;

    beforeEach(() => {
        service = new ExplorerService();
    })

    let MOCK_FEATURE = { Name: 'feature1' };

    it('add a feature', () => {
        var oldState = service.getState();
        service.addFeature(MOCK_FEATURE); 
        var state = service.getState();
        expect(oldState).not.toEqual(state);
        expect(state.Features.length).toBe(1);
        expect(state.Features[0]).toEqual(MOCK_FEATURE);
    })
}); 