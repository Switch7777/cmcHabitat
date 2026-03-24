"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import styles from "./About.module.css";

const CONTENT = {
  fr: {
    tag: "Qui sommes-nous",
    title: "Le Contractant Général version 2.0",
    body: "CMC Habitat est un Contractant Général spécialisé en Second-Œuvre. Nous gérons vos projets dans leur intégralité — de la conception à la réalisation — en maîtrisant le coût, les délais et la qualité. Un interlocuteur unique, une expertise complète.",
    body2: "Dotés d'une double compétence libérale et commerciale, nous piloteons tous les corps de métiers de manière identique, sans privilégier aucun fournisseur. Des prestataires sélectionnés pour leur excellence, à des coûts optimisés.",
    cta: "Demandez un rendez-vous",
    stats: [
      { value: 20, suffix: "+", label: "Années d'expérience" },
      { value: 500, suffix: "+", label: "Projets réalisés" },
      { value: 3, suffix: "", label: "Villes couvertes" },
    ],
  },
  en: {
    tag: "About Us",
    title: "The General Contractor 2.0",
    body: "CMC Habitat is a General Contractor specialized in interior renovation. We manage your projects from start to finish — design, execution, cost control & deadlines. One point of contact, complete expertise.",
    body2: "With dual competencies — both technical and commercial — we coordinate all trades equally, without favoring any supplier. Carefully selected partners, at optimized costs.",
    cta: "Book a Consultation",
    stats: [
      { value: 20, suffix: "+", label: "Years of Experience" },
      { value: 500, suffix: "+", label: "Projects Completed" },
      { value: 3, suffix: "", label: "Cities Covered" },
    ],
  },
};

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className={styles.counterValue}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <section className={styles.about} id="a-propos">
      <div className={styles.inner}>
        {/* Texte */}
        <div className={styles.textCol}>
          <span className={styles.tag}>{C.tag}</span>
          <h2 className={styles.title}>{C.title}</h2>
          <p className={styles.body}>{C.body}</p>
          <p className={styles.body}>{C.body2}</p>
          <a href="/contact" className={styles.cta}>
            {C.cta}
          </a>
        </div>

        {/* Stats */}
        <div className={styles.statsCol}>
          <div className={styles.statsGrid}>
            {C.stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.accentBar} />
          <p className={styles.zone}>
            {lang === "fr"
              ? "Villeneuve-Loubet · Nice · Cagnes-sur-Mer · Alpes Maritimes"
              : "Villeneuve-Loubet · Nice · Cagnes-sur-Mer · French Riviera"}
          </p>
        </div>
      </div>
    </section>
  );
}
