import { useEffect, useState, DatePicker, MdEdit, useParams, UserInfoForm, PiCurrencyInrBold, Swal, PaymentInfo } from './index';
import image from '../../assets/parking.webp'
import 'react-datepicker/dist/react-datepicker.css';
import Header from '../../Components/LayoutComponents/Header'
import { selectVehicleById } from '../../slice/VehiclesSlice';
import { useSelector, useDispatch } from 'react-redux';
import { createBookingAsync } from '../../slice/BookingSlice';

function Booking() {
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(new Date());
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

console.log(response);

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
  const amount = Amount * 100;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:7001/v1/api/razorpay/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    const order = await response.json();
    var options = {
      "key": "rzp_test_muLBb6gKqfrZA5", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      "name": "Gemba Infotech", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response) {
        const body = {
          ...response
        };

        const bookingData = {
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

        const validateRes = await fetch("http://localhost:7001/v1/api/razorpay/order/validate", {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          },
        });

        const jsonRes = await validateRes.json();
        console.log(jsonRes.msg);
        
        if (jsonRes.msg === "success") {
          try {
            const bookResponse = await book(bookingData); // Call book function with bookingData
            if (bookResponse && bookResponse.error) {
              throw new Error(bookResponse.error);
            }
          } catch (error) {
            throw new Error(`Error in booking API: ${error.message}`);
          }
        }
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Surabhi Yadav", //your customer's name
        "email": "Surabhiya2001@gmail.com",
        "contact": "8303672402"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new window.Razorpay(options)
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    document.getElementById('pay').onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    }
  };

  const book = async (bookingDetails) => {
    try {
      if (!vehicles) {
        return;
      }
      const bookingData = bookingDetails;
      dispatch(createBookingAsync({ bookingData }));
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your parking booked successfully',
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/profile/bookings';
          }
        });
    } catch (error) {
      await Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Error during booking',
      })
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
              onClick={paymentHandler}
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
    </>
  )
}
export default Booking