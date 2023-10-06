import tzlookup from 'tz-lookup'
import { createUrl } from './createUrl';
import axios from 'axios';

const BASE_URL = 'https://timezone.abstractapi.com/v1/current_time'
// function to get local time based on a country name
export function getLocalTimeByCountry(lat: number, long: number) {
    try {
        const timezone = tzlookup(lat, long);
        if (timezone) {
            const currentUtcTime = new Date();
            const localTime = currentUtcTime.toLocaleString("en-US", {
                timeZone: timezone,
            });
            return localTime;
        }
    } catch (error) {
        console.error(error);
    }

    return null;
}
export async function getGMTOffsetByCountry(country: string) {
    try {
        const url = createUrl(BASE_URL, country)
        const response = await axios.get(url)
        const symbol = response.data.gmt_offset > 0 ? '+' : '-'
        return `GMT ${symbol}${response.data.gmt_offset}`
    } catch (error) {
        console.log(error)
    }
}