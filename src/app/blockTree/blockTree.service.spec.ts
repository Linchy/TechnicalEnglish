import { BlockTreeService } from "./blockTree.service";
import { IBlock } from "./blockTree.interfaces";

describe('BlockTreeService', () =>
{
    let service: BlockTreeService;

    beforeEach(() => {
        service = new BlockTreeService();
    })

    let MOCK_BLOCK: IBlock = { Content: 'fafdfdsfsdfsdfsdf' };

    it('add block', () => {
        service.addBlock(MOCK_BLOCK);
        let blocks = service.getBlocks();
        expect(blocks.length).toBe(1);
        expect(blocks[0]).toEqual(MOCK_BLOCK);
    })
});