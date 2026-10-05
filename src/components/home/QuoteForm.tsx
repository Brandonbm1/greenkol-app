import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { LuArrowRight } from "react-icons/lu";
import { sendCustomerMessage } from "../../services/CustomerService";
import { toastServices } from "../../services/ToastServices";
import { openWhatsApp } from "../../utils/whatsapp";

interface QuoteFormValues {
  name: string;
  phone: string;
  email: string;
  city: string;
  projectType: string;
  detail: string;
}

type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const EMPTY_FORM: QuoteFormValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  projectType: "",
  detail: "",
};

const validate = (values: QuoteFormValues): QuoteFormErrors => {
  const errors: QuoteFormErrors = {};
  if (!values.name.trim()) errors.name = "Escribe tu nombre";
  if (!/^\+?[\d\s-]{7,18}$/.test(values.phone.trim())) errors.phone = "Teléfono no válido";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Correo no válido";
  if (!values.projectType.trim()) errors.projectType = "Cuéntanos qué quieres construir";
  return errors;
};

const buildMessage = (values: QuoteFormValues) =>
  [
    `Hola GREENKOL, soy ${values.name}.`,
    `Quiero cotizar: ${values.projectType}.`,
    values.city && `Ciudad: ${values.city}.`,
    values.detail && `Detalle: ${values.detail}`,
    `Teléfono: ${values.phone}${values.email ? ` · Correo: ${values.email}` : ""}`,
  ]
    .filter(Boolean)
    .join("\n");

export const QuoteForm = ({ initialProjectType }: { initialProjectType?: string }) => {
  const [values, setValues] = useState<QuoteFormValues>({
    ...EMPTY_FORM,
    projectType: initialProjectType ?? "",
  });
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const { promise } = toastServices();

  useEffect(() => {
    if (initialProjectType) setValues((prev) => ({ ...prev, projectType: initialProjectType }));
  }, [initialProjectType]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const message = buildMessage(values);
    // Open WhatsApp synchronously so popup blockers don't stop it
    openWhatsApp(message);

    promise(
      sendCustomerMessage({
        name: values.name,
        phone: values.phone,
        email: values.email,
        message,
      }),
      () => {
        setValues(EMPTY_FORM);
        return "Solicitud enviada, te contactaremos pronto";
      },
      () => "No pudimos registrar la solicitud, pero puedes continuar por WhatsApp",
      "Enviando solicitud..."
    );
  };

  const fieldProps = (name: keyof QuoteFormValues) => ({
    id: `quote-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    className: `input ${errors[name] ? "has-error" : ""}`,
    "aria-invalid": !!errors[name],
  });

  const fieldError = (name: keyof QuoteFormValues) =>
    errors[name] && <span className="field-error">{errors[name]}</span>;

  return (
    <form className="quote-card card" onSubmit={handleSubmit} noValidate>
      <h3 className="quote-card-title">Solicita tu cotización</h3>
      <p className="quote-card-lead">
        Cuéntanos qué quieres construir y te respondemos con una propuesta.
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-name">Nombre</label>
          <input {...fieldProps("name")} placeholder="Tu nombre" autoComplete="name" />
          {fieldError("name")}
        </div>
        <div className="field">
          <label htmlFor="quote-phone">Teléfono</label>
          <input {...fieldProps("phone")} type="tel" placeholder="300 000 0000" autoComplete="tel" />
          {fieldError("phone")}
        </div>
        <div className="field">
          <label htmlFor="quote-email">Correo</label>
          <input {...fieldProps("email")} type="email" placeholder="tu@correo.com" autoComplete="email" />
          {fieldError("email")}
        </div>
        <div className="field">
          <label htmlFor="quote-city">Ciudad</label>
          <input {...fieldProps("city")} placeholder="Santa Marta" autoComplete="address-level2" />
        </div>
        <div className="field field--full">
          <label htmlFor="quote-projectType">Tipo de proyecto</label>
          <input {...fieldProps("projectType")} placeholder="Deck, fachada, mobiliario, pasarela..." />
          {fieldError("projectType")}
        </div>
        <div className="field field--full">
          <label htmlFor="quote-detail">Detalle</label>
          <textarea
            {...fieldProps("detail")}
            rows={4}
            placeholder="Medidas aproximadas, plazos y cualquier detalle útil"
          />
        </div>
      </div>

      <button type="submit" className="btn btn--primary btn--block quote-submit">
        Enviar solicitud <LuArrowRight />
      </button>
      <small className="quote-note">Al enviar se abre WhatsApp con tu mensaje listo para confirmar.</small>
    </form>
  );
};
