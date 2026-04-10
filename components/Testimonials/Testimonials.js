import { useState, useCallback } from "react";
import { useLang } from "../context/LangContext";
import styles from "./Testimonials.module.css";
import { useReveal } from "../utils/useReveal";

const CONTENT = {
  fr: {
    tag: "Témoignages",
    title: "Ce que disent nos clients",
    testimonials: [
      {
        name: "Mme et M. Dupont",
        location: "Villeneuve-Loubet",
        text: "Nous avons fait appel à CMC Habitat pour la rénovation complète de notre appartement. L'équipe a été professionnelle, à l'écoute et a respecté les délais. Nous sommes ravis du résultat !",
        stars: 5,
      },
      {
        name: "Mme et M. Latapie",
        location: "Nice",
        text: "Un seul interlocuteur pour toute la rénovation, c'est vraiment pratique. La qualité des finitions est impeccable et le chantier s'est déroulé sans mauvaise surprise.",
        stars: 5,
      },
      {
        name: "Mme et M. Grosgogeat Martinez",
        location: "Cagnes-sur-Mer",
        text: "Très satisfaits de notre cuisine sur-mesure. Les délais ont été respectés et le travail est d'une qualité irréprochable. Je recommande CMC Habitat sans hésitation.",
        stars: 5,
      },
    ],
  },
  en: {
    tag: "Testimonials",
    title: "What our clients say",
    testimonials: [
      {
        name: "Mr & Mrs Dupont",
        location: "Villeneuve-Loubet",
        text: "We hired CMC Habitat for the complete renovation of our apartment. The team was professional, attentive and met all deadlines. We are delighted with the result!",
        stars: 5,
      },
      {
        name: "Mr & Mrs Latapie",
        location: "Nice",
        text: "A single point of contact for the entire renovation — it is really convenient. The quality of the finishes is impeccable and the project ran without any unpleasant surprises.",
        stars: 5,
      },
      {
        name: "Mr & Mrs Grosgogeat Martinez",
        location: "Cagnes-sur-Mer",
        text: "Very satisfied with our custom kitchen. Deadlines were met and the work is of impeccable quality. I recommend CMC Habitat without hesitation.",
        stars: 5,
      },
    ],
  },
};

export default function Testimonials() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const { ref, visible } = useReveal();

  const goTo = useCallback(
    (next) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setActive(next);
        setFading(false);
      }, 280);
    },
    [fading]
  );

  const prev = () => goTo((active - 1 + C.testimonials.length) % C.testimonials.length);
  const next = () => goTo((active + 1) % C.testimonials.length);

  const t = C.testimonials[active];

  return (
    <section
      className={`${styles.testimonials} ${visible ? styles.visible : ""}`}
      ref={ref}
      id="temoignages"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>{C.tag}</span>
          <h2 className={styles.title}>{C.title}</h2>
        </div>

        <div className={`${styles.card} ${fading ? styles.fading : ""}`}>
          <div className={styles.stars}>{"★".repeat(t.stars)}</div>
          <blockquote className={styles.quote}>&quot;{t.text}&quot;</blockquote>
          <div className={styles.author}>
            <span className={styles.authorName}>{t.name}</span>
            <span className={styles.authorLocation}>{t.location}</span>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.btn} onClick={prev} aria-label="Précédent">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className={styles.dots}>
            {C.testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.btn} onClick={next} aria-label="Suivant">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
