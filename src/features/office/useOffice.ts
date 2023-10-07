/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { officeService } from "../../services/office";
import { useState, useEffect } from "react";

export function useFetchOffices() {
    const { data: offices, isLoading } = useQuery({
        queryKey: ['offices'],
        queryFn: async () => {
            const response = await officeService.findAllOffices() 
            console.log(response)
            return response.data;
        } 
    })
    return { offices, isLoading }
}
export function useOfficeWithEffect() {
    const [offices, setOffices] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        async function fetchCountries() {
            try {
                const response = await officeService.findAllOffices();
                if (response.data) {
                    setIsLoading(false)
                }
                setOffices(response.data)

            } catch (error: any) {
                setIsLoading(false)
                throw new Error(error.response.data.message)
            }
        }
        fetchCountries()
    }, [])
    return { offices, isLoading }
}