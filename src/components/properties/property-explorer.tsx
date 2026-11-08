"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { ListingMode, Property, PropertyType } from "@/types/property";
import { PropertyCard } from "./property-card";

export function PropertyExplorer({ locale, properties, initialMode = "all" }: {
  locale: Locale;
  properties: Property[];
  initialMode?: ListingMode | "all";
}) {
  const t = getDictionary(locale);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState<ListingMode | "all">(initialMode);
  const [type, setType] = useState<PropertyType | "all">("all");
  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return properties.filter((property) =>
      (mode === "all" || property.listingMode === mode) &&
      (type === "all" || property.type === type) &&
      (!query || [property.title[locale], property.location[locale], property.description[locale]]
        .some((value) => value.toLocaleLowerCase().includes(query)))
    );
  }, [search, mode, type, properties, locale]);

  const heading = initialMode === "sale" ? t.catalog.buyTitle : initialMode === "rent" ? t.catalog.rentTitle : t.catalog.title;
  return (
    <div className="container-width py-14 md:py-20">
      <p className="eyebrow">{t.catalog.eyebrow}</p>
      <h1 className="page-heading mt-4 max-w-3xl">{heading}</h1>
      <p className="mt-5 max-w-2xl text-[#64766a]">{t.catalog.description}</p>

      <div className="mt-11 grid gap-4 rounded-2xl border border-[#e0e7de] bg-[#edf2ed] p-5 md:grid-cols-[2fr_1fr_1fr]">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.search}</span>
          <input className="input-field" type="search" placeholder={t.catalog.search} value={search} onChange={(event) => setSearch(event.target.value)} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.type}</span>
          <select className="input-field" value={type} onChange={(event) => setType(event.target.value as PropertyType | "all")}>
            <option value="all">{t.catalog.allTypes}</option>
            {(["condo", "apartment", "land", "house"] as const).map((value) => <option key={value} value={value}>{t.types[value]}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.mode}</span>
          <select className="input-field" value={mode} onChange={(event) => setMode(event.target.value as ListingMode | "all")}>
            <option value="all">{t.catalog.allModes}</option>
            <option value="sale">{t.common.sale}</option>
            <option value="rent">{t.common.rent}</option>
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-[#6c7c72]">{filtered.length} {t.catalog.results}</p>
        <p className="text-xs text-[#78917e]">{t.common.demo}</p>
      </div>
      {filtered.length > 0
        ? <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((property) => <PropertyCard key={property.id} property={property} locale={locale}/>)}</div>
        : <div className="mt-6 rounded-2xl border border-dashed border-[#c4d3c7] bg-white px-6 py-20 text-center text-[#647669]">{t.catalog.empty}</div>}
    </div>
  );
}
