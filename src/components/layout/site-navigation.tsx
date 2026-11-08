"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

function PropertiesIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]">
    <circle cx="10.7" cy="10.7" r="6.7"/><path d="m16 16 4.5 4.5"/>
  </svg>;
}
function ContactIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[21px] w-[21px]">
    <path d="M20 11.3c0 4.7-3.6 8.2-8.3 8.2-1.3 0-2.5-.2-3.5-.7L4 20l1.2-4.1A8.2 8.2 0 1 1 20 11.3Z"/>
    <path d="M8.5 11.5h7"/>
  </svg>;
}

export function SiteNavigation({ locale, placement }: { locale: Locale; placement: "desktop" | "mobile" }) {
  const path = usePathname();
  const t = getDictionary(locale);
  const navItems = [
    { id: "properties", href: `/${locale}/properties`, label: t.nav.explore, icon: <PropertiesIcon/>, active: /\/(properties|buy|rent)(\/|$)/.test(path) },
    { id: "contact", href: `/${locale}/contact`, label: t.nav.contact, icon: <ContactIcon/>, active: /\/contact(\/|$)/.test(path) },
  ];
  if (placement === "desktop") {
    return <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {navItems.map(item => <Link key={item.id} href={item.href} aria-current={item.active ? "page" : undefined}
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#55856c] ${item.active ? "bg-[#e4ebe3] text-[#173f34]" : "text-[#64766a] hover:bg-[#ebf0e9] hover:text-[#173f34]"}`}>
        {item.label}
      </Link>)}
    </nav>;
  }
  return <nav aria-label="Primary mobile" className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce5dc] bg-white/95 px-4 pt-2 pb-[calc(env(safe-area-inset-bottom,0px)+0.5rem)] shadow-[0_-8px_28px_#17342d0d] backdrop-blur-lg md:hidden">
    <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
      {navItems.map(item => <Link key={item.id} href={item.href} aria-current={item.active ? "page" : undefined}
        className={`flex min-h-[57px] flex-col items-center justify-center gap-1 rounded-xl px-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#55856c] ${item.active ? "bg-[#e4eee5] text-[#173f34]" : "text-[#6c8073] hover:bg-[#f3f6f1]"}`}>
        {item.icon}<span>{item.label}</span>
      </Link>)}
    </div>
  </nav>;
}
