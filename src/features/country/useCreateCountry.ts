/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateCountry() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: newCountry, isLoading } = useMutation({
        mutationKey: ['country'],
        mutationFn: async (countryData) => {
            try {
                console.log("data at mutations",countryData)
                const response = await countryService.createCountry(countryData)
                return response.data;
            } catch (error: any) {
                throw new Error(error.response.data.message)
            }
           
        },
        onSuccess: () => {
            toast.success('new country added to the list'),

                navigate('/countries')

            queryClient.invalidateQueries({ queryKey: ['countries'] })
        },
        onError:(error: any)=> toast.error(error.message)

    })
    return { newCountry, isLoading }
}