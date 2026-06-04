/** Locale'den bağımsız görsel/yapı verisi. Metinler messages içinden gelir, index ile eşleşir. */

export type Tone = "paper" | "ink" | "sand";
export type Ratio = "portrait" | "square" | "landscape" | "tall";

/** Koleksiyon kartlarının görsel + ton verisi (messages.collections.items ile sıralı eşleşir). */
export const collectionData: { image?: string; tone: Tone }[] = [
  { image: "/instagram/ig-takim.jpg", tone: "ink" },
  { image: "/instagram/ig-03.jpg", tone: "paper" },
  { image: "/instagram/ig-01.jpg", tone: "sand" },
  { image: "/instagram/ig-04.jpg", tone: "paper" },
  { image: "/instagram/ig-05.jpg", tone: "sand" },
  { image: "/instagram/ig-06.jpg", tone: "ink" },
];

/** Galeri kartlarının görsel + ton + oran verisi (messages.gallery.items ile sıralı eşleşir). */
export const galleryData: { tone: Tone; ratio: Ratio; src?: string }[] = [
  { tone: "ink",   ratio: "landscape", src: "/images/sultangazi-fabrika.png" },
  { tone: "paper", ratio: "portrait",  src: "/instagram/ig-01.jpg" },
  { tone: "ink",   ratio: "tall",      src: "/images/merter-showroom-gece.webp" },
  { tone: "paper", ratio: "portrait",  src: "/instagram/ig-07.jpg" },
  { tone: "sand",  ratio: "portrait",  src: "/images/merter-showroom-gunduz.webp" },
  { tone: "ink",   ratio: "portrait",  src: "/instagram/ig-02.jpg" },
  { tone: "paper", ratio: "portrait",  src: "/instagram/ig-05.jpg" },
  { tone: "sand",  ratio: "portrait",  src: "/instagram/ig-04.jpg" },
];
