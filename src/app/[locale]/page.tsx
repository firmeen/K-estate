import Link from "next/link";
import { notFound } from "next/navigation";
import { HomeSearch } from "@/components/home/home-search";
import { PropertyArtwork } from "@/components/properties/property-artwork";
import { PropertyCard } from "@/components/properties/property-card";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getUx } from "@/i18n/ux";
import { listPublicProperties } from "@/server/properties/service";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M3.5 10h13M11 4.5 16.5 10 11 15.5"/></svg>;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const u = getUx(locale);
  const properties = await listPublicProperties();

  return <>
    <section className="container-width grid items-center gap-7 pb-12 pt-11 md:grid-cols-[1.08fr_.92fr] md:gap-12 md:pb-20 md:pt-16">
      <div>
        <p className="kicker in-view-rise">{u.kicker}</p>
        <h1 className="display-heading in-view-rise in-view-rise--delay-1 mt-5 max-w-[660px]">
          <span className="block">{u.heroTop}</span>
          <span className="block text-[#35616D]">{u.heroBottom}</span>
        </h1>
        <p className="in-view-rise in-view-rise--delay-2 mt-5 max-w-[540px] text-[15px] leading-8 text-[#506B72] md:text-[17px]">{u.heroCopy}</p>
        <div className="in-view-rise in-view-rise--delay-2">
          <HomeSearch locale={locale}/>
        </div>
        <Link className="soft-link in-view-rise in-view-rise--delay-3 mt-5" href={`/${locale}/contact`}>
          {u.contact}
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M4 16 16 4M6 4h10v10"/></svg>
        </Link>
      </div>
      <div className="in-view-rise in-view-rise--delay-2 relative overflow-hidden rounded-[23px] bg-[#D9E8E3]">
        <div className="relative h-[235px] overflow-hidden sm:h-[290px] md:h-[540px]">
          <PropertyArtwork type="condo" className="h-full w-full"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C303A]/65 via-transparent to-transparent"/>
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/50 bg-[#F7F6F2]/88 px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#264C55] backdrop-blur-md">KESTA · THAILAND</div>
          <div className="absolute bottom-6 left-6 right-5 md:bottom-9 md:left-9">
            <p className="text-[11px] font-semibold tracking-[.18em] text-[#D1E5E1]">SPACES / PLACES / POSSIBILITIES</p>
            <p className="mt-3 max-w-[400px] text-2xl font-semibold leading-tight tracking-[-.035em] text-white md:text-4xl">A clearer way to find your place.</p>
            <p className="mt-3 text-xs text-[#D6E5E2]">{u.illustration}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-gap border-t border-[#DFE7E2] bg-white">
      <div className="container-width">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="kicker">{u.propertiesEyebrow}</p>
            <h2 className="section-heading mt-4">{u.featuredHeading}</h2>
            <p className="mt-3 max-w-[620px] text-[14px] leading-7 text-[#5A7277] md:text-[16px]">{u.featuredCopy}</p>
          </div>
          <Link href={`/${locale}/properties`} className="soft-link">
            {u.viewAll}
            <Arrow/>
          </Link>
        </div>
        {properties.length ? <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {properties.slice(0,3).map(property=><PropertyCard key={property.id} property={property} locale={locale}/>)}
        </div> : <div className="surface-panel mt-9 px-5 py-12 text-center text-[#59757B]">{u.empty}</div>}
        <p className="preview-note mt-5">{u.disclaimer}</p>
      </div>
    </section>

    <section className="container-width pt-12 pb-6 md:pt-20 md:pb-2">
      <div className="relative flex flex-col gap-6 overflow-hidden rounded-[22px] bg-[#102F38] px-6 py-9 text-white md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
        <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border border-[#4E7B81]/45"/>
        <div className="pointer-events-none absolute -right-5 -top-16 h-52 w-52 rounded-full border border-[#4E7B81]/35"/>
        <div className="relative">
          <p className="kicker !text-[#A8C5BF]">{u.contactEyebrow}</p>
          <h2 className="section-heading mt-3 text-white">{u.contactHeading}</h2>
          <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#C0D4D3]">{u.contactCopy}</p>
        </div>
        <Link href={`/${locale}/contact`} className="relative inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#F7F6F2] px-6 py-3 text-sm font-semibold text-[#102F38] transition-transform duration-200 hover:-translate-y-0.5 md:self-auto">
          {t.nav.contact}<Arrow/>
        </Link>
      </div>
    </section>
  </>;
}
