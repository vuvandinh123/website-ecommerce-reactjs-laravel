import axiosInstance from "./axiosInstanceConfig";

export const postApi = {
 /**
     * Retrieves all data for a given slug.
     *
     * @param {string} slug - The slug for the brand.
     * @param {object} params - Additional parameters for the request.
     * @return {Promise} A promise that resolves to the response data.
     */
    getAll(params) {
        var url = `/post`;
        return axiosInstance.get(url, { params }) 
    },
    get(slug) {
        var url = `post/${slug}`;
        return axiosInstance.get(url)
    },
    search(params) {
        var url = `/post/search`;
        return axiosInstance.post(url,params)
    },
}
