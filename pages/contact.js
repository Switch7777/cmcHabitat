import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/Contact.module.css";

const CONTENT = {
  fr: {
    title: "Parlons de votre projet",
    subtitle: "Premier rendez-vous gratuit et sans engagement. Nous vous rappelons sous 24h.",
    name: "Votre nom",
    email: "Votre email",
    phone: "Votre téléphone",
    message: "Décrivez votre projet...",
    submit: "Envoyer ma demande",
    successTitle: "Message envoyé",
    successMsg: "Nous vous répondons sous 24h.",
    info: [
      { icon: "📞", label: "Téléphone", value: "+33 (0)4 93 XX XX XX" },
      { icon: "✉️", label: "Email", value: "contact@cmc-habitat.com" },
      { icon: "📍", label: "Zone", value: "Alpes Maritimes 06" },
    ],
  },
  en: {
    title: "Let's talk about your project",
    subtitle: "First meeting free and without commitment. We'll call you back within 24h.",
    name: "Your name",
    email: "Your email",
    phone: "Your phone",
    message: "Describe your project...",
    submit: "Send my request",
    successTitle: "Message sent",
    successMsg: "We'll get back to you within 24h.",
    info: [
      { icon: "📞", label: "Phone", value: "+33 (0)4 93 XX XX XX" },
      { icon: "✉️", label: "Email", value: "contact@cmc-habitat.com" },
      { icon: "📍", label: "Area", value: "Alpes Maritimes 06" },
    ],
  },
};

export default function ContactPage() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const [sent, setSent] = useState(false);

  return (
    <>
      <Head>
        <title>Contact — CMC Habitat</title>
        <meta name="description" content="Contactez CMC Habitat pour votre projet d'aménagement intérieur." />
      </Head>
      <Navbar />

      <main className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Contact</span>
            <h1 className={styles.title}>{C.title}</h1>
            <p className={styles.subtitle}>{C.subtitle}</p>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formWrap}>
              {!sent ? (
                <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label className={styles.label}>{C.name}</label>
                      <input required className={styles.input} type="text" />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label}>{C.email}</label>
                      <input required className={styles.input} type="email" />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{C.phone}</label>
                    <input className={styles.input} type="tel" />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>{C.message}</label>
                    <textarea required className={styles.textarea} rows={6} />
                  </div>
                  <button className={styles.submit} type="submit">
                    {C.submit}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 19-7z" />
                    </svg>
                  </button>
                </form>
              ) : (
                <div className={styles.success}>
                  <span className={styles.successIcon}>✓</span>
                  <h3>{C.successTitle}</h3>
                  <p>{C.successMsg}</p>
                </div>
              )}
            </div>

            {/* Info */}
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
      </main>

      <Footer />
    </>
  );
}
