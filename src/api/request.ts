import axios from 'axios';
import { API_KEY, BASE_URL } from '~/env';

const baseURL: string = BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 20000, // 20s timeout
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(async (config) => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: API_KEY,
    },
  };
});

export default request;
