import { useAppSelector } from '@src/hooks/useStore.ts';
import { Card, CardContent } from '@root/components/ui/card';
import { Skeleton } from '@root/components/ui/skeleton';
import { Sunrise, Sunset } from 'lucide-react';

import { getTime } from '@src/utils/getTime';

const SuntimeCard = () => {
    const currentWeather = useAppSelector(
        (state) => state.weather.currentWeather
    );

    return (
        <Card className="grid grid-rows-1">
            <CardContent className="content-center">
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="justify-self-start text-start">
                        <div className="grid grid-cols-[1fr_2fr] gap-x-5 items-center">
                            <div>
                                {!currentWeather ? (
                                    <Skeleton className="size-10" />
                                ) : (
                                    <Sunrise className="size-10 fill-yellow-600" />
                                )}
                            </div>
                            <div className="flex flex-col justify-between">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-20 h-5" />
                                        <Skeleton className="w-10 h-5" />
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-lg font-bold">
                                            Sunrise
                                        </h2>
                                        <p className="text-muted-foreground">
                                            {getTime(
                                                currentWeather.sys.sunrise,
                                                currentWeather.timezone
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="justify-self-end text-end">
                        <div className="grid grid-cols-[2fr_1fr] gap-x-5 items-center">
                            <div className="flex flex-col justify-between">
                                {!currentWeather ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-20 h-5 justify-self-end" />
                                        <Skeleton className="w-10 h-5 justify-self-end" />
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-lg font-bold">
                                            Sunset
                                        </h2>
                                        <p className="text-muted-foreground">
                                            {getTime(
                                                currentWeather.sys.sunset,
                                                currentWeather.timezone
                                            )}
                                        </p>
                                    </>
                                )}
                            </div>
                            <div>
                                {!currentWeather ? (
                                    <Skeleton className="size-10" />
                                ) : (
                                    <Sunset className="size-10 fill-indigo-600" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default SuntimeCard;
