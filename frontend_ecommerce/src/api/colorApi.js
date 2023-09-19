import { axiosInstance } from "./axiosInstanceConfig";

export const colorApi = {
    getAll(params) {
        var url = `/colors`;
        return axiosInstance.get(url, { params })
    }
}