import { useEffect, useRef, useState } from "react";
import styles from "../styles/ImageSlider.module.css";
import defaultSlides from "../data/slider.json";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/**
 * Auto-playing image slider.
 * Images live in /public/images – the list is in src/data/slider.json.
 */
export default function ImageSlider({
  slides = defaultSlides,
  interval = 3000, // ms each image is shown before sliding on
  label = "Billeder af vores arbejde",
}) {
  const [index, setIndex] = useState(0);
  // Visitors who asked for less motion start with autoplay off
  const [userPaused, setUserPaused] = useState(prefersReducedMotion);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const dragStartX = useRef(null);

  const count = slides.length;
  const paused = userPaused || hovered || focused;

  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Autoplay – restarts after every slide change, so manual clicks reset the timer
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(id);
  }, [index, paused, count, interval]);

  // Swipe on touch screens / drag with the mouse
  const onPointerDown = (e) => {
    dragStartX.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  if (count === 0) return null;

  const base = import.meta.env.BASE_URL;

  return (
    <section
      className={styles.slider}
      aria-roledescription="karrusel"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
      onKeyDown={onKeyDown}
    >
      <div
        className={styles.viewport}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (dragStartX.current = null)}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live={paused ? "polite" : "off"}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.file}
              className={styles.slide}
              role="group"
              aria-roledescription="billede"
              aria-label={`${i + 1} af ${count}`}
              aria-hidden={i !== index}
            >
              <img
                src={`${base}images/${slide.file}`}
                alt={slide.alt}
                style={{ objectPosition: slide.position || "center" }}
                draggable="false"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={prev}
              aria-label="Forrige billede"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={next}
              aria-label="Næste billede"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.playPause}
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? "Start automatisk visning" : "Pause automatisk visning"}
          >
            {userPaused ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" className={styles.filled} /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z" className={styles.filled} /></svg>
            )}
          </button>

          <div className={styles.dots}>
            {slides.map((slide, i) => (
              <button
                key={slide.file}
                type="button"
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Vis billede ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
