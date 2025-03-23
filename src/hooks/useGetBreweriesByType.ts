import { IBrewerie } from "../types/breweries";
import { useFetchData } from "./useFetchData";
import { useGetBreweries } from "./useGetBreweries";

export const validTypes = [
  "micro",
  "nano",
  "regional",
  "brewpub",
  "large",
  "planning",
  "bar",
  "contract",
  "proprietor",
  "closed",
];

export const useGetBreweryByType = (type: string) => {
  if (!validTypes.includes(type)) return useGetBreweries();

  return useFetchData<IBrewerie[]>(`breweries?by_type=${type}`, {
    enabled: validTypes.includes(type),
  });
};
