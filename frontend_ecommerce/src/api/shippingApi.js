import { axiosInstance } from "./axiosInstanceConfig";

export const shippingApi = {
    getAll(params) {
        var url = `/shipping`;
        return axiosInstance.get(url, { params })
    }
}