import { GET } from "../hooks/useFetch";
import type { IProduct } from "../model/interfaces/IProduct";

export const getProducts = async () => {
  const { docs, ...rest } = await GET(`api/products`);
  const response: IProduct[] = docs;
  return { response, meta: { ...rest } };
};

export const getProductsByCategory = async (categorieSlug: string, search: string = "", page = 1) => {
  const { docs, ...rest } = await GET(`api/products/by-slug/${categorieSlug}?name=${search}&page=${page}`);
  const response: IProduct[] = docs;
  return { response, meta: { ...rest } };
};

export const getProduct = async (id: string) => {
  return await GET(`api/products/${id}`);
};
