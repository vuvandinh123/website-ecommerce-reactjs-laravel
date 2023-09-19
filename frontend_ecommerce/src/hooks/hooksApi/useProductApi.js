import { useEffect, useState } from "react";
import { productApi } from "../../api/productApi";

export function useProductApi(params){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await productApi.getAll(params);
            setData(res.data.data.data);
        }
        fetchApi();
    },[params]);
    return {data};
}