import React from "react";
import styles from "../styles/Hækkeklipning.module.css";
import heroImage from "../assets/images/hækkeklipning-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Hækkeklipning({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
        <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Hækkeklipning"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Giv haven et løft med den rette hækkeklipning
            </h1>
            <p className={styles.subtitle}>
              Få en flot og velplejet hæk uden besvær. Jeg sikrer et ensartet og
                pænt resultat, som passer perfekt til din have uanset hækkens type
                og størrelse.
            </p>
            <p className={styles.subtitle}>
                Jeg sørger naturligvis også for oprydning så din have er klar til brug.
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
