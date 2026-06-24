import React from "react";
import styles from "../styles/Beskaeringskunst.module.css";
import heroImage from "../assets/images/beskaeringskunst-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Beskaeringskunst({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Beskæringskunst"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Form din have med japansk beskæringskunst
            </h1>
            <p className={styles.subtitle}>
              Niwaki er japansk beskæringskunst, hvor træer og buske formes med fokus på
              balance, ro og naturlig skønhed. Gennem omhyggelig beskæring fremhæves
              plantens karakter og struktur, så haven får et harmonisk udtryk.
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
