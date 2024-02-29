import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBookings } from '../api/BookingAPI/BookingAPI';
import { createBooking } from '../api/BookingAPI/BookingAPI';

export const fetchBookingsAsync = createAsyncThunk(
  'bookings/fetch',
  async ({ userId }) => {
    const response = await fetchBookings({ userId });
    return response;
  }
);

export const createBookingAsync = createAsyncThunk(
  'bookings/add',
  async ({ bookingData }) => {
    const response = await createBooking({ bookingData });
    return response.data;
  }
);

const BookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBookingsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBookingsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(createBookingAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBookingAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(createBookingAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default BookingSlice.reducer;
