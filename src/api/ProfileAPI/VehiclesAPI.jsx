import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});

export const fetchVehicles = async ({userId}) => {
  const response = await instance.get(`/User/getVehicles/${userId}`);
 
  return response.data;
};

export const deleteVehicles = async ({userid, id}) => {

  const response = await instance.delete(`/User/deleteVehicle/${userid}`,  { data: { id } });

  return response.status;
};
export const setDefaultVehicles = async ({userid, id, def}) => {
  const response = await instance.put(`/User/setDefaultVehicle/${userid}`,   { id, def  });
  return response.status;
};