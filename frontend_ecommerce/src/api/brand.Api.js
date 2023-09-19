import { axiosInstance } from "./axiosInstanceConfig";

export const brandApi = {
    getAll(params) {
        var url = `/brands`;
        return axiosInstance.get(url, { params })
    }
}