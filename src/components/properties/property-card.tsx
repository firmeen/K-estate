import Image from "next/image";
import Link from "next/link";
import { PropertyArtwork } from "@/components/properties/property-artwork";
import { getUx } from "@/i18n/ux";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { formatTHB } from "@/lib/utils";
import type { Property } from "@/types/property";

function Arrow() {
  return <svg className="card-arrow h-4 w-4" aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 16 16 4M6 4h10v10"/></svg>;
}
export function PropertyCard({ property,locale }: {property:Property;locale:Locale}) {
  const u = getUx(locale);
  const t = getDictionary(locale);
  const hasPhoto = Boolean(property.images[0]);
  return <article className="card-surface h-full">
    <Link href={`/${locale}/properties/${property.slug}`} className="group flex h-full flex-col" aria-label={`${property.title[locale]} · ${u.viewDetails}`}>
      <div className="relative aspect-[1.53] overflow-hidden">
        {hasPhoto ? <div className="photo-frame absolute inset-0"><Image src={property.images[0]} alt={property.title[locale]} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" /></div>
          : <PropertyArtwork type={property.type} className="h-full w-full"/>}
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#F9FBF8]/92 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#1F4B54] backdrop-blur-sm">
          {property.isDemo ? u.example : property.listingMode === "sale" ? t.common.sale : t.common.rent}
        </div>
        <div className="absolute bottom-4 right-4 rounded-full bg-[#102F38]/90 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {property.listingMode === "sale" ? t.common.sale : t.common.rent}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-4 pt-5 sm:px-6">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-[#58767A]">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.65" className="h-3.5 w-3.5"><path d="M10 18s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10Z"/><circle cx="10" cy="8" r="2"/></svg>
          <span>{property.location[locale]} · {t.types[property.type]}</span>
        </div>
        <h3 className="line-clamp-2 text-[18px] font-semibold leading-[1.55] text-[#102F38] sm:text-xl">{property.title[locale]}</h3>
        <p className="mt-3 text-[24px] font-semibold tracking-[-.035em] text-[#102F38]">{formatTHB(property.priceTHB)}
          {property.listingMode === "rent" && <span className="ml-2 align-middle text-xs font-normal tracking-normal text-[#647B7E]">{u.perMonth}</span>}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#526E73]">
          <span>{property.areaSqm.toLocaleString("en-US")} m²</span>
          {property.bedrooms !== undefined && <span>{property.bedrooms} {u.bedrooms}</span>}
          {property.bathrooms !== undefined && <span>{property.bathrooms} {u.bathrooms}</span>}
        </div>
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#E4ECE8] pt-4 text-sm font-medium text-[#244D57]">
          <span>{u.viewDetails}</span><Arrow/>
        </div>
      </div>
    </Link>
  </article>;
}
