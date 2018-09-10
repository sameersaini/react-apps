import axios from 'axios';

const API_KEY = '5b8b1b4c56f7fc87efae74f6165d6c4c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const WEATHER_ERROR = 'WEATHER_ERROR';
export const HIDE_WEATHER_ERROR = 'HIDE_WEATHER_ERROR';

export function fetchWeather(location) {
    const url = `${ROOT_URL}&q=${location.term},${location.country}`;
    const request = axios.get(url);

    return (dispatch) => {
        request.then((data) => {
            dispatch({
                type: FETCH_WEATHER,
                payload: data,
            });
        }).catch((err) => {
            dispatch({
                type: WEATHER_ERROR,
                payload: err.response,
            });
        }).then(() => {
            setTimeout(() => dispatch({ type: HIDE_WEATHER_ERROR, payload: null }), 3000);
        });
    };
}
