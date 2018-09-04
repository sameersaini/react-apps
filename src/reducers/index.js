import { combineReducers } from 'redux';
import reducerWeather from './reducer-weather';
import reducerError from './reducer-error';

const rootReducer = combineReducers({
    weather: reducerWeather,
    error: reducerError,
});

export default rootReducer;
