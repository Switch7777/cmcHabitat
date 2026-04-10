import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/ServicePage.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Service",
    title: "Économie de construction",
    subtitle:
      "Nous optimisons les coûts de vos projets sans compromettre la qualité. Une expertise technique au service de la maîtrise budgétaire de votre chantier.",
    introTag: "Notre expertise",
    introTitle: "La rigueur au service de votre budget",
    introDesc:
      "L'économie de la construction est un pilier essentiel de tout projet réussi. Notre équipe analyse, chiffre et optimise chaque poste de dépense pour garantir le meilleur rapport qualité-prix. Nous intervenons dès la phase de conception pour anticiper les coûts et vous permettre de prendre des décisions éclairées.",
    features: [
      {
        icon: "📊",
        title: "Estimation budgétaire",
        desc: "Chiffrage détaillé et prévisionnel dès la phase d'étude pour maîtriser votre enveloppe financière.",
      },
      {
        icon: "📋",
        title: "Descriptifs quantitatifs",
        desc: "Rédaction de métrés et descriptifs précis pour consulter les entreprises sur des bases claires.",
      },
      {
        icon: "⚖️",
        title: "Analyse des offres",
        desc: "Comparatif rigoureux des devis reçus pour sélectionner les meilleures entreprises au juste prix.",
      },
      {
        icon: "📈",
        title: "Suivi financier",
        desc: "Tableau de bord de suivi des dépenses en temps réel pour éviter tout dépassement budgétaire.",
      },
      {
        icon: "🔍",
        title: "Optimisation des coûts",
        desc: "Recherche de solutions alternatives pour réduire les coûts sans sacrifier la qualité du projet.",
      },
      {
        icon: "📄",
        title: "Assistance marchés",
        desc: "Préparation des dossiers de consultation et assistance dans la négociation des contrats.",
      },
    ],
    approachTag: "Notre méthode",
    approachTitle: "Un pilotage financier rigoureux",
    steps: [
      { num: "01", title: "Analyse", desc: "Étude approfondie du projet et définition de l'enveloppe budgétaire." },
      { num: "02", title: "Chiffrage", desc: "Estimation détaillée poste par poste avec métrés précis." },
      { num: "03", title: "Consultation", desc: "Mise en concurrence des entreprises et analyse comparative." },
      { num: "04", title: "Pilotage", desc: "Suivi financier continu jusqu'à la réception du chantier." },
    ],
    ctaTitle: "Un projet à chiffrer ?",
    ctaSub: "Nous vous accompagnons dans la maîtrise de vos coûts.",
    ctaBtn: "Demander un devis",
  },
  en: {
    eyebrow: "Service",
    title: "Construction Economy",
    subtitle:
      "We optimize your project costs without compromising quality. Technical expertise at the service of your construction budget management.",
    introTag: "Our expertise",
    introTitle: "Rigor at the service of your budget",
    introDesc:
      "Construction economy is an essential pillar of every successful project. Our team analyzes, estimates and optimizes every expenditure item to guarantee the best value for money. We intervene from the design phase to anticipate costs and enable you to make informed decisions.",
    features: [
      {
        icon: "📊",
        title: "Budget estimation",
        desc: "Detailed and forecast costing from the study phase to control your financial envelope.",
      },
      {
        icon: "📋",
        title: "Quantity surveys",
        desc: "Preparation of precise measurements and specifications to consult companies on clear bases.",
      },
      {
        icon: "⚖️",
        title: "Offer analysis",
        desc: "Rigorous comparison of received quotes to select the best companies at a fair price.",
      },
      {
        icon: "📈",
        title: "Financial tracking",
        desc: "Real-time expenditure tracking dashboard to avoid any budget overrun.",
      },
      {
        icon: "🔍",
        title: "Cost optimization",
        desc: "Research of alternative solutions to reduce costs without sacrificing project quality.",
      },
      {
        icon: "📄",
        title: "Market assistance",
        desc: "Preparation of consultation files and assistance in contract negotiation.",
      },
    ],
    approachTag: "Our method",
    approachTitle: "Rigorous financial management",
    steps: [
      { num: "01", title: "Analysis", desc: "In-depth project study and definition of the budget envelope." },
      { num: "02", title: "Costing", desc: "Detailed item-by-item estimation with precise measurements." },
      { num: "03", title: "Consultation", desc: "Competitive tendering of companies and comparative analysis." },
      { num: "04", title: "Management", desc: "Continuous financial monitoring until project completion." },
    ],
    ctaTitle: "Got a project to estimate?",
    ctaSub: "We support you in controlling your costs.",
    ctaBtn: "Request a quote",
  },
};

export default function ConsultingPage() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <>
      <Head>
        <title>Économie de construction — CMC Habitat</title>
        <meta
          name="description"
          content="CMC Habitat, économiste de la construction dans les Alpes Maritimes. Maîtrise budgétaire et optimisation des coûts de vos projets."
        />
      </Head>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroBg}>
            <img src="/wallpaper/slide2.png" alt="" />
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
              <img src="/wallpaper/slide2.png" alt={C.title} />
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
