import axios from 'axios';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    params: {
        appid: API_KEY,
        units: 'metric',
        lang: 'en',
    },
});


