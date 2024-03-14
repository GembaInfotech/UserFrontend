import { useEffect } from 'react';
import norecord from '../../assets/norecord.avif';
import BookingCard from '../../Components/ProfileComponents/BookingComponent/BookingCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookingsAsync } from '../../slice/BookingSlice';

function BookingScreen() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);
  console.log(bookings);
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    const userId = storedUserData?._id;
    dispatch(fetchBookingsAsync({ userId: userId }));
  }, [dispatch]);
  return (
     <h1>je</h1>
  );
}
export default BookingScreen;
