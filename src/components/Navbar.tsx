"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <a href="#home" className={styles.logo}>
        Huzaifa.
      </a>
      
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
    </nav>
  );
}
