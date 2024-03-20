import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const validatePayment = async ({radii}) => {
  const radius = radii;
  const response = await instance.get(`/razorpay/order/validate`);
  return response.data.data;  
};