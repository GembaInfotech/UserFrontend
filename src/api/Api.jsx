import axios from 'axios';

const API_BASE_URL = 'http://your-api-url.comhttp://localhost:7001/v1/api'; // Replace with your API base URL

const bookingAPI = {
  getAllBookings: async () => {
    const response = await axios.get(`${API_BASE_URL}/bookings`);
    return response.data;
  },
//   createBooking: async (bookingData) => {
//     const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
//     return response.data;
//   },
//   updateBooking: async (bookingId, bookingData) => {
//     const response = await axios.put(`${API_BASE_URL}/bookings/${bookingId}`, bookingData);
//     return response.data;
//   },
//   deleteBooking: async (bookingId) => {
//     const response = await axios.delete(`${API_BASE_URL}/bookings/${bookingId}`);
//     return response.data;
//   }
};

export default bookingAPI;
