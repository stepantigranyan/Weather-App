import { Card, CardContent, CardHeader, CardTitle } from "@root/components/ui/card";
import { Badge } from "@root/components/ui/badge";
import { Separator } from '@root/components/ui/separator'
import {
    Thermometer,
    Droplets,
    Wind,
    Gauge,
    Eye,
    CloudFog,
} from "lucide-react";
import {useEffect, useState} from "react";

import { weatherApi } from "@src/api";
import type {CurrentWeatherResponse} from "@src/types/response";
import {renderWeatherIcon} from "@src/utils/renderWeatherIcon";

const Weather = () => {
    const [weatherData, setWeatherData] = useState<CurrentWeatherResponse>();

    useEffect(() => {
        (async () => {
            const data = await weatherApi.getCurrentWeather({ q: 'Abovyan' });
            console.log(data)
            setWeatherData(data);
        })()
    }, []);

    return (
        <div className="grid grid-cols-2 gap-x-20">
            <div className='grid grid-rows-[2fr_1fr] gap-y-5'>
                <Card className='p-2'>
                    <CardHeader>
                        <CardTitle className='text-xl font-bold'>{weatherData?.name || 'name'}, {weatherData?.sys?.country || 'country'}</CardTitle>
                        <Separator />
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-rows-[2fr_1fr] gap-y-5'>
                            <div className='grid grid-cols-2 gap-x-5'>
                                <div className='grid grid-rows-2'>
                                    <div>
                                        <h2 className='text-lg'>Monday</h2>
                                        <h3 className='text-md text-muted-foreground'>15 Nov, 2026</h3>
                                    </div>
                                    <div className='content-center'>
                                        <p className='text-5xl'>{weatherData?.main.temp}C</p>
                                    </div>
                                </div>
                                <div className='content-center justify-self-end'>
                                    {renderWeatherIcon(weatherData?.weather[0].main.toLowerCase(), 'size-30 text-foreground')}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-x-5'>
                                <div className='justify-self-start content-start'>
                                    <p className='text-lg'>Feels like</p>
                                    <p className='text-lg text-muted-foreground'>{weatherData?.main.feels_like}</p>
                                </div>
                                <div className='justify-self-end content-start text-end'>
                                    <h2 className='text-lg'>{weatherData?.weather[0].description}</h2>
                                    <h3 className='text-muted-foreground text-md'>High: {weatherData?.main.temp_max}</h3>
                                    <h3 className='text-muted-foreground text-md'>Low: {weatherData?.main.temp_min}</h3>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div className='grid grid-cols-2 gap-x-5'>
                            <div className='grid grid-rows-2 gap-y-5'>
                                <div className='flex items-start gap-x-3'>
                                    <div className='p-1 border border-solid border-foreground rounded-md'>
                                        <Wind className='size-8' />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h4>Wind Speed</h4>
                                        <h4 className='text-muted-foreground'>{weatherData?.wind.speed}m/s</h4>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <div className='p-1 border border-solid border-foreground rounded-md'>
                                        <Droplets className='size-8' />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h4>Humidity</h4>
                                        <h4 className='text-muted-foreground'>{weatherData?.main.humidity}%</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-rows-2 gap-y-5'>
                                <div className='flex items-start gap-x-3'>
                                    <div className='p-1 border border-solid border-foreground rounded-md'>
                                        <Gauge className='size-8' />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h4>Pressure</h4>
                                        <h4 className='text-muted-foreground'>{weatherData?.main.pressure}hPa</h4>
                                    </div>
                                </div>
                                <div className='flex items-start gap-x-3'>
                                    <div className='p-1 border border-solid border-foreground rounded-md'>
                                        <Eye className='size-8' />
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h4>Visibility</h4>
                                        <h4 className='text-muted-foreground'>{weatherData?.visibility}m</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 2. Ընտրված ժամի մանրամասն ցուցանիշներ */}
            {/*<Card className="bg-card shadow-sm">*/}
            {/*    <CardHeader className="flex flex-row items-center justify-between pb-3">*/}
            {/*        <CardTitle className="text-base font-semibold">*/}
            {/*            {weatherData.name}*/}
            {/*        </CardTitle>*/}
            {/*        <Badge variant="outline">{activeSlot.description}</Badge>*/}
            {/*    </CardHeader>*/}
            {/*    <CardContent>*/}
            {/*        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">*/}
            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Thermometer className="mt-0.5 h-5 w-5" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Ջերմաստիճան</p>*/}
            {/*                    <p className="text-lg font-bold">*/}
            {/*                        {activeSlot.temp}°10*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Thermometer className="mt-0.5 h-5 w-5 text-sky-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Զգացվում է</p>*/}
            {/*                    <p className="text-lg font-bold">*/}
            {/*                        {activeSlot.feelsLike}°10*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Droplets className="mt-0.5 h-5 w-5 text-cyan-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Խոնավություն</p>*/}
            {/*                    <p className="text-lg font-bold">{activeSlot.humidity}%</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Wind className="mt-0.5 h-5 w-5 text-teal-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Քամի</p>*/}
            {/*                    <p className="text-lg font-bold">*/}
            {/*                        {activeSlot.windSpeed} կմ/ժ ({activeSlot.windDeg})*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Gauge className="mt-0.5 h-5 w-5 text-indigo-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Ճնշում</p>*/}
            {/*                    <p className="text-lg font-bold">{activeSlot.pressure} հՊա</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <Eye className="mt-0.5 h-5 w-5 text-slate-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Տեսանելիություն</p>*/}
            {/*                    <p className="text-lg font-bold">*/}
            {/*                        {(activeSlot.visibility / 1000).toFixed(1)} կմ*/}
            {/*                    </p>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div className="flex items-start gap-3">*/}
            {/*                <CloudFog className="mt-0.5 h-5 w-5 text-gray-500" />*/}
            {/*                <div>*/}
            {/*                    <p className="text-xs text-muted-foreground">Ամպամածություն</p>*/}
            {/*                    <p className="text-lg font-bold">{activeSlot.clouds}%</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
        </div>
    )
};

export default Weather;