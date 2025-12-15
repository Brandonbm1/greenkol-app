import "../styles/Home.css";
import { Hero } from "../components/Hero";
import { TbTool } from "react-icons/tb";
import { RiLeafLine } from "react-icons/ri";
import { FiShield } from "react-icons/fi";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Buttons";
import { useAppNavigate } from "../hooks/useAppNavigate";
import { useEffect, useState } from "react";
import { getProjectsHomeScreen } from "../services/ProjectServices";
import type { IProject } from "../model/interfaces/IProject";
import HeroImage from '/HeroImage.webp'
import { FaArrowRight } from "react-icons/fa6";

export const HomePage = () => {
  const { goTo } = useAppNavigate();
  const [projects, setProjects] = useState<IProject[] | []>([]);
  const handleGetProjects = async () => {
    const { response } = await getProjectsHomeScreen();
    setProjects(response);
  };

  useEffect(() => {
    handleGetProjects();
  }, []);
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
      <Hero image={HeroImage} />
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
            {REASONS.map((reason, index) => (
              <article className="homeInfo-reason" key={`reason-${index}`}>
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
              {projects && projects.slice(0, 3).map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </main>
            <footer>
              <Button
                text="Ver Más"
                type="primary"
                icon={<FaArrowRight />}
                action={() => goTo("/projects")}
              />
            </footer>
          </section>
          <section className="homeInfo-start">
            <h2>
              Inicia tu Proyecto <br /> Hoy
            </h2>
            <p>¡Vamos a consturir algo increible!</p>
            <Button
              text="Cotizar"
              type="primary"
              action={() => goTo("/contact")}
            />
          </section>
        </main>
      </section>
    </>
  );
};
