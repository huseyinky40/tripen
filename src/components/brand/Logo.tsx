import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  /** null verilirse bağlantısız (salt görsel) render edilir. */
  href?: string | null;
}

/**
 * Marka kelime-logosu. Orijinal logo SVG'sinden türetilmiş, kırpılmış ve
 * şeffaf zeminli iki varyant kullanır (açık/koyu zeminler için).
 */
export function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  const src = variant === "light" ? "/tripen-logo-light.svg" : "/tripen-logo.svg";
  const image = (
    // Vektör kelime-logo; next/image optimizasyonu gereksiz.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={1465}
      height={712}
      className={cn("h-12 w-auto select-none sm:h-14", className)}
      draggable={false}
    />
  );

  if (href === null) return image;

  return (
    <Link
      href={href}
      aria-label={`${site.name} — ana sayfaya dön`}
      className="inline-flex items-center focus-visible:outline-offset-4"
    >
      {image}
    </Link>
  );
}
