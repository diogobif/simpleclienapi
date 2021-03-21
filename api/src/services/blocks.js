import axios from 'axios';

const getBlocks = async (timeout) => {
    try {
        const date = new Date();
        const apiBlock = axios.create({
            baseURL: `https://blockchain.info/blocks/${timeout ? date.getTime() : ''}?format=json`
        });
    
        const response = await apiBlock.get();
        if (response.data && response.data.blocks) {
            return response.data.blocks;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getAllBlocks = async () => {
    try {
        let response = await getBlocks(false);
        if (!response) {
            response = await getBlocks(true);
        }
        return response;
    } catch(error) {
        console.error(error);
        throw error;
    }
}

export const getInfoBlock = async (hash) => {
    try {
        const api = axios.create({
            baseURL: `https://blockchain.info/rawblock/${hash}`
        });
        const response = await api.get();
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}