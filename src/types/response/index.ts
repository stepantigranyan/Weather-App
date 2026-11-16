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

export interface ForecastItem {
    dt: number;
    main: MainMetrics;
    weather: WeatherCondition[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    rain?: Precipitation;
    snow?: Precipitation;
    sys: {
        pod: 'd' | 'n';
    };
    dt_txt: string;
}

// 3. Полный ответ для прогноза на 5 дней (/data/2.5/forecast)
export interface FiveDayForecastResponse {
    cod: string;
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
