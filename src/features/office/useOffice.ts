import { useQuery } from "@tanstack/react-query";
import { officeService } from "../../services/office";
// import {fetchOffices}  from "../../services/office";

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