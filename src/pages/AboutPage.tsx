import HeroImage from "/HeroImage.png";
import { RiLeafLine } from "react-icons/ri";
import { Link } from "@tanstack/react-router";
import { GoLightBulb } from "react-icons/go";
import { MdOutlineHandshake } from "react-icons/md";
import "../styles/AboutPage.css";

export const AboutPage = () => {
  const FUNDAMENTAL_VALUES = [
    {
      title: "Sostenibilidad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <RiLeafLine />,
    },
    {
      title: "Innovación",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <GoLightBulb />,
    },
    {
      title: "Integridad",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
        </article>
        <article>
          <h5>Nuestra Visión</h5>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod.
          </span>
        </article>
        <article>
          <h5>Nuestra Misión</h5>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut.
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
