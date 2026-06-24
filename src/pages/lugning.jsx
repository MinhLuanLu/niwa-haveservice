import React from "react";
import styles from "../styles/Lugning.module.css";
import heroImage from "../assets/images/lugning-hero.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Lugning({ phone = "20 14 19 29" }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* Full Screen Hero */}
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt="Lugning"
          className={styles.heroImage}
        />

        <div className={styles.overlay}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Lugning – rene bede og en pænere have
            </h1>
            <p className={styles.subtitle}>
              Ukrudt kan hurtigt tage overhånd og gøre haven rodet at se på. Med
              regelmæssig lugning holder du bede, kanter og fliser pæne, så dine
              planter får bedre plads og lys til at trives.
            </p>
            <p className={styles.subtitle}>
              Oprydning er naturligvis inkluderet – haven efterlades ryddelig og klar
              til brug.
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
