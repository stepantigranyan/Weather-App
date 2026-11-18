import axios, { type InternalAxiosRequestConfig } from 'axios';
import unitsService from '@src/services/unitsService.ts';

const API_KEY: string = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    params: {
        appid: API_KEY,
        lang: 'en',
    },
});

weatherClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        config.params.units = unitsService.get();
        return config;
    }
);
