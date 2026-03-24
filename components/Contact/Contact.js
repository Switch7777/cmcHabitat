"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import styles from "./Contact.module.css";

const CONTENT = {
  fr: {
    tag: "Contact",
    title: "Parlons de votre projet",
    subtitle: "Получllez vos coordonnées et nous vous rappelons sous 24h. Premier rendez-vous gratuit et sans engagement.",
    name: "Votre nom",
    email: "Votre email",
    phone: "Votre téléphone",
    message: "Décrivez votre projet...",
    submit: "Envoyer ma demande",
    info: [
      { label: "Téléphone", value: "+33 (0)4 93 XX XX XX" },
      { label: "Email", value: "contact@cmc-habitat.com" },
      { label: "Zone", value: "Alpes Maritimes 06" },
    ],
  },
  en: {
    tag: "Contact",
    title: "Let's talk about your project",
    subtitle: "Leave your details and we'll call you back within 24h. First meeting is free and without commitment.",
    name: "Your name",
    email: "Your email",
    phone: "Your phone",
    message: "Describe your project...",
    submit: "Send my request",
    info: [
      { label: "Phone", value: "+33 (0)4 93 XX XX XX" },
      { label: "Email", value: "contact@cmc-habitat.com" },
      { label: "Area", value: "Alpes Maritimes 06" },
    ],
  },
};

export default function Contact() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className={styles.contact} id="contact">
      {/* Fond décoratif */}
      <div className={styles.blob} aria-hidden="true" />

      <div className={styles.inner}>
        {/* En-tête */}
        <div className={styles.header}>
          <span className={styles.tag}>{C.tag}</span>
          <h2 className={styles.title}>{C.title}</h2>
          <p className={styles.subtitle}>{C.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {/* Formulaire */}
          {!sent ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input required className={styles.input} type="text" placeholder={C.name} />
              <input required className={styles.input} type="email" placeholder={C.email} />
              <input className={styles.input} type="tel" placeholder={C.phone} />
              <textarea required className={styles.textarea} rows={5} placeholder={C.message} />
              <button className={styles.submit} type="submit">
                {C.submit}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z" />
                </svg>
              </button>
            </form>
          ) : (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              <p>{lang === "fr" ? "Merci ! Nous vous répondons sous 24h." : "Thank you! We'll get back to you within 24h."}</p>
            </div>
          )}

          {/* Infos */}
          <div className={styles.info}>
            {C.info.map((item, i) => (
              <div key={i} className={styles.infoItem}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
