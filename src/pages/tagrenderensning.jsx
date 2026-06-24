import React from "react";
import styles from "../styles/Tagrenderensning.module.css";
import heroImage from "../assets/images/tagrenderensning-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Tagrenderensning({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Tagrenderensning"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Tagrenderensning – undgå skader og tilstopning
            </h1>
            <p className={styles.subtitle}>
              Tilstoppede tagrender kan føre til overløb, fugtproblemer og skader på
              facaden. Med en grundig tagrenderensning sikrer du, at vandet ledes
              korrekt væk fra huset – især i efterår og vinter.
            </p>
            <p className={styles.subtitle}>
              Oprydning er selvfølgelig inkluderet, så alt efterlades rent og ryddeligt.
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
