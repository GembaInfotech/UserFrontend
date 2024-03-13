import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchParking = async ({radii}) => {
  const response = await instance.get(`/parking/27.1751/78.0421/${radii}`);
  return response.data.data;
};