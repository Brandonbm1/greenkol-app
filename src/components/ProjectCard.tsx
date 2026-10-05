import { Link } from "@tanstack/react-router";
import { LuMapPin } from "react-icons/lu";
import type { IProject } from "../model/interfaces/IProject";
import { getMajorMaterial, getProjectCover, getProjectDuration } from "../utils/project";
import { Image } from "./Image";
import "../styles/ProjectCard.css";

export const ProjectCard = ({ project }: { project: IProject }) => {
  const metrics = [
    { label: "Área", value: project.specifications?.dimentions?.area ? `${project.specifications.dimentions.area} m²` : "" },
    { label: "Material", value: getMajorMaterial(project) },
    { label: "Plazo", value: getProjectDuration(project.startedDate, project.releasedDate) },
  ].filter((metric) => metric.value);

  return (
    <article className="project-card card">
      <Link to="/projects/$id" params={{ id: project.id }} className="project-card-media">
        <Image
          url={getProjectCover(project)}
          alt={project.name}
          viewTransitionName={`project-image-${project.id}`}
        />
        {project.category && <span className="badge">{project.category}</span>}
      </Link>

      <div className="project-card-body">
        <Link to="/projects/$id" params={{ id: project.id }}>
          <h3>{project.name}</h3>
        </Link>
        {project.location && (
          <p className="project-card-location">
            <LuMapPin />
            {project.location}
          </p>
        )}
        <p className="project-card-description">{project.description}</p>

        {metrics.length > 0 && (
          <dl className="project-card-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
};
