import axiosInstance from "./axiosInstanceConfigAdmin";

export const invoicesApi = {

    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/invoices`;
        return axiosInstance.get(url, { params , headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    create(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/invoices`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    get(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `invoices/${id}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    delete(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `invoices/${id}`;
        return axiosInstance.delete(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}