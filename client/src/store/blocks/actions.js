import { REQUEST_ALL_BLOCKS } from './constants';

export function requestAllBlocks() {
    console.log('disparou');
    return {
        type: REQUEST_ALL_BLOCKS,
    };
}
