import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchVehicles } from '../api/ProfileAPI/VehiclesAPI';

export const fetchVehiclesAsync = createAsyncThunk(
  'Vehicles/fetch',
  async ({userId}) => {
    const response = await fetchVehicles({userId});
    console.log(response.vehicles);
    return response.vehicles;
  }
);

const VehiclesSlice = createSlice({
  name: 'Vehicles',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehiclesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehiclesAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchVehiclesAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default VehiclesSlice.reducer;
