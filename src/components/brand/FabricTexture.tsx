import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface FabricTextureProps {
  className?: string;
  /** Çizgi açısı (derece). 45 = twill/diyagonal dokuma hissi. */
  angle?: number;
  /** Çizgi aralığı (px). */
  gap?: number;
  opacity?: number;
  /** İkinci bir ters açılı katman ekleyerek dokuma (weave) hissi verir. */
  weave?: boolean;
}

/**
 * CSS tabanlı, hafif kumaş/dokuma dokusu. Dekoratiftir (aria-hidden),
 * id çakışması yaratmaz, sınırsız tekrar kullanılabilir.
 */
export function FabricTexture({
  className,
  angle = 45,
  gap = 7,
  opacity = 0.07,
  weave = false,
}: FabricTextureProps) {
  const line = (a: number) =>
    `repeating-linear-gradient(${a}deg, currentColor 0, currentColor 0.6px, transparent 0.6px, transparent ${gap}px)`;

  const style: CSSProperties = {
    opacity,
    backgroundImage: weave ? `${line(angle)}, ${line(angle + 90)}` : line(angle),
  };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={style}
    />
  );
}
