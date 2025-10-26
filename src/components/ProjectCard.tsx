import "../styles/ProjectCard.css"

export const ProjectCard = ({ project }: { project: any }) => {
  return (
    <article className="projectCard">
      <header>
        <img src={project.image} alt={`image-from-${project.title}`} />
      </header>
      <section>
        <h6>{project.title}</h6>
        <span>{project.description}</span>
      </section>
    </article>
  );
};
