"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LangContext";

const NAV_LABELS = {
  fr: {
    heroSubtitle:
      "Inspirer la vision, structurer l'espace pour révéler votre lieu de vie",
    heroCta: "Demandez un rendez-vous",
    bgAlt: "Réalisations CMC Habitat",
    logoAlt: "Logo CMC Habitat",
  },
  en: {
    heroSubtitle: "Inspiring vision, structuring space to reveal your living place",
    heroCta: "Book a Consultation",
    bgAlt: "CMC Habitat projects",
    logoAlt: "CMC Habitat Logo",
  },
};

const BACKGROUNDS = [
  "/wallpaper/wallscreen.png",
];
const SLIDE_INTERVAL_MS = 4500;
const FADE_MS = 1400;

export default function Header({ onLoaded }) {
  const { lang } = useLang();
  const L = NAV_LABELS[lang];
  const [bgIndex, setBgIndex] = useState(0);
  const timerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  // Précharge images
  useEffect(() => {
    if (typeof window === "undefined") return;
    BACKGROUNDS.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Slideshow
  useEffect(() => {
    const start = () => {
      if (timerRef.current) return;
      timerRef.current = setInterval(() => {
        setBgIndex((i) => (i + 1) % BACKGROUNDS.length);
      }, SLIDE_INTERVAL_MS);
    };
    const stop = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    const handleVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Flèche scroll
  useEffect(() => {
    const onScroll = () => {
      setShowArrow((window.scrollY || window.pageYOffset || 0) <= 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.hero} style={{ "--fade-ms": `${FADE_MS}ms` }}>

      {/* Images de fond plein écran */}
      {BACKGROUNDS.map((src, i) => (
        <div
          key={src}
          className={`${styles.bgLayer} ${i === bgIndex ? styles.bgVisible : ""}`}
        >
          <Image
            src={src}
            alt={L.bgAlt}
            fill
            className={styles.bg}
            priority={i === 0}
            onLoad={i === 0 ? onLoaded : undefined}
          />
        </div>
      ))}

      {/* Panneau gauche grisé avec bord oblique */}
      <div className={styles.leftPanel}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.heroLogo}>
            <Image
              src="/logo.png"
              alt={L.logoAlt}
              width={300}
              height={104}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </div>

          {/* Sous-titre */}
          <p className={styles.subtitle}>{L.heroSubtitle}</p>

          {/* CTA */}
          <Link href="/contact" className={styles.button}>
            <span>{L.heroCta}</span>
            <ArrowRight size={18} className={styles.buttonIcon} />
          </Link>
        </div>
      </div>

      {/* Flèche scroll */}
      <div
        className={`${styles.scrollArrow} ${showArrow ? "" : styles.scrollArrowHidden}`}
      >
        <span />
      </div>
    </div>
  );
}
