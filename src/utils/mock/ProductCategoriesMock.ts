import type { ICategorie } from '../../model/interfaces/ICategorie';
import HeroImage from '/HeroImage.png'

export const ProductCategoriesMock: ICategorie[] = [
  {
    image: HeroImage,
    title: "Terrazas y suelos",
    id: "1",
    slug: "terrazas-y-suelos",
  },
  {
    image: HeroImage,
    title: "Cercas y barandillas",
    id: "2",
    slug: "cercas-y-barandillas",
  },
  {
    image: HeroImage,
    title: "Revestimiento de pared",
    id: "3",
    slug: "revestimiento-de-pared",
  },
  {
    image: HeroImage,
    title: "Mobiliario",
    id: "4",
    slug: "mobiliario",
  },
];
