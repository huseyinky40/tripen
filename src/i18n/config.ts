/** Dil yapılandırması — locale listesi, çerez adı ve meta. */
export const locales = ["tr", "en", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const LOCALE_COOKIE = "tripen_locale";

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

/** Dil değiştiricide gösterilen ad/kısaltma. */
export const localeMeta: Record<Locale, { label: string; short: string }> = {
  tr: { label: "Türkçe", short: "TR" },
  en: { label: "English", short: "EN" },
  ru: { label: "Русский", short: "RU" },
};
