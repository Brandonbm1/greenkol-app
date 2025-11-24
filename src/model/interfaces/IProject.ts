import type { IImage, IRender } from "./IImage";

export interface IProject {
    id: string, 
    name: string,
    images: IImage[],
    description: string, 
    render: IRender,
    details: string, 
    specifications: {
        dimentions: {
            x: number, 
            y: number, 
            z: number,
        },
        weight: number
    },
    importance: "hidden" | "regular" | "important"
}