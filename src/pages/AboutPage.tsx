import HeroImage from "/HeroImage.png";
import { RiLeafLine } from "react-icons/ri";
import { Link } from "@tanstack/react-router";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineHandshake } from "react-icons/md";
import "../styles/AboutPage.css";

export const AboutPage = () => {
  const FUNDAMENTAL_VALUES = [
    {
      title: "Sostenibilidad Ambiental",
      description:
        "Nos comprometemos a reducir los residuos plásticos en las costas caribeñas, transformándolos en productos duraderos que protegen ecosistemas marinos y disminuyen la deforestación. Cada venta contribuye a mitigar la contaminación, como las 2.100 toneladas de microplásticos anuales del Río Magdalena.",
      icon: <RiLeafLine />,
    },
    {
      title: "Innovación Eficiente",
      description:
        "Desarrollamos soluciones de ensamblaje personalizadas y de bajo costo, optimizando recursos para ofrecer productos resistentes a la salinidad y humedad del Caribe, como decks para hoteles en Santa Marta.",
      icon: <GoLightBulb />,
    },
    {
      title: "Responsabilidad Social",
      description:
        "Apoyamos a comunidades recicladoras y pescadoras en Cartagena, Barranquilla y otras áreas, generando empleo inclusivo y fortaleciendo la economía local a través de alianzas",
      icon: <MdOutlineHandshake />,
    },
  ];
  return (
    <section className="aboutPage">
      <header>
        <div className=""></div>
        <img src={HeroImage} />
        <h3>Nuestro compromiso con la sostenibilidad</h3>
      </header>

      <main>
        <article>
          <h5>¿Quienes somos?</h5>
          <span>
            GreenKol es una startup innovadora con sede en la costa caribe de Colombia, dedicada a la venta y ensamblaje de productos de madera plástica sostenible para construcción, mobiliario urbano, decoración y soluciones arquitectónicas. Nacida en 2025, nuestra empresa transforma la manera en que se construye en entornos costeros, ofreciendo productos ecológicos resistentes a la humedad y salinidad, alineados con la economía circular. Con un enfoque en eficiencia y bajo costo, colaboramos con proveedores locales y comunidades recicladoras para reducir residuos plásticos en las playas del Caribe (e.g., 2.100 toneladas de microplásticos anuales en el Río Magdalena) y promover un futuro verde bajo el lema “Construye verde, construye bien”.
          </span>
        </article>
        <article>
          <h5>Nuestra Visión</h5>
          <span>
            Ser la empresa líder en soluciones de madera plástica en la costa caribe para 2030, reconocida por su impacto en la reducción del 100% de plásticos no reciclados en playas y ríos, y por impulsar el desarrollo sostenible en la región. Aspiramos a expandir nuestro modelo eficiente a otros mercados caribeños, contribuyendo a los objetivos nacionales de cero residuos y protección marina, como la Ley 2232/2022 y el liderazgo de Colombia en el Corredor Marino del Pacífico Oriental Tropical.
          </span>
        </article>
        <article>
          <h5>Nuestra Misión</h5>
          <span>
            Transformar la costa caribe de Colombia mediante la venta y ensamblaje de productos de madera plástica de alta calidad, promoviendo la sostenibilidad ambiental, la economía circular y el desarrollo económico local. Ofrecemos soluciones duraderas y personalizadas para construcción y turismo, reduciendo la contaminación plástica y apoyando comunidades recicladoras en ciudades como Cartagena, Barranquilla y Santa Marta
          </span>
        </article>
        <article>
          <h5>Valores Corporativos de GreenKol</h5>
          <span>
            Los valores corporativos de GreenKol reflejan su compromiso con la sostenibilidad, la eficiencia y el impacto positivo en la costa caribe de Colombia. Estos valores son prácticos, accionables y alineados con el eslogan “Construye verde, construye bien”, enfocándose en la venta y ensamblaje de madera plástica en un contexto de economía circular y desarrollo regional.
          </span>
        </article>
        <article>
          <h5>Nuestros valores fundamentales</h5>
          <section className="values">
            {FUNDAMENTAL_VALUES.map((value, index) => (
              <div key={`value-${index}`}>
                <div className="icon-container">{value.icon}</div>
                <p>{value.title}</p>
                <span>{value.description}</span>
              </div>
            ))}
          </section>
        </article>
      </main>
      <footer>
        <Link to="/products">Explorar nuestros productos sostenibles</Link>
      </footer>
    </section>
  );
};
