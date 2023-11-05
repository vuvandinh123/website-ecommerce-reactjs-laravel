import axios from 'axios';
import { URL_API_ADMIN } from '../env';

const request = axios.create({
  baseURL: URL_API_ADMIN,
});

const getRequestAdmin = async (url, params, config) => {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const response = await request.get(url, { ...params, headers: { Authorization: `Bearer ${token.access_token}`, ...config } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const postRequestAdmin = async (url, data, config) => {
  try {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const response = await request.post(url, data, { headers: { Authorization: `Bearer ${token.access_token}`, ...config } });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { request, getRequestAdmin, postRequestAdmin };
