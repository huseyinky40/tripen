import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  /** Başlığın altına ek içerik (ör. meta satırı). */
  children?: ReactNode;
  /** Sağ tarafta gösterilecek küçük marka/bilgi bloğu (lg+). */
  aside?: ReactNode;
}

/** İç sayfalar için standart editöryel başlık bloğu. */
export function PageHeader({ eyebrow, title, lead, align = "left", children, aside }: PageHeaderProps) {
  const centered = align === "center";
  return (
    <header className="pb-14 pt-16 sm:pb-20 sm:pt-24 lg:pt-28">
      <Container>
        <div
          className={cn(
            aside && !centered ? "grid items-end gap-10 lg:grid-cols-12 lg:gap-12" : undefined,
          )}
        >
          <div className={cn("max-w-3xl", centered && "mx-auto text-center", aside ? "lg:col-span-8" : undefined)}>
            {eyebrow ? (
              <Reveal>
                <Eyebrow withRule={!centered}>{eyebrow}</Eyebrow>
              </Reveal>
            ) : null}
            <Reveal delay={80}>
              <h1 className="display-lg mt-5 text-ink">{title}</h1>
            </Reveal>
            {lead ? (
              <Reveal delay={140}>
                <p className={cn("mt-6 text-lg leading-relaxed text-muted", centered && "mx-auto")}>
                  {lead}
                </p>
              </Reveal>
            ) : null}
            {children ? <Reveal delay={200}>{children}</Reveal> : null}
          </div>

          {aside && !centered ? (
            <Reveal delay={240} className="lg:col-span-4">
              {aside}
            </Reveal>
          ) : null}
        </div>
      </Container>
    </header>
  );
}

/** Sayfa başlığı yanında kullanılan küçük marka bilgileri bloğu. */
export function BrandFacts({ facts }: { facts: { value: string; label: string }[] }) {
  return (
    <dl className="border-t border-hairline lg:pl-2">
      {facts.map((fact, i) => (
        <div key={fact.value} className={i > 0 ? "border-t border-hairline py-4" : "pb-4 pt-4"}>
          <dt className="font-display text-xl text-ink">{fact.value}</dt>
          <dd className="mt-1 text-sm text-muted">{fact.label}</dd>
        </div>
      ))}
    </dl>
  );
}
