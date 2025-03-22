import { IBrewerie } from "../types/breweries";
import { useFetchData } from "./useFetchData";

export const useGetBreweries = () => {
  return useFetchData<IBrewerie[]>("breweries");
};
