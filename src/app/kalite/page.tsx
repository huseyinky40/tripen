import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Kalite Anlayışımız",
  description:
    "Tripen Tekstil’de kalite; doğru model ve kalıp, uygun kumaş seçimi, dikim ve son kontrol gibi sürecin her aşamasında gözetilir.",
  path: "/kalite",
  keywords: ["tekstil kalite kontrol", "kumaş kalitesi", "dikim kalitesi", "giyim üretim kalitesi"],
});

export default async function QualityPage() {
  const { t } = await getT();
  const q = t.quality;

  return (
    <>
      <PageHeader eyebrow={q.eyebrow} title={q.title} lead={q.lead} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{q.introEyebrow}</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal>
                <p className="prose-tripen !mt-0 text-lg">{q.intro}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-hairline">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{q.pointsEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{q.pointsHeading}</h2>
            </Reveal>
          </div>
          <div className="mt-12">
            <ProcessSteps steps={q.points} />
          </div>
        </Container>
      </Section>

      <CTASection
        title={q.ctaTitle}
        text={q.ctaText}
        primary={{ href: "/iletisim", label: q.ctaPrimary }}
        secondary={{ href: "/uretim-tasarim", label: q.ctaSecondary }}
      />
    </>
  );
}
