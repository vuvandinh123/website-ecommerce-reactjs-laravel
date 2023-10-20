import axiosInstance from "./axiosInstanceConfig";

export const topicApi = {
 /**
     * Retrieves all data for a given slug.
     *
     * @param {string} slug - The slug for the brand.
     * @param {object} params - Additional parameters for the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getAll(params) {
        var url = `/topic`;
        return axiosInstance.get(url, { params }) 
    },
    get(slug) {
        var url = `topic/${slug}`;
        return axiosInstance.get(url)
    },
}
