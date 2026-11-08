import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return <footer className="mt-24 border-t border-[#dce5dc] bg-[#f0f3ed] py-12">
    <div className="container-width flex flex-col justify-between gap-7 md:flex-row">
      <div><Link href={`/${locale}`} className="text-[30px] font-bold tracking-[-.07em]">kesta.</Link><p className="mt-2 text-sm text-[#65776d]">{t.footer.tagline}</p></div>
      <div className="flex flex-col gap-2 text-sm text-[#5a7063] md:items-end">
        <Link href={`/${locale}/properties`} className="hover:underline">{t.nav.explore}</Link>
        <Link href={`/${locale}/contact`} className="hover:underline">{t.nav.contact}</Link>
        <small className="mt-3 text-xs">{t.footer.disclaimer}</small>
      </div>
    </div>
  </footer>;
}
