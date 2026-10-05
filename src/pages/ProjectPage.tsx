import { Link, useParams } from "@tanstack/react-router";
import moment from "moment";
import { LuArrowLeft, LuCheck, LuMapPin } from "react-icons/lu";
import type { IProject } from "../model/interfaces/IProject";
import { useGetData } from "../hooks/useGetData";
import { Image } from "../components/Image";
import { Spinner } from "../components/Spinner";
import { getMajorMaterial, getProjectCover, getProjectDuration } from "../utils/project";
import "../styles/ProjectPage.css";

export const ProjectPage = () => {
  const { id } = useParams({ from: "/projects/$id" });
  const { data: project, loading } = useGetData<IProject>(`api/projects/${id}`, [id]);

  if (loading || !project) {
    return (
      <div className="project-page-state">
        <Spinner />
      </div>
    );
  }

  const specifications = [
    { label: "Finalizado", value: project.releasedDate ? moment(project.releasedDate).format("MMM YYYY") : "" },
    { label: "Área", value: project.specifications?.dimentions?.area ? `${project.specifications.dimentions.area} m²` : "" },
    { label: "Material", value: getMajorMaterial(project) },
    { label: "Plazo", value: getProjectDuration(project.startedDate, project.releasedDate) },
  ].filter((spec) => spec.value);

  const story = [
    { label: "El desafío", content: project.userDetails },
    { label: "La solución", content: project.projectSolution },
    { label: "Resultados e impacto", content: project.projectResults },
  ].filter((block) => block.content);

  const materials = (project.specifications?.materials ?? []).filter((m) => m.type !== "hidden");
  const gallery = (project.images ?? []).slice(1);

  return (
    <article className="project-page">
      <header className="project-cover">
        <Image
          url={getProjectCover(project)}
          alt={project.name}
          viewTransitionName={`project-image-${project.id}`}
        />
        <div className="project-cover-overlay" />
        <div className="container project-cover-content">
          <Link to="/" hash="proyectos" className="project-back">
            <LuArrowLeft /> Proyectos
          </Link>
          {project.category && <span className="badge">{project.category}</span>}
          <h1>{project.name}</h1>
          {project.location && (
            <p className="project-location">
              <LuMapPin /> {project.location}
            </p>
          )}
        </div>
      </header>

      <div className="container project-body">
        <div className="project-main">
          <section>
            <span className="eyebrow">Sobre el proyecto</span>
            <p className="project-lead">{project.description}</p>
          </section>

          {story.map((block, index) => (
            <section className="project-story" key={block.label}>
              <span className="project-story-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{block.label}</h2>
                <p>{block.content}</p>
              </div>
            </section>
          ))}

          {gallery.length > 0 && (
            <div className="project-gallery">
              {gallery.map((image, index) => (
                <Image key={image.id ?? index} url={image.url || image.image.url} alt={`${project.name} ${index + 2}`} />
              ))}
            </div>
          )}
        </div>

        <aside className="project-aside card">
          <h2>Ficha técnica</h2>
          <dl className="project-specs">
            {specifications.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>

          {materials.length > 0 && (
            <>
              <h3>Materiales utilizados</h3>
              <ul className="project-materials">
                {materials.map((material) => (
                  <li key={material.name}>
                    <LuCheck /> {material.name}
                  </li>
                ))}
              </ul>
            </>
          )}

          <Link to="/" hash="contacto" className="btn btn--primary btn--block">
            Quiero un proyecto así
          </Link>
        </aside>
      </div>
    </article>
  );
};
