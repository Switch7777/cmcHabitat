import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/ServicePage.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Service",
    title: "Architecte d'intérieur",
    subtitle:
      "Nous concevons des espaces de vie sur mesure, alliant esthétique, fonctionnalité et bien-être. Chaque projet est une création unique qui reflète votre personnalité.",
    introTag: "Notre vision",
    introTitle: "Un design pensé pour vous",
    introDesc:
      "Notre approche d'architecture intérieure place l'humain au centre. Nous analysons vos habitudes, vos goûts et vos contraintes pour créer des espaces qui vous ressemblent. Du premier croquis à la livraison finale, nous vous accompagnons dans chaque étape de la transformation de votre habitat.",
    features: [
      {
        icon: "✏️",
        title: "Conception sur mesure",
        desc: "Plans détaillés, modélisations 3D et planches d'ambiance pour visualiser votre futur espace avant les travaux.",
      },
      {
        icon: "🎨",
        title: "Choix matériaux & couleurs",
        desc: "Sélection rigoureuse de matériaux nobles, revêtements et palettes chromatiques harmonieuses.",
      },
      {
        icon: "💡",
        title: "Éclairage & ambiance",
        desc: "Études luminaires personnalisées pour sublimer chaque pièce et créer l'atmosphère souhaitée.",
      },
      {
        icon: "📐",
        title: "Optimisation d'espace",
        desc: "Réagencement intelligent pour maximiser chaque mètre carré, même dans les configurations les plus complexes.",
      },
      {
        icon: "🏠",
        title: "Aménagement complet",
        desc: "Mobilier, rangements, déco : une prise en charge globale de A à Z pour un résultat clé en main.",
      },
      {
        icon: "🤝",
        title: "Suivi personnalisé",
        desc: "Un interlocuteur dédié tout au long du projet, disponible et à l'écoute de vos besoins.",
      },
    ],
    approachTag: "Notre méthode",
    approachTitle: "Un processus clair et structuré",
    steps: [
      { num: "01", title: "Rencontre", desc: "Visite et échange pour comprendre vos besoins et votre budget." },
      { num: "02", title: "Conception", desc: "Plans, 3D et planches d'ambiance pour valider la direction." },
      { num: "03", title: "Réalisation", desc: "Coordination des artisans et suivi rigoureux du chantier." },
      { num: "04", title: "Livraison", desc: "Remise des clés d'un espace fini, prêt à vivre." },
    ],
    ctaTitle: "Envie de repenser votre intérieur ?",
    ctaSub: "Premier rendez-vous gratuit et sans engagement.",
    ctaBtn: "Nous contacter",
  },
  en: {
    eyebrow: "Service",
    title: "Interior Architecture",
    subtitle:
      "We design bespoke living spaces combining aesthetics, functionality and well-being. Each project is a unique creation that reflects your personality.",
    introTag: "Our vision",
    introTitle: "Design made for you",
    introDesc:
      "Our interior architecture approach places people at the center. We analyze your habits, tastes and constraints to create spaces that truly represent you. From the first sketch to the final delivery, we guide you through every stage of transforming your home.",
    features: [
      {
        icon: "✏️",
        title: "Custom design",
        desc: "Detailed plans, 3D renderings and mood boards to visualize your future space before construction.",
      },
      {
        icon: "🎨",
        title: "Materials & colors",
        desc: "Rigorous selection of premium materials, finishes and harmonious color palettes.",
      },
      {
        icon: "💡",
        title: "Lighting & ambiance",
        desc: "Personalized lighting studies to enhance each room and create the desired atmosphere.",
      },
      {
        icon: "📐",
        title: "Space optimization",
        desc: "Smart rearrangement to maximize every square meter, even in the most complex configurations.",
      },
      {
        icon: "🏠",
        title: "Full furnishing",
        desc: "Furniture, storage, decor: a complete A-to-Z service for a turnkey result.",
      },
      {
        icon: "🤝",
        title: "Dedicated follow-up",
        desc: "A dedicated contact throughout the project, available and attentive to your needs.",
      },
    ],
    approachTag: "Our method",
    approachTitle: "A clear and structured process",
    steps: [
      { num: "01", title: "Meeting", desc: "Visit and discussion to understand your needs and budget." },
      { num: "02", title: "Design", desc: "Plans, 3D and mood boards to validate the direction." },
      { num: "03", title: "Execution", desc: "Coordination of craftsmen and rigorous site monitoring." },
      { num: "04", title: "Delivery", desc: "Handover of a finished space, ready to live in." },
    ],
    ctaTitle: "Want to rethink your interior?",
    ctaSub: "First meeting free and without commitment.",
    ctaBtn: "Contact us",
  },
};

export default function ArchitecturePage() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <>
      <Head>
        <title>Architecte d&apos;intérieur — CMC Habitat</title>
        <meta
          name="description"
          content="CMC Habitat, architecte d'intérieur dans les Alpes Maritimes. Conception sur mesure et réalisation de vos projets d'aménagement."
        />
      </Head>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/wallpaper/wallscreen.png" alt="" />
          </div>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{C.eyebrow}</span>
            <h1 className={styles.title}>{C.title}</h1>
            <p className={styles.subtitle}>{C.subtitle}</p>
          </div>
        </div>

        <div className={styles.body}>
          {/* Intro */}
          <section className={styles.intro}>
            <div className={styles.introText}>
              <span className={styles.sectionTag}>{C.introTag}</span>
              <h2 className={styles.sectionTitle}>{C.introTitle}</h2>
              <p className={styles.description}>{C.introDesc}</p>
            </div>
            <div className={styles.introImage}>
              <img src="/wallpaper/wallscreen.png" alt={C.title} />
            </div>
          </section>

          {/* Features */}
          <section className={styles.features}>
            <div className={styles.featuresHeader}>
              <span className={styles.sectionTag}>{lang === "fr" ? "Ce que nous proposons" : "What we offer"}</span>
              <h2 className={styles.sectionTitle}>
                {lang === "fr" ? "Nos prestations" : "Our services"}
              </h2>
            </div>
            <div className={styles.featuresGrid}>
              {C.features.map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span>{f.icon}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className={styles.approach}>
            <div className={styles.featuresHeader}>
              <span className={styles.sectionTag}>{C.approachTag}</span>
              <h2 className={styles.sectionTitle}>{C.approachTitle}</h2>
            </div>
            <div className={styles.steps}>
              {C.steps.map((s, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className={styles.cta}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>{C.ctaTitle}</h2>
              <p className={styles.ctaSub}>{C.ctaSub}</p>
            </div>
            <Link href="/contact">
              <a className={styles.ctaBtn}>
                {C.ctaBtn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
