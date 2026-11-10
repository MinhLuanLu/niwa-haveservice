import styles from "../styles/Home.module.css";
import checkMark from "../assets/checkmark.png";
import Header from "../components/header";
import logo2 from "../assets/images/lugning-hero.jpg";
import Footer from "../components/footer";
import TrustpilotSection from "../components/trustpilotSection";
import ImageSlider from "../components/imageSlider";
import VideoSection from "../components/videoSection";
import { Link } from "react-router-dom";
import trustpilot from "../data/trustpilot.json";

import BeforeAfterPair from "../components/beforeAfterPair";
import { pairs as galleryPairs, singles as gallerySingles } from "../utils/gallery";

const heroServices = [
  { name: "Hækkeklipning", to: "/services/hækkeklipning" },
  { name: "Japanske beskæringskunst", to: "/services/beskæringskunst" },
  { name: "Beskæring & Fældning", to: "/services/beskaering-faeldning" },
  { name: "Tagrenderensning", to: "/services/tagrenderensning" },
  { name: "Lugning", to: "/services/lugning" },
  { name: "Græsslåning", to: "/services/græsslåning" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            {/* Left: Photo + green overlay + text */}
            <div className={styles.heroImageSide}>
              <img src={logo2} alt="Niwa Haveservice have" className={styles.heroImage} />
              <div className={styles.heroOverlay} />
              <div className={styles.heroLeft}>
                <span className={styles.heroBadge}>Din faglige haveservice</span>
                <h1>Hjælp til havearbejde?</h1>
                <p className={styles.heroTagline}>- En have der føles tryg og rar -</p>
                <div className={styles.heroStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>Års erfaring</span>
                  </div>
                  {/* Trustpilot score – numbers come from src/data/trustpilot.json */}
                  <a
                    className={`${styles.statItem} ${styles.statLink}`}
                    href={trustpilot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.statNumber}>
                      {trustpilot.summary.score}
                      <span className={styles.statStar} aria-hidden="true"> ★</span>
                      <span className={styles.statSource}> Trustpilot</span>
                    </span>
                    <span className={styles.statLabel}>
                      {trustpilot.summary.reviewCount} anmeldelser
                      <span aria-hidden="true"> →</span>
                      <span className={styles.srOnly}> (åbner i en ny fane)</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right service box */}
            <div className={styles.listBox}>
              <h3>Havemand til alle dine behov</h3>
              <ul>
                {heroServices.map((service) => (
                  <li key={service.to}>
                    <Link to={service.to}>
                      <img src={checkMark} alt="" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={styles.pricingSection}>
                <span className={styles.pricingLabel}>Pris</span>
                <p className={styles.pricingValue}>550 kr inkl. Moms.</p>
              </div>

              <Link to="/contact" className={`${styles.btn} ${styles.btnGold}`}>
                KONTAKT MIG →
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentGrid}>
          <div className={styles.logoBig}>
            <ImageSlider />
          </div>

          <div className={styles.textContent}>
            <div className={styles.textBlock}>
              <h2>Tryghed og faste aftaler</h2>
              <p>
                Har du brug for hjælp til havearbejdet, men ønsker
                en rolig og pålidelig løsning?
              </p>
              <p>
                Som din havemand hjælper jeg dig med at holde haven
                pæn, så du kan nyde den uden besvær. Arbejdet udføres roligt, grundigt og med respekt for både haven og dit hjem
              </p>
            </div>

            <div className={styles.textBlock}>
              <h2>Hvad der er vigtigt for mig</h2>
              <p>
                For mig er det vigtigt at holde aftaler og møde op til tiden. Jeg tager mig god tid og lytter til, hvad du gerne vil have lavet, så du får den bedst muligt service og at du føler dig tryg
              </p>
              <p>
                Du kan få hjælp en gang eller aftale en fast hjælp - det er op til dig og, hvornår det passer dig bedst.
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <VideoSection />

        {/* Gallery Preview Section */}
        {(galleryPairs.length > 0 || gallerySingles.length > 0) && (
          <section className={styles.gallerySection}>
            <div className={styles.gallerySectionHeader}>
              <h2>Galleri</h2>
              <p>Se vores arbejde</p>
            </div>

            {galleryPairs.length > 0 ? (
              /* Før / Efter pairs side by side – each links to the gallery */
              <div className={styles.galleryPairGrid}>
                {galleryPairs.slice(0, 2).map((pair, i) => (
                  <Link
                    key={i}
                    to="/gallery"
                    className={styles.galleryPairLink}
                    aria-label={`Se projekt ${i + 1} og flere før- og efterbilleder i galleriet`}
                  >
                    <BeforeAfterPair pair={pair} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className={styles.galleryPreviewGrid}>
                {gallerySingles.slice(0, 4).map((img, i) => (
                  <div key={i} className={styles.galleryPreviewCard}>
                    <img src={img.src} alt={img.alt} className={styles.galleryPreviewImg} loading="lazy" />
                  </div>
                ))}
              </div>
            )}
            <div className={styles.galleryAction}>
              <Link to="/gallery" className={`${styles.btn} ${styles.btnGold}`}>
                Se alle billeder →
              </Link>
            </div>
          </section>
        )}

        {/* Trustpilot Section */}
        <TrustpilotSection />
      </div>

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
