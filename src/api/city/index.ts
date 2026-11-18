import { cityClient } from '@src/api/city/axiosClient';
import type { CityResponse } from '@src/types/other';

const GET_CITY_PATH = '/search';

class CityApi {
    async getCity(name: string) {
        try {
            const response = await cityClient<CityResponse>(
                GET_CITY_PATH,
                { params: { name } },
            );

            const data = response.data.results[0];

            return {
                id: data.id,
                name: data.name,
                country: data.country,
                latitude: data.latitude,
                longitude: data.longitude,
            } as CityResponse;

        } catch (error) {
            return null;
        }
    }
}

export default new CityApi();