import type { Coord } from '@src/types/response'

interface Coordinates extends Coord {
    accuracy: number;
}

export const getCurrentLocation = (options?: PositionOptions): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                });
            },
            (error: GeolocationPositionError) => {
                reject(new Error(`Geolocation error (${error.code}): ${error.message}`));
            },
            options
        );
    })
}