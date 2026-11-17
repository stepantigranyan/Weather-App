import {type SubmitEvent, useState} from "react";
import { useCity } from '@src/hooks/useCity';

import citiesService from '@src/services/citiesService'

import FavoriteCard from '@src/components/cards/FavoriteCard';
import { Button } from '@root/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@root/components/ui/dialog"
import { Field, FieldGroup } from "@root/components/ui/field"
import { Input } from "@root/components/ui/input"
import { Label } from "@root/components/ui/label"
import { Separator } from "@root/components/ui/separator"

import {Plus} from 'lucide-react'
import { v4 as uuidv4 } from 'uuid';


const Favorites = () => {
    const { cities, addCity, removeCity } = useCity(citiesService);
    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const cityName = formData.get('cityName') as string;

        console.log('asas')

        addCity({name: cityName});
        setOpen(false);
    }

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Favorite Cities</h2>
                    <p className="text-muted-foreground">
                        Your curated list of favorite cities.
                    </p>
                </div>
                <div>
                    <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger render={<Button variant="default" className='px-2 py-5 inline-flex items-center gap-x-2'>
                                <Plus className='size-5' />
                                <span>Add City</span>
                            </Button>} />
                            <DialogContent className="sm:max-w-sm">
                                <form onSubmit={handleSubmit}>
                                    <div className='grid grid-rows-2 gap-y-4'>
                                        <DialogHeader>
                                            <DialogTitle>Add City</DialogTitle>
                                            <DialogDescription>
                                                Save your top locations to check the forecast at a glance and get instant severe weather alerts.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <FieldGroup>
                                            <Field>
                                                <Label htmlFor="cityName">City</Label>
                                                <Input id="cityName" name="cityName" placeholder='Example: Varshava' />
                                            </Field>
                                        </FieldGroup>
                                        <DialogFooter>
                                            <DialogClose render={<Button variant="outline">Cancel</Button>} />
                                            <Button type="submit">Add</Button>
                                        </DialogFooter>
                                    </div>
                                </form>
                            </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className='border border-solid rounded-md'>
                <ul className="grid grid-rows-1">
                    {cities.map((city) => (
                        <li className="cursor-pointer px-3 py-2 text-lg font-medium flex items-center gap-x-2 transition-colors duration-200 hover:bg-muted">
                            {city.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Favorites;