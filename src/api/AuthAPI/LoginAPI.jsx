import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});
export const login = async ({values}) => {
  const response = await instance.post(`endUser/login`, values);
 console.log(response.data.data)
  return response.data;
};