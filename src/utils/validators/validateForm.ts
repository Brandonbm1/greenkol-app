import type { IContactForm } from "../../model/interfaces/IContactForm";
import type { IValidator } from "../../model/interfaces/IValidator";

export const validateForm = (
  form: IContactForm
): {
  isValid: boolean;
  form: IContactForm;
} => {
  let isValid = true;
  const newForm = { ...form };

  Object.entries(form).forEach(([key, field]) => {
    let error = false;
    let errorMessage = "";

    field.validators.forEach((validator: IValidator) => {
      if (validator.required && !field.value.trim()) {
        error = true;
        errorMessage = validator.message;
      }
      if (!error && validator.regex && field.value.trim() !== "") {
        const regex = new RegExp(validator.regex);
        if (!regex.test(field.value)) {
          error = true;
          errorMessage = validator.message;
        }
      }
    
      newForm[key as keyof IContactForm] = {
        ...field,
        error,
        errorMessage,
      };
    
      if (error) isValid = false;
    });
  });

  return { isValid, form: newForm };
};
