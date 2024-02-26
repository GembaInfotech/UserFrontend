import { useState, useEffect } from 'react';
import norecord from '../../assets/norecord.avif';
import BookingCard from '../BookingCards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../slice/BookingSlice';

function UserBookings() {

  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings.data);
  console.log(bookings)

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    const userId = storedUserData?._id;
    dispatch(fetchBookingsAsync({ userId: userId }));
  }, [dispatch]);

  return (
    <>
      {bookings.length == 0 ? (
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
                    <BookingCard booking={booking} />
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
