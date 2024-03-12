import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tlogo.png';
import {useSelector , useDispatch}  from "react-redux";
import { fetchVehiclesAsync } from '../../slice/VehiclesSlice';
const Navbar = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const popupRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 5);
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData?.token) {
      setIsLoggedIn(true);
      dispatch(fetchVehiclesAsync({userId:storedUserData._id}))
    }


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close the popup when the component mounts
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLoginPopup(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <nav className={`p-4 max-sm:p-1 fixed top-0 w-full mb-12 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex justify-between space-x-4 items-center">
        <div className="flex items-center space-x-4 max-sm:space-x-1">
          <div className="text-xl font-bold">
            <img src={logo} alt="Company Logo" className="w-20 h-16 max-sm:h-8 max-sm:w-10 rounded-2xl" />
          </div>
          <div className="font-bold text-3xl max-sm:text-2xl font-bold max-sm:p-2">Parkar</div>
        </div>
        <div className="md:hidden">
          <button className="text-gray-800" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center space-x-4 max-sm:space-x-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {isLoggedIn ? (
            <>
              <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
              <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
              <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
              <Link to="/profile/info" className="text-gray-800 font-medium hover:text-gray-500 transition">Profile</Link>
              <button onClick={handleLogout} className="text-black bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-xl rounded-md text-xl px-6 py-2 text-center me-2 mb-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
              <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
              <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
              <button onClick={openLoginPopup} className="text-gray-800 font-medium hover:text-gray-500 transition">Login</button>
              <Link to="/sign-up">
                <button className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* Login Popup */}
      {showLoginPopup && (
  <div ref={popupRef} className="fixed top-20 right-6 transform -translate-x-1/6 p-0 rounded-lg ">
    <div className="bg-white p-2 rounded-lg">
      <div className="flex flex-col">
        <Link to="/login">
          <button className="hover:bg-blue-500 hover:text-white text-black px-2 py-1 mb-2 rounded-l w-full">Login as User</button>
        </Link>

        <a href="https://gparkingvendor.gembainfotech.com/" className="hover:bg-blue-500 hover:text-white text-black px-2 py-1 mb-2 rounded-l w-full">Login as vendor
      </a>
      </div>
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
