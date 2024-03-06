import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchParking } from '../api/ParkingAPI/ParkingAPI';
export const fetchParkingsAsync = createAsyncThunk(
    'parkings/fetch',
    async ({ radii }) => {
        const response = await fetchParking({ radii });
        return response;
    }
);
const ParkingSlice = createSlice({
    name: 'parkings',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchParkingsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchParkingsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchParkingsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default ParkingSlice.reducer;
