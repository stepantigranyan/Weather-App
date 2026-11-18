import type { CityResponse } from '@src/types/other';

const CITY_KEY = 'cities';

class CitiesRepository {
    add(data: CityResponse) {
        const cities = this.getAll();

        const existingCity = cities.find((c) => c.name === data.name);

        if (existingCity) {
            return;
        }

        cities.push(data);
        localStorage.setItem(CITY_KEY, JSON.stringify(cities));

        return cities;
    }

    getAll() {
        const cities = localStorage.getItem(CITY_KEY)
            ? localStorage.getItem(CITY_KEY)
            : '[]';
        return JSON.parse(cities) as CityResponse[];
    }

    getOne(id: number) {
        const cities = this.getAll();
        return cities.find((c) => c.id === id);
    }

    remove(id: number) {
        const cities = this.getAll();

        const updatedCities = cities.filter((c) => c.id !== id);
        localStorage.setItem(CITY_KEY, JSON.stringify(updatedCities));
        return updatedCities;
    }
}

export default new CitiesRepository();
