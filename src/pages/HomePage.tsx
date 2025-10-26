import "../styles/Home.css";
import { Hero } from "../components/Hero";
import { HomeInfo } from "../utils/mock/index";
import { TbTool } from "react-icons/tb";
import { RiLeafLine } from "react-icons/ri";
import { FiShield } from "react-icons/fi";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Buttons";
import { useAppNavigate } from "../hooks/useAppNavigate";

export const HomePage = () => {
  const { goTo } = useAppNavigate();
  const REASONS = [
    {
      icon: <RiLeafLine />,
      title: "Materiales ecológicos",
      description:
        "Fabricados con materiales reciclados, nuestros productos son una opción sostenible para sus necesidades de construcción.",
    },
    {
      icon: <FiShield />,
      title: "Durabilidad duradera",
      description:
        "Resistente a la putrefacción, la descomposición y los insectos, lo que garantiza que su inversión dure muchos años.",
    },
    {
      icon: <TbTool />,
      title: "Mantenimiento mínimo",
      description:
        "Disfrute de la belleza de la madera sin necesidad de un mantenimiento constante. Nuestros composites son fáciles de limpiar y mantener.",
    },
  ];
  return (
    <>
      <Hero image={HomeInfo.heroImage} />
      <section className="homeInfo">
        <header className="homeInfo-whyUs">
          <h4>¿Por qué elegirnos?</h4>
          <span>
            Nuestros compuestos de madera y plástico ofrecen una combinación
            única de estética natural y tecnología de vanguardia. Nos dedicamos
            a brindar soluciones de construcción sostenibles sin comprometer la
            calidad ni el diseño.
          </span>
        </header>
        <main>
          <section className="homeInfo-reasons">
            {REASONS.map((reason) => (
              <article className="homeInfo-reason">
                <span className="icon">{reason.icon}</span>
                <p>{reason.title}</p>
                <span>{reason.description}</span>
              </article>
            ))}
          </section>
          <section className="homeInfo-projects">
            <header>
              <h3>Nuestros Proyectos</h3>
            </header>
            <main>
              {HomeInfo.projects.slice(0, 3).map((project) => (
                <ProjectCard project={project} />
              ))}
            </main>
          </section>
          <section className="homeInfo-start">
              <h2>
                Inicia tu Proyecto <br /> Hoy
              </h2>
              <p>¡Vamos a consturir algo increible!</p>
              <Button text="Cotizar" type="primary" action={() => goTo('/contact')}/>
          </section>
        </main>
      </section>
    </>
  );
};
