import { useState } from "react";
import { useAppNavigate } from "../hooks/useAppNavigate";
import type { IProduct } from "../model/interfaces/IProduct";
import { Image } from "./Image";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { goTo } = useAppNavigate();
  const [loaded, setLoaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `/products/details/${product.id}`;
    if (!document.startViewTransition) {
      return goTo(url);
    }
    document.startViewTransition(() => {
      window.location.href = url;
    });
  };

  return (
    <button onClick={handleClick} className="product">
      <div className={`img-wrapper${loaded ? " img-wrapper--loaded" : ""}`}>
        <Image
          url={`${product.images[0].image.url}`}
          alt={`mainImageFor-${product.name}`}
          viewTransitionName={`product-image-${product.id}`}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <p>{product.name}</p>
      <div className="tags">
        {product.tags &&
          product.tags.map(({ tag, id }) => {
            if (!tag) return;
            return <span key={`tag-${id}`}>{tag}</span>;
          })}
      </div>
    </button>
  );
};
