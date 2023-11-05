import axiosInstance from "./axiosInstanceConfig";

export const pageApi = {
 /**
     * Retrieves all data for a given slug.
     *
     * @param {string} slug - The slug for the brand.
     * @param {object} params - Additional parameters for the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    
    get(slug) {
        var url = `page/${slug}`;
        return axiosInstance.get(url)
    },
    search(params) {
        var url = `/post/search`;
        return axiosInstance.post(url,params)
    },
}
