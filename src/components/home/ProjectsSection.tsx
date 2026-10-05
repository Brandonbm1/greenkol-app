import { useEffect, useMemo, useState } from "react";
import type { IProject } from "../../model/interfaces/IProject";
import { getProjects } from "../../services/ProjectServices";
import { ProjectCard } from "../ProjectCard";
import { ALL_FILTER, FilterChips } from "../FilterChips";
import { Spinner } from "../Spinner";
import { useRescrollToHash } from "../../hooks/useRescrollToHash";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [activeCategory, setActiveCategory] = useState(ALL_FILTER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const { response } = await getProjects();
        setProjects(response.filter((project) => project.importance !== "hidden"));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useRescrollToHash(!loading);

  // Filters only appear once projects carry a category in the CMS
  const categories = useMemo(
    () => [...new Set(projects.map((p) => p.category).filter((c): c is string => !!c))],
    [projects]
  );

  const filteredProjects =
    activeCategory === ALL_FILTER
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section section--alt" id="proyectos">
      <div className="container">
        <header className="section-header">
          <div>
            <span className="eyebrow">Proyectos</span>
            <h2 className="section-title">Nuestros proyectos</h2>
            <p className="section-lead">
              Innovación, sostenibilidad y diseño en espacios que respetan el medio ambiente.
            </p>
          </div>
          {categories.length > 0 && (
            <FilterChips
              label="Filtrar proyectos por tipo"
              options={categories.map((c) => ({ value: c, label: c }))}
              value={activeCategory}
              onChange={setActiveCategory}
            />
          )}
        </header>

        {loading ? (
          <Spinner />
        ) : filteredProjects.length ? (
          <div className="cards-grid cards-grid--2">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        ) : (
          <p className="empty-state">Muy pronto compartiremos nuestros proyectos.</p>
        )}
      </div>
    </section>
  );
};
