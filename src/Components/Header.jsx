// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '.././assets/tlogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
const [isLoggedIn, setIsLoggedIn]  =useState(false);





  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 5);
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if(storedUserData?.token){
      setIsLoggedIn(true)
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };


  return (
    <nav className={`p-4 fixed top-0 w-full mb-12 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className=" mx-auto flex justify-between space-x-4 items-center">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">
            <img src={logo} alt="Company Logo" className="w-20 h-16 rounded-2xl" />
          </div>
          <div className="font-bold text-3xl font-mono">Parkar</div>
        </div>
        {
          isLoggedIn ?  <div className="md:flex items-center space-x-4">
          <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
          <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
          <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
          <Link to="/profile" className="text-gray-800 font-medium hover:text-gray-500 transition">Profile</Link>

          <Link to="/#" onClick={handleLogout} className="text-black bg-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-xl rounded-md text-xl px-6 py-2 text-center me-2 mb-2">
           Logout
          </Link>
        </div> :  <div className="md:flex items-center space-x-4">
          <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
          <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
          <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
          <Link to="/login" className="text-gray-800 font-medium hover:text-gray-500 transition">Login</Link>
          <Link to="/signup" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-8 py-3 text-center me-2 mb-2">
            Sign Up
          </Link>
        </div>
        }
       
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
