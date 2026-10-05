import type { IProduct } from "../model/interfaces/IProduct";

export const getProductCover = (product: IProduct) => {
  const image = product.images?.[0] ?? product.mainImage;
  return image ? image.url || image.image?.url : "";
};

export const getProductTagline = (product: IProduct) =>
  (product.tags ?? [])
    .map(({ tag }) => tag)
    .filter(Boolean)
    .join(" · ");
