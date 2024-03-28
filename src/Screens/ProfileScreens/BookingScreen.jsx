import { useEffect } from 'react';
import norecord from '../../assets/norecord.avif';
import BookingCard from '../../Components/ProfileComponents/BookingComponent/BookingCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../slice/BookingSlice';
import PulseLoader from "react-spinners/PulseLoader";

function BookingScreen() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  console.log(bookings);
  useEffect(() => {
    if ((bookings.status == "idle")) dispatch(fetchBookingsAsync());
  }, [dispatch]);
  return (
    <>
      { bookings.status=="failed" && bookings.error && <h1>error</h1>}

      {bookings.status == "loading" && !bookings.error  && <div className='flex  flex-row justify-center items-center '> <PulseLoader size="8px" /></div>}

      { bookings.status =="succeeded" && bookings?.data?.length > 0 ? (
        <div>
          <h1 className='ml-8 mt-1 mb-4 text-2xl font-light max-sm:text-base max-sm:mb-0'>My Bookings</h1>
          <div className="flex flex-wrap justify-center mx-4 max-sm:mx-0">
            {bookings?.data?.map((booking) => (
              <div key={booking._id} className="w-full sm:w-1/3 mb-4 max-sm:w-full max-sm:mb-4">
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
  );
}
export default BookingScreen;
