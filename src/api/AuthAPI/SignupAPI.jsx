import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});
export const signUp = async ({values}) => {
  console.log(values);
  const response = await instance.post(`endUser/register`, values);
 console.log(response);
  return response;
};