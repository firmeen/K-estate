import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary, getUICopy } from "@/i18n/dictionaries";
import { formatTHB } from "@/lib/utils";
import type { Property } from "@/types/property";
import { PropertyMedia } from "./property-media";

export function PropertyCard({ property, locale }: { property: Property; locale: Locale }) {
  const t = getDictionary(locale);
  const ui = getUICopy(locale);
  const listingText = property.listingMode === "sale" ? ui.forSale : ui.forRent;
  return <article className="property-card group">
    <Link href={`/${locale}/properties/${property.slug}`}
      className="block h-full cursor-pointer text-inherit"
      aria-label={`${property.title[locale]}, ${formatTHB(property.priceTHB)}, ${ui.detailBack}`}>
      <div className="relative aspect-[5/4] overflow-hidden bg-[var(--color-sea-mist)]">
        <PropertyMedia src={property.images[0]}
          alt={property.imageIsIllustrative ? ui.photoAlt : property.title[locale]}
          placeholder={ui.noImage} sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"/>
        <div className="absolute left-3 top-3 rounded-full bg-[var(--color-surface)]/95 px-3 py-1.5 text-xs font-semibold text-[var(--color-deep-sea)]">
          {listingText}
        </div>
        {property.imageIsIllustrative && <span className="absolute bottom-3 right-3 rounded-md bg-[var(--color-deep-sea)]/85 px-2 py-1 text-[.68rem] font-medium text-white">
          {ui.photoIllustration}
        </span>}
      </div>
      <div className="flex min-h-[218px] flex-col p-5 md:p-6">
        <p className="text-[.78rem] leading-6 text-[var(--color-text-secondary)]">
          {t.types[property.type]} <span aria-hidden="true">·</span> {property.location[locale]}
        </p>
        <h3 className="mt-1.5 line-clamp-2 text-[1.15rem] font-medium leading-[1.55] tracking-tight md:text-xl">{property.title[locale]}</h3>
        <div className="mt-4 flex flex-wrap items-baseline gap-1">
          <span className="text-[1.58rem] font-semibold leading-tight tracking-tight md:text-[1.75rem]">{formatTHB(property.priceTHB)}</span>
          {property.listingMode === "rent" && <span className="text-xs text-[var(--color-text-secondary)]">{ui.perMonth}</span>}
        </div>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5 text-[.82rem] text-[var(--color-text-secondary)]">
          <span>{property.areaSqm.toLocaleString("en-US")} m²</span>
          {property.type === "land" && property.landAreaSquareWa !== undefined && <span>{property.landAreaSquareWa} {ui.squareWah}</span>}
          {property.type !== "land" && property.bedrooms !== undefined && property.bedrooms > 0 && <span>{property.bedrooms} {t.common.bedrooms}</span>}
          {property.type !== "land" && property.bathrooms !== undefined && property.bathrooms > 0 && <span>{property.bathrooms} {t.common.bathrooms}</span>}
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="min-w-0 truncate text-[.72rem] leading-5 text-[var(--color-text-secondary)]">
            {property.source ? `${ui.referenceSource}: ${property.source.provider}` : ui.detailBack}
          </span>
          <span aria-hidden="true" className="shrink-0 text-lg leading-none text-[var(--color-deep-sea)] transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
        </div>
      </div>
    </Link>
  </article>;
}
