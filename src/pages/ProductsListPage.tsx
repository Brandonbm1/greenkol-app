import { Link, useParams } from "@tanstack/react-router";
import { IoArrowBack } from "react-icons/io5";
import "../styles/ProductList.css";
import { ProductCard } from "../components/ProductCard";
import type { IProduct } from "../model/interfaces/IProduct";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/ProductServices";
import { Spinner } from "../components/Spinner";

export const ProductListPage = () => {
  const { slug } = useParams({ from: "/products/$slug" });
  const formatTitle = (text: string) => text.split("-").join(" ");
  const [products, setProducts] = useState<IProduct[]>();
  // const [metaData, setMetaData] = useState();
  const [loading, setLoading] = useState(false);

  const handleGetProducts = async (categorySlug: string) => {
    setLoading(true);
    try {
      const { 
        response, 
        // meta 
      } = await getProductsByCategory(categorySlug);
      setProducts(response);
      // setMetaData(meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleGetProducts(slug);
  }, [slug]);

  return (
    <div className="productList">
      <header>
        <Link to={"/products"}>
          <IoArrowBack size={24} />
          <p>{formatTitle(slug)}</p>
        </Link>
      </header>
      {loading ? (
        <Spinner />
      ) : products && products.length ? (
        <main className="productListContainer">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </main>
      ) : (
        <div className="productListContainer-empty">
          <h4>
            No products for the category <b>{formatTitle(slug)}</b>
          </h4>
        </div>
      )}
    </div>
  );
};
