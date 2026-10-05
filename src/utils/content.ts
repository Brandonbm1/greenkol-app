// Static landing copy. Dynamic data (products, categories, projects) comes from the CMS.

export const NAV_SECTIONS = [
  { id: "productos", label: "Productos" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "nosotros", label: "Nosotros" },
  { id: "contacto", label: "Contacto" },
] as const;

export type SectionId = (typeof NAV_SECTIONS)[number]["id"];

export const HERO_STATS = [
  // { value: "+18 t", label: "Plástico reciclado transformado" },
  { value: "25+", label: "Años de vida útil estimada" },
  { value: "0", label: "Barnices y pinturas requeridos" },
  { value: "100 %", label: "Proyectos en la costa caribe" },
];

export type ReasonIcon = "recycle" | "droplets" | "sun" | "timer" | "shield" | "hammer";

export const REASONS: { icon: ReasonIcon; title: string; description: string }[] = [
  {
    icon: "recycle",
    title: "Materiales ecológicos",
    description:
      "Fabricados con plástico recuperado en playas y ríos del Caribe junto a comunidades recicladoras.",
  },
  {
    icon: "droplets",
    title: "Resistente a humedad y sal",
    description:
      "No se pudre, no se hincha y no le entran termitas: pensada para clima costero.",
  },
  {
    icon: "sun",
    title: "Estable al sol",
    description: "Pigmentos protegidos contra rayos UV para conservar el color por años.",
  },
  {
    icon: "timer",
    title: "Mantenimiento mínimo",
    description: "Solo agua y jabón. Sin lijar, sin barnizar, sin pintar cada temporada.",
  },
  {
    icon: "shield",
    title: "Garantía escrita",
    description: "Respaldo de material e instalación con soporte posventa directo.",
  },
  {
    icon: "hammer",
    title: "Ensamblaje propio",
    description: "Equipo local de instalación: un solo responsable de principio a fin.",
  },
];

export const SERVICES = [
  {
    title: "Asesoría y diseño técnico",
    description:
      "Visitamos el sitio, medimos y entregamos propuesta con despiece, planos de instalación y estimación de materiales.",
    tags: ["Visita técnica y levantamiento", "Render y planos de detalle", "Cálculo de cantidades"],
  },
  {
    title: "Suministro de materiales",
    description:
      "Perfiles, tablones, clips, rastreles y accesorios en stock, con despachos a toda la costa caribe.",
    tags: ["Stock permanente", "Muestrario de tonos", "Despacho a obra"],
  },
  {
    title: "Ensamblaje e instalación",
    description:
      "Equipo propio de instalación para decks, fachadas, mobiliario y estructuras, con entrega limpia y garantía escrita.",
    tags: ["Estructura base", "Instalación de tablones", "Acabados y remates"],
  },
  {
    title: "Proyectos a medida",
    description:
      "Mobiliario, fachadas, pérgolas y pasarelas diseñadas para tu espacio, tu estilo y tu presupuesto.",
    tags: ["Mobiliario urbano", "Fachadas y celosías", "Pasarelas y muelles"],
  },
  {
    title: "Mantenimiento y posventa",
    description:
      "Revisiones periódicas, reposición de piezas y acompañamiento durante la vigencia de la garantía.",
    tags: ["Revisión anual", "Reposición de piezas", "Soporte directo"],
  },
];

export const WORK_STEPS = [
  "Contacto y necesidad: nos cuentas qué quieres construir.",
  "Visita técnica y medidas en sitio (o planos que nos envíes).",
  "Propuesta con despiece, tonos, plazos e inversión.",
  "Fabricación, despacho e instalación por nuestro equipo.",
  "Entrega, garantía escrita y seguimiento posventa.",
];

export const VALUES = [
  { title: "Sostenibilidad ambiental", description: "Cada venta reduce plástico en el mar." },
  { title: "Innovación eficiente", description: "Soluciones a medida y de bajo costo." },
  { title: "Responsabilidad social", description: "Empleo local e inclusivo en la región." },
];

export const FAQS = [
  {
    question: "¿Qué es la madera plástica (WPC)?",
    answer:
      "Es un compuesto de plástico reciclado y fibras de madera. Se ve y se trabaja como madera, pero no se pudre, no le entran termitas y no necesita pintura ni barniz.",
  },
  {
    question: "¿Resiste el clima del Caribe?",
    answer:
      "Sí. Está formulada para humedad alta, brisa salina y sol intenso, condiciones donde la madera tradicional falla en pocos años.",
  },
  {
    question: "¿Cuánto dura y qué mantenimiento necesita?",
    answer:
      "Más de 25 años de vida útil estimada. El mantenimiento es lavado con agua, jabón neutro y cepillo suave.",
  },
  {
    question: "¿Hacen envíos e instalación fuera de Santa Marta?",
    answer:
      "Sí. Atendemos toda la costa caribe, incluyendo Barranquilla, Cartagena y municipios cercanos. Para otras zonas, consúltanos.",
  },
  {
    question: "¿Cómo se cotiza un proyecto?",
    answer:
      "Con las medidas aproximadas del área damos un rango de inversión el mismo día; luego confirmamos con visita técnica y propuesta formal.",
  },
];

/**
 * Reference prices in COP per m², used only by the quick estimator.
 * The final proposal is always confirmed after a technical visit.
 */
export const ESTIMATOR_LINES = [
  { id: "deck", label: "Deck", material: [240_000, 310_000], installed: [330_000, 420_000] },
  { id: "mobiliario-urbano", label: "Mobiliario urbano", material: [260_000, 340_000], installed: [350_000, 450_000] },
  { id: "mobiliario-hogar", label: "Mobiliario hogar", material: [250_000, 330_000], installed: [340_000, 440_000] },
  { id: "arquitectura", label: "Arquitectura", material: [287_500, 367_500], installed: [380_000, 480_000] },
] as const;

export type EstimatorLineId = (typeof ESTIMATOR_LINES)[number]["id"];
