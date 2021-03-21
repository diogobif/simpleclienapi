import {REQUEST_INFO_TOKEN} from './constants';

export function requestInfoToken(hash) {
    console.log('teste');
    return {
        type: REQUEST_INFO_TOKEN,
        hash: hash
    }
}