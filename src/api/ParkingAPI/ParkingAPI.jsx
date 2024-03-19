import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParking = async ({radii}) => {
  const radius = radii;
  const response = await instance.get(`/parking/30.7055/76.8000/${radius}`);
  return response.data.data;  
};