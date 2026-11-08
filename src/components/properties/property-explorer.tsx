"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import type { Locale } from "@/i18n/config";
import { getDictionary, getUICopy } from "@/i18n/dictionaries";
import type { ListingMode, Property, PropertyType } from "@/types/property";
import { PropertyCard } from "./property-card";

type Mode = ListingMode | "all";

export function PropertyExplorer({ locale, properties, initialMode = "all" }: {
  locale: Locale;
  properties: Property[];
  initialMode?: Mode;
}) {
  const ui = getUICopy(locale);
  const t = getDictionary(locale);
  const params = useSearchParams();
  const queryFromUrl = (params.get("q") ?? "").slice(0,120);
  const modeParam = params.get("mode");
  const modeFromUrl: Mode = modeParam === "sale" || modeParam === "rent" ? modeParam : initialMode;
  const [query, setQuery] = useState(queryFromUrl);
  const [mode, setMode] = useState<Mode>(modeFromUrl);
  const [type, setType] = useState<PropertyType | "all">("all");
  const [province, setProvince] = useState("all");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setQuery(queryFromUrl);
    setMode(modeFromUrl);
  }, [queryFromUrl, modeFromUrl]);

  const types = useMemo(() => [...new Set(properties.map(item => item.type))], [properties]);
  const provinces = useMemo(() => {
    const names = new Map<string,string>();
    properties.forEach(item => names.set(item.provinceCode,item.location[locale]));
    return [...names.entries()].sort((a,b)=>a[1].localeCompare(b[1]));
  }, [properties,locale]);

  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return properties.filter(item =>
      (mode === "all" || item.listingMode === mode) &&
      (type === "all" || item.type === type) &&
      (province === "all" || item.provinceCode === province) &&
      (!term || [item.title[locale],item.location[locale],item.district?.[locale],item.description[locale]]
        .filter((value): value is string => typeof value === "string")
        .some(value => value.toLocaleLowerCase().includes(term)))
    );
  }, [properties,mode,type,province,query,locale]);

  const changed = query.trim() !== "" || mode !== initialMode || type !== "all" || province !== "all";
  function clear() { setQuery("");setMode(initialMode);setType("all");setProvince("all"); }
  const tabs: { value: Mode; label: string }[] = [
    { value:"all", label:ui.all },{ value:"sale", label:ui.buy },{ value:"rent", label:ui.rent },
  ];
  const heading = initialMode === "sale" ? t.catalog.buyTitle : initialMode === "rent" ? t.catalog.rentTitle : ui.listingTitle;
  return <div className="container-width pt-10 pb-12 md:pt-16 md:pb-20">
    <div className="sea-reveal max-w-3xl">
      <p className="eyebrow">{ui.collectionTag}</p>
      <h1 className="page-title mt-3">{heading}</h1>
      <p className="body-copy mt-3 text-[.95rem] md:text-base">{ui.listingDesc}</p>
    </div>

    <section className="mt-8 md:mt-10" aria-label={ui.filters}>
      <div role="group" aria-label={t.catalog.mode} className="flex flex-wrap items-center gap-2">
        {tabs.map(tab => <button key={tab.value} type="button" aria-pressed={mode === tab.value} onClick={()=>setMode(tab.value)}
          className={`min-h-11 rounded-full border px-5 text-sm font-medium transition-colors duration-150 active:translate-y-px ${mode === tab.value ? "border-[var(--color-deep-sea)] bg-[var(--color-deep-sea)] text-white" : "border-[var(--color-border)] bg-white text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)]"}`}>
          {tab.label}
        </button>)}
      </div>
      <div className="mt-5 grid gap-4 rounded-2xl bg-[var(--color-surface-muted)] p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.45fr_1fr_1fr]">
        <label className="block min-w-0">
          <span className="mb-2 block text-[.8rem] font-medium">{ui.searchLabel}</span>
          <input className="input-field" type="search" value={query} maxLength={120}
            onChange={event=>setQuery(event.target.value)} placeholder={ui.searchPlaceholder}/>
        </label>
        <label className="block min-w-0">
          <span className="mb-2 block text-[.8rem] font-medium">{ui.locationLabel}</span>
          <select className="input-field" value={province} onChange={event=>setProvince(event.target.value)}>
            <option value="all">{ui.allLocations}</option>
            {provinces.map(([code,name])=><option key={code} value={code}>{name}</option>)}
          </select>
        </label>
        <label className="block min-w-0">
          <span className="mb-2 block text-[.8rem] font-medium">{ui.typeLabel}</span>
          <select className="input-field" value={type} onChange={event=>setType(event.target.value as PropertyType | "all")}>
            <option value="all">{ui.allTypes}</option>
            {types.map(value => <option key={value} value={value}>{t.types[value]}</option>)}
          </select>
        </label>
      </div>
    </section>

    <div className="mt-7 flex min-h-11 flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] pb-4">
      <p aria-live="polite" aria-atomic="true" className="text-sm font-medium text-[var(--color-text-secondary)]">
        <span className="font-semibold text-[var(--color-deep-sea)]">{results.length}</span> {ui.results}
      </p>
      {changed && <button type="button" className="button-text min-h-11 px-2 text-sm" onClick={clear}>{ui.clear} <span aria-hidden="true">↺</span></button>}
    </div>

    {results.length
      ? <motion.div key={results.map(item=>item.id).join("|")} initial={reduceMotion ? false : { opacity:.78,y:5 }}
          animate={{ opacity:1,y:0 }} transition={{ duration:reduceMotion ? 0 : .2, ease:"easeOut" }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {results.map(item => <PropertyCard key={item.id} property={item} locale={locale}/>)}
        </motion.div>
      : <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-14 text-center">
          <h2 className="text-xl font-medium">{ui.emptyTitle}</h2>
          <p className="body-copy mx-auto mt-2 text-sm">{ui.emptyDesc}</p>
          <button type="button" className="button-secondary mt-6" onClick={clear}>{ui.clear}</button>
        </div>}
    {properties.some(item=>item.isDemo) && <p className="mt-6 text-xs leading-6 text-[var(--color-text-secondary)]">{ui.sample}</p>}
  </div>;
}
