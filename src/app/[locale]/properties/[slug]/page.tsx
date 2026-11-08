import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { ownerContactChannels } from "@/content/owner-contact";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary, getUICopy } from "@/i18n/dictionaries";
import { formatTHB } from "@/lib/utils";
import { getPublicProperty, listPublicProperties } from "@/server/properties/service";
import type { Property } from "@/types/property";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const properties = await listPublicProperties();
  return properties.flatMap(property => locales.map(locale => ({ locale, slug:property.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale,slug } = await params;
  if (!isLocale(locale)) return {};
  const property = await getPublicProperty(slug);
  return { title: property?.title[locale] ?? "Property", robots:{ index:false, follow:false } };
}

function Specifications({ property, locale }: { property: Property; locale: "my" | "th" | "en" }) {
  const t = getDictionary(locale);
  const ui = getUICopy(locale);
  const rows = [
    [ui.detailType,t.types[property.type]],
    [ui.detailListing,property.listingMode === "sale" ? ui.forSale : ui.forRent],
    [ui.detailArea,`${property.areaSqm.toLocaleString("en-US")} m²`],
    ...(property.landAreaSqm !== undefined && property.type === "house" ? [[ui.detailLand,`${property.landAreaSqm.toLocaleString("en-US")} m²`]] : []),
    ...(property.floor !== undefined && property.type === "condo" ? [[ui.detailFloor,String(property.floor)]] : []),
    ...(property.type !== "land" && property.bedrooms !== undefined && property.bedrooms > 0 ? [[ui.detailBed,String(property.bedrooms)]] : []),
    ...(property.type !== "land" && property.bathrooms !== undefined && property.bathrooms > 0 ? [[ui.detailBath,String(property.bathrooms)]] : []),
  ];
  return <section className="mt-9" aria-labelledby="property-specifications">
    <h2 id="property-specifications" className="section-title">{ui.detailDetails}</h2>
    <dl className="mt-4 grid grid-cols-2 gap-x-6 border-t border-[var(--color-border)] sm:grid-cols-3">
      {rows.map(([label,value]) => <div key={label} className="min-w-0 border-b border-[var(--color-border)] py-4">
        <dt className="text-xs leading-6 text-[var(--color-text-secondary)]">{label}</dt>
        <dd className="mt-1 break-words text-[.94rem] font-medium leading-7">{value}</dd>
      </div>)}
    </dl>
  </section>;
}

export default async function PropertyDetailPage({ params }: Props) {
  const { locale,slug } = await params;
  if (!isLocale(locale)) notFound();
  const property = await getPublicProperty(slug);
  if (!property) notFound();
  const ui = getUICopy(locale);
  const t = getDictionary(locale);
  const isRent = property.listingMode === "rent";

  return <article className="container-width pt-7 pb-10 md:pt-10 md:pb-20">
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[.82rem] text-[var(--color-text-secondary)]">
      <Link href={`/${locale}/properties`} className="inline-flex min-h-11 items-center hover:text-[var(--color-deep-sea)]">{ui.detailBack}</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="max-w-[60vw] truncate text-[var(--color-deep-sea)]">{property.title[locale]}</span>
    </nav>

    <header className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[750px]">
        <p className="eyebrow">{t.types[property.type]} · {isRent ? ui.forRent : ui.forSale}</p>
        <h1 className="page-title mt-2">{property.title[locale]}</h1>
        <p className="mt-2 text-[.94rem] text-[var(--color-text-secondary)]">
          {property.district?.[locale] ? `${property.district[locale]} · ` : ""}{property.location[locale]} · {t.common.thailand}
        </p>
      </div>
      <div className="shrink-0 md:text-right">
        <p className="text-xs font-medium text-[var(--color-text-secondary)]">{ui.detailPrice}</p>
        <p className="mt-1 text-[1.8rem] font-semibold leading-tight tracking-tight md:text-[2.1rem]">{formatTHB(property.priceTHB)}
          {isRent && <span className="ml-1 whitespace-nowrap text-[.8rem] font-normal tracking-normal text-[var(--color-text-secondary)]">{ui.perMonth}</span>}
        </p>
      </div>
    </header>

    <PropertyGallery images={property.images} title={property.title[locale]} locale={locale}/>

    <div className="mt-9 grid gap-10 md:mt-12 md:grid-cols-[minmax(0,1.65fr)_minmax(270px,1fr)] md:gap-14">
      <div className="min-w-0">
        <section aria-labelledby="property-overview">
          <h2 id="property-overview" className="section-title">{ui.detailOverview}</h2>
          <p className="body-copy mt-4 whitespace-pre-line text-[.96rem]">{property.description[locale]}</p>
        </section>
        <section className="mt-9 border-t border-[var(--color-border)] pt-7" aria-labelledby="property-location">
          <h2 id="property-location" className="section-title">{ui.detailLocation}</h2>
          <p className="body-copy mt-3 text-[.96rem]">
            {property.district?.[locale] ? `${property.district[locale]}, ` : ""}{property.location[locale]}, {t.common.thailand}
          </p>
        </section>
        <Specifications property={property} locale={locale}/>
        {property.isDemo && <div className="notice mt-8">{ui.demoNote}</div>}
      </div>

      <aside className="h-fit rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:sticky md:top-[100px] md:p-7">
        <p className="eyebrow">{ui.detailContact}</p>
        <h2 className="mt-3 text-xl font-medium leading-[1.55]">{property.title[locale]}</h2>
        <p className="mt-2 text-[.83rem] text-[var(--color-text-secondary)]">{ui.reference}: {property.id}</p>
        <div className="mt-6 border-t border-[var(--color-border)] pt-5">
          {ownerContactChannels.length && !property.isDemo
            ? <Link href={`/${locale}/contact`} className="button-primary w-full">{ui.detailContact} <span aria-hidden="true">↗</span></Link>
            : <p className="text-[.88rem] leading-7 text-[var(--color-text-secondary)]">{ui.detailContactUnavailable}</p>}
        </div>
      </aside>
    </div>
  </article>;
}
