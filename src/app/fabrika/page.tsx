import type { Metadata } from "next";
import { MapFrame } from "@/components/maps/MapFrame";
import { CTASection } from "@/components/sections/CTASection";
import { LocationCard } from "@/components/sections/LocationCard";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { factory } from "@/content/site";
import { getT } from "@/i18n/server";
import { JsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Fabrika (Sultangazi)",
  description:
    "Tripen Tekstil üretim tesisi — Sultangazi/İstanbul. Tasarım, numune ve imalatın yürütüldüğü fabrikamızın adresi, haritası ve iletişim bilgileri.",
  path: "/fabrika",
  keywords: ["Sultangazi tekstil üretimi", "tekstil fabrikası İstanbul", "giyim imalatı Sultangazi"],
});

export default async function FactoryPage() {
  const { t } = await getT();
  const f = t.factoryPage;

  return (
    <>
      <JsonLd data={localBusinessJsonLd(factory)} />

      <PageHeader eyebrow={f.eyebrow} title={f.title} lead={f.lead} />

      <Section>
        <Container>
          <Reveal>
            <div className="grid min-h-[26rem] gap-px border border-hairline sm:grid-cols-2">
              <LocationCard location={factory} className="border-0" />
              <MapFrame location={factory} />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{f.sectionEyebrow}</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="prose-tripen !mt-0 text-lg">{f.section}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={f.ctaTitle}
        text={f.ctaText}
        primary={{ href: "/iletisim", label: f.ctaPrimary }}
        secondary={{ href: "/showroom", label: f.ctaSecondary }}
      />
    </>
  );
}
