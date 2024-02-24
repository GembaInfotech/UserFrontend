import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import bookingAPI from '../api/bookingAPI'
import bookingAPI from '../api/api';

export const fetchBookings = createAsyncThunk('bookings/fetchBookings', async () => {
  const response = await bookingAPI.getAllBookings();
  return response;
});

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState: {
    entities: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    // Additional reducers can be defined here
  },
  extraReducers: {
    [fetchBookings.pending]: (state) => {
      state.loading = 'pending';
    },
    [fetchBookings.fulfilled]: (state, action) => {
      state.loading = 'idle';
      state.entities = action.payload;
    },
    [fetchBookings.rejected]: (state, action) => {
      state.loading = 'idle';
      state.error = action.error.message;
    },
  },
});

export default bookingsSlice.reducer;
