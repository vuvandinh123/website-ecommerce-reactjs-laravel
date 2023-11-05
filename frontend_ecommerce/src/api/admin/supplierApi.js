import axiosInstance from "./axiosInstanceConfigAdmin";

export const supplierApi = {
    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/suppliers`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    get(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `suppliers/${id}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}