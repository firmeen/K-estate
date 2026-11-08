"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { ListingMode, Property, PropertyType } from "@/types/property";
import { PropertyCard } from "./property-card";

type FilterValue = ListingMode | "all";

export function PropertyExplorer({ locale, properties, initialMode = "all" }: {
  locale: Locale;
  properties: Property[];
  initialMode?: FilterValue;
}) {
  const t = getDictionary(locale);
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState<FilterValue>(initialMode);
  const [type, setType] = useState<PropertyType | "all">("all");
  const [province, setProvince] = useState("all");

  const provinces = useMemo(() => {
    const names = new Map<string,string>();
    for (const property of properties) names.set(property.provinceCode, property.location[locale]);
    return [...names.entries()].sort((a,b) => a[1].localeCompare(b[1]));
  }, [properties,locale]);

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    return properties.filter(property =>
      (mode === "all" || property.listingMode === mode) &&
      (type === "all" || property.type === type) &&
      (province === "all" || property.provinceCode === province) &&
      (!query || [property.title[locale],property.location[locale],property.description[locale]]
        .some(value => value.toLocaleLowerCase().includes(query)))
    );
  }, [search,mode,type,province,properties,locale]);

  const changed = search !== "" || mode !== initialMode || type !== "all" || province !== "all";
  function reset() { setSearch(""); setMode(initialMode); setType("all"); setProvince("all"); }
  const title = initialMode === "sale" ? t.catalog.buyTitle : initialMode === "rent" ? t.catalog.rentTitle : t.catalog.title;

  return <div className="container-width py-12 md:py-20">
    <p className="eyebrow">{t.catalog.eyebrow}</p>
    <h1 className="page-heading mt-4 max-w-3xl">{title}</h1>
    <p className="mt-4 max-w-2xl leading-7 text-[#64766a]">{t.catalog.description}</p>

    <section aria-label={t.catalog.mode} className="mt-10">
      <div className="flex max-w-full flex-wrap items-center gap-2">
        {([
          { value:"all", label:t.catalog.allModes },
          { value:"sale", label:t.common.sale },
          { value:"rent", label:t.common.rent },
        ] as const).map(option => (
          <button key={option.value} type="button" aria-pressed={mode === option.value}
            onClick={() => setMode(option.value)}
            className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#55856c] ${mode === option.value ? "border-[#204a39] bg-[#204a39] text-white" : "border-[#cddcd0] bg-white text-[#496356] hover:bg-[#edf3ed]"}`}>
            {option.label}
          </button>
        ))}
      </div>
    </section>

    <section aria-label={t.catalog.search} className="mt-6 rounded-2xl border border-[#e0e7de] bg-[#edf2ed] p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.search}</span>
          <input className="input-field" type="search" placeholder={t.catalog.search}
            value={search} onChange={event=>setSearch(event.target.value)} />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.location}</span>
          <select className="input-field" value={province} onChange={event=>setProvince(event.target.value)}>
            <option value="all">{t.catalog.allLocations}</option>
            {provinces.map(([code,name])=><option key={code} value={code}>{name}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold">{t.catalog.type}</span>
          <select className="input-field" value={type} onChange={event=>setType(event.target.value as PropertyType | "all")}>
            <option value="all">{t.catalog.allTypes}</option>
            {(["condo","apartment","land","house"] as const).map(value => <option key={value} value={value}>{t.types[value]}</option>)}
          </select>
        </label>
      </div>
    </section>

    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
      <p aria-live="polite" className="text-sm font-medium text-[#526e5d]">{filtered.length} {t.catalog.results}</p>
      {changed && <button type="button" onClick={reset} className="min-h-11 rounded-full border border-[#bfcfbe] bg-white px-4 text-sm font-medium text-[#376849] hover:bg-[#eef3eb]">{t.catalog.clearFilters}</button>}
    </div>

    {filtered.length > 0
      ? <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(property => <PropertyCard key={property.id} property={property} locale={locale}/>)}
      </div>
      : <div className="mt-5 rounded-2xl border border-dashed border-[#c4d3c7] bg-white px-6 py-20 text-center text-[#647669]">{t.catalog.empty}</div>}
    <p className="mt-7 text-xs text-[#78917e]">{t.common.demo}</p>
  </div>;
}
