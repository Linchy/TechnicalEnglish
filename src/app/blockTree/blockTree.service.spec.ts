import { BlockTreeService } from "./blockTree.service";
import { IBlock, IBlockTree } from "./blockTree.interfaces";

describe('BlockTreeService', () =>
{
    let service: BlockTreeService;

    beforeEach(() => {
        service = new BlockTreeService();
    })

    let MOCK_BLOCK: IBlock = { Content: 'mock-block-code' };
    let MOCK_BLOCK_TREE: IBlockTree = { Blocks: [ MOCK_BLOCK ] };

    it('add block', () => {
        service.addBlock(MOCK_BLOCK);
        let blocks = service.getBlocks();
        expect(blocks.length).toBe(1);
        expect(blocks[0]).toEqual(MOCK_BLOCK);
    })

    it('set state', () => {
        service.setState(MOCK_BLOCK_TREE);
        var state = service.getState();
        expect(state).toEqual(MOCK_BLOCK_TREE);
    })
});