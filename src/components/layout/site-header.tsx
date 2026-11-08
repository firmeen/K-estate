import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { LanguageSwitcher } from "./language-switcher";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ locale }: { locale: Locale }) {
  return <>
    <a href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[80] focus:rounded-lg focus:bg-[var(--color-surface)] focus:px-4 focus:py-3">
      Skip to content
    </a>
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_96%,transparent)] backdrop-blur-[6px]">
      <div className="container-width flex h-[64px] items-center justify-between gap-3 md:h-[72px] md:gap-8">
        <Link href={`/${locale}`} className="shrink-0 text-[28px] font-bold tracking-[-.075em] text-[var(--color-deep-sea)] md:text-[30px]"
          aria-label="KESTA — Home">
          kesta<span className="text-[var(--color-deep-sea-hover)]">.</span>
        </Link>
        <SiteNavigation locale={locale} placement="desktop"/>
        <LanguageSwitcher locale={locale}/>
      </div>
    </header>
    <SiteNavigation locale={locale} placement="mobile"/>
  </>;
}
