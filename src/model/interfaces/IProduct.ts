import type { ICategorie } from "./ICategorie"
import type { IImage, IRender } from "./IImage"

type LexicalTextNode = {
    type: "text"
    text: string
    format: number
    detail: number
    mode: string
    style: string
    version: number
}

type LexicalParagraphNode = {
    type: "paragraph"
    children: LexicalInlineNode[]
    direction: string | null
    format: string
    indent: number
    version: number
    textFormat: number
    textStyle: string
}

type LexicalListItemNode = {
    type: "listitem"
    children: LexicalInlineNode[]
    direction: string | null
    format: string
    indent: number
    version: number
    value: number
}

type LexicalListNode = {
    type: "list"
    children: LexicalListItemNode[]
    direction: string | null
    format: string
    indent: number
    version: number
    listType: "bullet" | "number" | "check"
    start: number
    tag: "ul" | "ol"
}

type LexicalInlineNode = LexicalTextNode
type LexicalBlockNode = LexicalParagraphNode | LexicalListNode

export type LexicalState = {
    root: {
        type: "root"
        children: LexicalBlockNode[]
        direction: string | null
        format: string
        indent: number
        version: number
    }
}

export interface IProduct {
    id: string, 
    name: string, 
    category: ICategorie,
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
    details: LexicalState,
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
