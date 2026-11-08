import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/properties/property-card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { listPublicProperties } from "@/server/properties/service";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const properties = await listPublicProperties();

  return <>
    <section className="container-width grid items-center gap-9 py-12 md:grid-cols-[1.05fr_.95fr] md:gap-14 md:py-20">
      <div>
        <p className="eyebrow">{t.home.eyebrow} · THAILAND</p>
        <h1 className="heading-display mt-6 max-w-[670px]">{t.home.title}</h1>
        <p className="mt-6 max-w-[540px] text-base leading-8 text-[#65796b] md:text-lg">{t.home.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/${locale}/properties`} className="button-primary">{t.nav.explore} <span aria-hidden="true">↗</span></Link>
          <Link href={`/${locale}/contact`} className="button-outline">{t.nav.contact}</Link>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-[#dde5db] pt-6 text-[11px] font-semibold uppercase tracking-[.10em] text-[#6c8677]">
          <span>THAILAND</span><span>DIRECT OWNER</span><span>SALE / RENT</span>
        </div>
      </div>
      <div className="hero-art" role="img" aria-label="Decorative conceptual building illustration">
        <span className="hero-art-label">KESTA · THAILAND</span>
        <div className="absolute bottom-5 left-5 z-10 rounded-xl bg-[#f9faf4]/95 px-5 py-4 shadow-sm">
          <span className="block text-[10px] font-bold tracking-[.14em] text-[#6c8977]">PROPERTY DISCOVERY</span>
          <strong className="mt-1 block text-xl">Find your place.</strong>
        </div>
      </div>
    </section>
    <section className="border-t border-[#e1e8df] bg-white py-16 md:py-20">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{t.home.sectionEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">{t.home.sectionTitle}</h2>
            <p className="mt-4 max-w-xl text-[#677b6e]">{t.home.sectionDescription}</p>
          </div>
          <Link href={`/${locale}/properties`} className="button-outline">{t.common.viewAll} <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.slice(0,3).map(property => <PropertyCard key={property.id} property={property} locale={locale}/>)}
        </div>
      </div>
    </section>
    <section className="container-width py-16 md:py-24">
      <div className="rounded-[22px] bg-[#193e33] px-8 py-12 text-[#f7f8f0] md:px-16 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-[#a4c8af]">DIRECT CONTACT</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-.04em] md:text-5xl">{t.contact.title}</h2>
        <p className="mt-5 max-w-2xl leading-8 text-[#c5d9c9]">{t.contact.text}</p>
        <Link href={`/${locale}/contact`} className="mt-7 inline-flex min-h-12 items-center rounded-full border border-[#7b9e88] px-6 py-3 text-sm font-semibold hover:bg-white/10">{t.nav.contact} ↗</Link>
      </div>
    </section>
  </>;
}
