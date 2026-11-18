import {
    type Dispatch,
    type FC,
    type SubmitEvent,
    type SetStateAction,
    useState,
} from 'react';

import { NavLink } from 'react-router';
import { useAppSelector, useAppDispatch } from '@src/hooks/useStore';

import type { Units } from '@src/types/request';

import { setUnit } from '@src/store/slices/unitSlice';
import { setWeather } from '@src/store/slices/weatherSlice';
import { setForecast } from '@src/store/slices/forecastSlice';
import { setLoading } from '@src/store/slices/loadingSlice.ts';

import weatherApi  from '@src/api/weather';
import coordsService from '@src/services/coordsService';

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@root/components/ui/sheet';

import {
    Field,
    FieldGroup,
    FieldLegend,
    FieldSet,
    FieldDescription,
    FieldContent,
    FieldLabel,
} from '@root/components/ui/field';

import { Separator } from '@root/components/ui/separator';
import { Button } from '@root/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@root/components/ui/radio-group';

import { Sun, Star, CalendarDays, Menu } from 'lucide-react';

interface SideBarProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const SideBar: FC<SideBarProps> = ({ open, onOpenChange }) => {
    const currentUnit = useAppSelector(
        (state) => state.unit.currentUnit
    ) as Units;

    const dispatch = useAppDispatch();

    const [unt, setUnt] = useState<Units>(currentUnit);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setLoading(true));

        onOpenChange(false);
        dispatch(setUnit(unt));

        const coords = coordsService.get();
        const weatherData = await weatherApi.getCurrentWeather(coords);
        const forecastData = await weatherApi.getFiveDayForecast(coords);

        dispatch(setWeather(weatherData));
        dispatch(setForecast(forecastData));

        dispatch(setLoading(false));
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger
                render={
                    <Button
                        className="cursor-pointer"
                        variant="ghost"
                        size="icon"
                    >
                        <Menu className="size-7" />
                        <span className="sr-only">Open Menu</span>
                    </Button>
                }
            />
            <SheetContent side="right" className="p-10 w-65 sm:w-75 z-2000">
                <SheetTitle className="text-left text-3xl mb-4">
                    Menu
                </SheetTitle>

                <nav className="grid grid-rows-[1fr_4fr_1fr] mt-4">
                    <div>
                        <h4 className="text-xl font-bold mb-2">Pages</h4>
                        <Separator />
                    </div>
                    <div className="grid grid-rows-3">
                        <NavLink
                            to={`/weather?lon=${coordsService.get().lon}&lat=${coordsService.get().lat}`}
                            onClick={() => onOpenChange(false)}
                            className="group px-3 py-2 text-lg font-medium flex items-center gap-x-2 transition-colors duration-200 hover:bg-muted"
                        >
                            <span>
                                <Sun className="size-6 group-hover:fill-yellow-600 transition-colors duration-200" />
                            </span>
                            <span>Current Weather</span>
                        </NavLink>
                        <NavLink
                            to={`/forecast?lon=${coordsService.get().lon}&lat=${coordsService.get().lat}`}
                            onClick={() => onOpenChange(false)}
                            className="group px-3 py-2 text-lg font-medium flex items-center gap-x-2 transition-colors duration-200 hover:bg-muted"
                        >
                            <span>
                                <CalendarDays className="size-6 group-hover:fill-indigo-600 transition-colors duration-200" />
                            </span>
                            <span>5-Day Outlook</span>
                        </NavLink>
                        <NavLink
                            to="/favorites"
                            onClick={() => onOpenChange(false)}
                            className="group px-3 py-2 text-lg font-medium flex items-center gap-x-2 transition-colors duration-200 hover:bg-muted"
                        >
                            <span>
                                <Star className="size-6 group-hover:fill-yellow-400 transition-colors duration-200" />
                            </span>
                            <span>Favorite Cities</span>
                        </NavLink>
                    </div>
                </nav>
                <div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">Settings</h4>
                        <Separator />
                    </div>
                    <div className="grid grid-rows-2 mt-4">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-sm space-y-6"
                        >
                            <FieldGroup>
                                <FieldSet>
                                    <FieldLegend variant="label">
                                        Temperature Unit
                                    </FieldLegend>
                                    <FieldDescription>
                                        Choose which scale to use for
                                        temperature conversions.
                                    </FieldDescription>

                                    <RadioGroup
                                        value={unt}
                                        onValueChange={(val) => setUnt(val)}
                                    >
                                        <Field orientation="horizontal">
                                            <RadioGroupItem
                                                value="metric"
                                                id="unit-celsius"
                                            />
                                            <FieldContent>
                                                <FieldLabel htmlFor="unit-celsius">
                                                    Celsius (°C)
                                                </FieldLabel>
                                                <FieldDescription>
                                                    Metric scale where water
                                                    freezes at 0° and boils at
                                                    100°.
                                                </FieldDescription>
                                            </FieldContent>
                                        </Field>

                                        <Field orientation="horizontal">
                                            <RadioGroupItem
                                                value="imperial"
                                                id="unit-fahrenheit"
                                            />
                                            <FieldContent>
                                                <FieldLabel htmlFor="unit-fahrenheit">
                                                    Fahrenheit (°F)
                                                </FieldLabel>
                                                <FieldDescription>
                                                    Imperial scale where water
                                                    freezes at 32° and boils at
                                                    212°.
                                                </FieldDescription>
                                            </FieldContent>
                                        </Field>
                                    </RadioGroup>
                                </FieldSet>
                            </FieldGroup>

                            <Button type="submit">Save Unit</Button>
                        </form>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default SideBar;
