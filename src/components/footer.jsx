import styles from "../styles/Footer.module.css";
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png";
import { socialLinks } from "../config";
import { servicesTimes } from "../config";


export default function Footer() {



    return(
        <footer className={styles.footer}>
                <div className={styles.footerInner}>
                  <div className={styles.contactSection}>
                    <strong>Niwa Haveservice</strong>
                    <a className={styles.phoneLink} href="tel:+4520141929">Tlf: +45 20141929</a>
                    <p>CVR: 46160568</p>
                    <p>
                        Email: 
                        <a className={styles.emailLink} href="mailto:Niwahaveservice@gmail.com">
                            Niwahaveservice@gmail.com
                        </a>
                    </p>
                  </div>
        
                  <div className={styles.socialSection}>
                    <strong>FØLG MIG</strong>
                    <div className={styles.socialRow}>
                      <a
                        className={styles.socialBtn}
                        href={socialLinks[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook (åbner i en ny fane)"
                      >
                        <img src={facebook} alt="" />
                      </a>
                      <a
                        className={styles.socialBtn}
                        href={socialLinks[1].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram (åbner i en ny fane)"
                      >
                        <img src={instagram} alt="" />
                      </a>
                    </div>
                  </div>
        
                  <div className={styles.footerLinks}>
                        <p className={styles.hoursTitle}>Telefontid:</p>
                        {servicesTimes.map((item, index) => (
                            <div key={index} className={styles.footerLink}>
                                <span>{item.dag}</span>
                                <span style={{paddingLeft:"8px"}}>{item.tid}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p style={{textAlign:"center", margin:0}}>© 2026 Niwa Haveservice · CVR: 46160568</p>
              </footer>
    )
}