import { useFetchData } from "./useFetchData";

interface IMetaData {
  total: number;
}

export const useGetMetaData = (type?: string) => {
  const queryParam = type && type !== "padrão" ? `?by_type=${type}` : "";
  return useFetchData<IMetaData>(`breweries/meta${queryParam}`);
};
