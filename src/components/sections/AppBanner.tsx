"use client";

import { messages } from "@/i18n/messages";
import { useLocale } from "@/i18n/LocaleProvider";
import { site } from "@/content/site";

const SEP = (
  <span aria-hidden className="mx-6 text-sand/40 sm:mx-8">
    ◆
  </span>
);

function Track({ items }: { items: readonly string[] }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item) => (
        <span
          key={item}
          className="flex shrink-0 items-center font-display text-[0.85rem] font-[440] uppercase tracking-[0.14em] text-paper/75 sm:text-[0.9rem]"
        >
          {item}
          {SEP}
        </span>
      ))}
    </div>
  );
}

export function AppBanner() {
  const locale = useLocale();
  const items = messages[locale].appBanner;

  return (
    <a
      href={site.app.web}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={items[0]}
      className="block overflow-hidden bg-ink py-3.5"
    >
      <div
        className="flex w-max animate-[marquee_28s_linear_infinite] items-center"
        style={{ willChange: "transform" }}
      >
        <Track items={items} />
        <Track items={items} />
        <Track items={items} />
      </div>
    </a>
  );
}
