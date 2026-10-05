import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  LuArrowLeft,
  LuBox,
  LuCheck,
  LuMaximize2,
  LuMessageCircle,
  LuRecycle,
  LuShieldCheck,
  LuSun,
  LuTimer,
} from "react-icons/lu";
import type { IProduct } from "../model/interfaces/IProduct";
import { getProduct, getProductsByCategory } from "../services/ProductServices";
import { LexicalViewer } from "../components/LexicalViewer";
import { ImagesOverlay } from "../components/ImagesOverlay";
import { ProductCard } from "../components/ProductCard";
import { Image } from "../components/Image";
import { Spinner } from "../components/Spinner";
import { getProductTagline } from "../utils/product";
import { openWhatsApp } from "../utils/whatsapp";
import "../styles/ProductPage.css";

type FeatureKey = keyof NonNullable<IProduct["features"]>;

const FEATURES: Record<FeatureKey, { icon: ReactNode; text: (value: number | boolean) => string }> = {
  outside: { icon: <LuSun />, text: () => "Resistente a la intemperie" },
  reciclableMaterials: { icon: <LuRecycle />, text: () => "Materiales reciclados" },
  lowMaintenance: { icon: <LuTimer />, text: () => "Bajo mantenimiento" },
  warranty: { icon: <LuShieldCheck />, text: (value) => `${value} años de garantía` },
};

const RELATED_LIMIT = 3;

export const ProductPage = () => {
  const { id } = useParams({ from: "/products/details/$id" });
  const [product, setProduct] = useState<IProduct>();
  const [related, setRelated] = useState<IProduct[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      setStatus("loading");
      setRelated([]);
      try {
        const fetched = await getProduct(id);
        if (ignore) return;
        if (!fetched?.id) throw new Error("Product not found");
        setProduct(fetched);
        setStatus("ready");
        window.scrollTo({ top: 0 });

        if (fetched.category?.slug) {
          const { response } = await getProductsByCategory(fetched.category.slug);
          if (!ignore) setRelated(response.filter((p) => p.id !== fetched.id).slice(0, RELATED_LIMIT));
        }
      } catch (error) {
        console.error(error);
        if (!ignore) setStatus("error");
      }
    };
    load();
    return () => {
      ignore = true;
    };
  }, [id]);

  if (status === "loading") {
    return (
      <div className="product-page-state">
        <Spinner />
      </div>
    );
  }

  if (status === "error" || !product) {
    return (
      <div className="container product-page-state">
        <h1>No encontramos este producto</h1>
        <p>Puede que ya no esté disponible. Explora el catálogo completo.</p>
        <Link to="/" hash="productos" className="btn btn--primary">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <article className="product-page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to="/" hash="productos" className="breadcrumb-back">
            <LuArrowLeft /> Catálogo
          </Link>
          {product.category?.title && (
            <>
              <span aria-hidden>/</span>
              <span>{product.category.title}</span>
            </>
          )}
          <span aria-hidden>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="product-hero">
          <ProductGallery product={product} />
          <ProductSummary product={product} />
        </div>

        <div className="product-sections">
          {product.details?.root && (
            <section className="product-panel card">
              <h2>Detalle del producto</h2>
              <LexicalViewer content={product.details} />
            </section>
          )}
          <ProductSpecs product={product} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="section section--alt product-related">
          <div className="container">
            <header className="section-header">
              <div>
                <span className="eyebrow">{product.category?.title ?? "Catálogo"}</span>
                <h2 className="section-title">También te puede interesar</h2>
              </div>
              <Link to="/" hash="productos" className="btn btn--outline">
                Ver todo el catálogo
              </Link>
            </header>
            <div className="cards-grid cards-grid--3">
              {related.map((item) => (
                <ProductCard product={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

const ProductGallery = ({ product }: { product: IProduct }) => {
  const images = product.images ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const active = images[activeIndex];

  return (
    <div className="gallery">
      <button
        className="gallery-main"
        onClick={() => setOverlayOpen(true)}
        aria-label="Ver imágenes en pantalla completa"
      >
        {active && (
          <Image
            url={active.url || active.image.url}
            alt={product.name}
            viewTransitionName={activeIndex === 0 ? `product-image-${product.id}` : undefined}
          />
        )}
        <span className="gallery-expand">
          <LuMaximize2 />
        </span>
      </button>

      {(images.length > 1 || product.render?.url) && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image.id ?? index}
              className={index === activeIndex ? "is-active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Imagen ${index + 1}`}
            >
              <Image url={image.url || image.image.url} alt="" />
            </button>
          ))}
          {product.render?.url && (
            <button className="gallery-render" onClick={() => setOverlayOpen(true)}>
              <LuBox />
              <span>3D</span>
            </button>
          )}
        </div>
      )}

      {overlayOpen && images.length > 0 && (
        <ImagesOverlay
          images={images}
          render={product.render?.url ? product.render : undefined}
          handleClose={() => setOverlayOpen(false)}
        />
      )}
    </div>
  );
};

const ProductSummary = ({ product }: { product: IProduct }) => {
  const tagline = getProductTagline(product);
  const features = Object.entries(product.features ?? {}).filter(
    ([key, value]) => value && key in FEATURES
  ) as [FeatureKey, number | boolean][];

  return (
    <div className="product-summary">
      {product.category?.title && <span className="tag">{product.category.title}</span>}
      <h1>{product.name}</h1>
      {tagline && <p className="product-summary-tagline">{tagline}</p>}
      <p className="product-summary-description">{product.description}</p>

      {features.length > 0 && (
        <ul className="product-features">
          {features.map(([key, value]) => (
            <li key={key}>
              <span className="icon-box">{FEATURES[key].icon}</span>
              <span>{FEATURES[key].text(value)}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="product-cta">
        <Link
          to="/"
          hash="contacto"
          search={{ producto: product.name }}
          className="btn btn--primary"
        >
          Cotizar este producto
        </Link>
        <button
          className="btn btn--outline"
          onClick={() =>
            openWhatsApp(`Hola GREENKOL, me interesa el producto "${product.name}". ¿Me pueden dar más información?`)
          }
        >
          <LuMessageCircle /> Consultar por WhatsApp
        </button>
      </div>

      <ul className="product-assurances">
        <li>
          <LuCheck /> Visita técnica y medición en sitio
        </li>
        <li>
          <LuCheck /> Instalación por nuestro equipo
        </li>
        <li>
          <LuCheck /> Despacho en toda la costa caribe
        </li>
      </ul>
    </div>
  );
};

const ProductSpecs = ({ product }: { product: IProduct }) => {
  const dimensions = product.specifications?.dimentions;
  const rows = [
    { label: "Alto", value: dimensions?.y, unit: "cm" },
    { label: "Ancho", value: dimensions?.x, unit: "cm" },
    { label: "Profundidad", value: dimensions?.z, unit: "cm" },
    { label: "Peso", value: product.specifications?.weight, unit: "kg" },
  ].filter((row) => row.value);

  if (!rows.length) return null;

  return (
    <section className="product-panel card">
      <h2>Especificaciones</h2>
      <table className="specs-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>
                {row.value} {row.unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
