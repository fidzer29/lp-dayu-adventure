"use client";

import { useState } from "react";
import BrandMark from "./BrandMark";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark horizontal />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "main-nav nav-open" : "main-nav"}
          aria-label="Navigasi utama"
        >
          <a className="nav-active" href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#collection" onClick={closeMenu}>
            Collection
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
        <div className="header-actions">
          <a href="#collection" aria-label="Lihat koleksi">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.2" />
              <path d="m15.4 15.4 4.1 4.1" />
            </svg>
          </a>
          <a href="#contact" aria-label="Hubungi DAY’U">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 8h12l1 12H5L6 8Z" />
              <path d="M9 9V6a3 3 0 0 1 6 0v3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
