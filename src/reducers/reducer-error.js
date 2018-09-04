import { FETCH_WEATHER } from '../actions/index';

export default function reducerError(state = {}, action) {
    console.log(action);
    if (action
        && action.error
        && action.payload
        && action.payload.response
        && action.payload.response.data
    ) {
        switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, weatherError: action.payload.response.data.message };
        default:
            return state;
        }
    } else {
        return { ...state, weatherError: '' };
    }
}
