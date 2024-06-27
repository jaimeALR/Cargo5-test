import axios from 'axios';
import { authenticate } from './auth';

const BASE_URL = 'https://coreapp.cargofive.com/api/v1/front';

export async function getAxiosInstance() {
  const token = await authenticate();

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}