// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchBookings = async ({userId}) => {
  console.log("called")
  const response = await instance.get(`/booking/?enserId=${userId}`);
  return response.data.data;
};

export const createBooking = async (bookingData) => {
  const response = await instance.post('/bookings/book', bookingData);
  return response.data;
};



export const fetchVehicles = async ({userId}) => {
  const response = await instance.get(`/endUser/getVehicles/${userId}`);
  console.log(response.data);
  return response.data;
};


  export const updateBooking = async (id, status) => {
    console.log(status)
    const response = await instance.put(`/bookings/update/${id}`, { Status: status });
    return response.data;
  };
  

export const deleteBooking = async (id) => {
  await instance.delete(`/bookings/${id}`);
};
