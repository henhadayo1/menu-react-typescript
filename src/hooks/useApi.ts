import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export const useApi = <T>(url: string, options: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios(url, options);
        setData(response.data);
      } catch (error) {
        let errorMessage = "Something went wrong ";
        if (error instanceof Error) {
          errorMessage += error.message;
        }
        setError(errorMessage);
      }

      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
};

export default useApi;
