import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchParking = async ({radii}) => {
  const radius = radii;
  const response = await instance.get(`/parking/30.7055/76.8000/${radius}`);
  console.log(response);
  return response.data.parkings;  
};
