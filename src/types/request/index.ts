export type Units = 'metric' | 'imperial';
export type Lang = 'en' | 'ru';

export interface BaseWeatherParams {
    appid: string;
    lang: Lang;
    units: Units;
}

export interface WeatherParamsByCity {
    q: string;
    lat?: never;
    lon?: never;
}

export interface WeatherParamsByCoords {
    q?: never;
    lat: number;
    lon: number;
}

export type UserWeatherParams = WeatherParamsByCoords | WeatherParamsByCity;
export type WeatherRequestParams = BaseWeatherParams & UserWeatherParams;
