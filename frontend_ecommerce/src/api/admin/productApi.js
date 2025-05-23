import axiosInstance from "./axiosInstanceConfigAdmin";

export const productApi = {
    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/products`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } })
    },

    create(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/products`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    update(id, params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/products/${id}`;
        return axiosInstance.put(url, params, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token.access_token}` } })
    },
    status(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `products/status/${id}`;
        return axiosInstance.put(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    delete(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `products/${id}`;
        return axiosInstance.delete(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    get(slug) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `products/${slug}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    search(id, params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `products/search/${id}`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}