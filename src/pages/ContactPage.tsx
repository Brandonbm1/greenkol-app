import { useState, type FormEvent } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";

import "../styles/ContactPage.css";
import { validateForm } from "../utils/validators/validateForm";
import type { IContactForm } from "../model/interfaces/IContactForm";
import { config } from "../config/config";
import InputPhone from "../components/InputPhone";
import type { ICustomerApi } from "../model/interfaces/ICustomer";
import { sendCustomerMessage } from "../services/CustomerService";

export const ContactPage = () => {
  const INITIAL_FORM: IContactForm = {
    name: {
      placeholder: "Name",
      value: "",
      error: false,
      errorMessage: "",
      validators: [{ required: true, message: "This field is required" }],
    },
    email: {
      placeholder: "Email",
      value: "",
      error: false,
      errorMessage: "",
      validators: [
        { required: true, message: "This field is required" },
        {
          regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "This field should be a valid email",
        },
      ],
    },
    phone: {
      placeholder: "Phone",
      value: "",
      error: false,
      errorMessage: "",
      validators: [
        // { required: true, message: "This field is required" },
        { regex: /^\+?\d{7,15}$/, message: "Phone format invalid" },
      ],
    },
    message: {
      placeholder: "Message",
      value: "",
      error: false,
      errorMessage: "",
      validators: [{ required: true, message: "This field is required" }],
    },
  };
  const [form, setForm] = useState<IContactForm>(INITIAL_FORM);

  type FormKey = keyof typeof INITIAL_FORM;

  const handleUpdateForm = (name: keyof IContactForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: false,
        errorMessage: "",
      },
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { isValid, form: validatedForm } = validateForm(form);
    if (!isValid) {
      setForm(validatedForm);
      return;
    }
    const {name, email, phone, message} = getFormValues(form)

    const newCustomer: ICustomerApi = {
      name,
      email,
      phone,
      message,
    };
    const {created, error} = await sendCustomerMessage(newCustomer)
    if(created) {
      resetForm();
      return
    }
    alert(error.message)
  };

  const getFormValues = (form: IContactForm) => {
    const result: { [key: string]: string } = {};
    Object.entries(form).forEach(([key, { value }]) => (result[key] = value));
    return result;
  };
  const handleContactWpp = () => {
    const phone = config.CONTACT_PHONE;
    const message = encodeURIComponent(
      "Hola, me gustaria tener mas información de sus Productos / Proyectos"
    );
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, "_blank");
  };
  const resetForm = () => {
    setForm(INITIAL_FORM);
  };
  return (
    <section className="contact">
      <header>
        <h2>Contáctanos</h2>
        <span>
          Nos encantaría saber de tí. Contáctenos si tiene alguna pregunta o
          para hablar sobre su próximo proyecto.
        </span>
      </header>
      <main>
        <article>
          {/* <section>
            <button onClick={() => handleAction("call")}>
              <i className="icon-container">
                <MdOutlinePhone />
              </i>
              <span>+1 (555) 123-4567</span>
              <span className="action">Call</span>
            </button>
            <button onClick={() => handleAction("email")}>
              <i className="icon-container">
                <MdOutlineEmail />
              </i>
              <span>contact@woodplastic.com</span>
              <span className="action">Email</span>
            </button>
            <button onClick={() => handleAction("map")}>
              <i className="icon-container">
                <MdOutlineLocationOn />
              </i>
              <span>123 Green Way, Eco City, 45678</span>
              <span className="action">Map</span>
            </button>
          </section> */}
          <section>
            <form action="">
              <h4>Envíanos un mensaje</h4>
              {Object.entries(form).map(([key, value], index) => (
                <div className="field-wrapper" key={"input-" + index}>
                  {key === "message" ? (
                    <textarea
                      name={`form-${key}`}
                      value={value.value}
                      placeholder={value.placeholder}
                      className={`input ${value.error ? "error" : ""}`}
                      onChange={(inputValue) =>
                        handleUpdateForm(
                          key as FormKey,
                          inputValue.target.value
                        )
                      }
                    />
                  ) : key === "phone" ? (
                    <div className={`input ${value.error ? "error" : ""}`}>
                      <InputPhone
                        placeholder="300 0000000"
                        value={value.value}
                        onChange={(inputValue) => {
                          if (!inputValue) return;
                          handleUpdateForm(key as FormKey, inputValue);
                        }}
                      />
                    </div>
                  ) : (
                    <input
                      name={`form-${key}`}
                      value={value.value}
                      placeholder={value.placeholder}
                      className={`input ${value.error ? "error" : ""}`}
                      onChange={(inputValue) =>
                        handleUpdateForm(
                          key as FormKey,
                          inputValue.target.value
                        )
                      }
                    />
                  )}
                  {/* Tooltip */}
                  {value.error && (
                    <span className="tooltip">{value.errorMessage}</span>
                  )}
                </div>
              ))}
              <button type="submit" onClick={(e) => handleSubmit(e)}>
                Enviar
              </button>
            </form>
          </section>
          <button className="contact-whatsapp" onClick={handleContactWpp}>
            <MdOutlineWhatsapp />
            <span>Contactar via WhatsApp</span>
          </button>
        </article>
        <aside>
          <h4>¿Donde estamos?</h4>
          <div style={{ width: "100%" }}>
            <iframe
              src={config.FULL_LINK_ADDRESS}
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </main>
    </section>
  );
};
