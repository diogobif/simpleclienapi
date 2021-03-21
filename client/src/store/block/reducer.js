import {REQUEST_INFO_TOKEN, SUCCESS_INFO_TOKEN, ERROR_INFO_TOKEN} from './constants'
const initialState = {
    data: {},
    loading: false,
    error: false,
};

const blockReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_INFO_TOKEN:
            return {...state, loading: true};
        case SUCCESS_INFO_TOKEN:
            return {...state, loading: false, data: action.payload};
        case ERROR_INFO_TOKEN:
            return {...state, loading: false, data: [], error: action.payload}
        default:
            return state;
    }
};

export default blockReducer;
