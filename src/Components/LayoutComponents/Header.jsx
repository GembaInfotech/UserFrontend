import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/tlogo.png';
import {useSelector , useDispatch}  from "react-redux";
import { fetchVehiclesAsync } from '../../slice/VehiclesSlice';
import { useNavigate } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  
  const navigate = useNavigate();
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
 const token = useSelector((state)=>state.Token.value)
  const recievedToken = JSON.parse(localStorage.getItem('token'))

  useEffect(() => {
    if (recievedToken) {  
      setIsLoggedIn(true);
      console.log(recievedToken)

      dispatch(fetchVehiclesAsync())
   ,[dispatch] }


    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLoginPopup(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    
    navigate('/login');
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


  const navigation = isLoggedIn
    ? [
        { name: 'Home', href: '', current: true },
        { name: 'About', href: '/#/about', current: false },
        { name: 'Contact Us', href: '/#/contact', current: false },
      ]
    : [
        { name: 'Home', href: '', current: true },
        { name: 'About', href: '/#/about', current: false },
        { name: 'Contact Us', href: '/#/contact', current: false },
        { name: 'Login', href: '/#/login', current: false },
        { name: 'SignUp', href: '/#/sign-up', current: false },
      ];

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div>
                <div className="font-bold text-3xl max-sm:text-2xl text-white max-sm:p-2">Parkar</div>
                </div>
              <div className=" inset-y-0 left-0 m-40 items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                       <a
                      key={item.name}
                      href={item.href}
                     
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>   
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {isLoggedIn? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#/profile/info"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#/profile/bookings"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My Booking
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#/profile/vehicles"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            My vehicles
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/#/login"
                            onClick={()=>{handleLogout()}}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>):null}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}



// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/tlogo.png';
// import {useSelector , useDispatch}  from "react-redux";
// import { fetchVehiclesAsync } from '../../slice/VehiclesSlice';
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showLoginPopup, setShowLoginPopup] = useState(false);
//   const popupRef = useRef(null);

//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     setIsScrolled(scrollTop > 5);
//   };
//  const token = useSelector((state)=>state.Token.value)
//   const recievedToken = JSON.parse(localStorage.getItem('token'))

//   useEffect(() => {
//     if (recievedToken) {  
//       setIsLoggedIn(true);
//       console.log(recievedToken)

//       dispatch(fetchVehiclesAsync())
//    ,[dispatch] }


//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     // Close the popup when the component mounts
//     const handleOutsideClick = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         setShowLoginPopup(false);
//       }
//     };

//     window.addEventListener('mousedown', handleOutsideClick);

//     // Cleanup the event listener
//     return () => {
//       window.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
    
//     navigate('/login');
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const openLoginPopup = () => {
//     setShowLoginPopup(true);
//   };

//   const closeLoginPopup = () => {
//     setShowLoginPopup(false);
//   };

//   return (
//     <nav className={`p-4 max-sm:p-1 fixed top-0 w-full mb-12 z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="mx-auto flex justify-between space-x-4 items-center">
//         <div className="flex items-center space-x-4 max-sm:space-x-1">
//           <div className="text-xl font-bold">
//             <img src={logo} alt="Company Logo" className="w-20 h-16 max-sm:h-8 max-sm:w-10 rounded-2xl" />
//           </div>
//           <div className="font-bold text-3xl max-sm:text-2xl font-bold max-sm:p-2">Parkar</div>
//         </div>
//         <div className="md:hidden">
//           <button className="text-gray-800" onClick={toggleMobileMenu}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//             </svg>
//           </button>
//         </div>
//         <div className={`md:flex items-center space-x-4 max-sm:space-x-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//           {isLoggedIn ? (
//             <>
//               <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
//               <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
//               <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
//               <Link to="/profile/info" className="text-gray-800 font-medium hover:text-gray-500 transition">Profile</Link>
//               <button onClick={handleLogout} className="bg-red-700 text-white p-1 rounded-md">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link to="/" className="text-gray-800 font-medium hover:text-gray-500 transition">Home</Link>
//               <Link to="/about" className="text-gray-800 font-medium hover:text-gray-500 transition">About</Link>
//               <Link to="/contact" className="text-gray-800 font-medium hover:text-gray-500 transition">Contact Us</Link>
//               <button onClick={openLoginPopup} className="text-gray-800 font-medium hover:text-gray-500 transition">Login</button>
//               <Link to="/sign-up">
//                 <button className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
//                   Sign up
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       {/* Login Popup */}
//       {showLoginPopup && (
//   <div ref={popupRef} className="fixed top-20 right-6 transform -translate-x-1/6 p-0 rounded-lg ">
//     <div className="bg-white p-2 rounded-lg">
//       <div className="flex flex-col">
//         <Link to="/login">
//           <button className="hover:bg-blue-500 hover:text-white text-black px-2 py-1 mb-2 rounded-l w-full">Login as User</button>
//         </Link>

//         <a href="https://gparkingvendor.gembainfotech.com/" className="hover:bg-blue-500 hover:text-white text-black px-2 py-1 mb-2 rounded-l w-full">Login as vendor
//       </a>
//       </div>
//     </div>
//   </div>
// )}
//     </nav>
//   );
// };

// export default Navbar;
