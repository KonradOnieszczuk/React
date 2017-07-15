import axios from 'axios'

const API_KEY = 'af004f272b8ec6723495d40d6d8def9b';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}