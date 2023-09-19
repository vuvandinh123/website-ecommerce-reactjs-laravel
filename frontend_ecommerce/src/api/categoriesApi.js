import { axiosInstance } from "./axiosInstanceConfig";

export const categoriesApi = {
    getAll(params) {
        var url = `/categories`;
        return axiosInstance.get(url, { params })
    },
    get(slug) {
        var url = `categories/${slug}`;
        return axiosInstance.get(url)
    },
}