import { geocodeAddress } from "../../services/location";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function useLatAndLong() {
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)
    const [searchParams] = useSearchParams()

    const city = searchParams.get('city') || '';
    const country = searchParams.get('country') || '';
    const address = searchParams.get('address') || '';
    // QUERY
    useEffect(() => {
        async function getLatsAdnLongs() {
            const { latitude, longitude } = await geocodeAddress({ city, country, address });
            setLatitude(latitude);
            setLongitude(longitude)
        }
        getLatsAdnLongs();
    }, [city, country, address]);

    return {latitude, longitude}
}
