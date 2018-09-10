import { WEATHER_ERROR, HIDE_WEATHER_ERROR } from '../actions/index';

export default function reducerError(state = {}, action) {
    switch (action.type) {
    case WEATHER_ERROR:
        if (action.payload && action.payload.status !== '200') {
            state = { ...state, weatherError: JSON.parse(action.payload.request.response).message };
        }
        break;
    case HIDE_WEATHER_ERROR:
        state = { ...state, weatherError: '' };
        break;
    default:
        break;
    }
    return state;
}
