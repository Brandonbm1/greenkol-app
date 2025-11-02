import { createFileRoute } from "@tanstack/react-router";
import { ProductsCategoriesPage } from "../../pages/ProductsCategoriesPage";

export const Route = createFileRoute("/products/")({
  component: ProductsCategoriesPage,
});
