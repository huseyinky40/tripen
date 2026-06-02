import { CollectionCard } from "@/components/sections/CollectionCard";
import { CTASection } from "@/components/sections/CTASection";
import { LocationCard } from "@/components/sections/LocationCard";
import { MapFrame } from "@/components/maps/MapFrame";
import { Hero } from "@/components/sections/home/Hero";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { collectionData } from "@/content/data";
import { site } from "@/content/site";
import { getT } from "@/i18n/server";

const capabilityHrefs = ["/uretim-tasarim", "/uretim-tasarim", "/toptan-satis"];

export default async function HomePage() {
  const { t } = await getT();
  const h = t.home;

  return (
    <>
      <Hero />

      {/* Marka mesajı */}
      <Section>
        <Container>
          <Reveal>
            <Eyebrow withRule>{h.statementEyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="display-lg mt-7 max-w-4xl text-ink">{h.statement}</p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted">{h.statementLead}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8">
              <ButtonLink href="/hakkimizda" variant="ghost">
                {h.statementLink}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Tasarım + Üretim + Toptan */}
      <Section className="border-t border-hairline" space="compact">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{h.capabilitiesEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{h.capabilitiesHeading}</h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
            {h.capabilities.map((cap, i) => (
              <Reveal key={cap.index} delay={i * 80} className="bg-paper">
                <div className="flex h-full flex-col p-7 sm:p-8">
                  <span aria-hidden className="numeral text-2xl text-sand-deep">
                    {cap.index}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink">{cap.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted">{cap.body}</p>
                  <ButtonLink href={capabilityHrefs[i]} variant="ghost" className="mt-6 text-sm">
                    {cap.cta}
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Koleksiyon önizleme */}
      <Section className="border-t border-hairline">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow withRule>{h.collectionsEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-ink">{h.collectionsHeading}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ButtonLink href="/koleksiyonlar" variant="ghost">
                {h.collectionsAll}
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {t.collections.items.slice(0, 4).map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <CollectionCard collection={{ ...item, ...collectionData[i] }} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Üretim süreci özeti */}
      <Section className="border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow withRule>{h.processEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-ink">{h.processHeading}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md leading-relaxed text-muted">{h.processLead}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <ButtonLink href="/uretim-tasarim" variant="secondary">
                    {h.processCta}
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ol className="border-t border-hairline">
                {t.production.steps.map((step, i) => (
                  <Reveal key={step.title} delay={i * 60}>
                    <li className="flex items-baseline gap-5 border-b border-hairline py-4">
                      <span aria-hidden className="numeral text-lg text-sand-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg text-ink">{step.title}</span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Güven / süreklilik / memnuniyet */}
      <section className="bg-ink text-paper">
        <Container>
          <div className="py-20 sm:py-28">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow className="!text-sand">{h.assuranceEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-paper">{h.assuranceHeading}</h2>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-3">
              {h.assurances.map((a, i) => (
                <Reveal key={a.title} delay={i * 80} className="bg-ink">
                  <div className="h-full p-7 sm:p-8">
                    <h3 className="font-display text-xl text-paper">{a.title}</h3>
                    <p className="mt-3 leading-relaxed text-paper/65">{a.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Lokasyonlar */}
      <Section className="border-t border-hairline">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{h.locationsEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{h.locationsHeading}</h2>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-6">
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

      <CTASection
        eyebrow={t.footer.contact}
        title={h.finalCtaTitle}
        text={h.finalCtaText}
        primary={{ href: "/iletisim", label: h.finalCtaPrimary }}
        secondary={{ href: "/toptan-satis", label: h.finalCtaSecondary }}
      />
    </>
  );
}
