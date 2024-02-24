import { configureStore } from '@reduxjs/toolkit';
// import bookingsReducer from './bookingsSlice';
import bookingsReducer from './slice/BookingSlice'
export default configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});
