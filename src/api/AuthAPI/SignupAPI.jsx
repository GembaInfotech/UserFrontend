import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://backend-2-v1ta.onrender.com/v1/api',
});
export const signUp = async ({values}) => {
  const response = await instance.post(`/user/register`, {values});
  return response;
};