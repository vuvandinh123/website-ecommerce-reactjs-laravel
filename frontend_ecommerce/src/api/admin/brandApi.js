import axiosInstance from "./axiosInstanceConfigAdmin";

export const brandApi = {
    /**
        * Retrieves all data for a given slug.
        *
        * @param {string} slug - The slug for the brand.
        * @param {object} params - Additional parameters for the request.
        * @return {Promise} A promise that resolves to the response data.
        */
    getAll(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/brands`;
        return axiosInstance.get(url, { params, headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    get(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `brands/${id}`;
        return axiosInstance.get(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    create(params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/brands`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    delete(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `brands/${id}`;
        return axiosInstance.delete(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    update(id, params) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `/brands/${id}`;
        return axiosInstance.post(url, params, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
    status(id) {
        const token = JSON.parse(sessionStorage.getItem("token"));
        var url = `brands/status/${id}`;
        return axiosInstance.put(url, { headers: { Authorization: `Bearer ${token.access_token}` } })
    },
}
