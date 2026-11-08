import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { formatTHB } from "@/lib/utils";
import type { Property } from "@/types/property";

export function PropertyCard({ property, locale }: { property: Property; locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <article className="card-property">
      <Link href={`/${locale}/properties/${property.slug}`} className="block" aria-label={property.title[locale]}>
        <div className="property-placeholder">
          <span>DEMO PROPERTY</span>
          <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#234b3a]">
            {property.listingMode === "sale" ? t.common.sale : t.common.rent}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <p className="text-xs font-semibold text-[#73947f]">{t.types[property.type]} · {property.location[locale]}</p>
        <Link href={`/${locale}/properties/${property.slug}`} className="mt-2 block text-xl font-semibold tracking-tight hover:underline">{property.title[locale]}</Link>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-[#164131]">{formatTHB(property.priceTHB)}
          {property.listingMode === "rent" && <span className="ml-1 text-xs font-normal text-[#67796e]">{t.common.perMonth}</span>}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 border-t border-[#e8ece6] pt-4 text-xs text-[#53685c]">
          <span>{property.areaSqm} m²</span>
          {property.bedrooms !== undefined && <span>{property.bedrooms} {t.common.bedrooms}</span>}
          {property.bathrooms !== undefined && <span>{property.bathrooms} {t.common.bathrooms}</span>}
        </div>
        <p className="mt-3 text-[11px] text-[#7b887f]">{t.common.demo}</p>
      </div>
    </article>
  );
}
