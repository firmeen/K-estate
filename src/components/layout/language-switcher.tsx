"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

const languageNames: Record<Locale,string> = { my: "မြန်မာ", th: "ไทย", en: "English" };
export function LanguageSwitcher({ locale }: { locale: Locale }) {
  // usePathname omits Next basePath in normal operation; strip it defensively for project hosting.
  const pathname = usePathname().replace(/^\/K-estate(?=\/|$)/i, "") || "/";
  const suffix = pathname.replace(/^\/(my|th|en)(?=\/|$)/, "") || "";
  return <nav aria-label="Language" className="flex shrink-0 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] p-[3px]">
    {locales.map(option =>
      <Link key={option} href={`/${option}${suffix}`} hrefLang={option} lang="en"
        aria-label={languageNames[option]} aria-current={option === locale ? "page" : undefined}
        className={`flex h-[36px] min-w-[36px] items-center justify-center rounded-full px-2 text-[.68rem] font-semibold transition-colors duration-150 sm:min-w-[40px] sm:px-2.5 ${option === locale ? "bg-[var(--color-deep-sea)] text-white" : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)]"}`}>
        {option.toUpperCase()}
      </Link>
    )}
  </nav>;
}
