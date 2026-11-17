import type { City, CityCreationAttributes } from '@src/types/other';
import { v4 as uuidv4 } from 'uuid';

const CITY_KEY = 'cities';

class CitiesRepository {
    add(data: CityCreationAttributes) {
        const cities = this.getAll();
        const existingCity =  cities.find(c => c.name === data.name);

        if (existingCity) {
            return;
        }

        const newCity: City = { ...data, id: uuidv4()};

        cities.push(newCity);
        localStorage.setItem(CITY_KEY, JSON.stringify(cities));

        return cities;
    }

    getAll() {
        const cities = localStorage.getItem(CITY_KEY) ? localStorage.getItem(CITY_KEY) : '[]';
        return JSON.parse(cities) as City[];
    }

    getOne(id: string) {
        const cities = this.getAll();
        return cities.find(c => c.id === id);
    }

    remove(id: string) {
        const cities = this.getAll();

        const updatedCities = cities.filter(c => c.id !== id);
        localStorage.setItem(CITY_KEY, JSON.stringify(updatedCities));
        return updatedCities;
    }
}

export default new CitiesRepository();