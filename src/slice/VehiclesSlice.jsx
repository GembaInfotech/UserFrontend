// features/booking/BookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchVehicle } from '../api/api';
import { fetchVehicles } from '../api/api';

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
  reducers: {
    // Add additional reducers if needed
  },
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
    //   .addCase(addBookingAsync.fulfilled, (state, action) => {
    //     state.data.push(action.payload);
    //   })
    //   .addCase(updateBookingAsync.fulfilled, (state, action) => {
    //     const index = state.data.findIndex(booking => booking.id === action.payload.id);
    //     if (index !== -1) {
    //       state.data[index] = action.payload;
    //     }
    //   })
    //   .addCase(deleteBookingAsync.fulfilled, (state, action) => {
    //     state.data = state.data.filter(booking => booking.id !== action.payload);
    //   });
  },
});

export default VehiclesSlice.reducer;
