import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { LuMenu, LuX } from "react-icons/lu";
import GreenKolLogo from "/greenKolLogo.webp";
import { NAV_SECTIONS } from "../utils/content";
import { useActiveSection } from "../hooks/useActiveSection";
import "@styles/Navbar.css";

const SECTION_IDS = NAV_SECTIONS.map(({ id }) => id);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = useLocation({ select: (location) => location.pathname === "/" });
  const activeSection = useActiveSection(SECTION_IDS, isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="GreenKol, inicio">
          <img src={GreenKolLogo} alt="GreenKol" width={500} height={126} />
        </Link>

        <nav className={`navbar-nav ${menuOpen ? "is-open" : ""}`} aria-label="Principal">
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link
              key={id}
              to="/"
              hash={id}
              className={`navbar-link ${activeSection === id ? "is-active" : ""}`}
              aria-current={activeSection === id ? "location" : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <Link to="/" hash="contacto" className="btn btn--primary navbar-cta" onClick={closeMenu}>
            Cotizar ahora
          </Link>
        </nav>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>
    </header>
  );
};
