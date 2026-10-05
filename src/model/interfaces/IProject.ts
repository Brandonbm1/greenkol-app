import type { IImage, IRender } from "./IImage";

export interface IProject {
  id: string;
  name: string;
  /** Optional CMS fields: rendered only when present */
  category?: string;
  location?: string;
  images: IImage[];
  description: string;
  render: IRender;
  userDetails: string;
  projectSolution: string;
  projectResults: string;
  specifications: {
    dimentions: {
      area: number;
    };
    materials: {
      type: "major" | "regular" | "hidden";
      name: string;
      shortName: string
    }[];
  };
  importance: "hidden" | "regular" | "important";
  releasedDate?: string;
  startedDate?: string;
}
