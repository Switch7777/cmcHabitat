import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/ServicePage.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Notre accompagnement",
    title: "Les étapes d'un projet",
    subtitle:
      "De la première rencontre à la remise des clés, nous vous guidons à chaque étape. Un processus clair, transparent et sur mesure pour transformer votre vision en réalité.",
    introTag: "Notre philosophie",
    introTitle: "Un projet réussi commence par une méthode",
    introDesc:
      "Chaque projet est unique, mais notre méthode reste constante : écouter, concevoir, réaliser et livrer. Nous croyons qu'un accompagnement structuré est la clé d'un résultat à la hauteur de vos attentes. Notre équipe vous guide pas à pas, avec rigueur et transparence, pour que chaque décision soit prise en toute confiance.",
    phasesTag: "Le parcours",
    phasesTitle: "6 étapes vers votre projet abouti",
    phases: [
      {
        num: "01",
        title: "Premier contact",
        desc: "Échange téléphonique ou rencontre pour comprendre votre projet, vos envies et vos contraintes. Ce rendez-vous est gratuit et sans engagement.",
        detail: "Durée estimée : 1h",
      },
      {
        num: "02",
        title: "Visite & diagnostic",
        desc: "Nous visitons votre bien pour prendre les mesures, analyser l'existant et identifier les possibilités techniques. Un rapport de visite vous est remis.",
        detail: "Sur votre site",
      },
      {
        num: "03",
        title: "Conception & chiffrage",
        desc: "Élaboration des plans, modélisations 3D et planches d'ambiance. Vous recevez un devis détaillé poste par poste pour valider le budget.",
        detail: "Plans + Devis sous 15 jours",
      },
      {
        num: "04",
        title: "Validation & contrat",
        desc: "Ajustements selon vos retours, validation finale des plans et signature du contrat de maîtrise d'œuvre. Le planning prévisionnel est établi.",
        detail: "Signature du contrat",
      },
      {
        num: "05",
        title: "Travaux & suivi",
        desc: "Coordination de tous les corps de métier, réunions de chantier régulières et reporting photo. Vous êtes informé en temps réel de l'avancement.",
        detail: "Réunions hebdomadaires",
      },
      {
        num: "06",
        title: "Livraison & garanties",
        desc: "Réception du chantier avec levée des réserves. Remise du dossier des ouvrages exécutés et activation des garanties décennales et biennales.",
        detail: "Garantie décennale incluse",
      },
    ],
    valuesTag: "Nos engagements",
    valuesTitle: "Ce qui nous différencie",
    values: [
      {
        icon: "🤝",
        title: "Un interlocuteur unique",
        desc: "Un chef de projet dédié vous accompagne de A à Z. Plus besoin de jongler entre les artisans.",
      },
      {
        icon: "📋",
        title: "Une facturation unique",
        desc: "Un seul devis, une seule facture. Transparence totale sur les coûts, sans mauvaise surprise.",
      },
      {
        icon: "📐",
        title: "Conception sur mesure",
        desc: "Chaque projet est pensé spécifiquement pour vous, adapté à votre mode de vie et vos goûts.",
      },
      {
        icon: "🔒",
        title: "Garanties solides",
        desc: "Assurance décennale, garantie de parfait achèvement et biennale pour votre tranquillité.",
      },
    ],
    ctaTitle: "Prêt à lancer votre projet ?",
    ctaSub: "Premier rendez-vous gratuit et sans engagement.",
    ctaBtn: "Nous contacter",
  },
  en: {
    eyebrow: "Our support",
    title: "Project stages",
    subtitle:
      "From the first meeting to key handover, we guide you at every step. A clear, transparent and bespoke process to turn your vision into reality.",
    introTag: "Our philosophy",
    introTitle: "A successful project starts with a method",
    introDesc:
      "Each project is unique, but our method remains constant: listen, design, build and deliver. We believe that structured support is the key to a result that meets your expectations. Our team guides you step by step, with rigor and transparency, so every decision is made with confidence.",
    phasesTag: "The journey",
    phasesTitle: "6 steps to your completed project",
    phases: [
      {
        num: "01",
        title: "First contact",
        desc: "Phone call or meeting to understand your project, desires and constraints. This appointment is free and without commitment.",
        detail: "Estimated duration: 1h",
      },
      {
        num: "02",
        title: "Visit & assessment",
        desc: "We visit your property to take measurements, analyze the existing structure and identify technical possibilities. A visit report is provided.",
        detail: "On your site",
      },
      {
        num: "03",
        title: "Design & costing",
        desc: "Development of plans, 3D models and mood boards. You receive a detailed quote item by item to validate the budget.",
        detail: "Plans + Quote within 15 days",
      },
      {
        num: "04",
        title: "Approval & contract",
        desc: "Adjustments based on your feedback, final plan approval and signing of the project management contract. The preliminary schedule is established.",
        detail: "Contract signing",
      },
      {
        num: "05",
        title: "Construction & monitoring",
        desc: "Coordination of all trades, regular site meetings and photo reporting. You are informed in real time of progress.",
        detail: "Weekly meetings",
      },
      {
        num: "06",
        title: "Delivery & warranties",
        desc: "Site reception with snag resolution. Handover of the completed works file and activation of ten-year and two-year warranties.",
        detail: "Ten-year warranty included",
      },
    ],
    valuesTag: "Our commitments",
    valuesTitle: "What sets us apart",
    values: [
      {
        icon: "🤝",
        title: "Single point of contact",
        desc: "A dedicated project manager accompanies you from A to Z. No more juggling between contractors.",
      },
      {
        icon: "📋",
        title: "Single invoice",
        desc: "One quote, one invoice. Total cost transparency with no unpleasant surprises.",
      },
      {
        icon: "📐",
        title: "Bespoke design",
        desc: "Each project is specifically designed for you, adapted to your lifestyle and tastes.",
      },
      {
        icon: "🔒",
        title: "Solid warranties",
        desc: "Ten-year insurance, perfect completion guarantee and two-year warranty for your peace of mind.",
      },
    ],
    ctaTitle: "Ready to launch your project?",
    ctaSub: "First meeting free and without commitment.",
    ctaBtn: "Contact us",
  },
};

