import type { IFormField } from "./IFormField"

export interface IContactForm {
    name: IFormField
    email: IFormField
    phone: IFormField
    message: IFormField
  }