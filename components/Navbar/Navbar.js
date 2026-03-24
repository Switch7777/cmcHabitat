"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { User } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { useLang } from "../context/LangContext";

const EXTERNAL_URL = "https://www.cmc-habitat.com/";

const NAV_LABELS = {
  fr: {
    home: "Accueil",
    services: "Nos services",
    stepProject: "Les etapes d'un projet",
    consulting: "Consulting",
    architecture: "Architecture et decoration",
    moe: "Maitrise d'oeuvre",
    works: "Nos réalisations",
    aboutUs: "Qui sommes-nous ?",
    cta: "Demandez un rendez-vous",
    outBtn: "CMC Habitat",
    navLabel: "Navigation principale",
    brandAria: "Accueil",
    accountAria: "Mon compte",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  en: {
    home: "Home",
    services: "Our Services",
    stepProject: "Project Stages",
    consulting: "Consulting",
    architecture: "Architecture and Interior Design",
    moe: "Project Management",
    works: "Our Projects",
    aboutUs: "About Us",
    cta: "Book a Consultation",
    outBtn: "CMC Habitat",
    navLabel: "Main navigation",
    brandAria: "Home",
    accountAria: "My account",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
};

export default function Navbar() {
  const { lang, switchLang } = useLang();
  const L = NAV_LABELS[lang] || NAV_LABELS.fr;
const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // scroll → nav solide
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        setSolid(scrollY > 50);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // [] → un seul listener, jamais re-souscrit

  // resize → on ferme le mobile (iPad inclus à 1024px)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${solid ? styles.solid : styles.transparent}`}
        aria-label={L.navLabel}
      >
        {/* Burger (mobile + iPad) - à gauche */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          aria-label={open ? L.menuClose : L.menuOpen}
          onClick={() => {
            setOpen((v) => !v);
            setMobileServicesOpen(false);
          }}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink} aria-label={L.brandAria}>

            <span className={styles.logoWrap}>
              <Image
                src="/logo.png"
                alt="CMC"
                width={166}
                height={60}
                sizes="166px"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </span>

          </Link>
        </div>

        {/* Liens centraux (desktop uniquement) */}
        <div className={styles.links}>
          <Link href="/" className={styles.navItem}>
            {L.home}
          </Link>

          <div className={styles.dropdown}>
            <button
              type="button"
              className={`${styles.servicesLink} ${styles.navItem}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              {L.services}
              <span className={styles.caret} aria-hidden="true">
                ▼
              </span>
            </button>
            <div className={styles.submenu} role="menu">
              <Link href="/stepProject" role="menuitem" className={styles.submenuItem}>

                {L.stepProject}

              </Link>
              <Link href="/consulting" role="menuitem" className={styles.submenuItem}>

                {L.consulting}

              </Link>
              <Link href="/architecture" role="menuitem" className={styles.submenuItem}>

                {L.architecture}

              </Link>
              <Link href="/moe" role="menuitem" className={styles.submenuItem}>

                {L.moe}

              </Link>
             
            </div>
          </div>

          <Link href="/realisation" className={styles.navItem}>
            {L.works}
          </Link>
          <Link href="/quiSommesNous" className={styles.navItem}>
            {L.aboutUs}
          </Link>

          <Link href="/contact" className={styles.cta}>
            {L.cta}
          </Link>
        </div>

        {/* Droite (desktop uniquement) */}
        <div className={styles.rightIcons}>
          
          
          <Link href="/login" className={styles.profileLink} aria-label={L.accountAria}>

            <User size={22} strokeWidth={1.6} />

          </Link>
          <div className={styles.vDivider} aria-hidden="true" />
          <div className={styles.langSwitch} role="group" aria-label="Lang">
            <button
              onClick={() => switchLang("fr")}
              className={`${styles.langBtn} ${
                lang === "fr" ? styles.activeLang : ""
              }`}
              aria-label="Version française"
              type="button"
            >
              <ReactCountryFlag
                countryCode="FR"
                svg
                style={{ width: 24, height: 16, borderRadius: 3 }}
              />
            </button>
            <button
              onClick={() => switchLang("en")}
              className={`${styles.langBtn} ${
                lang === "en" ? styles.activeLang : ""
              }`}
              aria-label="English version"
              type="button"
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: 24, height: 16, borderRadius: 3 }}
              />
            </button>
          </div>
        </div>

        {/* Lang switch mobile + iPad - à droite en dehors du burger */}
        <div className={styles.mobileLangSwitch} role="group" aria-label="Lang">
          <button
            onClick={() => switchLang("fr")}
            className={`${styles.langBtn} ${
              lang === "fr" ? styles.activeLang : ""
            }`}
            aria-label="Version française"
            type="button"
          >
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{ width: 24, height: 16, borderRadius: 3 }}
            />
          </button>
          <button
            onClick={() => switchLang("en")}
            className={`${styles.langBtn} ${
              lang === "en" ? styles.activeLang : ""
            }`}
            aria-label="English version"
            type="button"
          >
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{ width: 24, height: 16, borderRadius: 3 }}
            />
          </button>
        </div>
      </nav>
      {/* Menu mobile + iPad */}
      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileInner}>
          <Link href="/" onClick={() => setOpen(false)}>
            {L.home}
          </Link>

          <button
            className={`${styles.mobileServicesBtn} ${
              mobileServicesOpen ? styles.mobileServicesBtnOpen : ""
            }`}
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen ? "true" : "false"}
            aria-controls="mobile-services-submenu"
            type="button"
          >
            {L.services}
            <span className={styles.caret} aria-hidden="true">
              {mobileServicesOpen ? "^" : "v"}
            </span>
          </button>

          {mobileServicesOpen && (
            <div
              id="mobile-services-submenu"
              className={`${styles.mobileSubmenu} ${styles.mobileSubmenuOpen}`}
            >
              <Link href="/stepProject" onClick={() => setOpen(false)}>
                {L.stepProject}
              </Link>
              <Link href="/servicesSdb" onClick={() => setOpen(false)}>
                {L.servicesBathroom}
              </Link>
              <Link href="/servicesPlacard" onClick={() => setOpen(false)}>
                {L.servicesCloset}
              </Link>
              <Link href={EXTERNAL_URL} onClick={() => setOpen(false)}>
                {L.servicesRenovation}
              </Link>
            </div>
          )}

          <Link href="/realisation" onClick={() => setOpen(false)}>
            {L.works}
          </Link>
          <Link href="/quiSommesNous" onClick={() => setOpen(false)}>
            {L.aboutUs}
          </Link>
          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={() => setOpen(false)}>

            {L.cta}

          </Link>

          <Link
            href="/login"
            className={styles.mobileProfile}
            onClick={() => setOpen(false)}>

            <User size={18} strokeWidth={1.5} />

          </Link>
        </div>
      </div>
    </>
  );
}
