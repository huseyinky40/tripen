import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AppleIcon, GlobeIcon, GooglePlayIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site, whatsappUrl } from "@/content/site";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Toptan Satış & İhracat",
  description:
    "Tripen Tekstil ile yurtiçi ve yurtdışı toptan giyim ve ihracat. Kendi tasarım ve üretimimizle uzun soluklu iş ortaklıkları kuruyoruz.",
  path: "/toptan-satis",
  keywords: ["toptan giyim", "toptan kadın giyim", "Merter toptan giyim", "yurtiçi ve yurtdışı toptan satış", "tekstil ihracat İstanbul", "wholesale clothing Turkey"],
});

export default async function WholesalePage() {
  const { t } = await getT();
  const w = t.wholesale;
  const e = t.exportPage;

  return (
    <>
      <PageHeader eyebrow={w.eyebrow} title={w.title} lead={w.lead} />

      {/* Yurtiçi / Yurtdışı */}
      <Section space="compact">
        <Container>
          <div className="grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
            <Reveal className="bg-paper">
              <div className="flex h-full flex-col p-8 sm:p-12">
                <Eyebrow>{w.domesticEyebrow}</Eyebrow>
                <h2 className="display-md mt-3 text-ink">{w.domesticTitle}</h2>
                <p className="mt-5 leading-relaxed text-muted">{w.domesticBody}</p>
              </div>
            </Reveal>
            <Reveal delay={100} className="bg-paper">
              <div className="flex h-full flex-col p-8 sm:p-12">
                <Eyebrow>{w.intlEyebrow}</Eyebrow>
                <h2 className="display-md mt-3 text-ink">{w.intlTitle}</h2>
                <p className="mt-5 leading-relaxed text-muted">{w.intlBody}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* İhracat hizmetleri */}
      <Section className="border-t border-hairline" space="compact">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow withRule>{e.servicesEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 text-ink">{e.title}</h2>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {e.services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 2) * 80}>
                <div className="flex gap-5 border-t border-hairline pt-5">
                  <span aria-hidden className="numeral text-2xl text-sand-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{service.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{service.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sipariş akışı */}
      <Section className="border-t border-hairline">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow withRule>{w.flowEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-ink">{w.flowHeading}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 leading-relaxed text-muted">{w.flowLead}</p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-hairline">
                {w.flow.map((step, i) => (
                  <Reveal key={step.title} delay={i * 60}>
                    <li className="grid gap-3 border-b border-hairline py-7 sm:grid-cols-[4rem_1fr] sm:gap-8">
                      <span aria-hidden className="numeral text-2xl text-sand-deep">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl text-ink">{step.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted">{step.body}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tripen Uygulaması */}
      <Section className="border-t border-hairline" space="compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow withRule>{w.appEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-6 text-ink">{w.appTitle}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 leading-relaxed text-muted">{w.appBody}</p>
              </Reveal>
            </div>
            <div className="flex items-center lg:col-span-7">
              <Reveal delay={100} className="w-full">
                <div className="flex flex-col gap-8">
                  {/* App kimliği */}
                  <div className="flex items-center gap-5">
                    <Image
                      src="/images/tripen-app-icon.jpg"
                      alt="Tripen App"
                      width={96}
                      height={96}
                      className="rounded-[22px] shadow-md"
                    />
                    <div>
                      <p className="font-display text-2xl text-ink">Tripen</p>
                      <p className="mt-1.5 text-sm text-muted">iOS · Android · Web</p>
                    </div>
                  </div>
                  {/* Store butonları */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={site.app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-60"
                    >
                      <AppleIcon className="h-5 w-5" />
                      {w.appStore}
                    </a>
                    <a
                      href={site.app.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-60"
                    >
                      <GooglePlayIcon className="h-4 w-4" />
                      {w.appGoogle}
                    </a>
                    <a
                      href={site.app.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-60"
                    >
                      <GlobeIcon className="h-4 w-4" />
                      {w.appWeb}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        eyebrow={w.ctaEyebrow}
        title={w.ctaTitle}
        text={`${w.ctaText} ${site.phone.display}`}
        primary={{ href: whatsappUrl(t.wa.general), label: w.ctaPrimary }}
        secondary={{ href: "/iletisim", label: w.ctaSecondary }}
      />
    </>
  );
}
