import { createSlice } from '@reduxjs/toolkit';
import { weatherApi } from '@src/api';
import { getCurrentLocation } from '@src/utils/getCurrentLocation';
import type { UserWeatherParams } from '@src/types/request';

const getWeather = async (params?: UserWeatherParams) => {
    const position = params ? params : await getCurrentLocation();
    return await weatherApi.getCurrentWeather(position);
}

const weatherSlice = createSlice({
    name: 'appWeather',
    initialState: {
        currentWeather: await getWeather(),
    },

    reducers: {
        setWeather: (state, action) => {
            state.currentWeather = action.payload;
        },
    },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
