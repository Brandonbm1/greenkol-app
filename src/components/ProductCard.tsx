import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { IProduct } from "../model/interfaces/IProduct";
import { getProductCover, getProductTagline } from "../utils/product";
import { Image } from "./Image";
import "../styles/ProductCard.css";

export const ProductCard = ({ product }: { product: IProduct }) => {
  const [loaded, setLoaded] = useState(false);
  const tagline = getProductTagline(product);

  return (
    <article className="product-card card">
      <Link
        to="/products/details/$id"
        params={{ id: product.id }}
        className={`product-card-media ${loaded ? "is-loaded" : ""}`}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <Image
          url={getProductCover(product)}
          alt={product.name}
          viewTransitionName={`product-image-${product.id}`}
          onLoad={() => setLoaded(true)}
        />
        {product.category?.title && <span className="badge">{product.category.title}</span>}
      </Link>

      <div className="product-card-body">
        <h3>{product.name}</h3>
        {tagline && <p className="product-card-tagline">{tagline}</p>}
        <p className="product-card-description">{product.description}</p>

        <div className="product-card-actions">
          <Link
            to="/products/details/$id"
            params={{ id: product.id }}
            className="btn btn--primary btn--sm"
          >
            Ver detalles
          </Link>
          <Link
            to="/"
            hash="contacto"
            search={{ producto: product.name }}
            className="btn btn--outline btn--sm"
          >
            Cotizar
          </Link>
        </div>
      </div>
    </article>
  );
};
