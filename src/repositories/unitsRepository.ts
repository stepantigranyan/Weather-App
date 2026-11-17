import type { Units } from '@src/types/request';

export const UNITS_KEY = 'appUnits';

class UnitsRepository {
    set(unit: Units) {
        localStorage.setItem(UNITS_KEY, unit);
    }

    get() {
        return localStorage.getItem(UNITS_KEY) ?? 'metric';
    }
}

export default new UnitsRepository();