import type { FC } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@root/components/ui/card';

import { Skeleton } from '@root/components/ui/skeleton';
import { Separator } from '@root/components/ui/separator';

import { getFullDate, getDayName } from '@src/utils/getTime';
import { capitalize } from '@src/utils/capitalize';

import type { MainMetrics, WeatherCondition } from '@src/types/response';

interface MainCardProps {
    loading: boolean;
    name: string;
    main: MainMetrics;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    weather: WeatherCondition;
}

const WeatherMainCard: FC<MainCardProps> = ({ loading, name, main, sys, weather }) => {
    const dayName = getDayName();
    const fullDate = getFullDate();

    return (
        <Card className="p-2">
            <CardHeader>
                <CardTitle className="text-xl font-bold">
                    {loading ? (
                        <Skeleton className="w-2/3 h-5" />
                    ) : (
                        `${name}, ${sys.country}`
                    )}
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent>
                <div className="grid grid-rows-[2fr_1fr] gap-y-5">
                    <div className="grid grid-cols-2 gap-x-5">
                        <div className="grid grid-rows-2">
                            <div className="content-start">
                                {loading ? (
                                    <div className="grid grid-rows-2 gap-y-2">
                                        <Skeleton className="w-1/2 h-5" />
                                        <Skeleton className="w-2/3 h-5" />
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-lg">{dayName}</h2>
                                        <h3 className="text-md text-muted-foreground">
                                            {fullDate}
                                        </h3>
                                    </>
                                )}
                            </div>
                            <div className="content-center">
                                {loading ? (
                                    <Skeleton className="w-full h-15" />
                                ) : (
                                    <p className="text-5xl">{main.temp}C</p>
                                )}
                            </div>
                        </div>
                        <div className="content-center justify-self-end">
                            {loading ? (
                                <div>
                                    <Skeleton className="w-30 h-20" />
                                </div>
                            ) : (
                                <>
                                    <img
                                        className='size-30'
                                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                                        alt={weather.description}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-5">
                        <div className="justify-self-start content-start w-full">
                            {loading ? (
                                <div className="grid grid-rows-2 gap-y-1">
                                    <Skeleton className="w-1/2 h-5" />
                                    <Skeleton className="w-1/3 h-5" />
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-lg">Feels like</h2>
                                    <p className="text-lg text-muted-foreground">
                                        {main.feels_like}
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="justify-self-end content-end text-end">
                            {loading ? (
                                <div className="grid grid-rows-3 gap-y-1">
                                    <Skeleton className="w-30 h-5 justify-self-end" />
                                    <Skeleton className="w-20 h-5 justify-self-end" />
                                    <Skeleton className="w-20 h-5 justify-self-end" />
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-lg">
                                        {capitalize(weather.description ?? '')}
                                    </h2>
                                    <p className="text-muted-foreground text-md">
                                        High: {main.temp_max}
                                    </p>
                                    <p className="text-muted-foreground text-md">
                                        Low: {main.temp_min}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherMainCard;
