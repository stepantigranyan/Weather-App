import type { Coord } from '@src/types/response';

const COORDS_KEY = 'coords';

class CoordsRepository {
    get() {
        return JSON.parse(localStorage.getItem(COORDS_KEY)) as Coord;
    }

    set(coords: Coord) {
        localStorage.setItem(COORDS_KEY, JSON.stringify(coords));
    }
}

export default new CoordsRepository();