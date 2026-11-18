import type { Units } from '@src/types/request';
import unitsRepository from '@src/repositories/unitsRepository';

class UnitsService {
    set(unit: Units) {
        unitsRepository.set(unit);
    }

    get() {
        return unitsRepository.get();
    }
}

export default new UnitsService();
