import { useEffect, useMemo, useState } from "react";
import type { IProduct } from "../../model/interfaces/IProduct";
import type { ICategorie } from "../../model/interfaces/ICategorie";
import { getProducts } from "../../services/ProductServices";
import { getCategories } from "../../services/CategoryService";
import { ProductCard } from "../ProductCard";
import { ALL_FILTER, FilterChips } from "../FilterChips";
import { Spinner } from "../Spinner";
import { useRescrollToHash } from "../../hooks/useRescrollToHash";

export const ProductsSection = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategorie[]>([]);
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [productsResult, categoriesResult] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);
        setProducts(productsResult.response);
        setCategories(categoriesResult.response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useRescrollToHash(!loading);

  const filteredProducts = useMemo(
    () =>
      activeCategory === ALL_FILTER
        ? products
        : products.filter((product) => product.category?.slug === activeCategory),
    [products, activeCategory]
  );

  return (
    <section className="section section--alt" id="productos">
      <div className="container">
        <header className="section-header">
          <div>
            <span className="eyebrow">Catálogo</span>
            <h2 className="section-title">Nuestros productos</h2>
            <p className="section-lead">
              Filtra por línea y abre cada producto para ver especificaciones y aplicaciones.
            </p>
          </div>
          {categories.length > 0 && (
            <FilterChips
              label="Filtrar productos por línea"
              options={categories.map((c) => ({ value: c.slug, label: c.title }))}
              value={activeCategory}
              onChange={setActiveCategory}
            />
          )}
        </header>

        {loading ? (
          <Spinner />
        ) : filteredProducts.length ? (
          <div className="cards-grid cards-grid--3">
            {filteredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <p className="empty-state">Aún no hay productos en esta línea.</p>
        )}
      </div>
    </section>
  );
};
