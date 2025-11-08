import type { IImage, IRender } from "./IImage"

export interface IProduct {
    id: string, 
    name: string, 
    mainImage: IImage, 
    images: IImage[],
    description: string,
    render: IRender,
    features?: {
        outside?: boolean,
        reciclableMaterials?: boolean
        lowMaintenance?: boolean,
        warranty?: number, 
    },
    details: string, 
    specifications: {
        dimentions: {
            x: number, 
            y: number, 
            z: number,
        },
        weight: number
    }
    tags?: {tag: string, id: string}[]
}
