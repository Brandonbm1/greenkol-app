import type { IValidator } from "./IValidator"

export interface IFormField {
    placeholder: string
    value: string
    error: boolean
    errorMessage: string
    validators: IValidator[]
  }