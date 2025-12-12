export interface IValidator {
  required?: boolean;
  regex?: RegExp;
  message: string;
}
