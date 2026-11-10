import { Link } from "react-router-dom";
import styles from "../styles/VideoSection.module.css";

const base = import.meta.env.BASE_URL;

// Add / remove videos here (files live in /public/videos)
const defaultVideos = [
  { file: "video1.mp4", label: "Video 1: Niwa Haveservice på arbejde" },
  { file: "video2.mp4", label: "Video 2: Niwa Haveservice på arbejde" },
];

/**
 * "Se mig på arbejde" – heading + text + call to action, then the videos.
 * Videos only download when the visitor presses play
 * (preload="metadata" loads just the first frame/info).
 */
export default function VideoSection({
  videos = defaultVideos,
  heading = "Se mig på arbejde",
  text = "Få et indblik i, hvordan jeg arbejder – roligt, grundigt og med omhu for din have.",
}) {
  if (videos.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="video-heading">
      <div className={styles.content}>
        <span className={styles.eyebrow}>Video</span>
        <h2 id="video-heading" className={styles.heading}>{heading}</h2>
        <p className={styles.text}>{text}</p>
        <Link to="/contact" className={styles.cta}>
          KONTAKT MIG →
        </Link>
      </div>

      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <video
            key={video.file}
            className={styles.video}
            src={`${base}videos/${video.file}#t=0.5`}
            controls
            playsInline
            preload="metadata"
            aria-label={video.label}
            // Pause the other video when one starts playing
            onPlay={(e) => {
              document
                .querySelectorAll(`.${styles.video}`)
                .forEach((v) => v !== e.currentTarget && v.pause());
            }}
          >
            Din browser kan ikke afspille videoen.
          </video>
        ))}
      </div>
    </section>
  );
}
