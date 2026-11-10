import styles from "../styles/BeforeAfterPair.module.css";

const LABELS = { before: "Før", after: "Efter" };

/**
 * Før / Efter photos side by side.
 * - With `onOpen`, each photo is a button (e.g. to open a lightbox).
 * - Without it, the photos are plain images (wrap the pair in a link yourself).
 */
export default function BeforeAfterPair({ pair, onOpen, className = "" }) {
  return (
    <figure className={`${styles.pair} ${className}`}>
      <div className={styles.images}>
        {["before", "after"].map((kind) => {
          const content = (
            <>
              <img
                src={pair[kind].src}
                alt={pair[kind].alt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
              <span
                className={`${styles.badge} ${kind === "after" ? styles.badgeAfter : ""}`}
                aria-hidden="true"
              >
                {LABELS[kind]}
              </span>
            </>
          );

          return onOpen ? (
            <button
              key={kind}
              type="button"
              className={styles.half}
              onClick={() => onOpen(kind)}
              aria-label={`Forstør: ${pair[kind].alt}`}
            >
              {content}
            </button>
          ) : (
            <div key={kind} className={styles.half}>
              {content}
            </div>
          );
        })}
      </div>
    </figure>
  );
}
