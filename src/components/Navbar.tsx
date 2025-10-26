import { Link } from "@tanstack/react-router";
import GreenKolLogo from "../assets/greenKolLogo.png";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={GreenKolLogo} className="navbar-image" />
      <nav className="navbar-container">
        <Link
          to="/"
          activeProps={{
            className: "active-link",
          }}
        >
          Inicio
        </Link>
        <Link
          to="/products"
          activeProps={{
            className: "active-link",
          }}
        >
          Productos
        </Link>
        <Link
          to="/about"
          activeProps={{
            className: "active-link",
          }}
        >
          Nosotros
        </Link>
        <Link
          to="/contact"
          activeProps={{
            className: "active-link",
          }}
        >
          Contacto
        </Link>
      </nav>
    </div>
  );
};
