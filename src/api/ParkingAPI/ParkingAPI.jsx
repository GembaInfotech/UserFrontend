import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchParking = async ({radii}) => {
  const response = await instance.get(`/parking/27.1751/78.0421/${radii}`);
  return response.data.data;
};