import { Link } from "@tanstack/react-router";
import { LuInstagram, LuMail, LuMapPin, LuMessageCircle, LuPhone } from "react-icons/lu";
import GreenKolLogo from "/greenKolLogo.webp";
import { config } from "../config/config";
import { NAV_SECTIONS } from "../utils/content";
import { buildWhatsAppUrl, getInternationalPhone } from "../utils/whatsapp";
import "../styles/Footer.css";

export const Footer = () => {
  const { CONTACT_EMAIL, CONTACT_PHONE, ADDRESS_NAME } = config;
  const year = new Date().getFullYear();

  const SOCIAL_MEDIA = [
    { label: "Instagram", link: "https://www.instagram.com/greenkolwpc", icon: <LuInstagram /> },
    { label: "WhatsApp", link: buildWhatsAppUrl(), icon: <LuMessageCircle /> },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <section className="footer-brand">
            <Link to="/" aria-label="GreenKol, inicio">
              <img src={GreenKolLogo} alt="GreenKol" width={500} height={126} />
            </Link>
            <p>
              Construye Verde, Construye Bien. Madera plástica sostenible para la costa caribe de
              Colombia.
            </p>
          </section>

          <section>
            <h5>Contáctanos</h5>
            <ul className="footer-contact">
              {ADDRESS_NAME && (
                <li>
                  <LuMapPin />
                  <span>{ADDRESS_NAME}</span>
                </li>
              )}
              {CONTACT_EMAIL && (
                <li>
                  <LuMail />
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </li>
              )}
              {CONTACT_PHONE && (
                <li>
                  <LuPhone />
                  <a href={`tel:+${getInternationalPhone(CONTACT_PHONE)}`}>{CONTACT_PHONE}</a>
                </li>
              )}
            </ul>
          </section>

          <section>
            <h5>Síguenos</h5>
            <div className="footer-social">
              {SOCIAL_MEDIA.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <nav className="footer-links" aria-label="Secciones">
              {NAV_SECTIONS.map(({ id, label }) => (
                <Link key={id} to="/" hash={id}>
                  {label}
                </Link>
              ))}
            </nav>
          </section>
        </div>

        <div className="footer-bottom">
          <small>© {year} GREENKOL. Construye Verde, Construye Bien.</small>
        </div>
      </div>
    </footer>
  );
};
