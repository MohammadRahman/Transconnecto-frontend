/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { OFFICE } from "../api/apiRoutes";
import { httpCommon } from "../api/httpCommon";
import { geocodeAddress } from "./location";

export async function createOffice2(data: any) {
    try {
        console.log("in axios", data)
        const response = await axios.post('http://localhost:3009/office', data)
        console.log(response.data)
        return response.data;
    } catch (error: any) {
        console.log(error)
        throw new Error(error.response)
    }
}
async function createOffice(officeData: any) {
    const { latitude, longitude } = await geocodeAddress({ city: officeData.city, country: officeData.country, address: officeData.address });
    const newOffice = {
        name: officeData.name,
        city: officeData.city,
        country: officeData.country,
        latitude,
        longitude
    }
    return httpCommon.post(OFFICE, newOffice)
}
function findAllOffices() {
   return httpCommon.get(OFFICE)
}
function deleteOfficeByName(name: string) {
    return httpCommon.delete(`${OFFICE}/${name}`)
}
export const officeService = {
    createOffice,
    findAllOffices,
    deleteOfficeByName
}