import {getAllBlocks, getInfoBlock} from "../services/blocks";

export const getBlocks = async () => {
    try {
        const response = await getAllBlocks();
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getInfoByHash = async (blockHash) => {
    try {
        const response = await getInfoBlock(blockHash);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}