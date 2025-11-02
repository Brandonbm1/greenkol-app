import { Link } from "@tanstack/react-router";
import type { IProduct } from "../model/interfaces/IProduct";
import { Image } from "./Image";

export const ProductCard = ({ product }: { product: IProduct }) => {
  console.log(product)
  return (
    <Link to={`/products/details/${product.id}`} className="product">
      <Image
        url={`${product.images[0].image.url}`}
        alt={`mainImageFor-${product.name}`}
      />
      <p>{product.name}</p>
      {/* <div className="tags">
        {product.tags &&
          product.tags.map((tag, index) => (
            <span key={`tag-${index}`}>{tag}</span>
          ))}
      </div> */}
    </Link>
  );
};
