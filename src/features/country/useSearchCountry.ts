/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";


export function useSearchCountry() {
    const [offices, setOffice] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search] = useSearchParams()
    const country = search.get('country') || ''

    useEffect(() => { 
        setIsLoading(true)
        async function fetchOfficeByCountries() {
            try {
                const response = await countryService.getOffices(country)
                if (response.data) {
                    setIsLoading(false)
                    setOffice(response.data)
                }
                if (response.data.message) {
                    toast.error(response.data.message)
                }  
               
            } catch (error: any) {
                setIsLoading(false)
                toast.error(error.response.data.message)
            }
        }
        if (country != '') {
            fetchOfficeByCountries()
        }
        
    }, [country])

    return {offices, isLoading};
}