import type {
    UserWeatherParams,
    WeatherParamsByCity,
    WeatherParamsByCoords,
    BaseWeatherParams,
} from '@src/types/request';

export const isCityParams = (
    params: UserWeatherParams
): params is BaseWeatherParams & WeatherParamsByCity => {
    return 'q' in params;
};

export const isCoordsParams = (
    params: UserWeatherParams
): params is BaseWeatherParams & WeatherParamsByCoords => {
    return 'lon' in params && 'lat' in params;
};
