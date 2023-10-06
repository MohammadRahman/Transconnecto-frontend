/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { countryService } from "../../services/country";
import { useEffect, useState } from "react";


export function useCountry() {
    const { data: countries, isLoading } = useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
            try {
                const response = await countryService.getCountries()
                return response.data
            } catch (error: any) {
                throw new Error(error.response.data.message)
            }
            
        }
    })
    return { countries, isLoading }
}

export function useCountryWithEffect() {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
       async function fetchCountries() {
           try {
               const response = await countryService.getCountries();
               if (response.data) {
                   setIsLoading(false)
               }
               setCountries(response.data)
               
           } catch (error: any) {
               setIsLoading(false)
               throw new Error(error.response.data.message)
           }
        } 
        fetchCountries()
    }, [])
    return {countries, isLoading}
}