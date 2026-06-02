import { FabricTexture } from "@/components/brand/FabricTexture";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { getT } from "@/i18n/server";

export async function Hero() {
  const { t } = await getT();
  const h = t.home;

  return (
    <section className="relative isolate overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 text-sand sm:h-[26rem] sm:w-[26rem]">
        <FabricTexture
          weave
          gap={11}
          opacity={0.14}
          className="[mask-image:radial-gradient(circle_at_top_right,black,transparent_72%)] [-webkit-mask-image:radial-gradient(circle_at_top_right,black,transparent_72%)]"
        />
      </div>

      <Container size="wide" className="relative grid gap-12 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-12 lg:gap-12 lg:pb-32 lg:pt-28">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow withRule>{h.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-ink [font-size:clamp(2.6rem,1.5rem+4.6vw,5.4rem)] [font-weight:440] [letter-spacing:-0.022em] [line-height:1.02]">
              {h.heroTitle} <span className="text-sand-deep">{h.heroAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{h.lead}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ButtonLink href="/iletisim" variant="primary">
                {h.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="/koleksiyonlar" variant="secondary">
                {h.ctaSecondary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="lg:col-span-5 lg:self-end">
          <div className="flex flex-col gap-7 border-t border-hairline pt-8 lg:pl-10">
            {h.facts.map((fact, i) => (
              <div key={fact.value} className={i > 0 ? "border-t border-hairline pt-7" : undefined}>
                <p className="font-display text-2xl leading-none text-ink sm:text-[1.75rem]">
                  {fact.value}
                </p>
                <p className="mt-2 text-sm text-muted">{fact.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
