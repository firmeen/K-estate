import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { formatTHB } from "@/lib/utils";
import { getPublicProperty } from "@/server/properties/service";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const property = await getPublicProperty(slug);
  return { title: property?.title[locale] ?? "Property", robots: { index: false, follow: false } };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const property = await getPublicProperty(slug);
  if (!property) notFound();
  const t = getDictionary(locale);

  return (
    <article className="container-width py-12 md:py-20">
      <Link href={`/${locale}/properties`} className="text-sm font-semibold text-[#678872] hover:underline">← {t.common.back}</Link>
      <p className="eyebrow mt-9">{t.types[property.type]} · {property.location[locale]}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
        <h1 className="page-heading max-w-3xl">{property.title[locale]}</h1>
        <div><div className="text-xs font-medium uppercase tracking-wider text-[#799080]">{property.listingMode === "sale" ? t.common.sale : t.common.rent}</div>
          <p className="mt-1 text-3xl font-semibold text-[#194732]">{formatTHB(property.priceTHB)}{property.listingMode === "rent" && <span className="text-sm font-normal text-[#698374]">{t.common.perMonth}</span>}</p>
        </div>
      </div>
      <div className="property-placeholder mt-10 min-h-[300px] rounded-2xl md:min-h-[480px]">
        <span>DEMO PROPERTY · NO PHOTOS PROVIDED</span>
      </div>
      <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">{t.detail.overview}</h2>
          <p className="mt-5 leading-8 text-[#637568]">{property.description[locale]}</p>
          <div className="notice mt-8">{t.detail.notice}</div>
        </div>
        <aside className="h-fit rounded-2xl border border-[#e0e8df] bg-white p-7">
          <h2 className="text-lg font-semibold">{t.detail.features}</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex justify-between gap-4"><dt className="text-[#718174]">{t.catalog.type}</dt><dd className="font-semibold">{t.types[property.type]}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-[#718174]">{t.common.area}</dt><dd className="font-semibold">{property.areaSqm} m²</dd></div>
            {property.bedrooms !== undefined && <div className="flex justify-between gap-4"><dt className="text-[#718174]">{t.common.bedrooms}</dt><dd className="font-semibold">{property.bedrooms}</dd></div>}
            {property.bathrooms !== undefined && <div className="flex justify-between gap-4"><dt className="text-[#718174]">{t.common.bathrooms}</dt><dd className="font-semibold">{property.bathrooms}</dd></div>}
          </dl>
          <p className="mt-8 text-xs leading-6 text-[#748479]">{t.detail.inquiry}</p>
          <Link href={`/${locale}/contact`} className="button-primary mt-5 w-full">{t.common.getInTouch}</Link>
        </aside>
      </div>
    </article>
  );
}
