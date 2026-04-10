import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/About.module.css";

const CONTENT = {
  fr: {
    eyebrow: "À propos",
    title: "Qui sommes-nous ?",
    subtitle:
      "Une équipe passionnée qui transforme vos espaces de vie depuis plus de 15 ans sur la Côte d'Azur.",
    storyTag: "Notre histoire",
    storyTitle: "Bâtir avec passion depuis 2009",
    storyDesc1:
      "CMC Habitat est née de la conviction qu'un projet de rénovation ou de construction doit être une expérience sereine et maîtrisée. Fondée dans les Alpes-Maritimes, notre entreprise réunit architectes d'intérieur, économistes de la construction et maîtres d'œuvre sous un même toit.",
    storyDesc2:
      "Notre approche unique rassemble toutes les compétences nécessaires en un seul interlocuteur : conception, chiffrage, coordination et suivi. Cette vision intégrée nous permet de garantir qualité, transparence et respect des budgets à chaque projet.",
    stats: [
      { number: "15+", label: "Années d'expérience" },
      { number: "200+", label: "Projets réalisés" },
      { number: "100%", label: "Clients satisfaits" },
      { number: "06", label: "Alpes-Maritimes" },
    ],
    valuesTag: "Nos valeurs",
    valuesTitle: "Ce qui guide chaque projet",
    values: [
      {
        icon: "🎯",
        title: "Exigence",
        desc: "Nous visons l'excellence dans chaque détail, de la conception à la finition. Aucun compromis sur la qualité.",
      },
      {
        icon: "🤝",
        title: "Transparence",
        desc: "Un devis clair, un planning respecté, une communication constante. Vous savez toujours où en est votre projet.",
      },
      {
        icon: "💡",
        title: "Innovation",
        desc: "Nous intégrons les dernières tendances en design et les meilleures techniques de construction pour des résultats durables.",
      },
      {
        icon: "🌿",
        title: "Responsabilité",
        desc: "Choix de matériaux écoresponsables, optimisation énergétique et réduction des déchets de chantier.",
      },
      {
        icon: "❤️",
        title: "Passion",
        desc: "Chaque projet est une aventure humaine. Nous mettons notre cœur et notre expertise au service de votre vision.",
      },
      {
        icon: "🏆",
        title: "Engagement",
        desc: "Garanties décennales, assurances professionnelles et suivi post-livraison pour votre tranquillité d'esprit.",
      },
    ],
    expertiseTag: "Notre savoir-faire",
    expertiseTitle: "Trois métiers, une seule équipe",
    expertiseDesc1:
      "Ce qui fait la force de CMC Habitat, c'est la réunion de trois expertises complémentaires au sein d'une même structure : l'architecture intérieure pour imaginer vos espaces, l'économie de la construction pour maîtriser vos coûts, et la maîtrise d'œuvre pour piloter votre chantier.",
    expertiseDesc2:
      "Cette approche intégrée élimine les intermédiaires, fluidifie la communication et garantit une cohérence totale entre la vision initiale et le résultat final. Un seul interlocuteur, une seule facture, zéro stress.",
    ctaTitle: "Envie de travailler ensemble ?",
    ctaSub: "Premier rendez-vous gratuit et sans engagement.",
    ctaBtn: "Nous contacter",
  },
  en: {
    eyebrow: "About",
    title: "Who are we?",
    subtitle:
      "A passionate team transforming your living spaces for over 15 years on the French Riviera.",
    storyTag: "Our story",
    storyTitle: "Building with passion since 2009",
    storyDesc1:
      "CMC Habitat was born from the conviction that a renovation or construction project should be a serene and controlled experience. Founded in the Alpes-Maritimes, our company brings together interior architects, construction economists and project managers under one roof.",
    storyDesc2:
      "Our unique approach brings all the necessary skills together in a single point of contact: design, costing, coordination and monitoring. This integrated vision allows us to guarantee quality, transparency and budget compliance on every project.",
    stats: [
      { number: "15+", label: "Years of experience" },
      { number: "200+", label: "Completed projects" },
      { number: "100%", label: "Satisfied clients" },
      { number: "06", label: "Alpes-Maritimes" },
    ],
    valuesTag: "Our values",
    valuesTitle: "What guides every project",
    values: [
      {
        icon: "🎯",
        title: "Excellence",
        desc: "We aim for excellence in every detail, from design to finishing. No compromise on quality.",
      },
      {
        icon: "🤝",
        title: "Transparency",
        desc: "A clear quote, a respected schedule, constant communication. You always know where your project stands.",
      },
      {
        icon: "💡",
        title: "Innovation",
        desc: "We integrate the latest design trends and best construction techniques for lasting results.",
      },
      {
        icon: "🌿",
        title: "Responsibility",
        desc: "Eco-friendly material choices, energy optimization and construction waste reduction.",
      },
      {
        icon: "❤️",
        title: "Passion",
        desc: "Every project is a human adventure. We put our heart and expertise at the service of your vision.",
      },
      {
        icon: "🏆",
        title: "Commitment",
        desc: "Ten-year warranties, professional insurance and post-delivery follow-up for your peace of mind.",
      },
    ],
    expertiseTag: "Our expertise",
    expertiseTitle: "Three professions, one team",
    expertiseDesc1:
      "What makes CMC Habitat strong is the combination of three complementary skills within one structure: interior architecture to imagine your spaces, construction economy to control your costs, and project management to pilot your site.",
    expertiseDesc2:
      "This integrated approach eliminates intermediaries, streamlines communication and guarantees total consistency between the initial vision and the final result. One contact, one invoice, zero stress.",
    ctaTitle: "Want to work together?",
    ctaSub: "First meeting free and without commitment.",
    ctaBtn: "Contact us",
  },
};

export default function QuiSommesNousPage() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <>
      <Head>
        <title>Qui sommes-nous — CMC Habitat</title>
        <meta
          name="description"
          content="Découvrez l'équipe CMC Habitat : architectes d'intérieur, économistes et maîtres d'œuvre dans les Alpes Maritimes depuis 2009."
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
          {/* Story */}
          <section className={styles.story}>
            <div className={styles.storyText}>
              <span className={styles.sectionTag}>{C.storyTag}</span>
              <h2 className={styles.sectionTitle}>{C.storyTitle}</h2>
              <p className={styles.storyDesc}>{C.storyDesc1}</p>
              <p className={styles.storyDesc}>{C.storyDesc2}</p>
            </div>
            <div className={styles.storyImage}>
              <img src="/wallpaper/slide2.png" alt="CMC Habitat équipe" />
            </div>
          </section>

          {/* Stats */}
          <div className={styles.stats}>
            {C.stats.map((s, i) => (
              <div key={i} className={styles.stat}>
                <span className={styles.statNumber}>{s.number}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Values */}
          <section className={styles.values}>
            <div className={styles.valuesHeader}>
              <span className={styles.sectionTag}>{C.valuesTag}</span>
              <h2 className={styles.sectionTitle}>{C.valuesTitle}</h2>
            </div>
            <div className={styles.valuesGrid}>
              {C.values.map((v, i) => (
                <div key={i} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className={styles.expertise}>
            <div className={styles.expertiseText}>
              <span className={styles.sectionTag}>{C.expertiseTag}</span>
              <h2 className={styles.sectionTitle}>{C.expertiseTitle}</h2>
              <p className={styles.storyDesc}>{C.expertiseDesc1}</p>
              <p className={styles.storyDesc}>{C.expertiseDesc2}</p>
            </div>
            <div className={styles.expertiseImage}>
              <img src="/wallpaper/slide3.png" alt="CMC Habitat expertise" />
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
