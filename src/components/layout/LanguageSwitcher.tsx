"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";
import { Flag } from "@/components/ui/flags";
import { CheckIcon } from "@/components/ui/icons";
import { setLocale } from "@/i18n/actions";
import { locales, localeMeta, type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  align = "right",
}: {
  className?: string;
  align?: "left" | "right";
}) {
  const current = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(locale: Locale) {
    setOpen(false);
    if (locale === current) return;
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  }

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Dil / Language"
        disabled={pending}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 items-center gap-2 border border-ink/15 px-3 text-sm font-medium text-ink transition-colors hover:border-ink disabled:opacity-60"
      >
        <Flag locale={current} />
        <span>{localeMeta[current].short}</span>
        <svg viewBox="0 0 24 24" className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Dil seçenekleri"
          className={cn(
            "absolute z-50 mt-2 w-44 border border-hairline bg-surface py-1 shadow-soft",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {locales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === current}>
              <button
                type="button"
                onClick={() => choose(locale)}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-paper-deep",
                  locale === current ? "text-ink" : "text-ink/70",
                )}
              >
                <Flag locale={locale} />
                <span>{localeMeta[locale].label}</span>
                {locale === current && <CheckIcon className="ml-auto h-4 w-4 text-sand-deep" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
