import axiosInstance from "./axiosInstanceConfig";

export const productApi = {
    getAll(params) {
        var url = `/products`;
        return axiosInstance.get(url, { params })
    },
    create(params) {
        var url = `/products`;
        return axiosInstance.post(url, params )
    },
    getTopselling(params) {
        var url = `/products/top_selling`;
        return axiosInstance.get(url, { params })
    },
    getProductByCategory(id) {
        var url = `/products/categories/${id}`;
        return axiosInstance.get(url)
    },
    getFeatured(params) {
        var url = `/products/featured`;
        return axiosInstance.get(url, { params })
    },
    get(slug) {
        var url = `products/${slug}`;
        return axiosInstance.get(url)
    },
    search(id,params) {
        var url = `products/search/${id}`;
        return axiosInstance.post(url, params )
    },
}