import { cn } from "@/lib/utils";
import { FabricTexture } from "./FabricTexture";
import { Monogram } from "./Monogram";

type Tone = "paper" | "ink" | "sand";
type Ratio = "portrait" | "square" | "landscape" | "tall";

interface PlaceholderProps {
  /** Tile üzerinde gösterilen kategori/başlık. */
  label: string;
  caption?: string;
  /** Köşedeki sıra numarası, ör. "01". */
  index?: string;
  tone?: Tone;
  ratio?: Ratio;
  className?: string;
}

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper-deep text-ink",
  ink: "bg-ink text-paper",
  sand: "bg-[#e7dccb] text-ink",
};

const ratioClasses: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[2/3]",
};

/**
 * Gerçek fotoğraf yokken kullanılan, kasıtlı tasarlanmış premium görsel tile.
 * "Fotoğraf eksik" hissi vermez; kumaş dokusu + monogram + tipografi ile
 * editöryel bir kategori karesi sunar. Gerçek görseller geldiğinde bu bileşen
 * tek noktadan bir <img>/next-image ile değiştirilebilir.
 */
export function Placeholder({
  label,
  caption,
  index,
  tone = "paper",
  ratio = "portrait",
  className,
}: PlaceholderProps) {
  const monogramTone = tone === "ink" ? "text-sand" : "text-sand-deep";

  return (
    <figure
      className={cn(
        "group relative isolate overflow-hidden",
        ratioClasses[ratio],
        toneClasses[tone],
        className,
      )}
    >
      <FabricTexture
        weave
        gap={9}
        opacity={tone === "ink" ? 0.1 : 0.08}
        className={tone === "ink" ? "text-paper" : "text-ink"}
      />

      {/* İnce iç çerçeve */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-3 border",
          tone === "ink" ? "border-paper/15" : "border-ink/10",
        )}
      />

      {index ? (
        <span
          aria-hidden
          className={cn(
            "numeral absolute left-5 top-4 text-sm opacity-50",
            tone === "ink" ? "text-paper" : "text-ink",
          )}
        >
          {index}
        </span>
      ) : null}

      <span
        aria-hidden
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] transition-transform duration-700 group-hover:-translate-y-[64%]",
          monogramTone,
        )}
      >
        <Monogram className="h-12 w-auto" />
      </span>

      <figcaption className="absolute inset-x-5 bottom-5">
        <span className="block font-display text-lg leading-tight">{label}</span>
        {caption ? (
          <span
            className={cn(
              "mt-1 block text-sm",
              tone === "ink" ? "text-paper/70" : "text-muted",
            )}
          >
            {caption}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
