import axiosInstance from "./axiosInstanceConfigAdmin";

export const orderApi = {
 
    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/orders`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } }) 
    },
    get(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `orders/${id}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    create(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `orders`;
        return axiosInstance.post(url,params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    delete(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `orders/${id}`;
        return axiosInstance.delete(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    search(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/post/search`;
        return axiosInstance.post(url,params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}

