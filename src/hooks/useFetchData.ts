import { useEffect, useState } from "react";
import api from "../api/axiosInstance";

export const useFetchData = <T>(
  url: string,
  { enabled }: { enabled?: boolean } = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (enabled === false) return;
    const fetchData = async () => {
      try {
        const response = await api.get<T>(url);
        setData(response.data);
      } catch {
        setError("Erro");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, enabled]);

  return { data, error, loading };
};
