import {
  ArrowUpRightIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import {
  mapDirectionsUrl,
  site,
  whatsappUrl,
  type Location,
} from "@/content/site";
import { getT } from "@/i18n/server";
import { cn } from "@/lib/utils";

interface LocationCardProps {
  location: Location;
  className?: string;
}

/** Tek lokasyon bilgi kartı (adres, telefon, WhatsApp, yol tarifi). */
export async function LocationCard({ location, className }: LocationCardProps) {
  const { t } = await getT();
  const text = t.locations[location.kind];
  const waMessage = `${t.locationCard.waMessagePrefix}${text.label} (${location.district})${t.locationCard.waMessageSuffix}`;

  return (
    <div className={cn("flex h-full flex-col border border-hairline bg-surface p-7 sm:p-9", className)}>
      <div className="flex items-center gap-2 text-sand-deep">
        <MapPinIcon className="h-4 w-4" />
        <span className="eyebrow">{text.label}</span>
      </div>

      <h3 className="display-md mt-5 text-2xl text-ink">{text.title}</h3>
      <p className="mt-3 text-muted">{text.note}</p>

      <address className="mt-6 not-italic leading-relaxed text-ink/80">
        {location.addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block">
          {location.postalCode} {location.district} / {location.city}
        </span>
      </address>

      <div className="mt-7 flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <a
          href={`tel:${site.phone.tel}`}
          className="inline-flex items-center gap-2 text-ink transition-colors hover:text-sand-deep"
        >
          <PhoneIcon className="h-4 w-4 text-sand-deep" />
          {site.phone.display}
        </a>
        <a
          href={whatsappUrl(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-ink transition-colors hover:text-sand-deep"
        >
          <WhatsAppIcon className="h-4 w-4 text-sand-deep" />
          {t.locationCard.whatsapp}
        </a>
      </div>

      <a
        href={mapDirectionsUrl(location.mapsQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline mt-5 inline-flex w-fit items-center gap-1.5 text-sm text-ink/70 transition-colors hover:text-ink"
      >
        {t.locationCard.openMap}
        <ArrowUpRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
