import { useEffect, useState, DatePicker, MdEdit, useParams, UserInfoForm, PiCurrencyInrBold, Swal, PaymentInfo } from './index';
import image from '../../assets/parking.webp'
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../../Components/LayoutComponents/Header'
import { selectVehicleById } from '../../slice/VehiclesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { createBookingAsync } from '../../slice/BookingSlice';
import { createPayment } from '../../Redux/Payment/Action';
import Razorpay from '../../Components/CheckoutComponents/Razorpay';
import axios from 'axios';

function Booking() {
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(new Date());
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
   });
  const [toDate, setToDate] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [defaultVehicle, setDefaultVehicle] = useState(null);
  const { data, intime, totime } = useParams();
  const parkingData = JSON.parse(decodeURIComponent(data));
  const [price, setPrice] = useState(parkingData?.price);
  const Intime = JSON.parse(decodeURIComponent(intime));
  const Totime = JSON.parse(decodeURIComponent(totime));
  const vehicles = useSelector((state) => selectVehicleById(state)) 
  const response = useSelector((state) => state.bookings);
    const [razorpay, setDisplayRazorpay] =useState(false);

  useEffect(() => {
    setFromDate(Intime);
    setToDate(Totime);
  }, []);

  useEffect(() => async () => {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      setIsLoggedIn(true);
      setDefaultVehicle(vehicles);
    }
  }, [defaultVehicle, dispatch]);


  const getPrice = () => {
    if (!toDate || isNaN(new Date(toDate).getTime())) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const exceedTimeInMillis = Math.max(0, new Date(toDate).getTime() - new Date(fromDate).getTime());
    const days = Math.floor(exceedTimeInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((exceedTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((exceedTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
    const mul = hours + minutes / 60;
    const value = Math.ceil(parkingData.price * mul);
    setPrice(value);
  }

  const Amount = price + 2 * Math.floor(price * 0.09)


  const book = async () => {
    try {
      if (!vehicles) {
        return;
      }
      const bookingDetails = {
        parkingid: parkingData._id,
        pn: parkingData.pn,
        pa: parkingData?.pa,
        In: fromDate || Intime,
        out: toDate || Totime,
        status: "Incoming",
        num: vehicles.num,
        price: price,
        sgst: Math.floor(price * 0.09),
        cgst: Math.floor(price * 0.09),
      };
      const bookingData = bookingDetails;
       const avail = await dispatch(createBookingAsync({ bookingData }));
      console.log("bookings", avail.payload.booking._id)
      const data = avail.payload.booking._id;
       const paymentData=  dispatch(createPayment(data))
       console.log(paymentData)
      if (avail?.payload?.success) {
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your parking booked successfully',
        }).then(() => {
          
            window.location.href = '/profile/bookings';
          
        });
      } else {
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your parking does not booked successfully',
        }).then(() => {
          
     console.log("flaied")          
        });
        console.error('Failed to book');
      }
    } catch (error) {
      console.error('Error during booking:', error);
    }
  };

  return (
    <>
      <Header />
      <section className='flex min-h-screen mt-12 '>
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
              <button onClick={() => {
                setFromDate(new Date())
              }}><h1><MdEdit /></h1>
              </button>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                showTimeSelect
                dateFormat="MM/dd/yyyy h:mm aa"
                className="px-2 py-2 max-md:px-2  rounded-sm focus:outline-none focus:border-blue-500 "
              />
              <button onClick={() => {
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
              <button onClick={() => { getPrice() }}>refresh</button>
              <h1 className='text-xl font-bold'><PiCurrencyInrBold />{Amount}</h1>
            </div>
            <button
              id="pay"
              onClick={()=>{book()}}
              // onClick={()=>paymentHandler(10000, 'INR')}
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
            <h1 className='text-2xl font-semibold text-green-600 w-3/4'>**</h1>
          </div>
        </div>
      </section>
       <h1>{razorpay}</h1>
      {razorpay && <Razorpay 
          amount={orderDetails.amount}
          currency={orderDetails.currency}
          orderId={orderDetails.orderId}
      />}
    </>
  )
}
export default Booking