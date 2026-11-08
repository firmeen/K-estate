"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const Icon = ({ id }: {id:"properties"|"contact"}) =>
  id === "properties" ?
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="h-5 w-5"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.4 15.5 5 5"/></svg> :
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M20 11.3a8 8 0 0 1-11.8 7L4 20l1.2-4.2A8 8 0 1 1 20 11.3Z"/><path d="M8.5 11.5h7"/></svg>;

export function SiteNavigation({ locale,placement }: {locale:Locale;placement:"desktop"|"mobile"}) {
  const pathname = usePathname();
  const t = getDictionary(locale);
  const nav = [
    {id:"properties" as const,href:`/${locale}/properties`,label:t.nav.explore,active:/\/(properties|buy|rent)(\/|$)/.test(pathname)},
    {id:"contact" as const,href:`/${locale}/contact`,label:t.nav.contact,active:/\/contact(\/|$)/.test(pathname)},
  ];

  if (placement === "desktop") return <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
    {nav.map(item => <Link key={item.id} href={item.href} aria-current={item.active ? "page" : undefined}
      className={`relative inline-flex min-h-11 items-center rounded-full px-5 text-sm font-medium transition-colors ${item.active ? "bg-[#E5EEEA] text-[#102F38]" : "text-[#526D70] hover:bg-[#EDF2EE] hover:text-[#102F38]"}`}>{item.label}</Link>)}
  </nav>;

  return <nav aria-label="Primary mobile" className="fixed inset-x-0 bottom-0 z-50 border-t border-[#DFE7E2] bg-[#FAFBF9]/96 px-4 pt-1.5 pb-[calc(env(safe-area-inset-bottom,0px)+.4rem)] shadow-[0_-5px_22px_#102F3808] backdrop-blur-xl md:hidden">
    <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
      {nav.map(item => <Link key={item.id} href={item.href} aria-current={item.active ? "page" : undefined}
        className={`flex min-h-[53px] flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[11px] font-medium leading-5 transition-colors ${item.active ? "bg-[#E5EFEC] text-[#102F38]" : "text-[#647B7E] hover:bg-[#EDF2EF]"}`}>
        <Icon id={item.id}/><span>{item.label}</span>
      </Link>)}
    </div>
  </nav>;
}
