import { IBrewerie } from "../types/breweries";
import { useFetchData } from "./useFetchData";

export const useGetBreweries = (page: number, type?: string) => {
  const typeQuery = type && type !== "padrão" ? `&by_type=${type}` : "";

  return useFetchData<IBrewerie[]>(
    `breweries?page=${page}&per_page=16${typeQuery}`
  );
};
