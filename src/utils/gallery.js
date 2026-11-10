/*
 * Gallery images from src/assets/gallery.
 * Files named before_N / after_N (same N) become a Før/Efter pair.
 * Any other file (or a before/after without its partner) is a single image.
 */
const modules = import.meta.glob(
  "../assets/gallery/*.{jpg,jpeg,png,webp,gif,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const PAIR_RE = /^(before|after)_(.+)\.\w+$/i;
const pairsByKey = {};
const singleSrcs = [];

Object.entries(modules).forEach(([path, mod]) => {
  const file = path.split("/").pop();
  const match = file.match(PAIR_RE);
  if (match) {
    const [, kind, key] = match;
    pairsByKey[key] ??= {};
    pairsByKey[key][kind.toLowerCase()] = mod.default;
  } else {
    singleSrcs.push(mod.default);
  }
});

const sortKeys = (a, b) => a.localeCompare(b, undefined, { numeric: true });

export const pairs = [];
Object.keys(pairsByKey)
  .sort(sortKeys)
  .forEach((key) => {
    const { before, after } = pairsByKey[key];
    if (before && after) {
      const n = pairs.length + 1;
      pairs.push({
        before: { src: before, alt: `Før – projekt ${n}` },
        after: { src: after, alt: `Efter – projekt ${n}` },
      });
    } else {
      singleSrcs.push(before || after);
    }
  });

export const singles = singleSrcs.map((src, i) => ({
  src,
  alt: `Galleri billede ${i + 1}`,
}));

// Flat list (Før, Efter, Før, Efter … then singles) – used by the lightbox
export const images = [...pairs.flatMap((p) => [p.before, p.after]), ...singles];
