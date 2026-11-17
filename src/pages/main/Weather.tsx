import { useAppSelector } from '@src/hooks/useStore';

import {
    Card,
    CardContent,
} from '@root/components/ui/card';

import WeatherMainCard from '@src/components/cards/WeatherMainCard';
import SuntimeCard from '@src/components/cards/SuntimeCard';
import WeatherDetailsCard from '@src/components/cards/WeatherDetailsCard';

import WeatherSecondaryCard from '@src/components/cards/WeatherSecondaryCard';

const Weather = () => {
    const currentForecast = useAppSelector((state) => state.forecast.currentForecast);

    return (
        <div className="grid grid-rows-[2fr_1.5fr] gap-y-10">
            <div className="grid grid-cols-2 gap-x-10">
                <div className="grid grid-rows-1 gap-y-5">
                    <WeatherMainCard />
                </div>
                <div className="grid grid-rows-[1fr_1.5fr] gap-y-5">
                    <SuntimeCard />
                    <WeatherDetailsCard />
                </div>
                <div className="grid grid-rows-1"></div>
            </div>
            <div>
                <div>
                    <Card>
                        <CardContent>
                            <div className="flex items-center justify-between gap-x-2">
                                {currentForecast
                                    ? currentForecast.list
                                          .slice(0, 5)
                                          .map((item) => (
                                              <WeatherSecondaryCard
                                                  key={Math.random().toString()}
                                                  data={item}
                                              />
                                          ))
                                    : Array(5)
                                          .fill(null)
                                          .map(() => (
                                              <WeatherSecondaryCard
                                                  key={Math.random().toString()}
                                                  data={null}
                                              />
                                          ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Weather;
