import type { IProject } from "../model/interfaces/IProject";
import "../styles/ProjectCard.css";
import { Image } from "./Image";

export const ProjectCard = ({
  project,
}: {
  project: IProject;
}) => {
  return (
    <article className="projectCard">
      <header>
        <Image
          url={project.images[0] ? project.images[0].image.url : ''}
          alt={`mainImageFor-${project.name}`}
          viewTransitionName={`project-image-${project.id}`}
        />
      </header>
      <section>
        <h6>{project.name}</h6>
        <span>{project.description}</span>
      </section>
    </article>
  );
};
