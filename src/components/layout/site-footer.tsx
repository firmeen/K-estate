import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getUx } from "@/i18n/ux";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const u = getUx(locale);
  return <footer className="mt-14 border-t border-[#DFE7E2] bg-[#F1F3EF] pt-9 pb-28 md:mt-24 md:py-10">
    <div className="container-width flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <Link href={`/${locale}`} className="inline-block text-[29px] font-bold leading-none tracking-[-.09em] text-[#102F38]">kesta<span className="text-[#85AAA7]">.</span></Link>
        <p className="mt-3 max-w-sm text-sm leading-7 text-[#526C71]">{u.footerLine}</p>
      </div>
      <nav aria-label="Footer" className="flex items-center gap-6 text-sm font-medium text-[#3D5B62]">
        <Link href={`/${locale}/properties`} className="hover:underline">{t.nav.explore}</Link>
        <Link href={`/${locale}/contact`} className="hover:underline">{t.nav.contact}</Link>
      </nav>
    </div>
    <div className="container-width mt-8 flex flex-col justify-between gap-2 border-t border-[#D9E4DE] pt-5 text-xs text-[#728386] sm:flex-row">
      <span>© KESTA · THAILAND</span>
      <span>{u.footerSample}</span>
    </div>
  </footer>;
}
