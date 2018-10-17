import axios from 'axios';

const API_KEY = '92a2a7ead4a591a8513332da721a366f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ua&appid=${API_KEY}`;
    const request = axios.get(url);

    console.log('request', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
