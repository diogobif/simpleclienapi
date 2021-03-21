import { REQUEST_ALL_BLOCKS, SUCCESS_BLOCKS } from './constants';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { api } from '../../api';

async function requestBlocks() {
    const response = await api.get('/blocks');
    return response.data.response;
}

function* requestAllBlocks(action) {
    try {
        const response = yield call(requestBlocks);
        yield put({
            type: SUCCESS_BLOCKS,
            payload: response,
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default function* () {
    yield all([takeLatest(REQUEST_ALL_BLOCKS, requestAllBlocks)]);
}
