import { axiosInstance } from "./axiosInstanceConfig";

export const productApi = {
    getAll(params) {
        var url = `/products`;
        return axiosInstance.get(url, { params })
    },
    get(id) {
        var url = `products/${id}`;
        return axiosInstance.get(url)
    },
    search(id,params) {
        var url = `products/search/${id}`;
        return axiosInstance.get(url,{ params })
    },
}