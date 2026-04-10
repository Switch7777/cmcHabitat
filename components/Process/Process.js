import { useLang } from "../context/LangContext";
import styles from "./Process.module.css";
import { useReveal } from "../utils/useReveal";

const CONTENT = {
  fr: {
    tag: "Nous sommes à vos côtés",
    values: [
      { num: "01", title: "Un interlocuteur", desc: "et une unique facturation" },
      { num: "02", title: "Une conception", desc: "étudiée sur mesure" },
      { num: "03", title: "Organisation complète", desc: "de votre projet" },
      { num: "04", title: "Suivi de chantier", desc: "jusqu'à la livraison" },
    ],
  },
  en: {
    tag: "We are by your side",
    values: [
      { num: "01", title: "Single point of contact", desc: "and one unified invoice" },
      { num: "02", title: "Tailored design", desc: "studied and crafted for you" },
      { num: "03", title: "Full project management", desc: "for your project" },
      { num: "04", title: "Site supervision", desc: "through to final delivery" },
    ],
  },
};

export default function Process() {
  const { lang } = useLang();
  const C = CONTENT[lang];
  const { ref, visible } = useReveal();

  return (
    <section
      className={`${styles.process} ${visible ? styles.visible : ""}`}
      ref={ref}
      id="processus"
    >
      <div className={styles.inner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.tag}>{C.tag}</h2>
        </div>

        <div className={styles.grid}>
          {C.values.map((v, i) => (
            <div key={i} className={styles.item} style={{ "--delay": `${i * 0.1}s` }}>
              <span className={styles.num}>{v.num}</span>
              <div className={styles.itemBody}>
                <strong className={styles.itemTitle}>{v.title}</strong>
                <span className={styles.itemDesc}>{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
