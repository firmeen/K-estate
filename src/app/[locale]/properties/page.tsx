import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PropertyExplorer } from "@/components/properties/property-explorer";
import { isLocale } from "@/i18n/config";
import { getUx } from "@/i18n/ux";
import { listPublicProperties } from "@/server/properties/service";

export default async function CatalogPage({params}:{params:Promise<{locale:string}>}) {
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  const properties=await listPublicProperties();
  return <Suspense fallback={<div className="container-width section-gap" role="status">
    <p className="kicker">{getUx(locale).propertiesEyebrow}</p>
    <h1 className="page-heading mt-4">{getUx(locale).propertiesHeading}</h1>
    <div className="surface-panel mt-9 h-48 animate-pulse bg-[#E7EFEB]" />
  </div>}>
    <PropertyExplorer locale={locale} properties={properties}/>
  </Suspense>;
}
