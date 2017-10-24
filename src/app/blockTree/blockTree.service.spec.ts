import { BlockTreeService } from "./blockTree.service";
import { IBlock, IBlockTree } from "./blockTree.interfaces";
import { TestBed, inject } from "@angular/core/testing";
import { ExplorerService } from "../explorer/explorer.service";

describe('BlockTreeService', () =>
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

    it('add block', async () => {
        inject([ExplorerService], (service: BlockTreeService) => {
            service.addBlock(MOCK_BLOCK);
            let blocks = service.getBlocks();
            expect(blocks.length).toBe(1);
            expect(blocks[0]).toEqual(MOCK_BLOCK);
        });
    })

    it('set state', async () => {
        inject([ExplorerService], (service: BlockTreeService) => {
            service.setState(MOCK_BLOCK_TREE);
            var state = service.getState();
            expect(state).toEqual(MOCK_BLOCK_TREE);
        });
    })
});