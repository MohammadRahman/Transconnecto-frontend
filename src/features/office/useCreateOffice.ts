/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { officeService } from "../../services/office";
import { useNavigate } from "react-router-dom";



export function useCreateOffice() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { mutate: newOffice, isLoading } = useMutation({
        mutationKey: ['office'],
        mutationFn: async (newOffice) => {
            try {
                const response = await officeService.createOffice(newOffice)
                return response.data;
            } catch (error: any) {
                throw new Error(error.response.data.message)
            }
            
        },
        onSuccess: () => {
            toast.success('office created.'),
                navigate('/dashboard')
            queryClient.invalidateQueries({ queryKey: ['offices']})
        },
        onError: (error: any)=> toast.error(error.message)
    })
    return { newOffice, isLoading}
}