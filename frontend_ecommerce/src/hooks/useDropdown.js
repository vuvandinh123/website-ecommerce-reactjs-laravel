import { useEffect, useRef, useState } from "react";

export default function useDropdown(isDrop) {
    const [dropdow, setDropdow] = useState(isDrop);
    const dropdowRef = useRef(null);
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (dropdowRef.current && !dropdowRef.current.contains(e.target)) {
                setDropdow(false);
            }
        })
    }, [])
    return {
        dropdow,
        setDropdow,
        dropdowRef
    }

}