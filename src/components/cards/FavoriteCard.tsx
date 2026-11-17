import  { type FC, useEffect, useState } from 'react';
import type { Coord, CurrentWeatherResponse } from '@src/types/response';

import { Card, CardContent, CardHeader, CardTitle } from '@root/components/ui/card';
import { Separator } from '@root/components/ui/separator';
import { Skeleton } from '@root/components/ui/skeleton';

import { weatherApi } from '@src/api';
import { useAppSelector } from '@src/hooks/useStore.ts';
import { capitalize } from '@src/utils/capitalize';


interface FavoriteCardProps {
    coord: Coord
}

const FavoriteCard: FC<FavoriteCardProps> = ({ coord }) => {
    const currentUnit = useAppSelector((state) => state.unit.currentUnit);
    const [data, setData] = useState<CurrentWeatherResponse | null>(null);

    useEffect(() => {
        (async () => {
            const weatherData = await weatherApi.getCurrentWeather(coord);
            setData(weatherData);
        })()
    }, []);
    
    return (
        <Card>
            <div>
                <CardHeader>
                    <CardTitle className="font-bold grid justify-self-center">
                        {!data ? (
                            <Skeleton className="w-2/3 h-5" />
                        ) : (
                            <span>
                                {data.name}, {data.sys.country}
                            </span>
                        )}
                    </CardTitle>
                    <Separator />
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-x-3">
                        <div>
                            {!data ? (
                                <div>
                                    <Skeleton className="w-20 h-20" />
                                </div>
                            ) : (
                                <>
                                    <img
                                        className="size-25"
                                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        alt={data.weather[0].description}
                                    />
                                </>
                            )}
                        </div>
                        <div className="grid grid-rows-4 gap-y-2">
                            <div>
                                {!data ? (
                                    <Skeleton className="w-full h-15" />
                                ) : (
                                    <p className="text-md flex items-center justify-center gap-x-2">
                                        <span>Temp</span>
                                        <span className="font-bold">
                                            {data.main.temp}
                                            {currentUnit === 'metric'
                                                ? '°C'
                                                : '°F'}
                                        </span>
                                    </p>
                                )}
                            </div>
                            <div>
                                {!data ? (
                                    <Skeleton className="w-full h-15" />
                                ) : (
                                    <p className="text-md flex items-center justify-center gap-x-2">
                                        <span>Temp</span>
                                        <span className="font-bold">
                                            {data.main.temp}
                                            {currentUnit === 'metric'
                                                ? '°C'
                                                : '°F'}
                                        </span>
                                    </p>
                                )}
                            </div>
                            <div>
                                {!data ? (
                                    <Skeleton className="w-full h-15" />
                                ) : (
                                    <p className="text-md flex items-center justify-center gap-x-2">
                                        <span>Temp</span>
                                        <span className="font-bold">
                                            {data.main.temp}
                                            {currentUnit === 'metric'
                                                ? '°C'
                                                : '°F'}
                                        </span>
                                    </p>
                                )}
                            </div>
                            <div>
                                {!data ? (
                                    <Skeleton className="w-full h-15" />
                                ) : (
                                    <p className="text-md flex items-center justify-center gap-x-2">
                                        <span>Temp</span>
                                        <span className="font-bold">
                                            {data.main.temp}
                                            {currentUnit === 'metric'
                                                ? '°C'
                                                : '°F'}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
};

export default FavoriteCard;