import React, { useState, useEffect } from 'react';
import norecord from '../../assets/norecord.avif';
import BookingCard from '../BookingCards';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookings } from '../store/bookingsSlice';import 
import { fetchBookingsAsync } from '../../slice/BookingSlice';

function UserBookings() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.data);
  console.log(bookings)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const storedUserData = JSON.parse(localStorage.getItem('userData'));

  //       const userId =storedUserData?._id;
  //       const response = await fetch(`http://localhost:7001/v1/api/bookings/bookings/?enserId=${userId}`);

  //       if (response.ok) {
  //         const data = await response.json();
  //         setBookings(data);
  //         console.log("Data:", data); // Log fetched data
  //         if (Array.isArray(data.data)) {
  //           setBookings(data.data);
  //           console.log("length", data.length); // Log length of fetched data
  //         } else {
  //           console.error('Data is not an array:', data);
  //         }
  //       } else {
  //         console.error('Failed to fetch bookings');
  //       }
  //     } catch (error) {
  //       console.error('Error during fetch:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

          const userId =storedUserData?._id;
    dispatch(fetchBookingsAsync({userId:userId}));
  }, [dispatch]);

  return (
    <>
      { bookings.length==0? (
        <div className='flex justify-center'>
          <p>Loading...</p>
        </div>
      ) : (
        <>

       
          {bookings.length > 0 ? (
            <div>
                 <h1 className='ml-8 mt-1 mb-4 text-2xl font-light'>My Bookings</h1>
                <div className="flex flex-wrap justify-center mx-4">
                
                {bookings.map((booking) => (
                  <div key={booking._id} className="w-1/3 mb-4">
                    <BookingCard booking={booking}/>
                  </div>
                ))}
              </div>
            </div>
            
          ) : (
            <div className='flex justify-center'>
              <img src={norecord} alt="No Record" />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UserBookings;
