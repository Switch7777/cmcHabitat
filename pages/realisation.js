import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLang } from "../components/context/LangContext";
import styles from "../styles/Realisation.module.css";

const PROJECTS = {
  fr: [
    {
      id: 1,
      title: "Villa Méditerranée",
      category: "Rénovation complète",
      filter: "renovation",
      cover: "/wallpaper/wallscreen.png",
      images: ["/wallpaper/wallscreen.png", "/wallpaper/slide2.png", "/wallpaper/slide3.png"],
      description: "Rénovation intégrale d'une villa de 180m² avec vue mer à Nice.",
    },
    {
      id: 2,
      title: "Appartement Promenade",
      category: "Architecture intérieure",
      filter: "architecture",
      cover: "/wallpaper/slide2.png",
      images: ["/wallpaper/slide2.png", "/wallpaper/wallscreen.png", "/wallpaper/slide3.png"],
      description: "Réagencement complet d'un T4 sur la Promenade des Anglais.",
    },
    {
      id: 3,
      title: "Loft Industriel",
      category: "Maîtrise d'œuvre",
      filter: "moe",
      cover: "/wallpaper/slide3.png",
      images: ["/wallpaper/slide3.png", "/wallpaper/slide2.png", "/wallpaper/wallscreen.png"],
      description: "Transformation d'un ancien atelier en loft contemporain à Antibes.",
    },
    {
      id: 4,
      title: "Résidence Le Parc",
      category: "Rénovation complète",
      filter: "renovation",
      cover: "/wallpaper/slide2.png",
      images: ["/wallpaper/slide2.png", "/wallpaper/slide3.png", "/wallpaper/wallscreen.png"],
      description: "Réhabilitation d'une résidence de standing avec terrasse panoramique.",
    },
    {
      id: 5,
      title: "Penthouse Cannes",
      category: "Architecture intérieure",
      filter: "architecture",
      cover: "/wallpaper/wallscreen.png",
      images: ["/wallpaper/wallscreen.png", "/wallpaper/slide3.png", "/wallpaper/slide2.png"],
      description: "Conception d'un penthouse de luxe sur la Croisette.",
    },
    {
      id: 6,
      title: "Maison de Maître",
      category: "Maîtrise d'œuvre",
      filter: "moe",
      cover: "/wallpaper/slide3.png",
      images: ["/wallpaper/slide3.png", "/wallpaper/wallscreen.png", "/wallpaper/slide2.png"],
      description: "Restauration d'une maison bourgeoise du XIXe siècle à Grasse.",
    },
  ],
  en: [
    {
      id: 1,
      title: "Mediterranean Villa",
      category: "Full renovation",
      filter: "renovation",
      cover: "/wallpaper/wallscreen.png",
      images: ["/wallpaper/wallscreen.png", "/wallpaper/slide2.png", "/wallpaper/slide3.png"],
      description: "Full renovation of a 180m² sea-view villa in Nice.",
    },
    {
      id: 2,
      title: "Promenade Apartment",
      category: "Interior architecture",
      filter: "architecture",
      cover: "/wallpaper/slide2.png",
      images: ["/wallpaper/slide2.png", "/wallpaper/wallscreen.png", "/wallpaper/slide3.png"],
      description: "Complete rearrangement of a 4-room apartment on the Promenade des Anglais.",
    },
    {
      id: 3,
      title: "Industrial Loft",
      category: "Project management",
      filter: "moe",
      cover: "/wallpaper/slide3.png",
      images: ["/wallpaper/slide3.png", "/wallpaper/slide2.png", "/wallpaper/wallscreen.png"],
      description: "Transformation of a former workshop into a contemporary loft in Antibes.",
    },
    {
      id: 4,
      title: "Le Parc Residence",
      category: "Full renovation",
      filter: "renovation",
      cover: "/wallpaper/slide2.png",
      images: ["/wallpaper/slide2.png", "/wallpaper/slide3.png", "/wallpaper/wallscreen.png"],
      description: "Rehabilitation of a premium residence with panoramic terrace.",
    },
    {
      id: 5,
      title: "Cannes Penthouse",
      category: "Interior architecture",
      filter: "architecture",
      cover: "/wallpaper/wallscreen.png",
      images: ["/wallpaper/wallscreen.png", "/wallpaper/slide3.png", "/wallpaper/slide2.png"],
      description: "Design of a luxury penthouse on the Croisette.",
    },
    {
      id: 6,
      title: "Manor House",
      category: "Project management",
      filter: "moe",
      cover: "/wallpaper/slide3.png",
      images: ["/wallpaper/slide3.png", "/wallpaper/wallscreen.png", "/wallpaper/slide2.png"],
      description: "Restoration of a 19th-century bourgeois house in Grasse.",
    },
  ],
};

