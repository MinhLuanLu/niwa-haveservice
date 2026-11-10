import styles from "../styles/TrustpilotSection.module.css";
import trustpilot from "../data/trustpilot.json";

export default function TrustpilotSection({
  heading = "Hvad siger vores kunder?",
  description = "Læs vores kunders oplevelser med Niwa Haveservice på Trustpilot.",
  buttonText = "Læs vores anmeldelser på Trustpilot",
  url = trustpilot.url,
  summary = trustpilot.summary,
  reviews = trustpilot.reviews,
}) {
  return (
    <section className={styles.section} aria-labelledby="trustpilot-heading">
      <div className={styles.card}>
        <h2 id="trustpilot-heading" className={styles.heading}>
          {heading}
        </h2>
        <p className={styles.description}>{description}</p>

        {summary && (
          <p className={styles.summary}>
            <strong>TrustScore {summary.score}</strong>
            <span aria-hidden="true"> · </span>
            <span>{summary.reviewCount} anmeldelser på Trustpilot</span>
            {summary.updated && (
              <span className={styles.updated}> (pr. {summary.updated})</span>
            )}
          </p>
        )}

        {reviews?.length > 0 && (
          <ul className={styles.reviewGrid}>
            {reviews.map((review, i) => (
              <li key={`${review.name}-${review.date}-${i}`} className={styles.review}>
                <figure className={styles.figure}>
                  <p
                    className={styles.rating}
                    aria-label={`${review.rating} ud af 5 stjerner`}
                  >
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                  <blockquote className={styles.quote}>
                    <p>“{review.text}”</p>
                  </blockquote>
                  <figcaption className={styles.author}>
                    <span className={styles.name}>{review.name}</span>
                    <span className={styles.date}>{review.date}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}

        <a
          className={styles.button}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logoChip}>
            <img
              src={`${import.meta.env.BASE_URL}images/trustpilot-logo.png`}
              alt=""
              className={styles.logo}
              width="86"
              height="40"
            />
          </span>
          <span className={styles.buttonText}>
            {buttonText}
            <span className={styles.srOnly}> (åbner i en ny fane)</span>
          </span>
          <span className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
