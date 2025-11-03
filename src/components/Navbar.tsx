import { useState } from "react";
import { Link } from "@tanstack/react-router";
import GreenKolLogo from "/greenKolLogo.png";
import "@styles/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <img src={GreenKolLogo} className="navbar-image" alt="GreenKol Logo" />

      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar-container ${menuOpen ? "show" : ""}`}>
        <Link
          to="/"
          activeProps={{ className: "active-link" }}
          onClick={() => setMenuOpen(false)}
        >
          Inicio
        </Link>
        <Link
          to="/products"
          activeProps={{ className: "active-link" }}
          onClick={() => setMenuOpen(false)}
        >
          Productos
        </Link>
        <Link
          to="/about"
          activeProps={{ className: "active-link" }}
          onClick={() => setMenuOpen(false)}
        >
          Nosotros
        </Link>
        <Link
          to="/contact"
          activeProps={{ className: "active-link" }}
          onClick={() => setMenuOpen(false)}
        >
          Contacto
        </Link>
      </nav>
    </header>
  );
};