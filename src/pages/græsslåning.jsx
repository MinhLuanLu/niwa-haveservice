import React from "react";
import styles from "../styles/Graesslaaning.module.css";
import heroImage from "../assets/images/graesslaaning-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Graesslaaning({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Græsslåning"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Græsslåning – en pæn plæne uden besvær
            </h1>
            <p className={styles.subtitle}>
              En velklippet græsplæne gør hele haven mere indbydende. Jeg hjælper
              med græsslåning, så du slipper for arbejdet og får en plæne, der ser
              flot ud hele sæsonen.
            </p>
            <p className={styles.subtitle}>
              Oprydning er naturligvis inkluderet – din have efterlades klar til brug.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Ring og hør mere</h2>
        <div className={styles.phoneNumber}>{phone}</div>

        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className={styles.callButton}
        >
          Ring nu
        </a>
      </section>
      <Footer />
    </div>
  );
}
