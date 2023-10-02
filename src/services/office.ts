/* eslint-disable @typescript-eslint/no-explicit-any */
// export async function fetchOffices() {
//     try {
//         const response = await axios.get('http://localhost:3009/office')
//         return response.data;
//     } catch (error) {
//         console.log(error)
//     }
// }

import axios from "axios";
import { OFFICE } from "../api/apiRoutes";
import { httpCommon } from "../api/httpCommon";

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
function createOffice(officeData: any) {
   return httpCommon.post(OFFICE, officeData)
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