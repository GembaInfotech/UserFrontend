import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

const token = JSON.parse(localStorage.getItem('token'))
export const userData = async () => {
  const response = await instance.get('/user/userData', {
    headers: {
        'Authorization': `Bearer ${token}` 
      }
  });
  return response;
};