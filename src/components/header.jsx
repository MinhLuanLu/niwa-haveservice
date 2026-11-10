import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";
import logo from "../assets/logo.jpg";

const navList = [
  { name: "Hækkeklipning", href: "/hækkeklipning" },
  { name: "Japanske beskæringskunst", href: "/beskæringskunst" },
  { name: "Beskæring & Fældning", href: "/beskaering-faeldning" },
  { name: "Tagrenderensning", href: "/tagrenderensning" },
  { name: "Lugning", href: "/lugning" },
  { name: "Græsslåning", href: "/græsslåning" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setMenuOpen(false);

  // Close the mobile menu on Escape or a tap outside the header
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Niwa Haveservice – til forsiden" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Hovedmenu">
          <div className={styles.dropdown}>
            <Link
              to="/services"
              className={`${styles.navLink} ${isActive("/services") ? styles.navLinkActive : ""}`}
            >
              JEG TILBYDER
            </Link>

            <div className={styles.dropdownMenu}>
              {navList.map((item) => (
                <Link key={item.href} to={`/services${item.href}`}>
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
          type="button"
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav id="mobile-menu" className={styles.mobileMenu} aria-label="Mobilmenu">
          <Link to="/services" onClick={closeMenu}>JEG TILBYDER</Link>
          {navList.map((item) => (
            <Link
              key={item.href}
              to={`/services${item.href}`}
              className={styles.mobileSubItem}
              onClick={closeMenu}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/about" onClick={closeMenu}>OM MIG</Link>
          <Link to="/gallery" onClick={closeMenu}>GALLERI</Link>
          <Link to="/contact" className={styles.contactBtn} onClick={closeMenu}>
            KONTAKT MIG
          </Link>
        </nav>
      )}
    </header>
  );
}
