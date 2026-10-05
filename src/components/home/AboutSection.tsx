import { FAQS, VALUES } from "../../utils/content";
import { Accordion } from "../Accordion";

export const AboutSection = () => (
  <section className="section" id="nosotros">
    <div className="container split">
      <div>
        <span className="eyebrow">Nosotros</span>
        <h2 className="section-title">Una startup caribeña que convierte plástico en obra</h2>
        <div className="about-copy">
          <p>
            GREENKOL nació en 2025 en la costa caribe de Colombia para la venta y ensamblaje de
            productos de madera plástica sostenible: construcción, mobiliario urbano, decoración y
            soluciones arquitectónicas. Trabajamos con proveedores locales y comunidades
            recicladoras para reducir los residuos plásticos que llegan a playas y ríos, como las
            2.100 toneladas anuales de microplásticos del Río Magdalena.
          </p>
          <p>
            Nuestra misión es transformar la construcción y el turismo en Colombia con productos de madera plástica duraderos, sostenibles y personalizados, ofreciendo soluciones de calidad para hogares, empresas y proyectos en todo el país.
          </p>
          <p>
            Para 2030, queremos ser una empresa líder en madera plástica en la Costa Caribe Colombiana, reconocida por la innovación, la calidad de nuestros productos y nuestro compromiso con la sostenibilidad.

          </p>
        </div>

        <div className="values-grid">
          {VALUES.map((value) => (
            <article className="value card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="faq-title">Preguntas frecuentes</h3>
        <Accordion items={FAQS.map((faq) => ({ title: faq.question, content: <p>{faq.answer}</p> }))} />
      </div>
    </div>
  </section>
);
