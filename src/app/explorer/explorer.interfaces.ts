import { IBlockTree } from "../blockTree/blockTree.interfaces";

export interface IExplorerState {
    Features: IFeature[];
}

export interface IFeature {
    Name: string;
    BlockTree: IBlockTree;
}