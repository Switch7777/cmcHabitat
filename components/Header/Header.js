import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "../context/LangContext";

const LABELS = {
  fr: {
    heroTitle: "CMC Habitat",
    heroSubtitle:
      "Inspirer la vision, structurer l'espace pour révéler votre lieu de vie",
    heroCta: "Demandez un rendez-vous",
    bgAlt: "Réalisations CMC Habitat",
    logoAlt: "Logo CMC Habitat",
  },
  en: {
    heroTitle: "CMC Habitat",
    heroSubtitle:
      "Inspiring vision, structuring space to reveal your living place",
    heroCta: "Book a Consultation",
    bgAlt: "CMC Habitat projects",
    logoAlt: "CMC Habitat Logo",
  },
};

const BACKGROUNDS = [
  "/wallpaper/wallscreen.png",
  "/wallpaper/slide2.png",
  "/wallpaper/slide3.png",
];
const SLIDE_INTERVAL_MS = 4500;
const FADE_MS = 1400;

export default function Header({ onLoaded }) {
  const { lang } = useLang();
  const L = LABELS[lang];
  const [bgIndex, setBgIndex] = useState(0);
  const timerRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  // Preload images
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

  // Scroll arrow
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
      {/* Background images */}
      {BACKGROUNDS.map((src, i) => (
        <div
          key={src}
          className={`${styles.bgLayer} ${i === bgIndex ? styles.bgVisible : ""}`}
        >
          <Image
            src={src}
            alt={L.bgAlt}
            layout="fill"
            objectFit="cover"
            className={styles.bg}
            priority={i === 0}
            onLoadingComplete={i === 0 ? onLoaded : undefined}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className={styles.overlay} />

      {/* Centered content */}
      <div className={styles.content}>
        <div className={styles.heroLogo}>
          <img
            src="/logo.png"
            alt={L.logoAlt}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        
        <p className={styles.subtitle}>{L.heroSubtitle}</p>

        <Link href="/contact">
          <a className={styles.button}>
            <span>{L.heroCta}</span>
            <ArrowRight size={16} className={styles.buttonIcon} />
          </a>
        </Link>
      </div>

      {/* Scroll arrow */}
      <div
        className={`${styles.scrollArrow} ${showArrow ? "" : styles.scrollArrowHidden}`}
      >
        <span />
      </div>
    </div>
  );
}
