import { SERVICES, WORK_STEPS } from "../../utils/content";
import { Accordion } from "../Accordion";

export const ServicesSection = () => (
  <section className="section" id="servicios">
    <div className="container split">
      <div>
        <span className="eyebrow">Servicios</span>
        <h2 className="section-title">Del levantamiento en obra a la entrega instalada</h2>
        <p className="section-lead">
          Acompañamos todo el proyecto: medimos, diseñamos, suministramos, instalamos y hacemos
          posventa. Un solo responsable, sin subcontratos improvisados.
        </p>

        <div className="steps card">
          <h3>Cómo trabajamos</h3>
          <ol>
            {WORK_STEPS.map((step, index) => (
              <li key={step}>
                <span className="steps-number">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Accordion
        defaultOpen={0}
        items={SERVICES.map((service) => ({
          title: service.title,
          content: (
            <>
              <p>{service.description}</p>
              <div className="chips services-tags">
                {service.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </>
          ),
        }))}
      />
    </div>
  </section>
);
