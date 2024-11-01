import React from "react";
import styles from "./Footer.module.css";
import Container from "@/layout/Container";
import Spacing from "@/layout/Spacing";

const Footer: React.FC = () => (
  <footer className={""}>
    <Spacing className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <h4 className={styles.footerTitle}>Entre em Contato</h4>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="tel:+5551999999999" className={styles.footerListLink}>
                  +55 (51) 99999-9999
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  href="mailto:contato@exemplo.com"
                  className={styles.footerListLink}
                >
                  contato@exemplo.com
                </a>
              </li>
              <li className={styles.footerListItem}>
                R. Tamandaré, 140, Novo Hamburgo - RS
              </li>
            </ul>
          </div>

          <div className={styles.links}>
            <h4 className={styles.footerTitle}>Links Úteis</h4>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a href="#services" className={styles.footerListLink}>
                  Serviços
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#about" className={styles.footerListLink}>
                  Sobre Nós
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a href="#contact" className={styles.footerListLink}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.socialMedia}>
            <h4 className={styles.footerTitle}>Siga-nos</h4>
            <ul className={styles.footerList}>
              <li className={styles.footerListItem}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerListLink}
                >
                  Facebook
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerListLink}
                >
                  Instagram
                </a>
              </li>
              <li className={styles.footerListItem}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerListLink}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Spacing>
    <Spacing className={styles.copyright}>
      <Container>
        <div className={""}>
          <p>
            &copy; {new Date().getFullYear()} Consultoria Exemplo. Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </Spacing>
  </footer>
);

export default Footer;
