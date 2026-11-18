import { configureStore } from '@reduxjs/toolkit';
import unitReducer from '@src/store/slices/unitSlice';
import weatherSlice from '@src/store/slices/weatherSlice';
import forecastSlice from '@src/store/slices/forecastSlice';
import loadingSlice from '@src/store/slices/loadingSlice';

export const store = configureStore({
    reducer: {
        unit: unitReducer,
        weather: weatherSlice,
        forecast: forecastSlice,
        loading: loadingSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
