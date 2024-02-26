import { configureStore } from '@reduxjs/toolkit';
// import bookingsReducer from './bookingsSlice';
import bookingsReducer from './slice/BookingSlice'
import VehiclesReducer from './slice/VehiclesSlice'

export default configureStore({
  reducer: {
    bookings: bookingsReducer,
    Vehicles:VehiclesReducer,

  },
});
