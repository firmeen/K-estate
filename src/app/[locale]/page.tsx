import Link from "next/link";
import { notFound } from "next/navigation";
import { DiscoverySearch } from "@/components/properties/discovery-search";
import { PropertyCard } from "@/components/properties/property-card";
import { isLocale } from "@/i18n/config";
import { getUICopy } from "@/i18n/dictionaries";
import { listPublicProperties } from "@/server/properties/service";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUICopy(locale);
  const properties = await listPublicProperties();

  return <>
    <section className="container-width pt-12 pb-12 sm:pt-16 md:pt-[76px] md:pb-20">
      <div className="grid items-end gap-8 md:grid-cols-[1.12fr_.88fr] md:gap-12">
        <div className="sea-reveal">
          <p className="eyebrow">{ui.heroTag}</p>
          <h1 className="display-title mt-4 max-w-[670px]">{ui.heroTitle}</h1>
          <p className="body-copy mt-4 max-w-[515px] text-[.98rem] md:mt-6 md:text-[1.08rem]">{ui.heroDescription}</p>
          <Link href={`/${locale}/contact`} className="button-text mt-5 text-sm">{ui.contactLink} <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="md:pb-1">
          <h2 className="mb-3 text-[.85rem] font-medium text-[var(--color-text-secondary)]">{ui.quickSearch}</h2>
          <DiscoverySearch locale={locale}/>
        </div>
      </div>
    </section>

    <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-12 md:py-16">
      <div className="container-width">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
          <div className="max-w-2xl">
            <p className="eyebrow">{ui.collectionTag}</p>
            <h2 className="section-title mt-3">{ui.featuredTitle}</h2>
            <p className="body-copy mt-2 text-sm md:text-base">{ui.featuredDesc}</p>
          </div>
          <Link className="button-secondary" href={`/${locale}/properties`}>{ui.viewAll} <span aria-hidden="true">↗</span></Link>
        </div>
        {properties.length
          ? <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {properties.slice(0,3).map(property => <PropertyCard key={property.id} property={property} locale={locale}/>)}
            </div>
          : <div className="notice mt-8">{ui.noAvailable}</div>}
      </div>
    </section>

    <section className="container-width py-12 md:py-16">
      <div className="flex flex-col gap-5 border-y border-[var(--color-border)] py-8 md:flex-row md:items-center md:justify-between md:gap-10 md:py-10">
        <div>
          <h2 className="text-[1.3rem] font-medium md:text-[1.6rem]">{ui.talkTitle}</h2>
          <p className="body-copy mt-2 text-[.92rem]">{ui.talkDesc}</p>
        </div>
        <Link href={`/${locale}/contact`} className="button-secondary shrink-0 self-start md:self-auto">{ui.contactLink} <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  </>;
}
