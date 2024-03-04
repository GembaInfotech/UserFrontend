import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7001/v1/api',
});

export const contactform = async ({values}) => {
  const response = await instance.post('/contacts/contact', {values});
  return response.data;
};