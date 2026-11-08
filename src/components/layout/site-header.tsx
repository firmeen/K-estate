import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./language-switcher";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ locale }: { locale: Locale }) {
  return <>
    <a href="#main-content" className="sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:not-sr-only focus:rounded-lg focus:bg-white focus:px-4 focus:py-3">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-[#DFE7E2]/80 bg-[#F7F6F2]/92 backdrop-blur-xl">
      <div className="container-width flex min-h-[66px] items-center justify-between gap-4 md:min-h-[76px]">
        <Link href={`/${locale}`} aria-label="KESTA home" className="group inline-flex min-h-11 items-center text-[28px] font-bold leading-none tracking-[-.09em] text-[#102F38] md:text-[32px]">
          kesta<span className="text-[#86AFAA] transition-colors group-hover:text-[#376D78]">.</span>
        </Link>
        <SiteNavigation locale={locale} placement="desktop" />
        <LanguageSwitcher locale={locale}/>
      </div>
    </header>
    <SiteNavigation locale={locale} placement="mobile"/>
  </>;
}
