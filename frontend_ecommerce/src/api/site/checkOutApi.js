import axiosInstance from "./axiosInstanceConfig";


export const checkOutApi = {
    /**
        * Retrieves all data for a given slug.
        *
        * @param {string} slug - The slug for the brand.
        * @param {object} params - Additional parameters for the request.
        * @return {Promise} A promise that resolves to the response data.
        */
    getAll(id, params) {
        var url = `/orders/${id}`;
        return axiosInstance.get(url, { ...params })
    },
    get(id,params) {
        var url = `orders/${id}/show`;
        return axiosInstance.get(url,{...params})
    },
    create(params,config) {
        var url = `orders`;
        return axiosInstance.post(url, params,config)
    },
    search(params) {
        var url = `/post/search`;
        return axiosInstance.post(url, params)
    },
}

