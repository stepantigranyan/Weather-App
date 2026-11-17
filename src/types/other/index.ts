import type { Coord } from '@src/types/response';

export interface CityCreationAttributes {
    coords: Coord;
    name: string;
}

export interface City extends CityCreationAttributes {
    id: string;
}
