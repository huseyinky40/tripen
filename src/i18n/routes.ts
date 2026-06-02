/** Locale'den bağımsız rota yapısı. Etiketler messages içinden gelir. */

export type NavKey =
  | "hakkimizda"
  | "uretim"
  | "kalite"
  | "koleksiyonlar"
  | "galeri"
  | "toptan"
  | "ihracat"
  | "sss"
  | "iletisim";

// Toptan Satış ve İhracat tek bir bölümde birleştirildi (/toptan-satis).
export const navRoutes: { key: NavKey; href: string }[] = [
  { key: "hakkimizda", href: "/hakkimizda" },
  { key: "uretim", href: "/uretim-tasarim" },
  { key: "kalite", href: "/kalite" },
  { key: "koleksiyonlar", href: "/koleksiyonlar" },
  { key: "galeri", href: "/galeri" },
  { key: "toptan", href: "/toptan-satis" },
  { key: "sss", href: "/sss" },
  { key: "iletisim", href: "/iletisim" },
];

export const footerColumns: { titleKey: "corporate" | "workModel"; keys: NavKey[] }[] = [
  { titleKey: "corporate", keys: ["hakkimizda", "uretim", "kalite", "galeri"] },
  { titleKey: "workModel", keys: ["toptan", "koleksiyonlar", "iletisim", "sss"] },
];

export const legalRoutes: { key: "kvkk" | "privacy" | "cookies"; href: string }[] = [
  { key: "kvkk", href: "/kvkk" },
  { key: "privacy", href: "/gizlilik" },
  { key: "cookies", href: "/cerez-politikasi" },
];
