import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const validatePayment = async ({radii}) => {
  const radius = radii;
  const response = await instance.get(`/razorpay/order/validate`);
  return response.data.data;  
};