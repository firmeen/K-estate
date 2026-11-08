"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const suffix = pathname.replace(/^\/(my|th|en)(?=\/|$)/, "") || "";
  return (
    <div className="flex items-center gap-1 rounded-full border border-[#d7e0d8] bg-white p-1" aria-label="Language">
      {locales.map((option) => (
        <Link key={option} href={`/${option}${suffix}`} lang={option === "my" ? "my" : option} hrefLang={option}
          aria-current={option === locale ? "page" : undefined}
          className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold uppercase transition-colors ${option === locale ? "bg-[#173f34] text-white" : "text-[#64756b] hover:bg-[#eff3ed]"}`}>
          {option === "my" ? "MY" : option.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
