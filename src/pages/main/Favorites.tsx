import { useCity } from '@src/hooks/useCity';
import citiesService from '@src/services/citiesService'

import FavoriteCard from '@src/components/cards/FavoriteCard';

import { v4 as uuidv4 } from 'uuid';
import { Separator } from '@root/components/ui/separator';
import { Button } from '@root/components/ui/button';

const Favorites = () => {
    const { cities, addCity, removeCity } = useCity(citiesService);
    
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
                    <Button variant='default' className='px-10 py-5'>Add City</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
                <ul>
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