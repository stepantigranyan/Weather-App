import { useState} from 'react';
import type citiesService from '@src/services/citiesService.ts';
import type { City, CityCreationAttributes } from '@src/types/other';

export const useCity = (service: typeof citiesService) => {
    const [cities, setCities] = useState<City[]>(service.getAll());
    
    const addCity = (city: CityCreationAttributes) => {
        const newCities = service.add(city);
        setCities(newCities);
    }

    const removeCity = (id: string) => {
        const newCities = service.remove(id);
        setCities(newCities);
    }

    return { cities, addCity, removeCity };
};