import { useAppNavigate } from "../hooks/useAppNavigate";
import HeroImage from "/HeroImage.webp";

import "../styles/ProductCategories.css";
import type { ICategorie } from "../model/interfaces/ICategorie";
import { getCategories } from "../services/CategoryService";
import { useEffect, useState } from "react";
import { Image } from "../components/Image";

export const ProductsCategoriesPage = () => {
  const [categories, setCategories] = useState<ICategorie[]>();
  const handleGetCategories = async () => {
    const { response } = await getCategories();
    setCategories(response);
  };
  useEffect(() => {
    handleGetCategories();
  }, []);
  return (
    <main className="productCategories">
      <header className="categorie">
        <img src={HeroImage} alt="" />
        <div />
        <span>Explora nuestros productos sostenibles</span>
      </header>

      <section className="productCategories-container">
        {categories &&
          categories.map((categorie) => (
            <CategoriesComponent categorie={categorie} key={categorie.slug} />
          ))}
      </section>
    </main>
  );
};

const CategoriesComponent = ({ categorie }: { categorie: ICategorie }) => {
  const { goTo } = useAppNavigate();
  return (
    <article
      className="categorie"
      onClick={() => goTo(`/products/${categorie.slug}`)}
    >
      <Image url={categorie.image.url} alt={categorie.image.alt || ""} />
      <span>{categorie.title}</span>
      <div />
    </article>
  );
};
