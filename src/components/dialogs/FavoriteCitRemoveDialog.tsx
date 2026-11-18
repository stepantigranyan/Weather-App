import type { FC } from 'react';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@root/components/ui/dialog';
import { Button } from '@root/components/ui/button';
import { Trash } from 'lucide-react';

interface FavoriteCityRemoveDialogProps {
    onDelete: () => void;
}

const FavoriteCityRemoveDialog: FC<FavoriteCityRemoveDialogProps> = ({onDelete}) => {
    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button variant="destructive" size="icon-lg">
                        <Trash className="size-5" />
                    </Button>
                }
            />

            <DialogContent className="sm:max-w-sm">
                <div className="grid grid-rows-1 gap-y-6">
                    <DialogHeader>
                        <DialogTitle>Remove favorite city?</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to remove it from
                            your favorites? You can always search for and add it
                            back later.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose
                            render={<Button variant="outline">Cancel</Button>}
                        ></DialogClose>
                        <Button onClick={onDelete} variant="destructive">Delete</Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FavoriteCityRemoveDialog;