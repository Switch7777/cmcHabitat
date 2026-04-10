import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import styles from "../styles/HomeCta.module.css";
import { useReveal } from "../components/utils/useReveal";

function HomeCta() {
  const { ref, visible } = useReveal();
  return (
    <section className={`${styles.cta} ${visible ? styles.visible : ""}`} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>Contact</span>
          <h2 className={styles.title}>Parlons de votre projet</h2>
          <p className={styles.sub}>Premier rendez-vous gratuit et sans engagement.</p>
        </div>
        <Link href="/contact">
          <a className={styles.btn}>
            Demandez un rendez-vous
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>CMC Habitat</title>
        <meta name="description" content="CMC Habitat – Votre partenaire en aménagement intérieur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <WhoWeAre />
      <HomeCta />
      <Footer />
    </>
  );
}
