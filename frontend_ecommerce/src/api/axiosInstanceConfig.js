import axios from "axios";
import { AppURL } from "./AppURL";
const axiosInstanceConfig = {
    baseURL :AppURL.BaseURL,
    headers: {
        accept: 'application/json',
        'Content-Type': 'multipart/form-data' 
    }
}
export const axiosInstance = axios.create(axiosInstanceConfig);