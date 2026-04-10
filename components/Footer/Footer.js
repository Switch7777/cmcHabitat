import Link from "next/link";
import { useLang } from "../context/LangContext";
import styles from "./Footer.module.css";

const CONTENT = {
  fr: {
    eyebrow: "Vous avez un projet ?",
    headline: "Parlons-en.",
    email: "contact@cmc-habitat.com",
    nav: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Réalisations", href: "/realisation" },
      { label: "Qui sommes-nous ?", href: "/quiSommesNous" },
      { label: "Contact", href: "/contact" },
    ],
    legal: "Mentions légales",
    privacy: "Confidentialité",
    copy: "© 2025 CMC Habitat — Alpes Maritimes 06",
  },
  en: {
    eyebrow: "Got a project?",
    headline: "Let's talk.",
    email: "contact@cmc-habitat.com",
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Projects", href: "/realisation" },
      { label: "About Us", href: "/quiSommesNous" },
      { label: "Contact", href: "/contact" },
    ],
    legal: "Legal Notice",
    privacy: "Privacy",
    copy: "© 2025 CMC Habitat — French Riviera 06",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <footer className={styles.footer}>
      

      {/* Bottom strip */}
      <div className={styles.strip}>
        <img src="/logo.png" alt="CMC Habitat" className={styles.logo} />

        <nav className={styles.nav}>
          {C.nav.map((item) => (
            <Link href={item.href} key={item.label}>
              <a className={styles.navLink}>{item.label}</a>
            </Link>
          ))}
        </nav>

        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.houzz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Houzz"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.5 0L5.4 3.56v6.26l-2.09 1.2v9.42L12.5 24l9.19-3.56v-9.42L12.5 6.07V0zm0 2.93v5.29l-4.82 2.77V5.7L12.5 2.93zm-5.01 9.08l5.01-2.87 5.01 2.87v5.75l-5.01 2.87-5.01-2.87V12.01z" />
            </svg>
          </a>
        </div>

        <div className={styles.right}>
          <p className={styles.copy}>{C.copy}</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>{C.legal}</a>
            <span className={styles.dot} />
            <a href="#" className={styles.legalLink}>{C.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
