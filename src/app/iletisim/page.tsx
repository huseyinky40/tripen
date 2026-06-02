import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapFrame } from "@/components/maps/MapFrame";
import { LocationCard } from "@/components/sections/LocationCard";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "İletişim",
  description:
    "Tripen Tekstil ile iletişim: iletişim formu ve harita. Fabrika (Sultangazi) ve showroom (Merter) adreslerimiz.",
  path: "/iletisim",
  keywords: ["Tripen Tekstil iletişim", "toptan giyim iletişim", "İstanbul tekstil iletişim"],
});

export default async function ContactPage() {
  const { t } = await getT();
  const c = t.contactPage;

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} lead={c.lead} />

      <Section space="compact" className="!pt-2 sm:!pt-4">
        <Container>
          <Reveal className="max-w-3xl">
            <ContactForm />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-hairline" space="compact">
        <Container>
          <Reveal>
            <Eyebrow withRule>{c.locationsEyebrow}</Eyebrow>
          </Reveal>

          <div className="mt-8 flex flex-col gap-10">
            {site.locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 80}>
                <div className="grid min-h-[22rem] gap-px border border-hairline sm:grid-cols-2">
                  <LocationCard location={loc} className="border-0" />
                  <MapFrame location={loc} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
