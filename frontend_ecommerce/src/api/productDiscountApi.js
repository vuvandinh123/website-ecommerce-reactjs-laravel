import { axiosInstance } from "./axiosInstanceConfig";

export const productDiscountApi = {
    getAll(params) {
        var url = `/discount/products`;
        return axiosInstance.get(url, { params })
    },
}