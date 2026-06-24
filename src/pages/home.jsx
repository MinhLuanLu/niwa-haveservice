import styles from "../styles/Home.module.css";
import checkMark from "../assets/checkmark.png";
import Header from "../components/header";
import logo from "../assets/images/image1.jpg";
import logo2 from "../assets/images/lugning-hero.jpg";
import leaf from "../assets/leaf.png"
import leaf1 from "../assets/leaf1.png"
import { socialLinks } from "../config";
import { servicesTimes } from "../config";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();
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
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>Tilfredshed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right service box */}
            <div className={styles.listBox}>
              <h3>Havemand til alle dine behov</h3>
              <div className={styles.pricingSection}>
                <span className={styles.pricingLabel}>Pris</span>
                <p className={styles.pricingValue}>550 kr inkl. Moms.</p>
              </div>
              <ul>
                <li onClick={() => navigate("/services/hækkeklipning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Hækkeklipning</span>
                </li>
                <li onClick={() => navigate("/services/japanske-beskæringskunst")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Japanske beskæringskunst</span>
                </li>
                <li onClick={() => navigate("/services/beskaering-faeldning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Beskæring & Fældning</span>
                </li>
                <li onClick={() => navigate("/services/tagrenderensning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Tagrenderensning</span>
                </li>
                <li onClick={() => navigate("/services/lugning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Lugning</span>
                </li>
                <li onClick={() => navigate("/services/græsslåning")}>
                    <img src={checkMark} alt="Checkmark" />
                    <span>Græsslåning</span>
                </li>
              </ul>

              <a
                className={`${styles.btn} ${styles.btnGold}`}
                onClick={() => navigate("/contact")}
              >
                KONTAKT MIG →
              </a>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentGrid}>
          <div className={styles.logoBig}>
            <img className={styles.logoBigImg} src={logo} alt="Logo" />
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
      </div>

      {/* Footer */}
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
