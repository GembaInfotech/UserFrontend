import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchVehicles = async ({userId}) => {
  const response = await instance.get(`/endUser/getVehicles/${userId}`);
  console.log(response.data);
  return response.data;
};