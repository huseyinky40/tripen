import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-ghost";

const base =
  "group inline-flex items-center gap-2.5 font-sans text-sm font-medium leading-none transition-all duration-300 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink px-7 py-4 text-paper hover:bg-sand-deep",
  secondary:
    "border border-ink/25 px-7 py-4 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "py-1 text-ink hover:text-sand-deep",
  // Koyu zemin (CTA) üzerinde: açık zemin + koyu metin, hover'da kum aksanı.
  inverse: "border border-paper/30 bg-paper px-7 py-4 text-ink",
  "inverse-ghost": "bg-sand px-7 py-4 text-ink",
};

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  "aria-label"?: string;
}

/** Link tabanlı CTA. Dış/protokol bağlantılarını otomatik ayırt eder. */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow = true,
  ...rest
}: ButtonLinkProps) {
  const isHttp = href.startsWith("http");
  const isProtocol = isHttp || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      {children}
      {withArrow && <Arrow />}
    </>
  );

  if (isProtocol) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      {content}
    </Link>
  );
}
