import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slice/BookingSlice';
import VehiclesReducer from './slice/VehiclesSlice';
import ParkingReducer from './slice/ParkingSlice';
import LoginReducer from './slice/AuthSlice/LoginSlice';
import QueryReducer from './slice/QuerySlice';
import ContactReducer from './slice/ContactSlice';
import SignUpReducer from './slice/AuthSlice/SignUpSlice';
import UserDataReducer from './slice/UserSlice';
import tokenReducer from './slice/TokenSlice';


export default configureStore({
  reducer: {
    bookings: bookingsReducer,
    Vehicles:VehiclesReducer,
    Parkings: ParkingReducer,
    Login:LoginReducer,
    SignUp:SignUpReducer,
    Query : QueryReducer,
    Contact:ContactReducer,
    Token:tokenReducer,
    User:UserDataReducer
  },
});
