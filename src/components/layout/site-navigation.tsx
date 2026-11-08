"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

function SearchIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="h-5 w-5">
    <circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 4.5 4.5"/>
  </svg>;
}
function MessageIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round" className="h-5 w-5">
    <path d="M20 11.3c0 4.7-3.6 8.2-8.3 8.2-1.3 0-2.5-.2-3.5-.7L4 20l1.2-4.1A8.2 8.2 0 1 1 20 11.3Z"/><path d="M8 11.8h8"/>
  </svg>;
}
export function SiteNavigation({ locale, placement }: { locale: Locale; placement: "desktop" | "mobile" }) {
  const pathname = usePathname().replace(/^\/K-estate(?=\/|$)/i, "") || "/";
  const t = getDictionary(locale);
  const entries = [
    { href: `/${locale}/properties`, label: t.nav.explore, icon: <SearchIcon/>, active: /\/(properties|buy|rent)(\/|$)/.test(pathname) },
    { href: `/${locale}/contact`, label: t.nav.contact, icon: <MessageIcon/>, active: /\/contact(\/|$)/.test(pathname) },
  ];

  if (placement === "desktop") return <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-2 md:flex">
    {entries.map(entry => <Link key={entry.href} href={entry.href} aria-current={entry.active ? "page" : undefined}
      className={`relative inline-flex min-h-11 items-center rounded-full px-5 text-[.91rem] font-medium transition-colors duration-150 ${entry.active ? "bg-[var(--color-sea-mist)] text-[var(--color-deep-sea)]" : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-deep-sea)]"}`}>
      {entry.label}
    </Link>)}
  </nav>;

  return <nav aria-label="Primary mobile navigation"
    className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--color-border)] bg-[var(--color-surface)]/98 px-4 pt-1 pb-[calc(env(safe-area-inset-bottom,0px)+4px)] md:hidden">
    <div className="mx-auto grid h-[56px] max-w-[440px] grid-cols-2 gap-2">
      {entries.map(entry => <Link key={entry.href} href={entry.href} aria-current={entry.active ? "page" : undefined}
        className={`flex min-h-[52px] flex-col items-center justify-center gap-0.5 rounded-[10px] text-[.72rem] font-medium transition-colors duration-150 active:bg-[var(--color-surface-muted)] ${entry.active ? "bg-[var(--color-sea-mist)] text-[var(--color-deep-sea)]" : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-muted)]"}`}>
        {entry.icon}<span>{entry.label}</span>
      </Link>)}
    </div>
  </nav>;
}
