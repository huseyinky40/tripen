import type { ReactNode } from "react";
import { FabricTexture } from "@/components/brand/FabricTexture";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface CTALink {
  href: string;
  label: string;
}

interface CTASectionProps {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  primary?: CTALink;
  secondary?: CTALink;
  tone?: "ink" | "paper";
}

/** Sayfa sonu çağrı bandı. */
export function CTASection({
  eyebrow = "İletişim",
  title,
  text,
  primary,
  secondary,
  tone = "ink",
}: CTASectionProps) {
  const dark = tone === "ink";
  return (
    <Section space="default">
      <Container>
        <Reveal>
          <div
            className={cn(
              "relative isolate overflow-hidden px-7 py-16 sm:px-14 sm:py-20 lg:px-20",
              dark ? "bg-ink text-paper" : "border border-hairline bg-surface text-ink",
            )}
          >
            <FabricTexture
              opacity={dark ? 0.08 : 0.05}
              className={dark ? "text-paper" : "text-ink"}
            />
            <div className="relative max-w-2xl">
              <Eyebrow className={dark ? "!text-sand" : undefined}>{eyebrow}</Eyebrow>
              <h2 className="display-md mt-5">{title}</h2>
              {text ? (
                <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-paper/70" : "text-muted")}>
                  {text}
                </p>
              ) : null}
              {(primary || secondary) && (
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  {primary ? (
                    <ButtonLink href={primary.href} variant={dark ? "inverse" : "primary"}>
                      {primary.label}
                    </ButtonLink>
                  ) : null}
                  {secondary ? (
                    <ButtonLink
                      href={secondary.href}
                      variant={dark ? "inverse-ghost" : "secondary"}
                    >
                      {secondary.label}
                    </ButtonLink>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
