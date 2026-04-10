import { useLang } from "../context/LangContext";
import styles from "./About.module.css";
import Link from "next/link";
import { useReveal } from "../utils/useReveal";

const CONTENT = {
  fr: {
    eyebrow: "Notre histoire",
    title: "20 ans\nd'expérience",
    body: "Depuis 20 ans, CMC Habitat met son savoir-faire au service des professionnels et des particuliers pour les accompagner dans la conception et la réalisation de projets d'aménagement intérieur sur-mesure.",
    cta: "Qui sommes-nous ?",
    stats: [
      { value: "20+", label: "Ans d'expérience" },
      { value: "500+", label: "Projets réalisés" },
      { value: "100%", label: "Satisfaction client" },
    ],
  },
  en: {
    eyebrow: "Our story",
    title: "20 years\nof experience",
    body: "For 20 years, CMC Habitat has put its expertise at the service of professionals and individuals, supporting them in the design and execution of custom interior renovation projects.",
    cta: "About Us",
    stats: [
      { value: "20+", label: "Years of experience" },
      { value: "500+", label: "Projects completed" },
      { value: "100%", label: "Client satisfaction" },
    ],
  },
};

export default function About() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const { ref, visible } = useReveal();

  return (
    <section className={`${styles.about} ${visible ? styles.visible : ""}`} ref={ref} id="a-propos">
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>{C.eyebrow}</span>
          <h2 className={styles.title}>
            {C.title.split("\n").map((line, i) => (
              <span key={i} className={styles.titleLine}>{line}</span>
            ))}
          </h2>
          <div className={styles.rule} />
          <p className={styles.body}>{C.body}</p>
          <Link href="/quiSommesNous">
            <a className={styles.cta}>{C.cta}</a>
          </Link>
        </div>

        <div className={styles.statsCol}>
          {C.stats.map((s, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
