import type { Dispatch, FC, SetStateAction } from 'react';
import { NavLink } from 'react-router';

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from '@root/components/ui/sheet';

import { Separator } from '@root/components/ui/separator';
import { Button } from '@root/components/ui/button';
import { Switch } from '@root/components/ui/switch';
import { RadioGroup } from '@root/components/ui/radio-group';

import {
    Sun,
    Star,
    CalendarDays,
    Menu,
} from 'lucide-react';

interface SideBarProps {
    open: boolean;
    onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const SideBar: FC<SideBarProps> = ({open, onOpenChange}) => {
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
            <SheetContent side="right" className="p-10 w-65 sm:w-75">
                <SheetTitle className="text-left text-3xl mb-4">
                    Menu
                </SheetTitle>

                <nav className="grid grid-rows-[1fr_4fr] mt-4">
                    <div>
                        <h4 className="text-xl font-bold mb-2">Navigation</h4>
                        <Separator />
                    </div>
                    <div className="grid grid-rows-3">
                        <NavLink
                            to="/weather"
                            onClick={() => onOpenChange(false)}
                            className="group px-3 py-2 text-lg font-medium flex items-center gap-x-2 transition-colors duration-200 hover:bg-muted"
                        >
                            <span>
                                <Sun className="size-6 group-hover:fill-yellow-600 transition-colors duration-200" />
                            </span>
                            <span>Current Weather</span>
                        </NavLink>
                        <NavLink
                            to="/forecast"
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
                                <Star className="size-6 group-hover:fill-red-600 transition-colors duration-200" />
                            </span>
                            <span>Favorite Cities</span>
                        </NavLink>
                    </div>
                </nav>
                <SheetFooter className="h-10 bg-red-50">
                    <div className="grid grid-cols-2">
                        <div>
                            <Switch size='default' />
                        </div>
                        <div></div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default SideBar;