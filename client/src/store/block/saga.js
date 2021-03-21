import {REQUEST_INFO_TOKEN, ERROR_INFO_TOKEN, SUCCESS_INFO_TOKEN} from './constants'
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { api } from '../../api';

async function getInfoToken(hash) {
    try {
        const response = await api.get(`/blocks/detail/${hash}`);
        return response.data.response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

function* requestInfoToken(action) {
    try {
        const response = yield call(getInfoToken, action.hash);
        yield put({
            type: SUCCESS_INFO_TOKEN,
            payload: response,
        });
    } catch (error) {
        yield put({
            type: ERROR_INFO_TOKEN,
            payload: error,
        });
        console.error(error);
        throw error;
    }
}

export default function* () {
    yield all([takeLatest(REQUEST_INFO_TOKEN, requestInfoToken)]);
}
