import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import {
  AppleIcon,
  FacebookIcon,
  GlobeIcon,
  GooglePlayIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { site, whatsappUrl } from "@/content/site";
import { getT } from "@/i18n/server";
import { footerColumns, legalRoutes, navRoutes } from "@/i18n/routes";

export async function Footer() {
  const { t } = await getT();
  const year = new Date().getFullYear();
  const hrefOf = (key: string) => navRoutes.find((r) => r.key === key)?.href ?? "/";

  const socials = [
    { label: "Instagram", url: site.social.instagram.url, Icon: InstagramIcon },
    { label: "Facebook", url: site.social.facebook.url, Icon: FacebookIcon },
    { label: "Telegram", url: site.social.telegram.url, Icon: TelegramIcon },
    { label: "WhatsApp", url: whatsappUrl(t.wa.general), Icon: WhatsAppIcon },
    { label: site.phone.display, url: `tel:${site.phone.tel}`, Icon: PhoneIcon },
  ];

  return (
    <footer className="bg-ink text-paper">
      <Container size="wide" className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Marka bloğu */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 max-w-xs text-pretty text-paper/60">{t.footer.tagline}</p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center border border-paper/15 text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Tripen Uygulaması */}
            <div className="mt-8 flex items-center gap-4 border-t border-paper/10 pt-8">
              <Image
                src="/images/tripen-app-icon.jpg"
                alt="Tripen App"
                width={56}
                height={56}
                className="rounded-xl"
              />
              <div className="flex-1">
                <p className="text-base font-medium text-paper/90">Tripen Sipariş Uygulaması</p>
                <div className="mt-2 flex items-center gap-4">
                  <a href={site.app.appStore} target="_blank" rel="noopener noreferrer" aria-label="App Store" className="text-paper/50 transition-colors hover:text-paper">
                    <AppleIcon className="h-5 w-5" />
                  </a>
                  <a href={site.app.googlePlay} target="_blank" rel="noopener noreferrer" aria-label="Google Play" className="text-paper/50 transition-colors hover:text-paper">
                    <GooglePlayIcon className="h-4.5 w-4.5" />
                  </a>
                  <a href={site.app.web} target="_blank" rel="noopener noreferrer" aria-label="Web" className="text-paper/50 transition-colors hover:text-paper">
                    <GlobeIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigasyon sütunları */}
          <nav aria-label={t.footer.corporate} className="grid grid-cols-2 gap-8 lg:col-span-7">
            {footerColumns.map((column) => (
              <div key={column.titleKey}>
                <h2 className="eyebrow !text-paper/45">{t.footer[column.titleKey]}</h2>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {column.keys.map((key) => (
                    <li key={key}>
                      <Link
                        href={hrefOf(key)}
                        className="text-paper/70 transition-colors hover:text-paper"
                      >
                        {t.nav[key]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

        </div>
      </Container>

      {/* Alt bar */}
      <div className="border-t border-paper/12">
        <Container size="wide" className="flex flex-col gap-4 py-7 text-sm text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} · {t.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalRoutes.map((route) => (
              <li key={route.key}>
                <Link href={route.href} className="transition-colors hover:text-paper">
                  {t.legal[route.key].title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
