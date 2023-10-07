import { useMutation, useQueryClient } from "@tanstack/react-query";
import { countryService } from "../../services/country";
import toast from "react-hot-toast";

export function useDelete() {

  const queryClient = useQueryClient();
  const { mutate: removeCountry, isLoading } = useMutation({
    mutationFn: async (name: string) => {
      return await countryService.deleteCountry(name);
    },
    onSuccess: () => {
      toast.success("country removed.");
      queryClient.invalidateQueries({ queryKey: ["countries"] });
    },
  });

  return { removeCountry, isLoading };
}