import { getRouteApi } from "@tanstack/react-router";
import { HeroSection } from "../components/home/HeroSection";
import { WhyWpcSection } from "../components/home/WhyWpcSection";
import { ProductsSection } from "../components/home/ProductsSection";
import { ServicesSection } from "../components/home/ServicesSection";
import { ProjectsSection } from "../components/home/ProjectsSection";
import { AboutSection } from "../components/home/AboutSection";
import { QuoteSection } from "../components/home/QuoteSection";
import "../styles/Home.css";

const routeApi = getRouteApi("/");

export const HomePage = () => {
  const { producto } = routeApi.useSearch();

  return (
    <>
      <HeroSection />
      <WhyWpcSection />
      <ProductsSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <QuoteSection product={producto} />
    </>
  );
};
