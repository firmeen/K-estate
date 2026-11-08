import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return <footer className="mt-16 border-t border-[#dce5dc] bg-[#f0f3ed] pt-12 pb-32 md:mt-24 md:pb-12">
    <div className="container-width flex flex-col justify-between gap-8 md:flex-row md:items-start">
      <div>
        <Link href={`/${locale}`} className="text-[30px] font-bold tracking-[-.07em]">kesta.</Link>
        <p className="mt-2 text-sm text-[#65776d]">{t.footer.tagline}</p>
      </div>
      <nav aria-label="Footer" className="flex flex-wrap items-start gap-6 text-sm font-medium text-[#5a7063]">
        <Link href={`/${locale}/properties`} className="hover:underline">{t.nav.explore}</Link>
        <Link href={`/${locale}/contact`} className="hover:underline">{t.nav.contact}</Link>
      </nav>
    </div>
    <p className="container-width mt-8 text-xs text-[#7e8d82]">{t.footer.disclaimer}</p>
  </footer>;
}
