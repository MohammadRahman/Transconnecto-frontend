import { useEffect, useState } from "react";
import { getLocalTimeByCountry } from "../utils/helper";

export function useUpdateTime(lat: number, long: number) {
    const [time, setTime] = useState<string | null>('');

    useEffect(() => {
        const interval = setInterval(() => {
            const localTime = getLocalTimeByCountry(lat, long);
            setTime(localTime); 
        }, 1000);
        return () => clearInterval(interval);
    }, [lat, long]);
    return time;
}