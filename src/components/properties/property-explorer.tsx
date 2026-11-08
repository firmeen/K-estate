"use client";

import { useMemo,useState } from "react";
import { AnimatePresence,MotionConfig,motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getUx } from "@/i18n/ux";
import type { ListingMode,Property,PropertyType } from "@/types/property";
import { PropertyCard } from "./property-card";

type Mode = ListingMode | "all";

export function PropertyExplorer({locale,properties,initialMode="all"}: {
  locale:Locale; properties:Property[]; initialMode?:Mode;
}) {
  const t = getDictionary(locale);
  const u = getUx(locale);
  const searchParams = useSearchParams();
  const urlMode = searchParams.get("mode");
  const defaultMode:Mode = urlMode==="sale" || urlMode==="rent" ? urlMode : initialMode;
  const defaultQuery = searchParams.get("q") ?? "";

  const [query,setQuery] = useState(defaultQuery);
  const [mode,setMode] = useState<Mode>(defaultMode);
  const [type,setType] = useState<PropertyType | "all">("all");
  const [province,setProvince] = useState("all");

  const provinces = useMemo(()=>{
    const locations = new Map<string,string>();
    for(const property of properties) locations.set(property.provinceCode,property.location[locale]);
    return [...locations.entries()].sort((a,b)=>a[1].localeCompare(b[1]));
  },[locale,properties]);

  const filtered=useMemo(()=>{
    const q=query.trim().toLocaleLowerCase();
    return properties.filter(property=>
      (mode==="all" || property.listingMode===mode) &&
      (type==="all" || property.type===type) &&
      (province==="all" || property.provinceCode===province) &&
      (!q || [property.title[locale],property.description[locale],property.location[locale],
        property.title.th,property.title.en,property.location.th,property.location.en]
        .some(value=>value.toLocaleLowerCase().includes(q)))
    );
  },[properties,locale,query,mode,type,province]);

  const changed=Boolean(query) || mode!==defaultMode || type!=="all" || province!=="all";
  function clear(){setQuery("");setMode(defaultMode);setType("all");setProvince("all")}

  return <div className="container-width pb-14 pt-12 md:pb-20 md:pt-16">
    <header className="max-w-[750px]">
      <p className="kicker in-view-rise">{u.propertiesEyebrow}</p>
      <h1 className="page-heading in-view-rise in-view-rise--delay-1 mt-4">{initialMode==="sale"?t.catalog.buyTitle:initialMode==="rent"?t.catalog.rentTitle:u.propertiesHeading}</h1>
      <p className="in-view-rise in-view-rise--delay-2 mt-4 max-w-[600px] text-[15px] leading-8 text-[#567078]">{u.propertiesCopy}</p>
    </header>

    <section className="mt-9" aria-label={u.listingType}>
      <div className="inline-flex max-w-full flex-wrap gap-1 rounded-full border border-[#D9E5E0] bg-white p-1.5">
        {([{value:"all",label:u.all},{value:"sale",label:u.sale},{value:"rent",label:u.rent}] as const).map(option=>
          <button key={option.value} type="button" aria-pressed={mode===option.value}
            onClick={()=>setMode(option.value)}
            className={`relative min-h-11 overflow-hidden rounded-full px-5 text-sm font-semibold transition-colors duration-200 ${mode===option.value?"text-white":"text-[#58737A] hover:text-[#102F38]"}`}>
            {mode===option.value && <motion.span layoutId="property-active-tab" className="absolute inset-0 rounded-full bg-[#102F38]" transition={{type:"spring",stiffness:430,damping:35}}/>}
            <span className="relative z-10">{option.label}</span>
          </button>
        )}
      </div>
    </section>

    <section className="surface-panel mt-5 p-4 md:p-5" aria-label={u.searchLabel}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-[#566E73]">{u.searchLabel}</span>
          <div className="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#769195]"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.5 5 5"/></svg>
            <input type="search" className="search-control pl-12" placeholder={u.searchPlaceholder} value={query} onChange={e=>setQuery(e.target.value)}/>
          </div>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-[#566E73]">{u.location}</span>
          <select className="search-control" value={province} onChange={e=>setProvince(e.target.value)}>
            <option value="all">{u.allLocations}</option>
            {provinces.map(([code,name])=><option key={code} value={code}>{name}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-[#566E73]">{u.type}</span>
          <select className="search-control" value={type} onChange={e=>setType(e.target.value as PropertyType | "all")}>
            <option value="all">{u.allTypes}</option>
            {(["condo","apartment","land","house"] as const).map(value=><option key={value} value={value}>{t.types[value]}</option>)}
          </select>
        </label>
      </div>
    </section>

    <div className="mt-6 flex min-h-11 flex-wrap items-center justify-between gap-3">
      <p className="text-sm font-medium text-[#526C73]" aria-live="polite">{filtered.length} {u.results}</p>
      {changed && <button type="button" onClick={clear} className="min-h-11 rounded-full px-4 text-sm font-semibold text-[#35646D] underline underline-offset-4 transition-colors hover:text-[#102F38]">{u.clear}</button>}
    </div>

    <MotionConfig reducedMotion="user">
      {filtered.length > 0 ?
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map(property=><motion.div key={property.id} layout
              initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}}
              transition={{duration:.22,ease:[.2,.7,.2,1]}}>
              <PropertyCard locale={locale} property={property}/>
            </motion.div>)}
          </AnimatePresence>
        </div> :
        <div className="surface-panel mt-3 flex min-h-52 flex-col items-center justify-center px-5 py-12 text-center">
          <p className="text-lg font-semibold">{u.empty}</p>
          <p className="mt-2 text-sm text-[#60757B]">{u.emptySub}</p>
          <button type="button" onClick={clear} className="button-outline mt-5">{u.clear}</button>
        </div>}
    </MotionConfig>
    <p className="preview-note mt-6">{u.disclaimer}</p>
  </div>;
}
