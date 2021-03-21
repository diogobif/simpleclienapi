import { combineReducers } from 'redux';

import blocksReducer from './blocks/reducer';
import blockReducer from './block/reducer';

export default combineReducers({
    blocks: blocksReducer,
    blockInfo: blockReducer,
});
