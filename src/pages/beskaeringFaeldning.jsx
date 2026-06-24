import React from "react";
import styles from "../styles/BeskaeringFaeldning.module.css";
import heroImage from "../assets/images/beskaering-faeldning-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BeskaeringFaeldning({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Beskæring og fældning"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Fra beskæring til fældning – jeg klarer det hele
            </h1>
            <p className={styles.subtitle}>
              Uanset om træer og buske trænger til en let beskæring eller en fuld
              fældning, står jeg klar til at hjælpe. Jeg udfører arbejdet sikkert,
              effektivt og med respekt for omgivelserne.
            </p>
            <p className={styles.subtitle}>
              Jeg sørger naturligvis også for oprydning, så din have er klar til brug.
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
