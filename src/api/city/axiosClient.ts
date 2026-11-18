import axios from 'axios';
const BASE_URL = 'https://geocoding-api.open-meteo.com/v1';

export const cityClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    params: {
        language: 'en',
        format: 'json',
        count: 1,
    }
});
