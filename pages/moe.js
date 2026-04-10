import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/ServicePage.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Service",
    title: "Maîtrise d'œuvre",
    subtitle:
      "Nous pilotons l'ensemble de votre chantier, de la conception à la réception. Un chef d'orchestre pour coordonner tous les corps de métier.",
    introTag: "Notre rôle",
    introTitle: "Le garant de votre projet",
    introDesc:
      "En tant que maître d'œuvre, nous sommes votre unique interlocuteur pour l'ensemble de votre projet. Nous coordonnons les architectes, artisans et fournisseurs pour garantir le respect des délais, du budget et de la qualité. Notre mission : transformer votre vision en réalité, sans stress.",
    features: [
      {
        icon: "📝",
        title: "Études & plans",
        desc: "Réalisation des études techniques, plans d'exécution et dossiers de permis de construire.",
      },
      {
        icon: "👷",
        title: "Coordination chantier",
        desc: "Pilotage quotidien du chantier et coordination de tous les corps de métier intervenants.",
      },
      {
        icon: "🛡️",
        title: "Contrôle qualité",
        desc: "Vérifications régulières de la conformité des travaux aux normes et au cahier des charges.",
      },
      {
        icon: "📅",
        title: "Planning & délais",
        desc: "Établissement et suivi du planning d'exécution pour respecter les délais convenus.",
      },
      {
        icon: "💰",
        title: "Maîtrise budgétaire",
        desc: "Suivi financier continu et gestion des aléas pour rester dans l'enveloppe prévue.",
      },
      {
        icon: "✅",
        title: "Réception travaux",
        desc: "Assistance à la réception, levée des réserves et suivi des garanties post-travaux.",
      },
    ],
    approachTag: "Notre méthode",
    approachTitle: "Un accompagnement de bout en bout",
    steps: [
      { num: "01", title: "Cadrage", desc: "Définition du programme, budget et calendrier prévisionnel." },
      { num: "02", title: "Conception", desc: "Études techniques, choix des entreprises et préparation chantier." },
      { num: "03", title: "Exécution", desc: "Pilotage du chantier, réunions de suivi et contrôle qualité." },
      { num: "04", title: "Réception", desc: "Inspection finale, levée des réserves et remise des clés." },
    ],
    ctaTitle: "Un chantier à piloter ?",
    ctaSub: "Confiez-nous la maîtrise d'œuvre de votre projet.",
    ctaBtn: "Nous contacter",
  },
  en: {
    eyebrow: "Service",
    title: "Project Management",
    subtitle:
      "We manage your entire construction project, from design to handover. A conductor to coordinate all trades and stakeholders.",
    introTag: "Our role",
    introTitle: "The guardian of your project",
    introDesc:
      "As project manager, we are your single point of contact for your entire project. We coordinate architects, craftsmen and suppliers to guarantee compliance with deadlines, budget and quality. Our mission: turn your vision into reality, stress-free.",
    features: [
      {
        icon: "📝",
        title: "Studies & plans",
        desc: "Production of technical studies, execution plans and building permit files.",
      },
      {
        icon: "👷",
        title: "Site coordination",
        desc: "Daily site management and coordination of all participating trades.",
      },
      {
        icon: "🛡️",
        title: "Quality control",
        desc: "Regular checks on work compliance with standards and specifications.",
      },
      {
        icon: "📅",
        title: "Planning & deadlines",
        desc: "Establishment and monitoring of the execution schedule to meet agreed deadlines.",
      },
      {
        icon: "💰",
        title: "Budget control",
        desc: "Continuous financial monitoring and contingency management to stay within budget.",
      },
      {
        icon: "✅",
        title: "Project handover",
        desc: "Delivery assistance, snag resolution and post-construction warranty follow-up.",
      },
    ],
    approachTag: "Our method",
    approachTitle: "End-to-end support",
    steps: [
      { num: "01", title: "Scoping", desc: "Definition of program, budget and preliminary schedule." },
      { num: "02", title: "Design", desc: "Technical studies, company selection and site preparation." },
      { num: "03", title: "Execution", desc: "Site management, progress meetings and quality control." },
      { num: "04", title: "Handover", desc: "Final inspection, snag resolution and key handover." },
    ],
    ctaTitle: "Got a project to manage?",
    ctaSub: "Trust us with the project management of your build.",
    ctaBtn: "Contact us",
  },
};

export default function MoePage() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <>
      <Head>
        <title>Maîtrise d&apos;œuvre — CMC Habitat</title>
        <meta
          name="description"
          content="CMC Habitat, maître d'œuvre dans les Alpes Maritimes. Pilotage complet de vos projets de construction et rénovation."
        />
      </Head>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/wallpaper/slide3.png" alt="" />
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
