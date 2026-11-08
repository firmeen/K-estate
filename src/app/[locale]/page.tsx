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

  return (
    <>
      <section className="container-width grid items-center gap-10 py-12 md:grid-cols-[1.05fr_.95fr] md:gap-14 md:py-20">
        <div>
          <p className="eyebrow">{t.home.eyebrow} · THAILAND</p>
          <h1 className="heading-display mt-7 max-w-[670px]">{t.home.title}</h1>
          <p className="mt-7 max-w-[540px] text-base leading-8 text-[#65796b] md:text-lg">{t.home.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={`/${locale}/properties`} className="button-primary">{t.home.explore}<span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/rent`} className="button-outline">{t.home.rent}</Link>
          </div>
          <div className="mt-11 flex flex-wrap gap-6 border-t border-[#dde5db] pt-6 text-[11px] font-semibold uppercase tracking-[.12em] text-[#6c8677]">
            <span>Thailand properties</span><span>Direct owner</span><span>Buy / Rent</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Decorative architectural illustration">
          <span className="hero-art-label">KESTA · THAILAND</span>
          <div className="absolute bottom-5 left-5 z-10 rounded-xl bg-[#f9faf4]/95 px-5 py-4 shadow-sm">
            <span className="block text-[10px] font-bold tracking-[.14em] text-[#6c8977]">NEW PERSPECTIVES</span>
            <strong className="mt-1 block text-xl">Space to belong.</strong>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e1e8df] bg-white py-20">
        <div className="container-width">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="eyebrow">{t.home.sectionEyebrow}</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em] md:text-5xl">{t.home.sectionTitle}</h2><p className="mt-4 max-w-xl text-[#677b6e]">{t.home.sectionDescription}</p></div>
            <Link href={`/${locale}/properties`} className="button-outline">{t.common.viewAll} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{properties.slice(0,3).map((property) => <PropertyCard key={property.id} property={property} locale={locale}/>)}</div>
          <p className="mt-6 text-xs text-[#839083]">{t.common.demo}</p>
        </div>
      </section>

      <section className="container-width py-20 md:py-28">
        <div className="rounded-[22px] bg-[#193e33] px-8 py-14 text-[#f7f8f0] md:px-16 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#a4c8af]">THE KESTA APPROACH</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-.04em] md:text-5xl">{t.home.promiseTitle}</h2>
          <p className="mt-6 max-w-2xl leading-8 text-[#c5d9c9]">{t.home.promiseText}</p>
          <Link href={`/${locale}/about`} className="mt-8 inline-flex rounded-full border border-[#7b9e88] px-6 py-3 text-sm font-semibold hover:bg-white/10">{t.nav.about} ↗</Link>
        </div>
      </section>
    </>
  );
}
