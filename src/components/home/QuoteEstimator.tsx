import { useState, type CSSProperties } from "react";
import { LuMessageCircle, LuRuler } from "react-icons/lu";
import { ESTIMATOR_LINES, type EstimatorLineId } from "../../utils/content";
import { openWhatsApp } from "../../utils/whatsapp";

type Scope = "installed" | "material";

const MIN_AREA = 5;
const MAX_AREA = 400;

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })
    .format(Math.round(value / 100_000) * 100_000)
    .replace(/\s/g, "");

export const QuoteEstimator = () => {
  const [lineId, setLineId] = useState<EstimatorLineId>(ESTIMATOR_LINES[0].id);
  const [area, setArea] = useState(40);
  const [scope, setScope] = useState<Scope>("installed");

  const line = ESTIMATOR_LINES.find((l) => l.id === lineId) ?? ESTIMATOR_LINES[0];
  const [minPrice, maxPrice] = line[scope];
  const range = `${formatCOP(minPrice * area)} – ${formatCOP(maxPrice * area)} COP`;
  const scopeLabel = scope === "installed" ? "material + instalación" : "solo material";
  const fill = ((area - MIN_AREA) / (MAX_AREA - MIN_AREA)) * 100;

  const handleConfirm = () =>
    openWhatsApp(
      `Hola GREENKOL, usé el estimador: ${line.label}, ${area} m², ${scopeLabel}. Rango estimado: ${range}. ¿Podemos agendar una visita técnica?`
    );

  return (
    <div className="quote-card card">
      <h3 className="quote-card-title">
        <LuRuler /> Estimador rápido
      </h3>
      <p className="quote-card-lead">
        Mueve el área y elige la línea para tener una idea de inversión. Es un rango orientativo;
        la propuesta final se confirma con visita técnica.
      </p>

      <div className="field">
        <label htmlFor="estimator-line">Línea de producto</label>
        <select
          id="estimator-line"
          className="input"
          value={lineId}
          onChange={(e) => setLineId(e.target.value as EstimatorLineId)}
        >
          {ESTIMATOR_LINES.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <div className="field-row">
          <label htmlFor="estimator-area">Área aproximada</label>
          <output htmlFor="estimator-area" className="estimator-area">
            {area} m²
          </output>
        </div>
        <input
          id="estimator-area"
          type="range"
          className="range"
          min={MIN_AREA}
          max={MAX_AREA}
          step={5}
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          style={{ "--fill": `${fill}%` } as CSSProperties}
        />
      </div>

      <div className="chips" role="group" aria-label="Alcance">
        <button
          className={`chip ${scope === "installed" ? "is-active" : ""}`}
          onClick={() => setScope("installed")}
          aria-pressed={scope === "installed"}
        >
          Material + instalación
        </button>
        <button
          className={`chip ${scope === "material" ? "is-active" : ""}`}
          onClick={() => setScope("material")}
          aria-pressed={scope === "material"}
        >
          Solo material
        </button>
      </div>

      <div className="estimator-result" aria-live="polite">
        <span>Rango estimado</span>
        <strong>{range}</strong>
        <button className="btn btn--primary btn--sm" onClick={handleConfirm}>
          <LuMessageCircle /> Confirmar por WhatsApp
        </button>
      </div>
    </div>
  );
};
