import { GET } from "../hooks/useFetch";
import type { IProduct } from "../model/interfaces/IProduct";

export const getProducts = async () => {
  const { docs, ...rest } = await GET(`api/products`);
  const response: IProduct[] = docs;
  return { response, meta: { ...rest } };
};

export const getProductsByCategory = async (categorieSlug: string) => {
  const { docs, ...rest } = await GET(`api/products/by-slug/${categorieSlug}`);
  const response: IProduct[] = docs;
  return { response, meta: { ...rest } };
};

export const getProduct = async (id: string) => {
  return await GET(`api/products/${id}`);
};
