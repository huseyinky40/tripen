"use client";

import { site } from "@/content/site";

/** Sepratör ◆ */
const SEP = (
  <span aria-hidden className="mx-6 text-sand/50 sm:mx-8">
    ◆
  </span>
);

const items = [
  "Tripen Mobil Uygulama",
  "Koleksiyonlar Cebinizde",
  "App Store'da",
  "Google Play'de",
  "Hızlı Sipariş",
  "Yeni Sezon Anlık Bildirim",
  "Ücretsiz İndir",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item) => (
        <span key={item} className="flex shrink-0 items-center font-display text-[0.95rem] font-[440] uppercase tracking-[0.12em] text-paper/80 sm:text-[1.05rem]">
          {item}
          {SEP}
        </span>
      ))}
    </div>
  );
}

export function AppBanner() {
  return (
    <section className="relative overflow-hidden border-t border-paper/10 bg-ink py-5">
      {/* Scrolling ticker */}
      <div
        className="flex w-max animate-[marquee_28s_linear_infinite] items-center"
        style={{ willChange: "transform" }}
      >
        <Track />
        <Track />
        <Track />
      </div>

      {/* Download buttons — overlay at right on desktop, stacked below on mobile */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end">
        {/* Fade mask left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        {/* Fade mask right */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink via-ink/95 to-transparent" />

        <div className="pointer-events-auto relative z-10 mr-5 flex flex-col gap-1.5 sm:mr-8 sm:flex-row sm:gap-3">
          <a
            href={site.app.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-sm border border-sand/30 bg-ink/80 px-3.5 py-2 text-xs font-medium tracking-wide text-sand transition hover:border-sand/60 hover:bg-paper/5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
            </svg>
            App Store
          </a>
          <a
            href={site.app.googlePlay}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-sm border border-sand/30 bg-ink/80 px-3.5 py-2 text-xs font-medium tracking-wide text-sand transition hover:border-sand/60 hover:bg-paper/5"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72zM.5 1.05C.19 1.4 0 1.92 0 2.6v18.8c0 .68.19 1.2.5 1.55l.08.08 10.53-10.53v-.25L.58.97zM20.27 10.3l-2.99-1.73-3.01 3.01 3.01 3.01 3.01-1.75c.86-.49.86-1.29-.02-1.54zM4.17.24l12.6 7.27-2.72 2.72L1.45.23c.35-.34.82-.36 1.28-.07z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
