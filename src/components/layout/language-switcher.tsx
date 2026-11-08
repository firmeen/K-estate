"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale,string> = { my:"MY", th:"TH", en:"EN" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(my|th|en)(?=\/|$)/,"") || "";
  return <div className="shrink-0">
    <div className="hidden items-center gap-1 rounded-full border border-[#D7E3DE] bg-white/90 p-1 sm:flex" role="group" aria-label="Select language">
      {locales.map(option => <Link key={option} href={`/${option}${suffix}`}
        hrefLang={option} lang={option} aria-current={option === locale ? "page" : undefined}
        className={`flex min-h-9 min-w-10 items-center justify-center rounded-full px-3 text-[11px] font-semibold tracking-[.08em] transition-colors ${option === locale ? "bg-[#102F38] text-white" : "text-[#667A7C] hover:bg-[#EAF0ED] hover:text-[#102F38]"}`}>
        {labels[option]}
      </Link>)}
    </div>
    <details className="group relative sm:hidden">
      <summary className="flex min-h-11 min-w-[75px] cursor-pointer list-none items-center justify-center gap-2 rounded-full border border-[#D6E3DE] bg-white px-3 text-xs font-semibold tracking-wider text-[#102F38] [&::-webkit-details-marker]:hidden">
        {labels[locale]}
        <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5 transition-transform group-open:rotate-180"><path d="m3 6 5 5 5-5"/></svg>
      </summary>
      <div className="absolute right-0 top-[calc(100%+8px)] z-50 flex min-w-[110px] flex-col gap-1 rounded-2xl border border-[#DDE6E2] bg-white p-1.5 shadow-[0_12px_32px_#102F3822]">
        {locales.map(option => <Link key={option} href={`/${option}${suffix}`}
          hrefLang={option} lang={option} aria-current={option === locale ? "page" : undefined}
          className={`flex min-h-11 items-center justify-center rounded-lg px-4 text-xs font-semibold tracking-wider ${option === locale ? "bg-[#E8F0ED] text-[#102F38]" : "text-[#596F72] hover:bg-[#F1F5F2]"}`}>
          {labels[option]}
        </Link>)}
      </div>
    </details>
  </div>;
}
