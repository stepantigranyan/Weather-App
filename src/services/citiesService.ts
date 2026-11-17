import citiesRepository from '@src/repositories/citiesRepository';
import type { CityCreationAttributes } from '@src/types/other';

class CitiesService {
    add(data: CityCreationAttributes) {
        return citiesRepository.add(data);
    }

    getAll() {
        return citiesRepository.getAll();
    }

    getOne(id: string) {
        return citiesRepository.getOne(id);
    }

    remove(id: string) {
        return citiesRepository.remove(id);
    }
}

export default new CitiesService();