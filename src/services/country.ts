/* eslint-disable @typescript-eslint/no-explicit-any */
import { COUNTRY, OFFICE, SAMPLE_COUNTRY_DATA } from "../api/apiRoutes";
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
function getOffices(searchValue: any ) {
    return httpCommon.get(`${OFFICE}/${searchValue}`)
}
function uploadSampleCountries() {
    return httpCommon.get(`${SAMPLE_COUNTRY_DATA}`)
}
export const countryService = {
    createCountry,
    getCountries,
    deleteCountry,
    getOffices,
    uploadSampleCountries
}