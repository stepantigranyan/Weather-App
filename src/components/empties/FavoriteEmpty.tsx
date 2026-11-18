import {
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@root/components/ui/empty';


import { Frown } from 'lucide-react'


const FavoriteEmpty = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <Frown className="size-10" />
                </EmptyMedia>
                <EmptyTitle>No Favorites Yet</EmptyTitle>
                <EmptyDescription>
                    Keep track of the weather in places that matter to you. Add
                    your first city to see its forecast right here.
                </EmptyDescription>
            </EmptyHeader>
        </Empty>
    );
};

export default FavoriteEmpty;
