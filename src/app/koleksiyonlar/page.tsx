import type { Metadata } from "next";
import { CollectionCard } from "@/components/sections/CollectionCard";
import { CTASection } from "@/components/sections/CTASection";
import { BrandFacts, PageHeader } from "@/components/sections/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { collectionData } from "@/content/data";
import { site } from "@/content/site";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Koleksiyonlar",
  description:
    "Tripen Tekstil koleksiyonları: kadın üst giyim, dış giyim, elbise ve takım grubunda kendi tasarım ürünler ile özel üretim ve koleksiyon geliştirme.",
  path: "/koleksiyonlar",
  keywords: ["kadın giyim koleksiyonları", "toptan giyim koleksiyonları", "kadın dış giyim toptan", "koleksiyon geliştirme"],
});

export default async function CollectionsPage() {
  const { t } = await getT();
  const c = t.collections;

  return (
    <>
      <PageHeader
        eyebrow={c.eyebrow}
        title={c.title}
        lead={c.lead}
        aside={<BrandFacts facts={t.home.facts} />}
      />

      <Section space="compact">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
            {c.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <CollectionCard collection={{ ...item, ...collectionData[i] }} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 flex justify-center">
              <ButtonLink href={site.social.instagram.url} variant="secondary">
                {c.instagram}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title={c.ctaTitle}
        text={c.ctaText}
        primary={{ href: "/iletisim", label: c.ctaPrimary }}
        secondary={{ href: "/toptan-satis", label: c.ctaSecondary }}
      />
    </>
  );
}
