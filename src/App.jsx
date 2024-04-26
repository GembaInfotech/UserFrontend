import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import AboutScreen from './Screens/AboutScreen/AboutScreen';
import CheckoutScreen from './Screens/CheckoutScreen/CheckoutScreen';
import ParkingScreen from './Screens/ParkingScreen/ParkingScreen';
import ProfileLayout from './Layout/ProfileLayout';
import BookingScreen from './Screens/ProfileScreens/BookingScreen';
import InformationScreen from './Screens/ProfileScreens/InformationScreen';
import VehicleScreen from './Screens/ProfileScreens/VehicleScreen';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store';
import NotFound from './Components/Utils/NotFound';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<Layout><AboutScreen /></Layout>} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/contact" element={<Layout><ContactScreen /></Layout>} />
              <Route path="/sign-up" element={<SignUpScreen />} />
              <Route path="/parking/:location" element={<ParkingScreen />} />
              <Route path="/checkout/:data/:intime/:totime" element={<CheckoutScreen />} />
              <Route path="/profile/info" element={<ProfileLayout><InformationScreen /></ProfileLayout>} />
              <Route path="/profile/bookings" element={<ProfileLayout><BookingScreen /></ProfileLayout>} />
              <Route path="/profile/vehicles" element={<ProfileLayout><VehicleScreen /></ProfileLayout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
