import React from "react";
import styles from "./Contact.module.css";
import Spacing from "@/layout/Spacing";
import Container from "@/layout/Container";

const Contact: React.FC = () => (
  <section className={styles.contactSection}>
    <Spacing className={styles.mapBg}>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1164261490175!2d-51.1318123!3d-29.6886196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942ecb47277ab%3A0x960b5eb11c1e1e67!2sR.%20Tamandar%C3%A9%2C%20140%20-%20Centro%2C%20Novo%20Hamburgo%20-%20RS%2C%2093410-150!5e0!3m2!1spt-BR!2sbr!4v1668456977610!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title="Localização no Google Maps"
        ></iframe>
      </div>
    </Spacing>

    <ContactForm />
  </section>
);

const ContactForm: React.FC = () => (
  <Spacing>
    <Container>
      <form className={styles.form}>
        <h2>Lorem Ipsum</h2>
        <div className={styles.credentials}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit" className={styles.submitButton}>
          Enviar
        </button>
      </form>
    </Container>
  </Spacing>
);

export default Contact;
