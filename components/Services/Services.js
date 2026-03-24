"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";
import styles from "./Services.module.css";

const CONTENT = {
  fr: {
    tag: "Nos services",
    title: "Des solutions sur-mesure pour chaque projet",
    subtitle: "De la cuisine au dressing, nous concevons et réalisons vos espaces avec précision et élégance.",
    services: [
      {
        icon: "🍳",
        title: "Cuisines",
        desc: "Conception et installation de cuisines haut de gamme, alliant fonctionnalité et esthétique. Du premier croquis à la livraison clé en main.",
        href: "/servicesCuisine",
        label: "Découvrir",
      },
      {
        icon: "🛁",
        title: "Salles de bains",
        desc: "Rénovation complète de salles de bains. Carrelage, plomberie, sanitaires, éclairage — nous gérons chaque détail.",
        href: "/servicesSdb",
        label: "Découvrir",
      },
      {
        icon: "🚪",
        title: "Placards & Dressings",
        desc: "Solutions de rangement sur-mesure, conçus pour s'intégrer parfaitement à votre intérieur et maximiser l'espace.",
        href: "/servicesPlacard",
        label: "Découvrir",
      },
      {
        icon: "🏗️",
        title: "Rénovations",
        desc: "Rénovation partielle ou complète d'appartements, villas et locaux commerciaux. Nous gérons l'ensemble des corps de métiers.",
        href: "/renovation",
        label: "Découvrir",
      },
    ],
  },
  en: {
    tag: "Our Services",
    title: "Tailored solutions for every project",
    subtitle: "From kitchens to walk-in closets, we design and build your spaces with precision and elegance.",
    services: [
      {
        icon: "🍳",
        title: "Kitchens",
        desc: "Design and installation of premium kitchens, combining functionality and aesthetics. From first sketch to turnkey delivery.",
        href: "/servicesCuisine",
        label: "Discover",
      },
      {
        icon: "🛁",
        title: "Bathrooms",
        desc: "Complete bathroom renovation. Tiling, plumbing, fixtures, lighting — we handle every detail.",
        href: "/servicesSdb",
        label: "Discover",
      },
      {
        icon: "🚪",
        title: "Closets & Dressings",
        desc: "Custom storage solutions, designed to perfectly integrate into your home and maximize space.",
        href: "/servicesPlacard",
        label: "Discover",
      },
      {
        icon: "🏗️",
        title: "Renovations",
        desc: "Partial or complete renovation of apartments, villas and commercial spaces. We coordinate all trades.",
        href: "/renovation",
        label: "Discover",
      },
    ],
  },
};

export default function Services() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.tag}>{C.tag}</span>
          <h2 className={styles.title}>{C.title}</h2>
          <p className={styles.subtitle}>{C.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {C.services.map((s, i) => (
            <Link href={s.href} key={i} className={styles.card}>
              <span className={styles.cardIcon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>
                {s.label}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
