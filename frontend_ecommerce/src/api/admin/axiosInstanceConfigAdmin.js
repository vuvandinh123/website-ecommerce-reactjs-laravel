import axios from "axios";
import { AppURL } from "../AppURL";
const axiosInstance = axios.create({
  baseURL: AppURL.BaseUrlAdmin,
  headers: {
    accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
});

export default axiosInstance