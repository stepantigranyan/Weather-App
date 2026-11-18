import citiesRepository from '@src/repositories/citiesRepository';
import type { CityResponse } from '@src/types/other';

class CitiesService {
    add(data: CityResponse) {
        return citiesRepository.add(data);
    }

    getAll() {
        return citiesRepository.getAll();
    }

    getOne(id: number) {
        return citiesRepository.getOne(id);
    }

    remove(id: number) {
        return citiesRepository.remove(id);
    }
}

export default new CitiesService();
