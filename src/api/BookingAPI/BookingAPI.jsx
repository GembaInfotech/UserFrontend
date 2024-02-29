import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchBookings = async ({userId}) => {
  console.log("called")
  const response = await instance.get(`/bookings/bookings/?enserId=${userId}`);
  return response.data.data;
};

export const createBooking = async ({bookingData}) => {
  const response = await instance.post('/bookings/book', {bookingData});
  return response.data;
};