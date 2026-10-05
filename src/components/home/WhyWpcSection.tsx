import type { ReactNode } from "react";
import { LuDroplets, LuHammer, LuRecycle, LuShieldCheck, LuSun, LuTimer } from "react-icons/lu";
import { REASONS, type ReasonIcon } from "../../utils/content";

const ICONS: Record<ReasonIcon, ReactNode> = {
  recycle: <LuRecycle />,
  droplets: <LuDroplets />,
  sun: <LuSun />,
  timer: <LuTimer />,
  shield: <LuShieldCheck />,
  hammer: <LuHammer />,
};

export const WhyWpcSection = () => (
  <section className="section">
    <div className="container">
      <header className="section-header">
        <div>
          <span className="eyebrow">Por qué WPC</span>
          <h2 className="section-title">
            La calidez de la madera, el desempeño del plástico reciclado
          </h2>
        </div>
      </header>

      <div className="reasons-grid">
        {REASONS.map((reason) => (
          <article className="reason card" key={reason.title}>
            <span className="icon-box">{ICONS[reason.icon]}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
