import { useAppSelector } from '@src/hooks/useStore.ts';
import type { FC } from 'react';
import type { ForecastItem } from '@src/types/response';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@root/components/ui/card';
import { Separator } from '@root/components/ui/separator';
import { Skeleton } from '@root/components/ui/skeleton';

import { getDayName } from '@src/utils/getTime';

interface WeatherSecondaryCardProps {
    data: ForecastItem;
}

const WeatherSecondaryCard: FC<WeatherSecondaryCardProps> = ({ data }) => {
    const loading = useAppSelector((state) => state.loading.loading);
    const currentUnit = useAppSelector((state) => state.unit.currentUnit);

    return (
        <Card className="size-full">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    {loading ? (
                        <>
                            <Skeleton className="w-1/2 h-5" />
                            <Skeleton className="w-1/3 h-5" />
                        </>
                    ) : (
                        <>
                            <div>{getDayName(data.dt_txt.split(' ')[0])}</div>
                            <div>{data.dt_txt.split(' ')[1].slice(0, 5)}</div>
                        </>
                    )}
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent>
                <div className="grid grid-rows-[2fr_1fr] gap-y-5">
                    <div className="grid grid-cols-[2fr_1fr] gap-x-3">
                        <div className="content-center">
                            {loading ? (
                                <>
                                    <Skeleton className="w-2/3" />
                                </>
                            ) : (
                                <>
                                    <p className="text-3xl">
                                        {data.main.temp}
                                        {currentUnit === 'metric' ? '°C' : '°F'}
                                    </p>
                                </>
                            )}
                        </div>
                        <div>
                            {loading ? (
                                <>
                                    <Skeleton />
                                </>
                            ) : (
                                <img
                                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                    alt={data.weather[0].description}
                                />
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-1 content-end">
                        {loading ? (
                            <>
                                <Skeleton className="w-2/3 h-4" />
                                <Skeleton className="w-2/5 h-4 justify-self-end" />
                            </>
                        ) : (
                            <>
                                <h5>Clouds</h5>
                                <div className="justify-self-end">
                                    {data.clouds.all}%
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherSecondaryCard;
