import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

const token = JSON.parse(localStorage.getItem('token'))
export const fetchVehicles = async () => {

  const response = await instance.get(`/User/getVehicles` , {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  });
  console.log
  console.log(response.data)
  return response.data;
};

export const addVehicle = async ( formData) => {
  console.log (formData)
  const response = await instance.post(`/User/addVehicle`,  formData, 
 {
  headers: {
    'Authorization': `Bearer ${token}` // Include the bearerin the Authorization header
  }
 }
  );
  return response.data;
};

export const deleteVehicles = async ( id) => {

  const response = await instance.delete(`/User/deleteVehicle`,  { data: { id } },{
    headers: {
      'Authorization': `Bearer ${token}` // Include the bearerin the Authorization header
    }
  });
  return response.status;
};

export const setDefaultVehicles = async ({ id, def}) => {
  console.log("call2")
  console.log( token )

  const response = await instance.put(`/User/setDefaultVehicle/`,   { vehicleId:id, def  },
  {
    headers: {
      'Authorization': `Bearer ${token}` // Include the bearer token in the Authorization header
    }
  });
  return response.status;
};