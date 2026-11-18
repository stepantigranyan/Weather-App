import { type SubmitEvent, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { useAppDispatch } from '@src/hooks/useStore';

import { toast } from '@root/components/ui/toast';

import weatherApi  from '@src/api/weather';
import cityApi  from '@src/api/city';

import { setWeather } from '@src/store/slices/weatherSlice';
import { setForecast } from '@src/store/slices/forecastSlice';
import { setLoading } from '@src/store/slices/loadingSlice.ts';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@root/components/ui/input-group';
import { Button } from '@root/components/ui/button';

import { CloudSun, SearchIcon, X } from 'lucide-react';

import SideBar from '@src/components/sidebar/Sidebar';
import coordsService from '@src/services/coordsService.ts';

const Header = () => {
    const [open, setOpen] = useState(false);
    const [params, setParams] = useSearchParams();

    const [cityName, setCityName] = useState<string>('');
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        (async () => {
            const name = params.get('name') || '';
            const cityData = await cityApi.getCity(name);

            if (!cityData) return;

            dispatch(setLoading(true));
            const coords = { lat: cityData.latitude, lon: cityData.longitude };

            coordsService.set(coords);
            const weatherData = await weatherApi.getCurrentWeather(coords);
            const forecastData = await weatherApi.getFiveDayForecast(coords);

            dispatch(setWeather(weatherData));
            dispatch(setForecast(forecastData));

            setParams((prev) => {
                prev.set('name', name);
                return prev;
            });

            dispatch(setLoading(false));

        })()
    }, [params]);

    const handleSearch = async (e: SubmitEvent<HTMLFormElement>)=> {
        e.preventDefault();
        const cityData = await cityApi.getCity(cityName);

        if (!cityData) {
            toast.add({
                type: 'warning',
                title: 'We Couldn’t Find That City',
                description:
                    'Oops! We couldn’t find that city on our map. Double-check the spelling or try entering a nearby location.',
            });
            return;
        }

        dispatch(setLoading(true));
        const coords = { lat: cityData.latitude, lon: cityData.longitude };

        coordsService.set(coords);
        const weatherData = await weatherApi.getCurrentWeather(coords);
        const forecastData = await weatherApi.getFiveDayForecast(coords);

        dispatch(setWeather(weatherData));
        dispatch(setForecast(forecastData));

        dispatch(setLoading(false));
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-white px-5 py-2 md:py-4 xl:mp-6 shadow-sm z-50">
            <div className="w-full sm:w-lg sm:mx-auto md:w-2xl lg:w-4xl xl:w-6xl">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-10">
                    <div className="flex items-center gap-x-2">
                        <CloudSun className="size-9 md:size-12 xl:size-15" />
                        <h1 className="font-bold text-lg md:text-xl xl:text-2xl">
                            My App
                        </h1>
                    </div>

                    <form onSubmit={handleSearch}>
                        <InputGroup className="w-1/2 justify-self-center">
                            <InputGroupInput
                                value={cityName}
                                className="w-20 text-sm lg:w-30"
                                placeholder="City name"
                                id="search-input"
                                name="search-input"
                                onInput={(e) =>
                                    setCityName(e.currentTarget.value)
                                }
                            />
                            <InputGroupAddon>
                                <SearchIcon />
                            </InputGroupAddon>
                            <InputGroupAddon className={!cityName && 'hidden'} align='inline-end'>
                                <Button onClick={() => setCityName('')} size='icon-xs' variant='ghost'><X /></Button>
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton
                                    className="cursor-pointer"
                                    size="xs"
                                    variant="secondary"
                                    type="submit"
                                >
                                    Search
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </form>

                    <div>
                        <SideBar open={open} onOpenChange={setOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
