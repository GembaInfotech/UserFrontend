import { useEffect, useState, DatePicker, MdEdit, useParams, UserInfoForm, PiCurrencyInrBold, Swal, PaymentInfo } from './index';
import { createBookingAsync } from '../../slice/BookingSlice'
import { useSelector, useDispatch } from 'react-redux';

function Booking() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data, intime, totime } = useParams();
  const parkingData = JSON.parse(decodeURIComponent(data));
  const [price, setPrice] = useState(parkingData?.capacity)
  const Intime = JSON.parse(decodeURIComponent(intime));
  const Totime = JSON.parse(decodeURIComponent(totime));

  useEffect(() => {
    setFromDate(Intime);
    setToDate(Totime);
  }, [])

  
  const [user, setUser] = useState({})
  const getPrice = () => {
    if (!toDate || isNaN(new Date(toDate).getTime())) {
      console.error('Invalid checkoutTime:', toDate);
      return { days: 0, hours: 0, minutes: 0 };
    }
    const exceedTimeInMillis = Math.max(0, new Date(toDate).getTime() - new Date(fromDate).getTime());
    const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
    console.log(days, hours, minutes)
    const mul = hours + minutes / 60
    const value = Math.ceil(parkingData.capacity * mul);
    setPrice(value)
  }

  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.status
  );
  console.log(bookings);

  const handleConfirmBooking = async () => {
    try {
      console.log(parkingData.parkingName)
      const bookingData = {
        email: user.email,
        enserId: user._id,
        parkingId: parkingData._id,
        parkingName: parkingData?.parkingName,
        timeIn: fromDate || Intime,
        timeOut: toDate || Totime,
        status: "Incoming",
        CarNumber: user.vehicle_info[0].vehicle_number,
        bookingPrice: price
      };

      dispatch(createBookingAsync({ bookingData }));
      console.log(bookings);
      if (bookings) {
        console.log(bookings);
        console.log('Booking successful');
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your parking booked successfully',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/profile/bookings';
          }
        });
      } else {
        console.error('Failed to book');
      }
    } catch (error) {
      console.error('Error during booking:', error);
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
    <section className='flex min-h-screen'>
      <div className=' flex max-sm:flex-col'>
      <div className='w-2/3 flex-col px-32 max-sm:px-4 max-sm:py-0 max-sm:w-full '>
        <div className=' border-black w-full h-48 my-1 max-sm:my-0 py-6 max-sm:pt-4'>
          <h1 className='font-light text-gray-800'>complete your booking process</h1>
          <h1 className='text-gray-800 text-xl max-sm:text-base font-bold  px-2 max-sm:my-4 my-2 max-sm:px-0'>{parkingData.parkingName}</h1>
          <div className=' flex bg-[#f0f4f9] max-sm:flex-col  p-2 max-sm:py-0 rounded-lg h-24 max-sm:w-full justify-evenly items-center '>
            <div className=''>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
              className="px-2 py-2 max-md:py-1  rounded-sm focus:outline-none focus:border-blue-500"
            />
            <button onClick={() => {
              setFromDate(new Date())
            }}><h1><MdEdit /></h1>
            </button>
            </div>
            <div>
            <DatePicker
              selected={toDate}

              onChange={(date) => setToDate(date)}
              showTimeSelect
              dateFormat="MM/dd/yyyy h:mm aa"
              className="px-2 py-2 max-md:py-1  rounded-sm focus:outline-none focus:border-blue-500 "
            />
            <button onClick={() => {
              setToDate(new Date())
            }}><h1><MdEdit /></h1>
            </button>
            </div>
          </div>
        </div>

        {isLoggedIn ? null : (<div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 max-sm:my-0 justify-evenly  items-center'>
          <UserInfoForm />
        </div>)}
        <div className='bg-[#fbfbfb]  border-gray-300 rounded-md flex h-80 my-2 max-sm:-mt-10 justify-evenly  items-center'>
          <PaymentInfo />
        </div>
        <div className='bg-gray-100  border-gray-300 rounded-md flex-row h-40 my-2 justify-evenly px-8  max-sm:p-0 items-center'>
          <h1 className='text-gray-800 font-semibold text-2xl max-sm:text-xl max-sm:px-2 py-3'>Payment Summary </h1>
          <div className='flex justify-between px-1 '>
            <h1 className='text-xl max-sm:text-base max-sm:px-2 font-semibold'>Price </h1>
            <button onClick={() => { getPrice() }}>refresh</button>
            <h1 className='text-xl max-sm:text-base max-sm:px-2 font-bold'><PiCurrencyInrBold />{price}</h1>
          </div>
          <button
            onClick={handleConfirmBooking}
            className="bg-blue-500 text-white px-4 mt-2  max-md:px-2 max-sm:mx-2 py-2  rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Confirm Booking
          </button>
        </div>

      </div>
      <div className='flex-row p-4 max-sm:p-0 w-1/3 max-sm:w-full '>
        <div className='flex-row w-3/4 max-sm:m-8'>
          <h1 className='text-gray-700 py-2 text-xl font-bold'> Provided Facilities</h1>
          <h1 className='text-sm font-sans font-light '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores deserunt, minima quisquam reprehenderit eius doloremque ut maxime possimus magni alias eligendi saepe. Exercitationem perferendis cupiditate incidunt reiciendis, iste earum ullam.</h1>
          <h1 className='text-sm font-sans py-2 font-light'>Please park within the timeframe on your pass. Parking outside your timeframe will incur additional fees. The garage allows 10 mins grace period on arrival and departure.</h1>
          <h1 className='text-2xl font-semibold text-green-600 w-3/4'>****</h1>
        </div>
      </div>

      </div>

    </section>
  )
}

export default Booking
