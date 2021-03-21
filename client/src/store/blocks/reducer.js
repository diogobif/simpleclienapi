import { REQUEST_ALL_BLOCKS, SUCCESS_BLOCKS, ERROR_BLOCKS } from './constants';
const initialState = {
    data: [],
    loading: false,
    error: false,
};

export default function blocksReducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ALL_BLOCKS:
            return { ...state, loading: true };
        case SUCCESS_BLOCKS:
            return { ...state, loading: false, data: action.payload };
        case ERROR_BLOCKS:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        default:
            return state;
    }
}
