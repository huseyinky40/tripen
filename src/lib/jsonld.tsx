import { site, type Location } from "@/content/site";
import { tr } from "@/i18n/messages/tr";

/** schema.org Organization — root layout'ta render edilir. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    foundingDate: String(site.foundedYear),
    description: site.description,
    telephone: site.phone.tel,
    sameAs: [site.social.instagram.url, site.social.facebook.url],
    address: site.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.addressLines.join(" "),
      addressLocality: loc.district,
      addressRegion: loc.city,
      postalCode: loc.postalCode,
      addressCountry: "TR",
    })),
  };
}

/** schema.org LocalBusiness — fabrika / showroom sayfalarında render edilir (SEO: Türkçe). */
export function localBusinessJsonLd(loc: Location) {
  const text = tr.locations[loc.kind];
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: `${site.name} — ${text.label}`,
    url: `${site.url}${loc.slug}`,
    telephone: site.phone.tel,
    description: text.note,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.addressLines.join(" "),
      addressLocality: loc.district,
      addressRegion: loc.city,
      postalCode: loc.postalCode,
      addressCountry: "TR",
    },
    parentOrganization: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
    },
  };
}

interface JsonLdProps {
  data: object;
}

/**
 * JSON-LD <script> render bileşeni (sunucu bileşeni).
 *
 * `data` tamamen statik site yapılandırmasından gelir (kullanıcı girdisi yok).
 * Yine de güvenlik gereği `<` karakteri kaçışlanarak olası `</script>` çıkışı
 * engellenir — JSON-LD enjeksiyonu için önerilen güvenli kalıp.
 */
export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
