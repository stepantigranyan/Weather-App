import { createSlice } from '@reduxjs/toolkit';
import { weatherApi } from '@src/api';
import { getCurrentLocation } from '@src/utils/getCurrentLocation';

const initForecast = async () => {
    const position = await getCurrentLocation();
    return await weatherApi.getFiveDayForecast(position);
};

const forecastSlice = createSlice({
    name: 'appWeather',
    initialState: {
        currentForecast: await initForecast(),
    },

    reducers: {
        setForecast: (state, action) => {
            state.currentForecast = action.payload;
        },
    },
});

export const { setForecast } = forecastSlice.actions;
export default forecastSlice.reducer;
