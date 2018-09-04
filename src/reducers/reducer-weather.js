import { FETCH_WEATHER } from '../actions/index';

function checkDuplicate(state, payload) {
    return state.map(obj => obj.city.name).includes(payload.city.name);
}

export default function reducerWeather(state = [], action) {
    if (action.error) {
        return state;
    }
    if (action
        && action.payload
        && action.payload.data
        && !checkDuplicate(state, action.payload.data)) {
        switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];
        default:
            return state;
        }
    } else {
        return state;
    }
}
