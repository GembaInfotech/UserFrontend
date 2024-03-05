import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const fetchVehicles = async ({userId}) => {
  const response = await instance.get(`/User/getVehicles/${userId}`);
  console.log(response.data);
  return response.data;
};

export const deleteVehicles = async ({userid, id}) => {
  console.log(id);
  const response = await instance.delete(`/User/deleteVehicle/${userid}`,  { data: { id } });
  console.log(response.status);
  return response.status;
};