"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Container } from "@/components/ui/Container";
import {
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  SmartphoneIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { site, whatsappUrl } from "@/content/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { navRoutes } from "@/i18n/routes";
import { cn } from "@/lib/utils";

export function Header() {
  const locale = useLocale();
  const t = messages[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const nav = navRoutes.map((route) => ({ href: route.href, label: t.nav[route.key] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus?.focus?.();
    };
  }, [open]);

  const isActive = useCallback(
    (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href)),
    [pathname],
  );

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-hairline bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-paper/60 backdrop-blur-sm",
        )}
      >
        <Container size="wide" className="flex h-20 items-center justify-between gap-4 lg:h-24">
          <Logo className="translate-y-[2px]" />

          <nav aria-label="Ana menü" className="hidden lg:block">
            <ul className="flex items-center gap-x-5 xl:gap-x-6">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "link-underline whitespace-nowrap text-[0.875rem] transition-colors",
                      isActive(link.href) ? "text-ink" : "text-ink/65 hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden lg:block" />

            <div className="hidden items-center gap-2 xl:flex">
              <a
                href={`tel:${site.phone.tel}`}
                aria-label={`${t.header.phoneAria}: ${site.phone.display}`}
                title={site.phone.display}
                className="inline-flex h-11 w-11 items-center justify-center bg-ink text-paper"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} Telegram`}
                className="inline-flex h-11 w-11 items-center justify-center bg-sand-deep text-paper"
              >
                <TelegramIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl(t.wa.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} WhatsApp`}
                className="inline-flex h-11 w-11 items-center justify-center bg-sand text-ink"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={site.app.web}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tripen App"
                title="Tripen App"
                className="inline-flex h-11 w-11 items-center justify-center bg-muted text-paper"
              >
                <SmartphoneIcon className="h-5 w-5" />
              </a>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.header.menuOpen}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobil çekmece */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.header.siteMenu}
        className={cn(
          "fixed inset-0 z-50 transition-[opacity,visibility] duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <button
          type="button"
          aria-label={t.header.menuClose}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-ink/40 backdrop-blur-sm"
        />
        <div
          ref={panelRef}
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper px-6 pb-6 pt-8 shadow-soft transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo href={null} />
            <button
              type="button"
              data-autofocus
              onClick={() => setOpen(false)}
              aria-label={t.header.menuClose}
              tabIndex={open ? 0 : -1}
              className="inline-flex h-11 w-11 items-center justify-center text-ink"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>

          <nav aria-label="Mobil menü" className="mt-4">
            <ul className="flex flex-col divide-y divide-hairline border-y border-hairline">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-2.5 font-display text-lg transition-colors",
                      isActive(link.href) ? "text-sand-deep" : "text-ink hover:text-sand-deep",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex flex-col gap-2">
            <LanguageSwitcher className="self-start" align="left" />
            <a
              href={whatsappUrl(t.wa.general)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center justify-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.header.whatsappWrite}
            </a>
            <a
              href={site.app.web}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="inline-flex items-center justify-center border border-ink/20 px-5 py-3 text-sm font-medium text-ink"
            >
              <SmartphoneIcon className="mr-2 h-4 w-4" />
              Tripen App
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
