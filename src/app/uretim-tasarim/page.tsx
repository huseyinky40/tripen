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
  title: "Üretim & Tasarım",
  description:
    "Kendi tasarımlarımızdan seri üretime: Tripen Tekstil’in tasarım yaklaşımı, numune, imalat ve kontrol süreci. Modelin bütünlüğünü baştan sona koruyoruz.",
  path: "/uretim-tasarim",
  keywords: ["giyim imalatı", "tekstil üretimi", "kendi tasarım ürünler", "koleksiyon geliştirme", "numune üretimi"],
});

export default async function ProductionPage() {
  const { t } = await getT();
  const p = t.production;

  return (
    <>
      <PageHeader eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{p.approachEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-ink">{p.approachHeading}</h2>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="prose-tripen text-lg">
                {p.approach.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p className={i === 0 ? "!mt-0" : undefined}>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-hairline">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{p.processEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{p.processHeading}</h2>
            </Reveal>
          </div>
          <div className="mt-12">
            <ProcessSteps steps={p.steps} />
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow={p.ctaEyebrow}
        title={p.ctaTitle}
        text={p.ctaText}
        primary={{ href: "/iletisim", label: p.ctaPrimary }}
        secondary={{ href: "/kalite", label: p.ctaSecondary }}
      />
    </>
  );
}
