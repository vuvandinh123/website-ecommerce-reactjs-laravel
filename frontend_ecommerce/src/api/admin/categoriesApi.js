import axiosInstance from "./axiosInstanceConfigAdmin";

export const categoriesApi = {
    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/categories`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    create(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/categories`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    update(id, params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/categories/${id}`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    get(slug) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `categories/${slug}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    status(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `categories/status/${id}`;
        return axiosInstance.put(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    delete(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `categories/${id}`;
        return axiosInstance.delete(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}