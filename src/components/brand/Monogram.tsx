import { cn } from "@/lib/utils";
import { T_GLYPH_PATH, T_GLYPH_VIEWBOX } from "./t-glyph";

interface MonogramProps {
  className?: string;
  /** Verilirse erişilebilir bir görsel olarak işaretlenir. */
  title?: string;
}

/**
 * Marka işareti: orijinal "Tripen" logosundaki gerçek "T" glifi (currentColor ile renklenir).
 */
export function Monogram({ className, title }: MonogramProps) {
  return (
    <svg
      viewBox={T_GLYPH_VIEWBOX}
      className={cn("h-8 w-auto", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path d={T_GLYPH_PATH} fill="currentColor" />
    </svg>
  );
}
