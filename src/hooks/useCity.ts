import { useState } from 'react';
import type citiesService from '@src/services/citiesService.ts';
import type { CityResponse } from '@src/types/other';

export const useCity = (service: typeof citiesService) => {
    const [cities, setCities] = useState<CityResponse[]>(service.getAll());

    const addCity = (city: CityResponse) => {
        const newCities = service.add(city);
        setCities(newCities);
    };

    const removeCity = (id: number) => {
        const newCities = service.remove(id);
        setCities(newCities);
    };

    return { cities, addCity, removeCity };
};
