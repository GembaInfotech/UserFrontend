
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingScreen from './Screens/LandingScreen'
import Layout from './Layout/Layout'
import About from './Screens/About'
import Login from './Screens/Login'
import ParkingDetails from './Screens/ParkingDetails'
import SignUp from './Screens/SignUp'
import Contacy from './Screens/Contacy'
import Booking from './Screens/Booking'
import UserBookings from './Components/ProfileComponents/UserBookings'
import ProfileLayout from './Layout/ProfileLayout'
import UserInfo from './Components/ProfileComponents/UserInfo'
import UserVehicle from './Components/ProfileComponents/UserVehicle'

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './store'

function App() {
  const queryClient = new QueryClient();

  return (
      <>

<Provider store={store}>
      <QueryClientProvider client={queryClient}>
       <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Layout><Contacy /></Layout>} />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/details/:location" element={< ParkingDetails />} />
        <Route path="/booking/:data/:intime/:totime" element={< Booking />} />
        <Route path="/profile" element={ <ProfileLayout><UserInfo/></ProfileLayout> } />

        <Route path="/my-bookings" element={ <ProfileLayout><UserBookings/></ProfileLayout> } />

        <Route path="/my-vehicle" element={ <ProfileLayout><UserVehicle/></ProfileLayout> } />





      </Routes>
    </Router>

    </QueryClientProvider>
    </Provider>
      </>
  )
}

export default App
