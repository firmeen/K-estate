"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import { getUx } from "@/i18n/ux";
import type { ListingMode } from "@/types/property";

export function HomeSearch({ locale }: {locale:Locale}) {
  const u = getUx(locale);
  const router = useRouter();
  const [mode,setMode] = useState<ListingMode | "all">("all");
  const [query,setQuery] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (mode !== "all") params.set("mode",mode);
    if (query.trim()) params.set("q",query.trim());
    const search = params.toString();
    router.push(`/${locale}/properties${search ? `?${search}` : ""}`);
  }

  return <form onSubmit={submit} role="search" className="surface-panel mt-8 max-w-[590px] p-3.5 shadow-[0_14px_35px_#102F3808] sm:p-4">
    <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={u.listingType}>
      {([{value:"all",label:u.all},{value:"sale",label:u.sale},{value:"rent",label:u.rent}] as const).map(option=>
        <button key={option.value} type="button" onClick={()=>setMode(option.value)} aria-pressed={mode===option.value}
          className={`min-h-10 rounded-full px-4 text-sm font-semibold transition-colors ${mode===option.value?"bg-[#102F38] text-white":"text-[#60777C] hover:bg-[#EFF3F0]"}`}>{option.label}</button>
      )}
    </div>
    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
      <label className="relative block flex-1">
        <span className="sr-only">{u.searchLabel}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#729094]"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.5 5 5"/></svg>
        <input type="search" value={query} onChange={event=>setQuery(event.target.value)} className="search-control w-full pl-11" placeholder={u.searchPlaceholder}/>
      </label>
      <button type="submit" className="button-primary shrink-0 sm:px-5">{u.discover}
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M3 10h14m-6-6 6 6-6 6"/></svg>
      </button>
    </div>
  </form>;
}
