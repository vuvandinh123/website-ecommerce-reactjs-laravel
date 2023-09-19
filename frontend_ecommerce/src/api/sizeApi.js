import { axiosInstance } from "./axiosInstanceConfig";

export const sizeApi = {
    getAll(params) {
        var url = `/sizes`;
        return axiosInstance.get(url, { params })
    }
}