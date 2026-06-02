import Image from "next/image";
import type { Metadata } from "next";
import { Placeholder } from "@/components/brand/Placeholder";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { galleryData } from "@/content/data";
import { getT } from "@/i18n/server";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Galeri",
  description:
    "Tripen Tekstil'den üretim, showroom, koleksiyon ve detay görselleri.",
  path: "/galeri",
  keywords: ["Tripen galeri", "tekstil üretim görselleri", "showroom Merter"],
});

const ratioClasses: Record<string, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[2/3]",
};

export default async function GalleryPage() {
  const { t } = await getT();
  const g = t.gallery;

  return (
    <>
      <PageHeader eyebrow={g.eyebrow} title={g.title} lead={g.lead} />

      <Section>
        <Container>
          <div className="columns-2 gap-4 sm:gap-5 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid sm:[&>*]:mb-5">
            {g.items.map((item, i) => {
              const data = galleryData[i];
              return (
                <Reveal key={i} delay={(i % 3) * 70}>
                  {data?.src ? (
                    <figure
                      className={cn(
                        "group relative isolate overflow-hidden",
                        ratioClasses[data.ratio],
                      )}
                    >
                      <Image
                        src={data.src}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                      <figcaption className="absolute inset-x-5 bottom-5">
                        <span className="block font-display text-lg leading-tight text-paper drop-shadow">
                          {item.label}
                        </span>
                        {item.caption ? (
                          <span className="mt-1 block text-sm text-paper/80">
                            {item.caption}
                          </span>
                        ) : null}
                      </figcaption>
                    </figure>
                  ) : (
                    <Placeholder
                      label={item.label}
                      caption={item.caption}
                      tone={data.tone}
                      ratio={data.ratio}
                    />
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        title={g.ctaTitle}
        text={g.ctaText}
        primary={{ href: "/showroom", label: g.ctaPrimary }}
        secondary={{ href: "/iletisim", label: g.ctaSecondary }}
      />
    </>
  );
}
