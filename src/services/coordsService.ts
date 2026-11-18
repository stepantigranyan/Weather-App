import type { Coord } from '@src/types/response';
import coordsRepository from '../repositories/coordsRepository';

class CoordsService {
    get() {
        return coordsRepository.get();
    }

    set(coords: Coord) {
        coordsRepository.set(coords);
    }
}

export default new CoordsService();