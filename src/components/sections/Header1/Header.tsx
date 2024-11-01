import React, { useState } from "react";
import styles from "./Header.module.css";
import Container from "@/layout/Container";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.container}>

        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#home">Início</a>
            </li>
            <li className={styles.navItem}>
              <a href="#services">Serviços</a>
            </li>
            <li className={styles.navItem}>
              <a href="#about">Sobre Nós</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? "Fechar" : "Menu"}
        </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
