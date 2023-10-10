import { axiosInstance } from "./axiosInstanceConfig";

export const brandApi = {
 /**
     * Retrieves all data for a given slug.
     *
     * @param {string} slug - The slug for the brand.
     * @param {object} params - Additional parameters for the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getAll(slug,params) {
        var url = `/brands`;
        return axiosInstance.get(url, { params }) 
    }
    // getAll(slug,params) {
    //     var url = `/brands/${slug}`;
    //     return axiosInstance.get(url, { params }) 
    // }
}
