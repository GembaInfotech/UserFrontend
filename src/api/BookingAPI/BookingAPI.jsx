import axios from 'axios';
import getToken from '../../Hooks/getToken';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchBookings = async () => {

 const token = await getToken();
  const response = await instance.get(`/booking/userBookings`, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  return response.data.data;
};

export const createBooking = async ({bookingData}) => {
  const token = await  getToken();
  const response = await instance.post('/booking', {bookingData} ,{
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  console.log("done");
  console.log(response.data.message);
  return response.data;
};