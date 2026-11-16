import { useState } from 'react';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@root/components/ui/input-group';

import { CloudSun, SearchIcon } from 'lucide-react';

import SideBar from '@src/components/sidebar/Sidebar';

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 w-full bg-white px-5 py-2 md:py-4 xl:mp-6 shadow-sm">
            <div className="w-full sm:w-lg sm:mx-auto md:w-2xl lg:w-4xl xl:w-6xl">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-10">
                    <div className="flex items-center gap-x-2">
                        <CloudSun className="size-9 md:size-12 xl:size-15" />
                        <h1 className="font-bold text-lg md:text-xl xl:text-2xl">
                            My App
                        </h1>
                    </div>

                    <InputGroup className="w-1/2 justify-self-center">
                        <InputGroupInput
                            className="w-20 text-sm lg:w-30"
                            placeholder="City name"
                        />
                        <InputGroupAddon>
                            <SearchIcon />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton
                                className="cursor-pointer"
                                size="xs"
                                variant="secondary"
                            >
                                Search
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    <div>
                        <SideBar open={open} onOpenChange={setOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
