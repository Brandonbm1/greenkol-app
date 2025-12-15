import { Link } from "@tanstack/react-router";
import { Image } from "../components/Image";
import { useGetData, type PaginatedResponse } from "../hooks/useGetData";
import type { IProject } from "../model/interfaces/IProject";
import { FaRegCheckCircle } from "react-icons/fa";

import "../styles/ProjectListPage.css";
import moment from "moment";
export const ProjectsListPage = () => {
  const { data } = useGetData<PaginatedResponse<IProject>>("api/projects");
  
  const getMajorMaterial = (project: IProject) => {
    const material = (project.specifications.materials || []).filter((m) => m.type === "major")[0]
    if(!material) {
      return ""
    }
    return (material.shortName || "")
  }

  return (
    <div className="project-list">
      <header>
        <h2>Nuestros Proyectos</h2>
        <p>
          Explora cómo combinamos innovación, sostenibilidad y diseño para crear
          espacios que respetan el medio ambiente
        </p>
      </header>
      <main>
        {data &&
          data.docs.map((project) => (
            <section key={project.id}>
              <aside>
                <Link to={`/projects/${project.id}`}>
                  <Image
                    url={project.images[0].image.url}
                    alt={project.images[0].alt || ""}
                    width={350}
                  />
                </Link>
              </aside>
              <article>
                <small>
                  Finalizado: {moment(project.releasedDate).format("MMM YYYY")}
                </small>
                <main>
                  <Link to={`/projects/${project.id}`}>
                    <h4>{project.name}</h4>
                  </Link>
                  <p>{project.description}</p>
                </main>
                <footer>
                  <section>
                    <FaRegCheckCircle  />
                    <div>
                      <small>AREA</small>
                      <span>{project.specifications.dimentions.area}m²</span>
                    </div>
                  </section>
                  <section>
                    <FaRegCheckCircle />
                    <div>
                      <small>MATERIAL</small>
                      <span>{getMajorMaterial(project)}</span>
                    </div>
                  </section>
                </footer>
              </article>
            </section>
          ))}
      </main>
    </div>
  );
};
