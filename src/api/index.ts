import { weatherClient } from '@src/api/axiosClient';
import type {UserWeatherParams, WeatherRequestParams} from '@src/types/request';
import type { CurrentWeatherResponse, FiveDayForecastResponse } from "@src/types/response";
import { isCityParams, isCoordsParams } from "@src/utils/typeGuards";

const WEATHER_PATH = '/weather';
const FORECAST_PATH = '/forecast';

class WeatherApi {
    async getCurrentWeather(params: UserWeatherParams) {
        if (isCityParams(params) || isCoordsParams(params)) {
            const response = await weatherClient<CurrentWeatherResponse>(WEATHER_PATH, { params });
            return response.data;
        }
    }

    async getFiveDayForecast(params: WeatherRequestParams) {
        if (isCityParams(params) || isCoordsParams(params)) {
            const response = await weatherClient<FiveDayForecastResponse>(FORECAST_PATH, { params });
            return response.data;
        }
    }
}

export const weatherApi = new WeatherApi();