import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary, getUICopy } from "@/i18n/dictionaries";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const ui = getUICopy(locale);
  return <footer className="mt-12 border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] pt-10 pb-[calc(100px+env(safe-area-inset-bottom,0px))] md:mt-20 md:py-12">
    <div className="container-width flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
      <div className="max-w-[350px]">
        <Link href={`/${locale}`} className="text-[27px] font-bold tracking-[-.075em]">kesta.</Link>
        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{t.footer.tagline}</p>
      </div>
      <nav aria-label="Footer" className="flex items-center gap-6 text-sm font-medium">
        <Link href={`/${locale}/properties`} className="transition-colors hover:text-[var(--color-deep-sea-hover)]">{t.nav.explore}</Link>
        <Link href={`/${locale}/contact`} className="transition-colors hover:text-[var(--color-deep-sea-hover)]">{t.nav.contact}</Link>
      </nav>
    </div>
    <div className="container-width mt-7 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-text-secondary)]">
      {ui.sample}
    </div>
  </footer>;
}
