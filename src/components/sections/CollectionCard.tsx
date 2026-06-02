import Image from "next/image";
import { Placeholder } from "@/components/brand/Placeholder";
import type { Tone } from "@/content/data";
import { cn } from "@/lib/utils";

interface Collection {
  title: string;
  caption: string;
  image?: string;
  tone: Tone;
}

interface CollectionCardProps {
  collection: Collection;
  priority?: boolean;
  className?: string;
}

/**
 * Koleksiyon kartı: görsel varsa gerçek ürün fotoğrafını ince bir çerçeve ve
 * iç boşlukla (mat/passe-partout etkisi) sunar; başlık görselin altında,
 * kontrollü ve minimal şekilde yer alır. Görsel yoksa dokulu placeholder.
 */
export function CollectionCard({ collection, priority, className }: CollectionCardProps) {
  if (!collection.image) {
    return (
      <Placeholder
        label={collection.title}
        caption={collection.caption}
        tone={collection.tone}
        className={className}
      />
    );
  }

  return (
    <figure
      className={cn(
        "group flex flex-col border border-hairline bg-surface p-2.5 transition-colors duration-300 hover:border-hairline-strong",
        className,
      )}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-paper-deep">
        <Image
          src={collection.image}
          alt={`${collection.title} — Tripen koleksiyonundan bir model`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <figcaption className="px-2 pb-1 pt-4">
        <h3 className="font-display text-lg leading-tight text-ink">{collection.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{collection.caption}</p>
      </figcaption>
    </figure>
  );
}
