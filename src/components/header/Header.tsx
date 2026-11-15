import {
    InputGroup,
    InputGroupAddon, InputGroupButton,
    InputGroupInput,
} from "@root/components/ui/input-group";

// import {
//     Sheet,
//     SheetContent,
//     SheetTrigger,
//     SheetTitle,
// } from "@root/components/ui/sheet"
//
// import {Button} from '@root/components/ui/button'

import {CloudSun, SearchIcon} from "lucide-react"
import { NavLink } from "react-router";

import { cn } from '@root/lib/utils'
import {useState} from "react";

const Header = () => {
    // const [open, setOpen] = useState(false)

    return (
        <header className='px-5 py-2 md:py-4 xl:mp-6 shadow-sm'>
            <div className='w-full sm:w-lg sm:mx-auto md:w-2xl lg:w-4xl xl:w-6xl'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                        <CloudSun className='size-9 md:size-12 xl:size-15' />
                        <h1 className='font-bold text-lg md:text-xl xl:text-2xl'>My App</h1>
                    </div>
                    <nav className='flex items-center gap-x-10'>
                        <div className='hidden items-center gap-x-7 lg:flex'>
                            <NavLink to='/weather' className={({ isActive }) => cn('transition-all duration-100 text-sm whitespace-nowrap', isActive ? 'scale-120 text-foreground' : 'scale-100 text-muted-foreground')}>Weather</NavLink>
                            <NavLink to='/forecast' className={({ isActive }) => cn('transition-all duration-100 text-sm whitespace-nowrap', isActive ? 'scale-120 text-foreground' : 'scale-100 text-muted-foreground')}>5 Days Forecast</NavLink>
                            <NavLink to='/favorites' className={({ isActive }) => cn('transition-all duration-100 text-sm whitespace-nowrap', isActive ? 'scale-120 text-foreground' : 'scale-100 text-muted-foreground')}>Favorite Cities</NavLink>
                        </div>
                        {/*<div className="lg:hidden">*/}
                        {/*    <Sheet open={open} onOpenChange={setOpen}>*/}
                        {/*        <SheetTrigger render={*/}
                        {/*            <Button className='cursor-pointer' variant="ghost" size="icon"><Menu className="size-7" />*/}
                        {/*                <span className="sr-only">Open Menu</span>*/}
                        {/*            </Button>*/}
                        {/*        } />*/}
                        {/*        <SheetContent side="right" className="p-10 w-65 sm:w-75">*/}
                        {/*            <SheetTitle className="text-left mb-4">Menu</SheetTitle>*/}

                        {/*            <nav className="flex flex-col gap-4 mt-4">*/}
                        {/*                <NavLink*/}
                        {/*                    to='/weather'*/}
                        {/*                    onClick={() => setOpen(false)}*/}
                        {/*                    className="text-lg font-medium transition-colors hover:text-primary"*/}
                        {/*                >*/}
                        {/*                    Weather*/}
                        {/*                </NavLink>*/}
                        {/*                <NavLink*/}
                        {/*                    to='/forecast'*/}
                        {/*                    onClick={() => setOpen(false)}*/}
                        {/*                    className="text-lg font-medium transition-colors hover:text-primary"*/}
                        {/*                >*/}
                        {/*                    5 Day Forecast*/}
                        {/*                </NavLink>*/}
                        {/*                <NavLink*/}
                        {/*                    to='/favorites'*/}
                        {/*                    onClick={() => setOpen(false)} // Փակում է մենյուն հղման վրա սեղմելիս*/}
                        {/*                    className="text-lg font-medium transition-colors hover:text-primary"*/}
                        {/*                >*/}
                        {/*                    Favorites*/}
                        {/*                </NavLink>*/}
                        {/*            </nav>*/}
                        {/*        </SheetContent>*/}
                        {/*    </Sheet>*/}
                        {/*</div>*/}
                        <InputGroup className='hidden lg:inline-flex'>
                            <InputGroupInput className='w-20 text-sm lg:w-30' placeholder="City name" />
                            <InputGroupAddon>
                                <SearchIcon />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton className='cursor-pointer' size='xs' variant="secondary">Search</InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;