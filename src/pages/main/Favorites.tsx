import { useCity } from '@src/hooks/useCity';
import FavoritePageDialog from '@src/components/dialogs/FavoritePageDialog';
import FavoriteEmpty from '@src/components/empties/FavoriteEmpty';

import {
    Table,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
} from '@root/components/ui/table';

import FavoriteCard from '@src/components/cards/FavoriteCard';

import citiesService from '@src/services/citiesService';

const Favorites = () => {
    const { cities, addCity, removeCity } = useCity(citiesService);

    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Favorite Cities</h2>
                    <p className="text-muted-foreground">
                        Your curated list of favorite cities.
                    </p>
                </div>
                <div>
                    <FavoritePageDialog onSubmit={addCity} />
                </div>
            </div>
            {cities.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow className="text-lg">
                            <TableHead>City</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead className="text-center">
                                Coordinates
                            </TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cities.map((city) => (
                            <FavoriteCard
                                data={city}
                                key={city.id}
                                onDelete={removeCity}
                            />
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <FavoriteEmpty />
            )}
        </div>
    );
};

export default Favorites;