export default function StepProjectPage() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <>
      <Head>
        <title>Les étapes d&apos;un projet — CMC Habitat</title>
        <meta
          name="description"
          content="Découvrez les étapes de votre projet avec CMC Habitat : du premier contact à la livraison, un accompagnement sur mesure dans les Alpes Maritimes."
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
              <img src="/wallpaper/slide3.png" alt={C.title} />
            </div>
          </section>

          {/* 6 Phases timeline */}
          <section className={styles.approach}>
            <div className={styles.featuresHeader}>
              <span className={styles.sectionTag}>{C.phasesTag}</span>
              <h2 className={styles.sectionTitle}>{C.phasesTitle}</h2>
            </div>
            <div className={styles.featuresGrid}>
              {C.phases.map((p, i) => (
                <div key={i} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "1rem" }}>{p.num}</span>
                  </div>
                  <h3 className={styles.featureTitle}>{p.title}</h3>
                  <p className={styles.featureDesc}>{p.desc}</p>
                  <span className={styles.sectionTag} style={{ marginTop: "auto" }}>{p.detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Engagements */}
          <section className={styles.features}>
            <div className={styles.featuresHeader}>
              <span className={styles.sectionTag}>{C.valuesTag}</span>
              <h2 className={styles.sectionTitle}>{C.valuesTitle}</h2>
            </div>
            <div className={styles.steps}>
              {C.values.map((v, i) => (
                <div key={i} className={styles.step}>
                  <div className={styles.stepNum}>
                    <span>{v.icon}</span>
                  </div>
                  <h4 className={styles.stepTitle}>{v.title}</h4>
                  <p className={styles.stepDesc}>{v.desc}</p>
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
