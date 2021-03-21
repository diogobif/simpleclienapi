import { all, fork } from 'redux-saga/effects';

import * as blocksSaga from './blocks/saga';
import * as blockSaga from './block/saga';

export default function* rootSaga() {
    yield all([...Object.values(blocksSaga), ...Object.values(blockSaga)].map(fork));
}
