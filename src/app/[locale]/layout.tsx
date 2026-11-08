import { notFound } from "next/navigation";
import { isLocale,locales } from "@/i18n/config";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export function generateStaticParams(){return locales.map(locale=>({locale}))}

export default async function LocaleLayout({children,params}:{
  children:React.ReactNode;
  params:Promise<{locale:string}>;
}) {
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  // The static project root defaults to Myanmar; each locale subtree declares
  // its actual language for font selection and assistive technology.
  return <div lang={locale} className="min-h-screen">
    <SiteHeader locale={locale}/>
    <main id="main-content">{children}</main>
    <SiteFooter locale={locale}/>
  </div>;
}
