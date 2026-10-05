// import { QuoteEstimator } from "./QuoteEstimator";
import { QuoteForm } from "./QuoteForm";

export const QuoteSection = ({ product }: { product?: string }) => (
  <section className="section section--alt" id="contacto">
    <div className="container">
      <header className="section-header">
        <div>
          <span className="eyebrow">Cotiza</span>
          <h2 className="section-title">
            Inicia tu proyecto <span className="text-accent">hoy</span>
          </h2>
          <p className="section-lead">
            ¡Vamos a construir algo increíble! Estima tu inversión y envíanos los detalles.
          </p>
        </div>
      </header>

      <div className="quote-grid">
        {/* <QuoteEstimator /> */}
        <QuoteForm initialProjectType={product} />
      </div>
    </div>
  </section>
);
