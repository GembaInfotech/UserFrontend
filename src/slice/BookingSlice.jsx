// features/booking/BookingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBookings } from '../api/api';
import { createBooking } from '../api/api';
export const fetchBookingsAsync = createAsyncThunk(
  'bookings/fetch',
  async ({userId}) => {
    const response = await fetchBookings({userId});
    return response;
  }
);

export const createBookingAsync = createAsyncThunk(
  'bookings/add',
  async (bookingData) => {
    const response = await createBooking(bookingData);
    return response.data;
  }
);

export const updateBookingAsync = createAsyncThunk(
  'bookings/update',
  async ({ id, status }) => {
    const response = await updateBookingAPI(id, status);
    return response.data;
  }
);

export const deleteBookingAsync = createAsyncThunk(
  'bookings/delete',
  async (id) => {
    await deleteBookingAPI(id);
    return id;
  }
);

const BookingSlice = createSlice({
  name: 'bookings',
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





      // .addCase(addBookingAsync.fulfilled, (state, action) => {
      //   state.data.push(action.payload);
      // })
      .addCase(updateBookingAsync.fulfilled, (state, action) => {
        const index = state.data.findIndex(booking => booking.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteBookingAsync.fulfilled, (state, action) => {
        state.data = state.data.filter(booking => booking.id !== action.payload);
      });
  },
});

export default BookingSlice.reducer;
