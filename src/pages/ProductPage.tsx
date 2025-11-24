import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import type { IProduct } from "../model/interfaces/IProduct";
import { IoArrowBack } from "react-icons/io5";
import { getProduct } from "../services/ProductServices";
import "../styles/ProductPage.css";
import { ImageCarrousel } from "../components/ImageCarrousel";
import { ImagesOverlay } from "../components/ImagesOverlay";
import { MdOutlineWbSunny, MdRecycling } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BsTools } from "react-icons/bs";

export const ProductPage = () => {
  const { id } = useParams({ from: "/products/details/$id" });
  const [product, setProduct] = useState<IProduct>();
  const [imageModalOpenned, setImageModalOpenned] = useState(false);
  const handleGetProduct = async (id: string) => {
    const fetchedProduct = await getProduct(id);
    setProduct(fetchedProduct);
  };
  useEffect(() => {
    handleGetProduct(id);
  }, [id]);

  if (!product) {
    return;
  }

  return (
    <main className="product-detail">
      <header className="product-header">
        <Link to={"/products"}>
          <IoArrowBack size={24} />
        </Link>
        <p>{product.name}</p>
      </header>
      <section className="product-info">
        <article className="product-info-image">
          <ImageCarrousel
            images={product.images}
            name={product.name}
            autoMove={true}
            handleOpenModal={() => setImageModalOpenned(true)}
            viewTransitionName={`product-image-${product.id}`}
          />
        </article>
        <article className="product-info-details">
          <header>
            <h4>{product.name}</h4>
            <small>{product.description}</small>
          </header>
          <section className="product-info-features">
            {product.features &&
              Object.entries(product.features).map(([key, value], index) => (
                <ProductFeature
                  label={key}
                  value={value}
                  key={`${key}-${index}`}
                />
              ))}
          </section>
          <ProductDetails product={product} />
        </article>
      </section>
      {imageModalOpenned && (
        <ImagesOverlay
          images={product.images}
          render={product.render}
          handleClose={() => setImageModalOpenned(false)}
        />
      )}
    </main>
  );
};

const ProductFeature = ({
  label,
  value,
}: {
  label: string;
  value: boolean | number;
}) => {
  if (!value) return;

  const KEYS_OBJECTS: { [key: string]: { icon: ReactNode; text: string } } = {
    warranty: {
      icon: <LuShield />,
      text: `${value} años de Garantia`,
    },
    lowMaintenance: {
      icon: <BsTools />,
      text: "Bajo Mantenimiento",
    },
    outside: {
      icon: <MdOutlineWbSunny />,
      text: "Resistente a la interperie",
    },
    reciclableMaterials: {
      icon: <MdRecycling />,
      text: "Materiales reciclados",
    },
  };
  const feature = KEYS_OBJECTS[label];
  return (
    <div className="product-feature">
      <span className="product-feature-icon">{feature.icon}</span>
      <span className="product-feature-text">{feature.text}</span>
    </div>
  );
};

const ProductDetails = ({ product }: { product: IProduct }) => {
  const VALID_SECTIONS: {
    [key: string]: {
      label: string;
      content: string | typeof product.specifications;
    };
  } = {
    details: {
      label: "Detalle",
      content: product.details,
    },
    specifications: {
      label: "Especificaciones",
      content: product.specifications,
    },
  };
  const [activeSection, setActiveSection] = useState(VALID_SECTIONS["details"]);
  return (
    <section className="product-deatils">
      <header>
        {Object.entries(VALID_SECTIONS).map(([label, value], index) => (
          <button
            key={index}
            onClick={() => setActiveSection(VALID_SECTIONS[label])}
            className={activeSection.label === value.label ? "active" : ""}
          >
            {value.label}
          </button>
        ))}
      </header>
      <main>
        {activeSection.label === VALID_SECTIONS['specifications'].label && typeof activeSection.content !== 'string' ? (
          <section>
            <aside className="labels">
              <span>Alto:</span>
              <span>Ancho:</span>
              <span>Profundidad:</span>
              <span>Peso:</span>
            </aside>
            <aside className="values">
              <span>{activeSection.content.dimentions.y}cm</span>
              <span>{activeSection.content.dimentions.x}cm</span>
              <span>{activeSection.content.dimentions.z}cm</span>
              <span>{activeSection.content.weight}kg</span>
            </aside>
          </section>
        ) : (
          <p>{typeof activeSection.content === 'string' && activeSection.content}</p>
        )}
      </main>
    </section>
  );
};
