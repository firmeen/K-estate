"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import { getUICopy } from "@/i18n/dictionaries";
import type { ListingMode } from "@/types/property";

type Mode = ListingMode | "all";

export function DiscoverySearch({ locale }: { locale: Locale }) {
  const ui = getUICopy(locale);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<Mode>("all");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (mode !== "all") params.set("mode", mode);
    if (query.trim()) params.set("q", query.trim().slice(0, 120));
    const suffix = params.toString();
    router.push(`/${locale}/properties${suffix ? `?${suffix}` : ""}`);
  }

  const tabs: { value: Mode; label: string }[] = [
    { value:"all", label:ui.all }, { value:"sale", label:ui.buy }, { value:"rent", label:ui.rent },
  ];
  return <form onSubmit={submit}
    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[0_14px_40px_rgba(16,47,56,.035)] sm:p-5">
    <div role="group" aria-label={ui.filters} className="flex flex-wrap items-center gap-1.5">
      {tabs.map(tab => <button key={tab.value} type="button" aria-pressed={mode === tab.value} onClick={()=>setMode(tab.value)}
        className={`min-h-11 rounded-full px-4 text-[.85rem] font-medium transition-colors duration-150 ${mode === tab.value ? "bg-[var(--color-deep-sea)] text-white" : "bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] hover:text-[var(--color-deep-sea)]"}`}>
        {tab.label}
      </button>)}
    </div>
    <div className="mt-4 flex flex-col gap-3 sm:flex-row">
      <label className="relative min-w-0 flex-1">
        <span className="sr-only">{ui.searchLabel}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="pointer-events-none absolute left-4 top-[15px] h-5 w-5 text-[var(--color-text-secondary)]">
          <circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 4.5 4.5"/>
        </svg>
        <input className="input-field h-[50px] pl-12" type="search" value={query} maxLength={120}
          onChange={event=>setQuery(event.target.value)} placeholder={ui.quickSearchPlaceholder}/>
      </label>
      <button type="submit" className="button-primary h-[50px] w-full shrink-0 sm:w-auto">{ui.quickBrowse} <span aria-hidden="true">↗</span></button>
    </div>
  </form>;
}
