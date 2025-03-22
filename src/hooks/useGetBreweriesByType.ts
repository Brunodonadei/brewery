import { IBrewerie } from "../types/breweries";
import { useFetchData } from "./useFetchData";

export const useGetBreweryByType = (type: string) => {
  return useFetchData<IBrewerie[]>(`breweries?by_type=${type}`);
};
