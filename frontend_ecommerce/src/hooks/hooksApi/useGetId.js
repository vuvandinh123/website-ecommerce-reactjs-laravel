import { useEffect, useState } from "react";
import { productApi } from "../../api/site/productApi";

import { AppURL } from "../../api/AppURL";

export function useGetId(id) {
    const [data, setData] = useState({});
    // const [size, setSize] = useState("128gb");
    const [src, setSrc] = useState(
        ""
    );
    // const [color, setColor] = useState("white");
    useEffect(() => {
        const fetchApi = async () => {
            const res = await productApi.get(id);
            setData(res.data);
            // setColor(res.data.colors[0]?.name);
            // setSize(res.data.sizes[0]?.name);
            setSrc(AppURL.ImageUrl + res.data.images[0].image_url);
        }
        fetchApi();
    }, [id])
    return { data, src,setSrc };
}