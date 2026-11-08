import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./language-switcher";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-[#e3e8df] bg-[#f8f7f3]/95 backdrop-blur-lg">
        <div className="container-width flex min-h-[74px] items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-[30px] font-bold tracking-[-.075em] text-[#173f34]" aria-label="KESTA home">
            kesta<span className="text-[#84a992]">.</span>
          </Link>
          <SiteNavigation locale={locale} placement="desktop" />
          <LanguageSwitcher locale={locale}/>
        </div>
      </header>
      <SiteNavigation locale={locale} placement="mobile" />
    </>
  );
}
