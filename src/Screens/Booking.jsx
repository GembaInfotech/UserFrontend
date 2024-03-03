import { useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { MdEdit } from "react-icons/md";

import { useState } from 'react';
import image from '.././assets/parking.webp'
import { useParams } from 'react-router-dom';
import UserInfoForm from '../Components/BookingScreen/UserInfoForm';
import { FaArrowRight } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import Swal from 'sweetalert2';

import 'react-datepicker/dist/react-datepicker.css';
import PaymentInfo from '../Components/BookingScreen/PaymentInfo';
function Booking() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data, intime, totime } = useParams();
  const parkingData = JSON.parse(decodeURIComponent(data));
  const [price, setPrice] = useState(parkingData?.price)
console.log(parkingData)
  const Intime = JSON.parse(decodeURIComponent(intime));
  const Totime = JSON.parse(decodeURIComponent(totime));

  useEffect(() => {
    setFromDate(Intime);
    setToDate(Totime);
   

  }, [])

  const [user, setUser] = useState({})

const getPrice =()=>{
  if (!toDate || isNaN(new Date(toDate).getTime())) {
    // Handle invalid or missing checkoutTime
    console.error('Invalid checkoutTime:', toDate);
    return { days: 0, hours: 0, minutes: 0 };
  }
  const exceedTimeInMillis = Math.max(0, new Date(toDate).getTime() - new Date(fromDate).getTime());
  const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
  const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));

 
console.log(days, hours,minutes )

const mul= hours+ minutes/60
const value = Math.ceil(parkingData.price*mul);
 setPrice(value)
}

  
   

  const handleConfirmBooking = async () => {
    try {
      // Construct booking payload
    console.log(parkingData.parkingName)
      const bookingDetails = {
        email: user.email,
        enserId: user._id,
        parkingId: parkingData._id,
        parkingName: parkingData?.pn,
        timeIn: fromDate || Intime,
        timeOut: toDate || Totime,
        status: "Incoming",
        CarNumber: user.vehicle_info[0].vehicle_number,
        bookingPrice: price
      };
      // Call the POST API
      console.log(bookingDetails)
      const response = await fetch('http://localhost:7001/v1/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        // Booking successful
        console.log('Booking successful');
        // Show SweetAlert notification
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your parking booked successfully',
        }).then((result) => {
          // Check if the user clicked "OK"
          if (result.isConfirmed) {
            // Redirect to another page after clicking OK
            window.location.href = '/my-bookings'; // Replace '/another-page' with your desired URL
          }
        });
      } else {
        // Booking failed
        console.error('Failed to book');
        // Handle error, show error message or retry booking
      }
    } catch (error) {
      console.error('Error during booking:', error);
      // Handle error, show error message or retry booking
    }
  };



  useEffect(() => {
    
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData?._id) {
      setIsLoggedIn(true)
      setUser(storedUserData)
      console.log(user)
    }


  }, []);


  return (
    <section className='flex min-h-screen '>
      <div className='w-2/3 flex-col px-32 '>
        <div className=' border-black w-full h-48 my-1  py-6'>
          <h1 className='font-light text-gray-800'>complete your booking process</h1>
          <h1 className='text-gray-800 text-xl font-bold px-2 my-2'>{parkingData.pn}</h1>
          <div className=' flex bg-[#f0f4f9] p-2  rounded-lg h-24 justify-evenly items-center'>

            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
              className="px-2 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500"
            />
             <button onClick={()=>{
                 setFromDate(new Date())
                            

            }}><h1><MdEdit /></h1>
            </button>
            <DatePicker
              selected={toDate}
              
              onChange={ (date) => setToDate(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
              className="px-2 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500 "
            />
            <button onClick={()=>{
                 setToDate(new Date())
            }}><h1><MdEdit /></h1>
            </button>
          </div>
        </div>

        {isLoggedIn ? null : (<div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 justify-evenly  items-center'>

          <UserInfoForm />

        </div>)}
        <div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 justify-evenly  items-center'>

          <PaymentInfo />

        </div>
        <div className='bg-gray-100  border-gray-300 rounded-md flex-row h-40 my-2 justify-evenly px-8 items-center'>

          <h1 className='text-gray-800 font-semibold text-2xl py-3'>Payment Summary </h1>
          <div className='flex justify-between px-1 '>
            <h1 className='text-xl font-semibold'>Price </h1>
            <button  onClick={()=>{getPrice()}}>refresh</button>
            <h1 className='text-xl font-bold'><PiCurrencyInrBold />{price}</h1>
          </div>
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 mt-2  max-md:px-2 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Confirm Booking
          </button>

        </div>

      </div>
      <div className='flex-row p-4 w-1/3 '>
        <img src={image}
          className='w-72 h-96 mt-20 rounded-md'
          alt="" />
        <div className='flex-row w-3/4'>
          <h1 className='text-gray-700 py-2 text-xl font-bold'> Provided Facilities</h1>
          <h1 className='text-sm font-sans font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt, minima quisquam reprehenderit eius doloremque ut maxime possimus magni alias eligendi saepe. Exercitationem perferendis cupiditate incidunt reiciendis, iste earum ullam.</h1>

          <h1 className='text-sm font-sans py-2 font-light'>Please park within the timeframe on your pass. Parking outside your timeframe will incur additional fees. The garage allows 10 mins grace period on arrival and departure.</h1>
          <h1 className='text-2xl font-semibold text-green-600 w-3/4'>****</h1>
        </div>


      </div>

    </section>
  )
}

export default Booking
