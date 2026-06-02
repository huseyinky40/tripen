import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { BrandFacts, PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Hakkımızda",
  description:
    "1996’dan bu yana tasarım, üretim ve toptan giyim alanında çalışıyoruz; kendi koleksiyonlarımızı tasarlayıp üreten bir İstanbul tekstil firmasıyız.",
  path: "/hakkimizda",
  keywords: ["Tripen Tekstil hakkında", "İstanbul tekstil firması", "kadın giyim üreticisi", "toptan giyim"],
});

export default async function AboutPage() {
  const { t } = await getT();
  const a = t.about;

  return (
    <>
      <PageHeader
        eyebrow={a.eyebrow}
        title={
          <>
            {a.title1}
            <br />
            {a.title2}
          </>
        }
        lead={a.lead}
        aside={<BrandFacts facts={t.home.facts} />}
      />

      <Section space="compact">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{a.storyEyebrow}</Eyebrow>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <div className="prose-tripen text-lg">
                {a.story.map((paragraph, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p className={i === 0 ? "!mt-0" : undefined}>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-hairline" space="compact">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{a.valuesEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{a.valuesHeading}</h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {a.values.map((value, i) => (
              <Reveal key={value.title} delay={i * 70}>
                <div className="border-t border-hairline pt-5">
                  <h3 className="font-display text-xl text-ink">{value.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-hairline" space="compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="lg:border-r lg:border-hairline lg:pr-12">
                <Eyebrow withRule>{a.missionLabel}</Eyebrow>
                <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-[1.7rem]">
                  {a.mission}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <Eyebrow withRule>{a.visionLabel}</Eyebrow>
                <p className="mt-6 font-display text-2xl leading-snug text-ink sm:text-[1.7rem]">
                  {a.vision}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection
        title={a.ctaTitle}
        text={a.ctaText}
        primary={{ href: "/iletisim", label: a.ctaPrimary }}
        secondary={{ href: "/uretim-tasarim", label: a.ctaSecondary }}
      />
    </>
  );
}
