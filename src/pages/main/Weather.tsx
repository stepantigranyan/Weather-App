import { useEffect, useState } from 'react';

import {
    Card,
    CardContent,
} from '@root/components/ui/card';

import WeatherMainCard from '@src/components/cards/WeatherMainCard';
import SuntimeCard from '@src/components/cards/SuntimeCard';
import WeatherDetailsCard from '@src/components/cards/WeatherDetailsCard';

import { weatherApi } from '@src/api';
import type { CurrentWeatherResponse, ForecastItem } from '@src/types/response';

import { getCurrentLocation } from '@src/utils/getCurrentLocation';
import WeatherSecondaryCard from '@src/components/cards/WeatherSecondaryCard';

const Weather = () => {
    const [weatherData, setWeatherData] = useState<CurrentWeatherResponse>();
    const [weatherDataByHours, setWeatherDataByHours] =
        useState<ForecastItem[]>();

    useEffect(() => {
        (async () => {
            const position = await getCurrentLocation();

            const data = await weatherApi.getCurrentWeather(position);
            const dataByHours = (
                await weatherApi.getFiveDayForecast(position)
            ).list.slice(0, 5);

            setWeatherData(data);
            setWeatherDataByHours(dataByHours);

            console.log(dataByHours);
            console.log(data);
        })();
    }, []);

    const now = new Date();

    console.dir(now);

    return (
        <div className="grid grid-rows-[2fr_1.5fr] gap-y-10">
            <div className="grid grid-cols-2 gap-x-10">
                <div className="grid grid-rows-1 gap-y-5">
                    <WeatherMainCard
                        loading={!weatherData}
                        name={weatherData?.name}
                        main={weatherData?.main}
                        weather={weatherData?.weather[0]}
                        sys={weatherData?.sys}
                    />
                </div>
                <div className="grid grid-rows-[1fr_1.5fr] gap-y-5">
                    <SuntimeCard
                        loading={!weatherData}
                        sunrise={weatherData?.sys.sunrise}
                        sunset={weatherData?.sys.sunset}
                        timezone={weatherData?.timezone}
                    />
                    <WeatherDetailsCard
                        loading={!weatherData}
                        pressure={weatherData?.main.pressure}
                        humidity={weatherData?.main.humidity}
                        windSpeed={weatherData?.wind.speed}
                        visibility={weatherData?.visibility}
                    />
                </div>
                <div className="grid grid-rows-1"></div>
            </div>
            <div>
                <div>
                    <Card>
                        <CardContent>
                            <div className="flex items-center justify-between gap-x-2">
                                {weatherDataByHours
                                    ? weatherDataByHours.map((item) => (
                                          <WeatherSecondaryCard
                                              loading={false}
                                              temp={item?.main.temp}
                                              clouds={item?.clouds.all}
                                              timezone={weatherData?.timezone}
                                              description={
                                                  item?.weather[0].description
                                              }
                                              icon={weatherData?.weather[0].icon}
                                              dt={item?.dt}
                                          />
                                      ))
                                    : Array(5)
                                          .fill(null)
                                          .map(() => <WeatherSecondaryCard loading={true} />)}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Weather;
