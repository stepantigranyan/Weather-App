import { useAppSelector } from '@src/hooks/useStore';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@root/components/ui/card';

import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@root/components/ui/chart';

import { Separator } from '@root/components/ui/separator';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { groupedForecastsByDays } from '@src/utils/groupForecastsByDays';

const chartConfig = {
    temp: {
        label: 'MiddleTemp',
        color: '#d08700',
    },
} satisfies ChartConfig;

const CharCardForFiveDays = () => {
    const currentForecast = useAppSelector(
        (state) => state.forecast.currentForecast.list
    );
    const currentUnit = useAppSelector((state) => state.unit.currentUnit);


    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h3 className="text-xl font-bold">
                        Average Temperature Per Day
                    </h3>
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="size-full">
                    <BarChart
                        accessibilityLayer
                        data={groupedForecastsByDays(currentForecast)}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={10}
                            tickFormatter={(value) => value.slice(0, 3)}
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
                            dataKey="temp"
                            fill="var(--color-temp)"
                            radius={4}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default CharCardForFiveDays;