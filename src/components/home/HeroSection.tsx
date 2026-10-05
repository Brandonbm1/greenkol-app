import { Link } from "@tanstack/react-router";
import { LuArrowRight } from "react-icons/lu";
import HeroImage from "/HeroImage.webp";
import { HERO_STATS } from "../../utils/content";

export const HeroSection = () => (
  <section className="hero">
    <img src={HeroImage} alt="" className="hero-bg" fetchPriority="high" />
    <div className="hero-overlay" />

    <div className="container hero-content">
      <span className="hero-pill">Madera plástica · Colombia</span>
      <h1>El futuro de la construcción verde ya está en el Caribe</h1>
      <p>
        Diseñamos, suministramos y ensamblamos decks, mobiliario, fachadas y estructuras en
        compuesto de madera y plástico reciclado: resistentes a la humedad, la salinidad y el sol,
        sin lijado ni barniz.
      </p>

      <div className="hero-actions">
        <Link to="/" hash="contacto" className="btn btn--primary">
          Cotizar mi proyecto <LuArrowRight />
        </Link>
        <Link to="/" hash="productos" className="btn btn--ghost-light">
          Ver productos
        </Link>
      </div>

      <dl className="hero-stats">
        {HERO_STATS.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);
