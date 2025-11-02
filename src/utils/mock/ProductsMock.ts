import type { IProduct } from "../../model/interfaces/IProduct";
export const ProductsMock: IProduct[] = [
  {
    id: "1",
    name: "Silla Ecológica",
    mainImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Silla de exterior fabricada con materiales reciclados, resistente a la intemperie y de bajo mantenimiento.",
    tags: ["silla", "exterior", "reciclado", "mobiliario"],
    features: {
      warranty: 50,
      lowMaintenance: true,
      outside: true,
      reciclableMaterials: true,
    },
    details:
      "Asiento ergonómico, estructura compuesta y cojín opcional para mayor confort.",
    specifications: {
      dimentions: { x: 85, y: 80, z: 90 },
      weight: 18,
    },
  },
  {
    id: "2",
    name: "Set de Comedor para Patio (Moderno)",
    mainImage:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Mesa y sillas de diseño moderno pensado para exteriores: duradero y de bajo mantenimiento.",
    tags: ["comedor", "patio", "mesa", "sillas"],
    features: {
      warranty: 50,
      lowMaintenance: true,
      outside: true,
      reciclableMaterials: true,
    },
    details:
      "Estructura metálica con tablero compuesto resistente a UV y fácil de limpiar.",
    specifications: {
      dimentions: { x: 200, y: 100, z: 75 },
      weight: 65,
    },
  },
  {
    id: "3",
    name: "Macetero de Madera Reciclada",
    mainImage:
      "https://bunquer.cl/wp-content/uploads/2020/05/MACETERO-50X50-6.jpg",
    images: [
      "https://bunquer.cl/wp-content/uploads/2020/05/MACETERO-50X50-6.jpg",
      "https://bunquer.cl/wp-content/uploads/2020/05/MACETERO-50X50-6.jpg",
      "https://bunquer.cl/wp-content/uploads/2020/05/MACETERO-50X50-6.jpg",
    ],
    description:
      "Macetero ecológico fabricado con madera plástica reciclada, ideal para jardineras y balcones.",
    tags: ["macetero", "jardinería", "reciclado", "decoración"],
    features: {
      warranty: 50,
      lowMaintenance: true,
      outside: true,
      reciclableMaterials: true,
    },
    details: "Diseño modular, resistencia a humedad y fácil de montar.",
    specifications: {
      dimentions: { x: 100, y: 40, z: 45 },
      weight: 22,
    },
  },
  {
    id: "4",
    name: "Sillón Compuesto para Exterior",
    mainImage:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Sillón con estructura de material compuesto y cojín, pensado para zonas verdes y terrazas.",
    tags: ["sillón", "exterior", "confort", "compuesto"],
    features: {
      warranty: 50,
      lowMaintenance: true,
      outside: true,
      reciclableMaterials: true,
    },
    details: "Cojín desenfundable impermeable y base antideslizante.",
    specifications: {
      dimentions: { x: 85, y: 95, z: 90 },
      weight: 28,
    },
  },
  {
    id: "5",
    name: "Camastro / Tumbona Reciclada",
    mainImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Camastro ergonómico fabricado con materiales reciclados, ideal para piscinas y terrazas.",
    tags: ["camastro", "tumbona", "relax", "reciclado"],
    features: {
      warranty: 50,
      lowMaintenance: true,
      outside: true,
      reciclableMaterials: true,
    },
    details:
      "Respaldo ajustable en múltiples posiciones y superficie texturada antideslizante.",
    specifications: {
      dimentions: { x: 190, y: 70, z: 35 },
      weight: 34,
    },
  },
];
