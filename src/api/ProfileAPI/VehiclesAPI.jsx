import axios from 'axios';
import getToken from '../../Hooks/getToken';
const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});


export const fetchVehicles = async () => {
  
  const token = await getToken();
  const response = await instance.get(`/User/getVehicles` , {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  console.log
  console.log(response.data)
  return response.data;
};

export const addVehicle = async ( {formData}) => {
  console.log (formData)
  const token = await getToken();
  const response = await instance.post(`/User/addVehicle`,  {formData}, 
 {
  headers: {
    'Authorization': `Bearer ${token}` // Include the bearerin the Authorization header
  }
 }
  );
  return response.data;
};

export const deleteVehicles = async ({id}) => {
  const token = await getToken();

  const vid=id;

  const response = await instance.delete(`/User/vehicle/${vid}`,  
 {
  headers: {
    'Authorization': `Bearer ${token}` // Include the bearerin the Authorization header
  }
 }
  );
  console.log(response.data)
  return response.data;
};

export const setDefaultVehicles = async ({ id, def}) => {
  
  const token = await getToken();

  const response = await instance.put(`/User/setDefaultVehicle/`,   { vehicleId:id, def  },
  {
    headers: {
      'Authorization': `Bearer ${token}` // Include the bearer token in the Authorization header
    }
  });
  return response.status;
};