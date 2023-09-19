import { axiosInstance } from "./axiosInstanceConfig";

export const couponApi = {
    get(code) {
        var url = `/coupon/${code}`;
        return axiosInstance.get(url)
    }
}