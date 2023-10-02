/* eslint-disable @typescript-eslint/no-explicit-any */
import { COUNTRY } from "../api/apiRoutes";
import { httpCommon } from "../api/httpCommon"

function createCountry(countryData: any) {
    console.log("data at axios", countryData)
    return httpCommon.post(COUNTRY, countryData);
}
function getCountries() {
    return httpCommon.get(COUNTRY)
}
function deleteCountry(name: any) {
    return httpCommon.delete(`${COUNTRY}/${name}`)
}
export const countryService = {
    createCountry,
    getCountries,
    deleteCountry
}