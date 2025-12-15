import { Link, useParams } from "@tanstack/react-router";
import type { IProject } from "../model/interfaces/IProject";
import { IoArrowBack } from "react-icons/io5";
import { useGetData } from "../hooks/useGetData";
import { Image } from "../components/Image";
import "../styles/ProjectPage.css";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";
import type { ReactNode } from "react";
import { CiCircleCheck } from "react-icons/ci";

export const ProjectPage = () => {
  const { id } = useParams({ from: "/projects/$id" });

  const { data: project } = useGetData<IProject>(`api/projects/${id}`);
  if (!project) return;

  const getTimeDuration = (start?: string, end?: string) => {
    if (!start || !end) {
      return { timeDuration: 0, unit: "Días" };
    }
    const startDate = moment(start);
    const endDate = moment(end);

    const units: {
      unit: "days" | "weeks" | "months";
      label: string;
      max: number;
    }[] = [
      {
        unit: "days",
        label: "Dias",
        max: 15,
      },
      { unit: "weeks", label: "Semanas", max: 10 },
      {
        unit: "months",
        label: "Meses",
        max: Infinity,
      },
    ];
    let unitSelected = "";
    let timeDuration = 0;

    for (const { unit, label, max } of units) {
      const duration = endDate.diff(startDate, unit);
      if (duration <= max) {
        unitSelected = label;
        timeDuration = duration;
        break;
      }
    }

    return { timeDuration, unit: unitSelected };
  };

  const { timeDuration, unit } = getTimeDuration(
    project.startedDate,
    project.releasedDate
  );
  const releasedDate = moment(project.releasedDate);

  const getPrincipalMaterial = () => {
    const principalMaterial = project.specifications.materials.filter(
      (m) => m.type === "major"
    )[0];
    if (!principalMaterial) {
      return "";
    }
    return principalMaterial.shortName;
  };

  const specifications: {
    label: string;
    value: string | number;
    icon?: ReactNode;
  }[] = [
    {
      label: "Fecha",
      value: releasedDate.format("MMM YYYY"),
      icon: <FaRegCalendarAlt />,
    },
    {
      label: "Area",
      value: project.specifications.dimentions.area,
    },
    {
      label: "Material",
      value: getPrincipalMaterial(),
    },
    {
      label: "Tiempo",
      value: `${timeDuration} ${unit}`,
    },
  ];
  return (
    <section className="project-details">
      <nav>
        <Link to={"/projects"}>
          <IoArrowBack size={24} />
          <p>Volver a Proyectos</p>
        </Link>
      </nav>
      <header>
        <Image url={project.images[0].image.url} alt={project.name} />
        <h3>{project.name}</h3>
        <div />
      </header>
      <main>
        <section className="info">
          <h4>Sobre el Proyecto</h4>
          <p>{project.description}</p>
        </section>
        <div>
          <section className="details">
            <article>
              <h5>
                <span>01</span>
                El Desafío
              </h5>
              <span>{project.userDetails}</span>
            </article>
            <article>
              <h5>
                <span className="success">02</span>
                La Solución
              </h5>
              <span>{project.projectSolution}</span>
            </article>
            <article className="results">
              <h5>Resultados e Impacto</h5>
              <span>{project.projectResults}</span>
            </article>
          </section>
          <section className="specfication">
            <h6>Ficha Técnica</h6>
            <aside>
              {specifications.map(({ label, value, icon }, index) => (
                <article key={index}>
                  <span>{label}</span>
                  <p>
                    {icon} {value}
                  </p>
                </article>
              ))}
            </aside>
            <footer>
              <h6>Materiales Utilizados</h6>
              <div>
                {(project.specifications.materials || []).map(
                  (material, index) => {
                    return (
                      <article key={index}>
                        <CiCircleCheck />
                        <span>{material.name}</span>
                      </article>
                    );
                  }
                )}
              </div>
            </footer>
          </section>
        </div>
      </main>
    </section>
  );
};
