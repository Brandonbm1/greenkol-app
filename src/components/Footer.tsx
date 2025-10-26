import "../styles/Footer.css";

export const Footer = () => {
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
            <li>XXXX - XXXX - Santa Marta</li>
            <li>Email: contact@greenkol.com</li>
            <li>Telefono: (31X) 333 3333</li>
          </ul>
        </article>
        <article>
          <h5>Síguenos</h5>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                TikTok
              </a>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <small>© {year} GreenKol. Todos los derechos reservados.</small>
      </section>
    </footer>
  );
};
