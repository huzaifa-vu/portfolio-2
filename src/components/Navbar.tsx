"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.navbarActive : ""}`}>
        <a href="#home" className={styles.logo} onClick={closeMenu}>
          Huzaifa.
        </a>
        
        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className={styles.ctaBtn}>
          Let&apos;s Talk
        </a>

        {/* Mobile Hamburger Toggle */}
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.menuToggleActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Glassmorphic Overlay Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul className={styles.mobileNavLinks}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#work" onClick={closeMenu}>Work</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a href="#contact" className={styles.mobileCtaBtn} onClick={closeMenu}>
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
