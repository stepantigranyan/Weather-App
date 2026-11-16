import type { FC } from 'react';
import { Card, CardContent } from '@root/components/ui/card';
import { Skeleton } from '@root/components/ui/skeleton';
import { Droplets, Eye, Gauge, Wind } from 'lucide-react';

export interface WeatherSecondaryCardProps {
    loading: boolean;
    windSpeed: number;
    humidity: number;
    pressure: number;
    visibility: number;
}

const WeatherDetailsCard: FC<WeatherSecondaryCardProps> = ({
    loading,
    windSpeed,
    humidity,
    pressure,
    visibility,
}) => {
    return (
        <Card className="grid grid-rows-1">
            <CardContent className="content-center">
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="grid grid-rows-2 gap-y-5">
                        <div className="flex items-start gap-x-3">
                            {loading ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Wind className="size-8" />
                                </div>
                            )}
                            <div className="flex flex-col justify-between">
                                {loading ? (
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
                                            {windSpeed}m/s
                                        </h5>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="flex items-start gap-x-3">
                            {loading ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Droplets className="size-8 fill-blue-200" />
                                </div>
                            )}
                            <div className="flex flex-col justify-between">
                                {loading ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4" />
                                        <Skeleton className="w-20 h-3" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">Humidity</h4>
                                        <h5 className="text-muted-foreground">
                                            {humidity}%
                                        </h5>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 gap-y-5">
                        <div className="flex items-start gap-x-3 justify-self-end">
                            <div className="flex flex-col justify-between text-end">
                                {loading ? (
                                    <div className="grid grid-rows-2 gap-y-1">
                                        <Skeleton className="w-30 h-4" />
                                        <Skeleton className="w-20 h-3" />
                                    </div>
                                ) : (
                                    <>
                                        <h4 className="font-bold">Pressure</h4>
                                        <h5 className="text-muted-foreground">
                                            {pressure}hPa
                                        </h5>
                                    </>
                                )}
                            </div>
                            {loading ? (
                                <Skeleton className="size-10" />
                            ) : (
                                <div className="p-1 border border-solid border-foreground rounded-md">
                                    <Gauge className="size-8" />
                                </div>
                            )}
                        </div>
                        <div className="flex items-start gap-x-3 justify-self-end">
                            <div className="flex flex-col justify-between text-end">
                                {loading ? (
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
                                            {visibility}m
                                        </h5>
                                    </>
                                )}
                            </div>

                            {loading ? (
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
