import Link from "next/link";
import { useLang } from "../context/LangContext";
import { useReveal } from "../utils/useReveal";
import styles from "./WhoWeAre.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Qui sommes-nous",
    title: "Un partenaire unique,\nde A à Z",
    body: "CMC Habitat est un contractant général spécialisé en second-œuvre. Nous pilotons l'intégralité de votre projet — conception, coordination des artisans, suivi de chantier — avec un seul interlocuteur et une seule facture.",
    cta: "En savoir plus",
  },
  en: {
    eyebrow: "Who we are",
    title: "One partner,\nstart to finish",
    body: "CMC Habitat is a general contractor specialized in interior renovation. We manage your entire project — design, coordination of craftsmen, site supervision — with a single point of contact and one invoice.",
    cta: "Learn more",
  },
};

export default function WhoWeAre() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const { ref, visible } = useReveal();

  return (
    <section className={`${styles.section} ${visible ? styles.visible : ""}`} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>{C.eyebrow}</span>
          <h2 className={styles.title}>
            {C.title.split("\n").map((line, i) => (
              <span key={i} className={styles.titleLine}>{line}</span>
            ))}
          </h2>
          <p className={styles.body}>{C.body}</p>
          <Link href="/quiSommesNous">
            <a className={styles.cta}>
              {C.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>

        <div className={styles.imageCol}>
          <img
            src="/wallpaper/slide3.png"
            alt="CMC Habitat"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
