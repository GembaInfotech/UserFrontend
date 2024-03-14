import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});
const token = localStorage.getItem('token')

export const fetchBookings = async ({userId}) => {


  const response = await instance.get(`/booking/userBookings`, {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  return response.data.data;
};

export const createBooking = async ({bookingData}) => {
  console.log(bookingData);
  const response = await instance.post('/booking', {bookingData});
  console.log("done");
  console.log(response.data);
  return response.data;
};