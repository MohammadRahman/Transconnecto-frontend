/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { countryService } from "../../services/country";

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