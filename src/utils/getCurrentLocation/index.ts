import type { Coord } from '@src/types/response';
import coordsService from '@src/services/coordsService';

interface Coordinates extends Coord {
    accuracy: number;
}

export const getCurrentLocation = (
    options?: PositionOptions
): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                coordsService.set({ lat: position.coords.latitude, lon: position.coords.longitude, });
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });
            },
            (error: GeolocationPositionError) => {
                reject(
                    new Error(
                        `Geolocation error (${error.code}): ${error.message}`
                    )
                );
            },
            options
        );
    });
};
