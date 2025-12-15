import { useEffect, useState } from "react";
import { GET } from "./useFetch";

export interface PaginatedResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export const useGetData = <T,>(url: string, dependencies: unknown[] = []) => {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState(false);
  
  const getData = async () => {
      setLoading(true);
      const res = await GET<T>(url)
      setData(res)
      setLoading(false)
  }

  useEffect(() => {
    getData()
  }, dependencies);

  return {
    data,
    loading,
  };
};
