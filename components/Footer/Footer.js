"use client";

import Link from "next/link";
import { useLang } from "../context/LangContext";
import styles from "./Footer.module.css";

const CONTENT = {
  fr: {
    desc: "Contractant Général spécialisé en Second-Œuvre. Votre projet, de la conception à la livraison, entre les mains d'un expert.",
    links: {
      title: "Liens rapides",
      items: [
        { label: "Accueil", href: "/" },
        { label: "Cuisines", href: "/servicesCuisine" },
        { label: "Salles de bains", href: "/servicesSdb" },
        { label: "Placards & Dressings", href: "/servicesPlacard" },
        { label: "Réalisations", href: "/realisation" },
        { label: "Qui sommes-nous ?", href: "/quiSommesNous" },
        { label: "Contact", href: "/contact" },
      ],
    },
    contact: {
      title: "Nous contacter",
      address: "Villeneuve-Loubet, Alpes Maritimes",
      zone: "Zone d'intervention : 06",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
    },
    copy: "© 2025 CMC Habitat. Tous droits réservés.",
  },
  en: {
    desc: "General Contractor specialized in interior renovation. Your project, from design to delivery, in expert hands.",
    links: {
      title: "Quick links",
      items: [
        { label: "Home", href: "/" },
        { label: "Kitchens", href: "/servicesCuisine" },
        { label: "Bathrooms", href: "/servicesSdb" },
        { label: "Closets", href: "/servicesPlacard" },
        { label: "Projects", href: "/realisation" },
        { label: "About Us", href: "/quiSommesNous" },
        { label: "Contact", href: "/contact" },
      ],
    },
    contact: {
      title: "Get in touch",
      address: "Villeneuve-Loubet, French Riviera",
      zone: "Service area: 06",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
    },
    copy: "© 2025 CMC Habitat. All rights reserved.",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const C = CONTENT[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>CMC Habitat</span>
          <p className={styles.desc}>{C.desc}</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{C.links.title}</h4>
          <ul className={styles.list}>
            {C.links.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>{C.contact.title}</h4>
          <p className={styles.info}>{C.contact.address}</p>
          <p className={styles.info}>{C.contact.zone}</p>
          <p className={styles.info}>contact@cmc-habitat.com</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.link}>{C.contact.legal}</a>
            <a href="#" className={styles.link}>{C.contact.privacy}</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>{C.copy}</p>
      </div>
    </footer>
  );
}
