import { GET } from "../hooks/useFetch";
import type { ICategorie } from "../model/interfaces/ICategorie";

export const getCategories = async () => {
  const { docs, ...rest } = await GET("api/categories");
  const response: ICategorie[] = docs;
  return { response, meta: { ...rest } };
};
