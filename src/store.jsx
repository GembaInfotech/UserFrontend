import { configureStore } from '@reduxjs/toolkit';
// import bookingsReducer from './bookingsSlice';
import bookingsReducer from './slice/BookingSlice'
import VehiclesReducer from './slice/VehiclesSlice'
import ParkingReducer from './slice/ParkingSlice'
import LoginReducer from './slice/AuthSlice/LoginSlice'

export default configureStore({
  reducer: {
    bookings: bookingsReducer,
    Vehicles:VehiclesReducer,
    Parkings: ParkingReducer,
    Login:LoginReducer
  },
});
