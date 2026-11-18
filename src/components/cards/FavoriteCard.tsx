import { type FC } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@src/hooks/useStore';

import type { CityResponse } from '@src/types/other';

import weatherApi  from '@src/api/weather';

import { setWeather } from '@src/store/slices/weatherSlice';
import { setForecast } from '@src/store/slices/forecastSlice';

import coordsService from '@src/services/coordsService';

import FavoriteCityRemoveDialog from '@src/components/dialogs/FavoriteCitRemoveDialog.tsx';
import { TableCell, TableRow } from '@root/components/ui/table';
import { Button } from '@root/components/ui/button';

import { Sun } from 'lucide-react';
import { setLoading } from '@src/store/slices/loadingSlice.ts';


interface FavoriteCardProps {
    data: CityResponse;
    onDelete: (id: number) => void;
}

const FavoriteCard: FC<FavoriteCardProps> = ({data, onDelete}) => {
    const { id, name, country, longitude, latitude } = data;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleDelete = () => {
        onDelete(id);
    }

    const handleNavigate = async () => {
        navigate('/weather');

        dispatch(setLoading(true));

        const coord = { lat: latitude, lon: longitude };

        coordsService.set(coord);

        const weatherData = await weatherApi.getCurrentWeather(coord);
        const forecastData = await weatherApi.getFiveDayForecast(coord);

        dispatch(setWeather(weatherData));
        dispatch(setForecast(forecastData));

        dispatch(setLoading(false));
    }

    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell>{country}</TableCell>
            <TableCell className="text-center">
                <div className="flex items-center justify-center gap-x-5">
                    <span>{longitude}</span>
                    <span>{latitude}</span>
                </div>
            </TableCell>
            <TableCell className="flex items-center justify-end gap-x-2">
                <Button
                    variant="default"
                    className="cursor-pointer group bg-indigo-600 hover:bg-indigo-600"
                    onClick={handleNavigate}
                    size="icon"
                >
                    <Sun className="size-5 group-hover:fill-yellow-500" />
                </Button>
                <FavoriteCityRemoveDialog onDelete={handleDelete} />
            </TableCell>
        </TableRow>
    );
};

export default FavoriteCard;
