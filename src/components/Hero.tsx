import { Button } from "./Buttons";
import { useAppNavigate } from "../hooks/useAppNavigate";
import '../styles/Hero.css'


export const Hero = ({image}: {image: string}) => {
  const { goTo } = useAppNavigate();
  return (
    <section className="hero">
      <img src={image} className="hero-image" />
      <main className="hero-main">
        <h4>El futuro de la construcción Verde está aquí</h4>
        <span>
          Compuesto Innovadores de madera y plástico para un mañana sostenible
        </span>
        <div className="buttons">
          <Button
            type="primary"
            text="Cotizar"
            action={() => goTo("/contact")}
          />
          <Button
            type="secondary"
            text="Ver Productos"
            action={() => goTo("/products")}
          />
        </div>
      </main>
    </section>
  );
};
