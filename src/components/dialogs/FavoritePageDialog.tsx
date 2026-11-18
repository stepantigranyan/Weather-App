import { type FC, type SubmitEvent, useState } from 'react';

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@root/components/ui/dialog';
import { Button } from '@root/components/ui/button';
import { Field, FieldGroup } from '@root/components/ui/field';
import { Label } from '@root/components/ui/label';
import { Input } from '@root/components/ui/input';

import { Plus } from 'lucide-react';
import type { CityResponse } from '@src/types/other';
import cityApi from '@src/api/city';

interface FavoritePageDialogProps {
    onSubmit: (data: CityResponse) => void;
}

const FavoritePageDialog: FC<FavoritePageDialogProps> = ({ onSubmit }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const cityName = formData.get('cityName') as string;

        const data = await cityApi.getCity(cityName);
        onSubmit(data);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger
                render={
                    <Button
                        variant="default"
                        className="px-2 py-5 inline-flex items-center gap-x-2"
                    >
                        <Plus className="size-5" />
                        <span>Add City</span>
                    </Button>
                }
            />
            <DialogContent className="sm:max-w-sm">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-rows-2 gap-y-6">
                        <DialogHeader>
                            <DialogTitle>Add City</DialogTitle>
                            <DialogDescription>
                                Save your top locations to check the forecast at
                                a glance and get instant severe weather alerts.
                            </DialogDescription>
                        </DialogHeader>
                        <FieldGroup>
                            <Field>
                                <Label htmlFor="cityName">City</Label>
                                <Input
                                    id="cityName"
                                    name="cityName"
                                    placeholder="Example: Varshava"
                                />
                            </Field>
                        </FieldGroup>
                        <DialogFooter>
                            <DialogClose
                                render={
                                    <Button variant="outline">Cancel</Button>
                                }
                            />
                            <Button type="submit">Add</Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default FavoritePageDialog;
