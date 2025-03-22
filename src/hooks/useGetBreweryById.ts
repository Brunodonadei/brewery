import { IBrewerie } from "../types/breweries";
import { useFetchData } from "./useFetchData";

export const useGetBreweryById = (id: string) => {
  return useFetchData<IBrewerie>(`breweries/${id}`);
};
