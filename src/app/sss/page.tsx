import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getT } from "@/i18n/server";
import { JsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Sıkça Sorulan Sorular",
  description:
    "Tripen Tekstil hakkında sıkça sorulan sorular: toptan ve yurtdışı satış, kendi tasarım ürünler, üretim ve satış adresleri, iletişim.",
  path: "/sss",
  keywords: ["Tripen SSS", "toptan giyim soruları", "yurtdışı toptan satış", "tekstil üretim soruları"],
});

export default async function FAQPage() {
  const { t } = await getT();
  const faq = t.faq;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      <PageHeader eyebrow={faq.eyebrow} title={faq.title} lead={faq.lead} />

      <Section>
        <Container size="narrow">
          <FAQAccordion items={faq.items.map((item) => ({ q: item.q, a: item.a }))} />
        </Container>
      </Section>

      <CTASection
        title={faq.ctaTitle}
        text={faq.ctaText}
        primary={{ href: "/iletisim", label: faq.ctaPrimary }}
        secondary={{ href: "/toptan-satis", label: faq.ctaSecondary }}
      />
    </>
  );
}
