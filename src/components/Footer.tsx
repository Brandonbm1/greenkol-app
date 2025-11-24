import { config } from "../config/config";
import "../styles/Footer.css";

export const Footer = () => {
  const { CONTACT_EMAIL, CONTACT_PHONE, ADDRESS_NAME } = config;

  const SOCIAL_MEDIA = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/greenkolwpc",
    },
    {
      label: "TikTok",
      link: "#",
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <section>
        <article>
          <h5 className="branchName">GreenKol</h5>
          <div>
            <span>Construye Verde, Construye Bien</span>
          </div>
        </article>
        <article>
          <h5>Contáctanos</h5>
          <ul>
            <li>{ADDRESS_NAME}</li>
            <li>Email: {CONTACT_EMAIL}</li>
            <li>Telefono: {CONTACT_PHONE}</li>
          </ul>
        </article>
        <article>
          <h5>Síguenos</h5>
          <ul>
            {SOCIAL_MEDIA &&
              SOCIAL_MEDIA.map((social, index) => (
                <li key={`social-${index}`}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
          </ul>
        </article>
      </section>
      <section>
        <small>© {year} GreenKol. Construye Verde, Construye Bien</small>
      </section>
    </footer>
  );
};
