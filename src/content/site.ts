/**
 * Tripen Tekstil — TEK KAYNAK (single source of truth)
 *
 * Adres, telefon, lokasyon ve şirket bilgisi yalnızca burada değişir.
 * Yapı, ileride İngilizce (çok-dilli) içerik eklemeye hazırdır: string'ler
 * gerektiğinde `{ tr, en }` biçimine genişletilebilir; tüketiciler tek
 * `site` nesnesinden okuduğu için kırılma olmaz.
 *
 * TODO (şirket doğrulayacak): işaretli alanlar — bkz. RESEARCH.md
 */

export type LocationKind = "factory" | "showroom";

export interface Location {
  kind: LocationKind;
  /** İnsan-okur adres satırları (olgusal — çevrilmez) */
  addressLines: string[];
  district: string;
  city: string;
  postalCode: string;
  /** Google Maps arama sorgusu (keyless embed + yol tarifi için) */
  mapsQuery: string;
  /** Rota / slug */
  slug: string;
}

export const site = {
  name: "Tripen Tekstil",
  // TODO: şirket doğrulayacak — dizinlerde "Tripen Tekstil ve Model San. Tic. Ltd. Şti." görünüyor.
  legalName: "Tripen Tekstil Model San. Tic. Ltd. Şti.",
  shortName: "Tripen",
  foundedYear: 1996,

  url: "https://tripen.com.tr",

  app: {
    web: "https://tripen.microstore.app/#/shopMain",
    appStore: "https://apps.apple.com/us/app/tripen/id6462440351",
    googlePlay: "https://play.google.com/store/apps/details?id=com.mspe.TRIPENTEKSTILVEMODEL.Tripen",
    developer: "Microstore",
  },

  tagline: "1996’dan bu yana tasarım, üretim ve toptan giyim.",
  description:
    "Tripen Tekstil, 1996’dan bu yana kendi tasarımlarını üreten; yurtiçi ve yurtdışı toptan kadın giyim alanında üretim ve satış yapan bir tekstil firmasıdır.",

  phone: {
    display: "0536 350 64 54",
    tel: "+905363506454",
    whatsapp: "905363506454",
    whatsappMessage:
      "Merhaba, Tripen Tekstil ile toptan satış / koleksiyonlar hakkında görüşmek istiyorum.",
  },

  // TODO: şirket doğrulayacak — kurumsal e-posta verilmedi (form mailto fallback için gerekli).
  email: null as string | null,

  social: {
    instagram: { label: "Instagram", handle: "@tripenmodel", url: "https://www.instagram.com/tripenmodel/" },
    facebook: { label: "Facebook", handle: "tripenmodell", url: "https://www.facebook.com/tripenmodell/" },
    telegram: { label: "Telegram", handle: "@tripenmodel", url: "https://t.me/tripenmodel" },
  },

  locations: [
    {
      kind: "factory",
      addressLines: ["Sultançiftliği Mah.", "2316. Sk. No: 12"],
      district: "Sultangazi",
      city: "İstanbul",
      postalCode: "34265",
      mapsQuery: "Sultançiftliği, 2316. Sk. No:12, 34265 Sultangazi/İstanbul",
      slug: "/fabrika",
    },
    {
      kind: "showroom",
      addressLines: ["Mehmet Nesih Özmen Mah.", "Fidan / Merter Sok. No: 3 B"],
      district: "Güngören",
      city: "İstanbul",
      postalCode: "34173",
      mapsQuery: "Mehmet Nesih Özmen Mahallesi, Merter Sok. No:3 B, 34173 Güngören/İstanbul",
      slug: "/showroom",
    },
  ] as Location[],
};

/** Keyless, interaktif (zoom/pan açık) Google Maps embed URL'i — API key gerektirmez. */
export function mapEmbedUrl(query: string, locale: string = "tr"): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=${locale}&output=embed`;
}

/** "Yol tarifi" / Haritada aç bağlantısı. */
export function mapDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

/** Ön-doldurulmuş WhatsApp bağlantısı. */
export function whatsappUrl(message: string = site.phone.whatsappMessage): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const factory = site.locations[0];
export const showroom = site.locations[1];
