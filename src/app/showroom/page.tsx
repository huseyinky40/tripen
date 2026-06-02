import type { Metadata } from "next";
import { MapFrame } from "@/components/maps/MapFrame";
import { CTASection } from "@/components/sections/CTASection";
import { LocationCard } from "@/components/sections/LocationCard";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { showroom } from "@/content/site";
import { getT } from "@/i18n/server";
import { JsonLd, localBusinessJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Showroom (Merter)",
  description:
    "Tripen Tekstil satış mağazası — Merter, Güngören/İstanbul. Showroom adresi, haritası ve iletişim bilgileri. Koleksiyonlarımızı yerinde inceleyin.",
  path: "/showroom",
  keywords: ["Merter toptan giyim", "Merter showroom", "Güngören toptan giyim", "toptan kadın giyim Merter"],
});

export default async function ShowroomPage() {
  const { t } = await getT();
  const s = t.showroomPage;

  return (
    <>
      <JsonLd data={localBusinessJsonLd(showroom)} />

      <PageHeader eyebrow={s.eyebrow} title={s.title} lead={s.lead} />

      <Section>
        <Container>
          <Reveal>
            <div className="grid min-h-[26rem] gap-px border border-hairline sm:grid-cols-2">
              <LocationCard location={showroom} className="border-0" />
              <MapFrame location={showroom} />
            </div>
          </Reveal>

          <div className="mt-16 grid gap-10 border-t border-hairline pt-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{s.sectionEyebrow}</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="prose-tripen !mt-0 text-lg">{s.section}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={s.ctaTitle}
        text={s.ctaText}
        primary={{ href: "/iletisim", label: s.ctaPrimary }}
        secondary={{ href: "/fabrika", label: s.ctaSecondary }}
      />
    </>
  );
}
