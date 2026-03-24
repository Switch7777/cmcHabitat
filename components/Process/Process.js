"use client";

import { useLang } from "../context/LangContext";
import styles from "./Process.module.css";

const CONTENT = {
  fr: {
    tag: "Notre méthode",
    title: "Un projet clair, de A à Z",
    steps: [
      {
        num: "01",
        title: "Consultation",
        desc: "Premier rendez-vous gratuit pour comprendre vos besoins, vos envies et définir le périmètre du projet.",
      },
      {
        num: "02",
        title: "Conception",
        desc: "Élaboration des plans, sélection des matériaux et chiffrage précis. Vous validez chaque étape.",
      },
      {
        num: "03",
        title: "Réalisation",
        desc: "Coordination de tous les corps de métiers par notre chef de projet. Un chantier maîtrisé, dans les délais.",
      },
      {
        num: "04",
        title: "Livraison",
        desc: "Visite de réception, levée des réserves et remise des clés. Votre satisfaction est notre priorité.",
      },
    ],
  },
  en: {
    tag: "Our Process",
    title: "A clear project, from A to Z",
    steps: [
      {
        num: "01",
        title: "Consultation",
        desc: "Free first meeting to understand your needs and define the project scope.",
      },
      {
        num: "02",
        title: "Design",
        desc: "Plans, material selection and precise costing. You validate every step.",
      },
      {
        num: "03",
        title: "Execution",
        desc: "Coordination of all trades by our project manager. Controlled site, on schedule.",
      },
      {
        num: "04",
        title: "Handover",
        desc: "Reception visit, snagging and key handover. Your satisfaction is our priority.",
      },
    ],
  },
};

export default function Process() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <section className={styles.process} id="processus">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>{C.tag}</span>
          <h2 className={styles.title}>{C.title}</h2>
        </div>

        <div className={styles.steps}>
          {C.steps.map((s, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              {i < C.steps.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
