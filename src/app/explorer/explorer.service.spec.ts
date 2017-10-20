import { ExplorerService } from "./explorer.service";

describe('ExplorerService', () =>
{
    let service: ExplorerService;

    beforeEach(() => {
        service = new ExplorerService();
    })

    let MOCK_FEATURE = { Name: 'feature1' };

    it('add a feature', () => {
        service.addFeature(MOCK_FEATURE); 
        var features = service.getFeatures();
        expect(features.length).toBe(1);
        expect(features[0]).toEqual(MOCK_FEATURE);
    })
});