const LABELS = {
  fr: {
    eyebrow: "Portfolio",
    title: "Nos réalisations",
    subtitle: "Découvrez une sélection de projets réalisés dans les Alpes-Maritimes. Chaque réalisation reflète notre savoir-faire et notre exigence de qualité.",
    all: "Tous",
    renovation: "Rénovation",
    architecture: "Architecture",
    moe: "Maîtrise d'œuvre",
    photos: "photos",
  },
  en: {
    eyebrow: "Portfolio",
    title: "Our projects",
    subtitle: "Discover a selection of projects completed in the French Riviera. Each project reflects our expertise and commitment to quality.",
    all: "All",
    renovation: "Renovation",
    architecture: "Architecture",
    moe: "Project management",
    photos: "photos",
  },
};

export default function RealisationPage() {
  const { lang } = useLang();
  const L = LABELS[lang];
  const projects = PROJECTS[lang];
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null); // project object or null
  const [activeIdx, setActiveIdx] = useState(0);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.filter === filter);

  const openModal = (project) => {
    setModal(project);
    setActiveIdx(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModal(null);
    setActiveIdx(0);
    document.body.style.overflow = "";
  };

  const goPrev = useCallback(() => {
    if (!modal) return;
    setActiveIdx((i) => (i === 0 ? modal.images.length - 1 : i - 1));
  }, [modal]);

  const goNext = useCallback(() => {
    if (!modal) return;
    setActiveIdx((i) => (i === modal.images.length - 1 ? 0 : i + 1));
  }, [modal]);

  // Keyboard navigation
  useEffect(() => {
    if (!modal) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modal, goPrev, goNext]);

  return (
    <>
      <Head>
        <title>Nos réalisations — CMC Habitat</title>
        <meta
          name="description"
          content="Découvrez les réalisations de CMC Habitat : rénovation, architecture intérieure et maîtrise d'œuvre dans les Alpes Maritimes."
        />
      </Head>
      <Navbar />

      <main className={styles.page}>
        {/* Hero */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>{L.eyebrow}</span>
            <h1 className={styles.title}>{L.title}</h1>
            <p className={styles.subtitle}>{L.subtitle}</p>
          </div>
        </div>

        <div className={styles.body}>
          {/* Filters */}
          <div className={styles.filters}>
            {["all", "renovation", "architecture", "moe"].map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ""}`}
                onClick={() => setFilter(f)}
                type="button"
              >
                {L[f]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((project) => (
              <div
                key={project.id}
                className={styles.card}
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openModal(project)}
              >
                <img src={project.cover} alt={project.title} className={styles.cardImage} />
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <span className={styles.cardCount}>
                    {project.images.length} {L.photos}
                  </span>
                </div>
                <div className={styles.cardArrow}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3L14 10M3 21l7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal */}
      {modal && (
        <div
          className={styles.modalBackdrop}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className={styles.modal}>
            {/* Header */}
            <div className={styles.modalHeader}>
              <div className={styles.modalInfo}>
                <span className={styles.modalCategory}>{modal.category}</span>
                <h2 className={styles.modalTitle}>{modal.title}</h2>
              </div>
              <button className={styles.modalClose} onClick={closeModal} aria-label="Fermer" type="button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main image */}
            <div className={styles.modalMain}>
              <button
                className={`${styles.modalNav} ${styles.modalPrev}`}
                onClick={goPrev}
                aria-label="Précédent"
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <img
                src={modal.images[activeIdx]}
                alt={`${modal.title} — ${activeIdx + 1}`}
                className={styles.modalMainImage}
              />

              <button
                className={`${styles.modalNav} ${styles.modalNext}`}
                onClick={goNext}
                aria-label="Suivant"
                type="button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Thumbnails */}
            <div className={styles.modalThumbs}>
              {modal.images.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.thumb} ${i === activeIdx ? styles.thumbActive : ""}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <img src={img} alt={`${modal.title} — ${i + 1}`} />
                </div>
              ))}
            </div>

            {/* Counter */}
            <p className={styles.modalCounter}>
              {activeIdx + 1} / {modal.images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
