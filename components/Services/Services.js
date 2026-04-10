import Link from "next/link";
import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";
import styles from "./Services.module.css";

const CONTENT = {
  fr: {
    tag: "Nos services",
    services: [
      { title: "Architecte d'intérieur", href: "/architecture", bg: "/wallpaper/wallscreen.png" },
      { title: "Économie de construction", href: "/consulting", bg: "/wallpaper/slide2.png" },
      { title: "Maîtrise d'œuvre", href: "/moe", bg: "/wallpaper/slide3.png" },
    ],
  },
  en: {
    tag: "Our services",
    services: [
      { title: "Interior Architect", href: "/architecture", bg: "/wallpaper/wallscreen.png" },
      { title: "Construction Economy", href: "/consulting", bg: "/wallpaper/slide2.png" },
      { title: "Project Management", href: "/moe", bg: "/wallpaper/slide3.png" },
    ],
  },
};

export default function Services() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const gridRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const cards = gridRef.current?.querySelectorAll("[data-card]");
    if (!cards) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardVisible);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    cards.forEach((card) => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.services} id="services">
      <div className={styles.inner}>
        <h2 className={styles.tag}>{C.tag}</h2>

        <div className={styles.grid} ref={gridRef}>
          {C.services.map((s, i) => (
            <Link href={s.href} key={i}>
              <a
                className={styles.card}
                data-card
                style={{ "--delay": `${i * 0.18}s` }}
              >
                <img src={s.bg} alt={s.title} className={styles.cardImage} />
                <div className={styles.cardOverlay} />
                <span className={styles.cardNumber}>0{i + 1}</span>
                <div className={styles.cardContent}>
                  <span className={styles.cardTitle}>{s.title}</span>
                  <span className={styles.cardArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
