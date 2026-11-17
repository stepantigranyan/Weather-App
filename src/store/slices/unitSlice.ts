import { createSlice } from '@reduxjs/toolkit';
import unitsService from '@src/services/unitsService';

const unitsSlice = createSlice({
    name: 'appUnits',
    initialState: {
        currentUnit: unitsService.get(),
    },

    reducers: {
        setUnit: (state, action) => {
            state.currentUnit = action.payload;
            unitsService.set(action.payload);
        },
    },
});

export const { setUnit } = unitsSlice.actions;
export default unitsSlice.reducer;
