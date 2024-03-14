// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchBookings = async ({userId}) => {
  const response = await instance.get(`/booking/?enserId=${userId}`);
  return response.data.data;
};

export const createBooking = async (bookingData) => {
  const response = await instance.post('/bookings/book', bookingData);
  return response.data;
};





  export const updateBooking = async (id, status) => {
    const response = await instance.put(`/bookings/update/${id}`, { Status: status });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
