import { notFound } from "next/navigation";
import { PropertyExplorer } from "@/components/properties/property-explorer";
import { isLocale } from "@/i18n/config";
import { listPublicProperties } from "@/server/properties/service";

export default async function PropertiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PropertyExplorer locale={locale} properties={await listPublicProperties()}/>;
}
