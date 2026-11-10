import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BeforeAfterPair from "../components/beforeAfterPair";
import styles from "../styles/Gallery.module.css";
import { pairs, singles, images } from "../utils/gallery";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setActiveIndex((i) => Math.max(i - 1, 0));
    };
    if (activeIndex !== null) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Galleri</h1>
            <p className={styles.subtitle}>Et kig på vores arbejde og hverdagen i klubben</p>
          </div>

          {images.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📷</div>
              <p className={styles.emptyTitle}>Billeder kommer snart</p>
              <p className={styles.emptyText}>Vi er i gang med at samle billeder — kig forbi igen.</p>
            </div>
          ) : (
            <>
              {pairs.length > 0 && (
                <div className={styles.pairGrid}>
                  {pairs.map((pair, i) => (
                    <BeforeAfterPair
                      key={i}
                      pair={pair}
                      onOpen={(kind) => setActiveIndex(i * 2 + (kind === "after" ? 1 : 0))}
                    />
                  ))}
                </div>
              )}

              {singles.length > 0 && (
                <div className={styles.grid}>
                  {singles.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      className={styles.card}
                      onClick={() => setActiveIndex(pairs.length * 2 + i)}
                    >
                      <img src={img.src} alt={img.alt} className={styles.image} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {activeIndex !== null && (
        <div className={styles.overlay} onClick={() => setActiveIndex(null)}>
          <button className={styles.closeBtn} onClick={() => setActiveIndex(null)} aria-label="Luk">×</button>

          {activeIndex > 0 && (
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(activeIndex - 1); }}
              aria-label="Forrige"
            >‹</button>
          )}

          <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className={styles.lightboxImg}
            />
            <figcaption className={styles.lightboxCaption}>{images[activeIndex].alt}</figcaption>
          </figure>

          {activeIndex < images.length - 1 && (
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(activeIndex + 1); }}
              aria-label="Næste"
            >›</button>
          )}

          <div className={styles.counter}>{activeIndex + 1} / {images.length}</div>
        </div>
      )}

      <Footer />
    </div>
  );
}
