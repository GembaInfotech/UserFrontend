import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchBookings = async ({userId}) => {

  const response = await instance.get(`/booking/?userid=${userId}`);
  return response.data.data;
};

export const createBooking = async ({bookingData}) => {
  console.log(bookingData);
  const response = await instance.post('/booking', {bookingData});
  console.log("done");
  console.log(response.data);
  return response.data;
};