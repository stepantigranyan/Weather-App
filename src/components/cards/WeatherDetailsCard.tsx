import { useAppSelector } from '@src/hooks/useStore';

import { Card, CardContent } from '@root/components/ui/card';
import { Skeleton } from '@root/components/ui/skeleton';
import { Droplets, Eye, Gauge, Wind } from 'lucide-react';

const WeatherDetailsCard = () => {
    const currentWeather = useAppSelector(
        (state) => state.weather.currentWeather
    );

    const currentUnit = useAppSelector((state) => state.unit.currentUnit);

    return (
        <Card className="grid grid-rows-1">
            <CardContent className="content-center">
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="grid grid-rows-2 gap-y-5">
                        <div className="flex items-start gap-x-3">
                            {!currentWeather ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Wind className="size-8" />
                                </div>
                            )}
                            <div className="flex flex-col justify-between">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4" />
                                        <Skeleton className="w-20 h-3" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">
                                            Wind Speed
                                        </h4>
                                        <h5 className="text-muted-foreground">
                                            {currentWeather.wind.speed}
                                            {currentUnit === 'metric'
                                                ? 'm/s'
                                                : 'mph'}
                                        </h5>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="flex items-start gap-x-3">
                            {!currentWeather ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Droplets className="size-8 fill-blue-200" />
                                </div>
                            )}
                            <div className="flex flex-col justify-between">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4" />
                                        <Skeleton className="w-20 h-3" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">Humidity</h4>
                                        <h5 className="text-muted-foreground">
                                            {currentWeather.main.humidity}%
                                        </h5>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-y-5">
                        <div className="flex items-start gap-x-3 justify-self-end">
                            <div className="flex flex-col justify-between text-end">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4" />
                                        <Skeleton className="w-20 h-3" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">Pressure</h4>
                                        <h5 className="text-muted-foreground">
                                            {currentWeather.main.pressure}hPa
                                        </h5>
                                    </>
                                )}
                            </div>
                            {!currentWeather ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Gauge className="size-8" />
                                </div>
                            )}
                        </div>
                        <div className="flex items-start gap-x-3 justify-self-end">
                            <div className="flex flex-col justify-between text-end">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4 justify-self-end" />
                                        <Skeleton className="w-20 h-3 justify-self-end" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">
                                            Visibility
                                        </h4>
                                        <h5 className="text-muted-foreground">
                                            {currentWeather.visibility}m
                                        </h5>
                                    </>
                                )}
                            </div>

                            {!currentWeather ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Eye className="size-8 fill-blue-200 [&>circle]:fill-slate-900" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherDetailsCard;
