import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { DocumentLanguage } from "@/components/layout/document-language";

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  // A static App Router site has a single root html element; keep nested content
  // semantically labelled before hydration and synchronize root lang after navigation.
  return <div lang={locale} className="min-h-screen">
    <DocumentLanguage locale={locale}/>
    <SiteHeader locale={locale}/>
    <main id="main-content" className="min-h-[40vh]">{children}</main>
    <SiteFooter locale={locale}/>
  </div>;
}
