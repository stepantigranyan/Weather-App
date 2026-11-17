import type { Coord } from '@src/types/response';

interface Coordinates extends Coord {
    accuracy: number;
}

export const COORDS_KEY = 'coordinates';

export const getCurrentLocation = (
    options?: PositionOptions
): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                localStorage.setItem(
                    COORDS_KEY,
                    JSON.stringify({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    })
                );

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
