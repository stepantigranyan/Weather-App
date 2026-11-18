import { useAppSelector } from '@src/hooks/useStore';

import WeatherMainCard from '@src/components/cards/WeatherMainCard';
import SuntimeCard from '@src/components/cards/SuntimeCard';
import WeatherDetailsCard from '@src/components/cards/WeatherDetailsCard';
import WeatherSecondaryCard from '@src/components/cards/WeatherSecondaryCard';

const Weather = () => {
    const currentForecast = useAppSelector(
        (state) => state.forecast.currentForecast
    );

    return (
        <div className="grid grid-rows-[1fr_auto] gap-y-5">
            <div className="grid grid-cols-2 gap-x-5">
                <WeatherMainCard />
                <div className="grid grid-rows-2 gap-y-5">
                    <SuntimeCard />
                    <WeatherDetailsCard />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between gap-x-2 size-full">
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
            </div>
        </div>
    );
};

export default Weather;
