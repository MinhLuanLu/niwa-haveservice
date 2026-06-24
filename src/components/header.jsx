import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navList = [
    { name: "Hækkeklipning", href: "/hækkeklipning" },
    { name: "Japanske beskæringskunst", href: "/beskæringskunst" },
    { name: "Beskæring & Fældning", href: "/beskaering-faeldning" },
    { name: "Tagrenderensning", href: "/tagrenderensning" },
    { name: "Lugning", href: "/lugning" },
    { name: "Græsslåning", href: "/Græsslåning" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Niwa Haveservice logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <div className={styles.dropdown}>
            <Link
              to="/services"
              className={`${styles.navLink} ${isActive("/services") ? styles.navLinkActive : ""}`}
            >
              JEG TILBYDER
            </Link>

            <div className={styles.dropdownMenu}>
              {navList.map((item, index) => (
                <Link key={index} to={`/services/${item.href}`}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className={`${styles.navLink} ${isActive("/about") ? styles.navLinkActive : ""}`}
          >
            OM MIG
          </Link>

          <Link
            to="/gallery"
            className={`${styles.navLink} ${isActive("/gallery") ? styles.navLinkActive : ""}`}
          >
            GALLERI
          </Link>

          <Link to="/contact" className={styles.contactBtn}>
            KONTAKT MIG
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åbn menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/services" onClick={() => setMenuOpen(false)}>JEG TILBYDER</Link>
          {navList.map((item, index) => (
            <Link
              key={index}
              to={`/services${item.href}`}
              className={styles.mobileSubItem}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/about" onClick={() => setMenuOpen(false)}>OM MIG</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>GALLERI</Link>
          <Link to="/contact" className={styles.contactBtn} onClick={() => setMenuOpen(false)}>
            KONTAKT MIG
          </Link>
        </div>
      )}
    </header>
  );
}
