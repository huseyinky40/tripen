import { mapEmbedUrl, type Location } from "@/content/site";
import { getT } from "@/i18n/server";
import { cn } from "@/lib/utils";

/**
 * Tek lokasyon için API key gerektirmeyen, etkileşimli (zoom/pan) Google Maps
 * iframe embed. Lazy-load ve erişilebilir, dile göre title ile.
 */
export async function MapFrame({ location, className }: { location: Location; className?: string }) {
  const { locale, t } = await getT();
  const text = t.locations[location.kind];

  return (
    <div
      className={cn(
        "relative h-full min-h-72 overflow-hidden border border-hairline bg-paper-deep",
        className,
      )}
    >
      <iframe
        title={`${text.title} ${t.map.suffix} (${location.district}/${location.city})`}
        src={mapEmbedUrl(location.mapsQuery, locale)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
