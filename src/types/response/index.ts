export interface Coord {
    lon: number;
    lat: number;
}

export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainMetrics {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface Wind {
    speed: number;
    deg: number;
    gust?: number;
}

export interface Clouds {
    all: number;
}

export interface Precipitation {
    '1h'?: number;
    '3h'?: number;
}

// 1. Ответ для текущей погоды (/data/2.5/weather)
export interface CurrentWeatherResponse {
    coord: Coord;
    weather: WeatherCondition[];
    base: string;
    main: MainMetrics;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    rain?: Precipitation;
    snow?: Precipitation;
    dt: number;
    sys: {
        type?: number;
        id?: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

// 2. Элемент списка в прогнозе на 5 дней
export interface ForecastItem {
    dt: number;
    main: MainMetrics;
    weather: WeatherCondition[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number; // Вероятность осадков (0..1)
    rain?: Precipitation;
    snow?: Precipitation;
    sys: {
        pod: 'd' | 'n'; // День или ночь
    };
    dt_txt: string;
}

// 3. Полный ответ для прогноза на 5 дней (/data/2.5/forecast)
export interface FiveDayForecastResponse {
    cod: string; // Обратите внимание: здесь приходит строка "200", а не число
    message: number;
    cnt: number;
    list: ForecastItem[];
    city: {
        id: number;
        name: string;
        coord: Coord;
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}
