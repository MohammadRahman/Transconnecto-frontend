import axios from "axios";

export const httpCommon = axios.create({
    baseURL: 'http://localhost:3009',
    // baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Content-type": "application/json",
        Accept: "application/json",
    },
})