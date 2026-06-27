import { GET } from "../hooks/useFetch";
import type { PaginatedResponse } from "../hooks/useGetData";
import type { ICategorie } from "../model/interfaces/ICategorie";

export const getCategories = async () => {
  const { docs, ...rest } = await GET<PaginatedResponse<ICategorie>>("api/categories");
  const response: ICategorie[] = docs;
  return { response, meta: { ...rest } };
};
