import type { FC } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@root/components/ui/card';
import { Separator } from '@root/components/ui/separator';
import { Skeleton } from '@root/components/ui/skeleton';

import { getDayName, getTime } from '@src/utils/getTime';

interface WeatherSecondaryCardProps {
    loading: boolean;
    dt?: number;
    timezone?: number;
    description?: string;
    icon?: string;
    temp?: number;
    clouds?: number;
}

const WeatherSecondaryCard: FC<WeatherSecondaryCardProps> = ({ dt, clouds, temp, timezone, description, icon, loading}) => {
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
                            <div>{getDayName(dt)}</div>
                            <div>{getTime(dt, timezone)}</div>
                        </>
                    )}
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent>
                <div className="grid grid-rows-[2fr_1fr] gap-y-5">
                    <div className="grid grid-cols-[2fr_1fr] gap-x-3">
                        <div className='content-center'>
                            {loading ? (
                                <>
                                    <Skeleton className="w-2/3" />
                                </>
                            ) : (
                                <>
                                    <p className="text-3xl">{temp}C</p>
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
                                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                                    alt={description}
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
                                    {clouds}%
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default WeatherSecondaryCard;