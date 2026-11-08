import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const links = [
    { href: "properties", label: t.nav.explore },
    { href: "buy", label: t.nav.buy },
    { href: "rent", label: t.nav.rent },
    { href: "about", label: t.nav.about },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#e4e9e1] bg-[#f8f7f3]/95 backdrop-blur">
      <div className="container-width flex min-h-[78px] flex-wrap items-center justify-between gap-3 py-3">
        <Link href={`/${locale}`} className="text-[27px] font-bold tracking-[-.07em] text-[#173f34]" aria-label="KESTA home">kesta<span className="text-[#84a992]">.</span></Link>
        <nav aria-label="Main navigation" className="order-3 flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap text-[13px] font-medium text-[#355548] md:order-2 md:w-auto md:gap-7">
          {links.map((item) => <Link key={item.href} href={`/${locale}/${item.href}`} className="hover:text-[#5f9274]">{item.label}</Link>)}
          <Link href={`/${locale}/contact`} className="hover:text-[#5f9274]">{t.nav.contact}</Link>
        </nav>
        <div className="order-2 md:order-3"><LanguageSwitcher locale={locale}/></div>
      </div>
    </header>
  );
}
