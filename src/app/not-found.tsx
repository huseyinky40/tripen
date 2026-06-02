import { Monogram } from "@/components/brand/Monogram";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getT } from "@/i18n/server";
import { navRoutes } from "@/i18n/routes";

export default async function NotFound() {
  const { t } = await getT();
  const nf = t.notFound;

  return (
    <section className="flex min-h-[70vh] items-center border-b border-hairline py-24">
      <Container>
        <div className="max-w-2xl">
          <span aria-hidden className="text-sand-deep">
            <Monogram className="h-12 w-auto" />
          </span>
          <Eyebrow className="mt-6 block">{nf.code}</Eyebrow>
          <h1 className="display-xl mt-4 text-ink">{nf.title}</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{nf.lead}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <ButtonLink href="/" variant="primary">
              {nf.home}
            </ButtonLink>
            <ButtonLink href="/iletisim" variant="secondary">
              {nf.contact}
            </ButtonLink>
          </div>

          <nav aria-label={nf.quickLinks} className="mt-12 border-t border-hairline pt-6">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {navRoutes.map((route) => (
                <li key={route.href}>
                  <a
                    href={route.href}
                    className="link-underline text-ink/70 transition-colors hover:text-ink"
                  >
                    {t.nav[route.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </section>
  );
}
