import { useAppSelector } from '@src/hooks/useStore.ts';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@root/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@root/components/ui/tabs"

import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@root/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Separator } from '@root/components/ui/separator.tsx';
import { getDayName } from '@src/utils/getTime';

import { getDayNames } from '@src/utils/getDayNames';
import { groupedForecastsByDay } from '@src/utils/groupForecastsByDay';
import { useEffect, useState } from 'react';
import type { ForecastItem } from '@src/types/response';
import { capitalize } from '@src/utils/capitalize';

const chartConfig = {
    temp: {
        label: 'Temp',
        color: '#4f39f6',
    }
} satisfies ChartConfig

const CharCardForOneDay = () => {
    const currentForecast = useAppSelector((state) => state.forecast.currentForecast);
    const currentUnit = useAppSelector((state) => state.unit.currentUnit);

    const dayNames = getDayNames(currentForecast.list);
    const sortedForecasts = groupedForecastsByDay(currentForecast.list);

    const [selectedDay, setSelectedDay] = useState<string>(dayNames[0]);
    const [weatherInfo, setWeatherInfo] = useState<ForecastItem>(
        currentForecast.list.find((x) => x.dt_txt.split(' ')[0] === selectedDay)
    );

    useEffect(() => {
        setWeatherInfo(
            currentForecast.list.find(
                (x) => x.dt_txt.split(' ')[0] === selectedDay
            )
        );
    }, [currentForecast]);

    return (
        <div>
            <Tabs defaultValue={dayNames[0]}>
                <TabsList>
                    {dayNames.map((day) => (
                        <TabsTrigger
                            onClick={() => {
                                setSelectedDay(day);
                                setWeatherInfo(
                                    currentForecast.list.find((x) =>
                                        x.dt_txt.includes(day)
                                    )
                                );
                            }}
                            key={day}
                            value={day}
                        >
                            {getDayName(day)}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {dayNames.map((day) => (
                    <TabsContent
                        key={day}
                        value={day}
                        className="grid grid-cols-[2fr_1fr] gap-x-5"
                    >
                        <ChartContainer
                            config={chartConfig}
                            className="size-full"
                        >
                            <BarChart
                                accessibilityLayer
                                data={sortedForecasts[getDayName(day)]}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="hour"
                                    tickLine={true}
                                    axisLine={true}
                                    tickMargin={10}
                                />
                                <YAxis
                                    tickLine={true}
                                    axisLine={true}
                                    tickMargin={10}
                                    tickFormatter={(value) =>
                                        `${value}${currentUnit === 'metric' ? '°C' : '°F'}`
                                    }
                                />
                                <Bar
                                    onClick={(data) =>
                                        setWeatherInfo(
                                            currentForecast.list.find(
                                                (x) =>
                                                    x.dt_txt ===
                                                    `${selectedDay} ${data.payload.hour}:00`
                                            )
                                        )
                                    }
                                    dataKey="temp"
                                    fill="var(--color-temp)"
                                    radius={4}
                                    className="cursor-pointer"
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                />
                            </BarChart>
                        </ChartContainer>
                        <Card className="size-full">
                            <CardHeader>
                                <CardTitle>
                                    <h3 className="text-xl font-bold flex justify-between">
                                        <span>{getDayName(day)}</span>
                                        <span>
                                            {weatherInfo.dt_txt
                                                .split(' ')[1]
                                                .slice(0, 5)}
                                        </span>
                                    </h3>
                                </CardTitle>
                                <Separator />
                            </CardHeader>
                            <CardContent className="size-full">
                                <div className="size-full px-5 grid grid-cols-2 grid-rows-1 gap-x-3">
                                    <div className="grid grid-rows-3 gap-y-3">
                                        <div>
                                            <h4 className="text-lg font-bold">
                                                {weatherInfo.weather[0].main}
                                            </h4>
                                            <p className="text-muted-foreground">
                                                {capitalize(
                                                    weatherInfo.weather[0]
                                                        .description
                                                )}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">
                                                Wind
                                            </h4>
                                            <p className="flex items-center gap-x-2 text-muted-foreground">
                                                <span>Speed</span>
                                                <span>
                                                    {weatherInfo.wind.speed}
                                                    {currentUnit === 'metric'
                                                        ? 'm/s'
                                                        : 'mph'}
                                                </span>
                                            </p>
                                            <p className="flex items-center gap-x-2 text-muted-foreground">
                                                <span>Deg</span>
                                                <span>
                                                    {weatherInfo.wind.deg}°
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">
                                                Humidity
                                            </h4>
                                            <p className="flex items-center gap-x-2 text-muted-foreground">
                                                <span>
                                                    {weatherInfo.main.humidity}%
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-3 gap-y-3">
                                        <div className="justify-self-end">
                                            <h4 className="text-lg font-bold justify-self-end">
                                                Feels like
                                            </h4>
                                            <p className="flex items-center gap-x-2 text-muted-foreground justify-self-end">
                                                <span>
                                                    {
                                                        weatherInfo.main
                                                            .feels_like
                                                    }
                                                    {currentUnit === 'metric'
                                                        ? '°C'
                                                        : '°F'}
                                                </span>
                                            </p>
                                        </div>
                                        <div className="justify-self-end">
                                            <h4 className="text-lg font-bold justify-self-end">
                                                Pressure
                                            </h4>
                                            <p className="flex items-center gap-x-2 text-muted-foreground justify-self-end">
                                                <span>
                                                    {weatherInfo.main.pressure}
                                                    hPa
                                                </span>
                                            </p>
                                        </div>
                                        <div className="justify-self-end">
                                            <h4 className="text-lg font-bold justify-self-end">
                                                Visibility
                                            </h4>
                                            <p className="flex items-center gap-x-2 text-muted-foreground justify-self-end">
                                                <span>
                                                    {weatherInfo.visibility}m
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

export default CharCardForOneDay;