import { useState, type FormEvent } from "react";
import {
  MdOutlinePhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineWhatsapp,
} from "react-icons/md";
import MapPlaceHolder from "/mapPlaceholder.png"

import "../styles/ContactPage.css";
export const ContactPage = () => {
  const INITIAL_FORM = {
    name: { placeholder: "Name", value: "" },
    email: { placeholder: "Email", value: "" },
    phone: { placeholder: "Phone", value: "" },
    message: { placeholder: "Message", value: "" },
  };
  const [form, setForm] = useState<typeof INITIAL_FORM>(INITIAL_FORM);

  type FormKey = keyof typeof INITIAL_FORM;

  const handleUpdateForm = (key: FormKey, value: string) => {
    const objectToModify = {
      ...form,
      [key]: {
        placeholder: form[key].placeholder,
        value,
      },
    };
    setForm(objectToModify);
  };
  const handleAction = (action: string) => {
    console.log(`Action ${action}`);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Executing action with FORM VALUE => `, form);
    resetForm();
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
          <section>
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
          </section>
          <section>
            <form action="">
              <h4>Envíanos un mensaje</h4>
              {Object.entries(form).map(([key, value], index) =>
                key === "message" ? (
                  <textarea
                    name={`form-${key}`}
                    key={"input-" + index}
                    value={value.value}
                    placeholder={value.placeholder}
                    onChange={(inputValue) =>
                      handleUpdateForm(key as FormKey, inputValue.target.value)
                    }
                  />
                ) : (
                  <input
                    name={`form-${key}`}
                    key={"input-" + index}
                    value={value.value}
                    placeholder={value.placeholder}
                    onChange={(inputValue) =>
                      handleUpdateForm(key as FormKey, inputValue.target.value)
                    }
                  />
                )
              )}
              <button type="submit" onClick={(e) => handleSubmit(e)}>
                Enviar
              </button>
            </form>
          </section>
          <button className="contact-whatsapp">
            <MdOutlineWhatsapp />
            <span>Contactar via WhatsApp</span>
          </button>
        </article>
        <aside>
            <h4>¿Donde estamos?</h4>
            <div>
                <img src={MapPlaceHolder} alt="Map placeholder" />

            </div>
        </aside>
      </main>
    </section>
  );
};
