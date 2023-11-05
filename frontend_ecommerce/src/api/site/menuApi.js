import axiosInstance from "./axiosInstanceConfig";

export const menuApi = {
 /**
     * Retrieves all data for a given slug.
     *
     * @param {string} slug - The slug for the brand.
     * @param {object} params - Additional parameters for the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getAll(params) {
        var url = `/menus`;
        return axiosInstance.get(url, { params }) 
    },
}

