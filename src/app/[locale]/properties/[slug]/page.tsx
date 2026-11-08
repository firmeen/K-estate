import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { isLocale,locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getUx } from "@/i18n/ux";
import { formatTHB } from "@/lib/utils";
import { getPublicProperty,listPublicProperties } from "@/server/properties/service";

type Props={params:Promise<{locale:string;slug:string}>};

export async function generateStaticParams(){
  const properties=await listPublicProperties();
  return properties.flatMap(property=>locales.map(locale=>({locale,slug:property.slug})));
}
export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {locale,slug}=await params;
  if(!isLocale(locale)) return {};
  const property=await getPublicProperty(slug);
  return {title:property?.title[locale]??"Property",robots:{index:false,follow:false}};
}

function Arrow(){
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M4 16 16 4M6 4h10v10"/></svg>;
}
export default async function PropertyDetailPage({params}:Props){
  const {locale,slug}=await params;
  if(!isLocale(locale)) notFound();
  const property=await getPublicProperty(slug);
  if(!property) notFound();
  const u=getUx(locale);
  const t=getDictionary(locale);

  return <article className="container-width pb-12 pt-9 md:pb-20 md:pt-12">
    <nav aria-label="Breadcrumb" className="mb-7">
      <Link href={`/${locale}/properties`} className="inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-[#4D6E76] transition-colors hover:text-[#102F38]">
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M16 10H4m6-6-6 6 6 6"/></svg>
        {u.back}
      </Link>
    </nav>
    <div className="mb-7 flex flex-col gap-5 md:mb-9 md:flex-row md:items-end md:justify-between">
      <div className="max-w-[760px]">
        <p className="kicker">{t.types[property.type]} · {property.location[locale]} · {property.listingMode==="rent"?u.rent:u.sale}</p>
        <h1 className="page-heading mt-4">{property.title[locale]}</h1>
      </div>
      <div className="md:text-right">
        <p className="text-xs font-medium text-[#55747A]">{property.listingMode==="sale"?t.common.sale:t.common.rent}</p>
        <p className="mt-1 text-[29px] font-semibold leading-tight tracking-[-.05em] text-[#102F38] md:text-[36px]">{formatTHB(property.priceTHB)}
          {property.listingMode==="rent" && <span className="ml-1 text-[12px] font-normal tracking-normal text-[#627C81]">{u.perMonth}</span>}
        </p>
      </div>
    </div>

    <PropertyGallery images={property.images} type={property.type} title={property.title[locale]} locale={locale}/>

    <div className="mt-9 grid gap-9 lg:mt-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(295px,.82fr)] lg:gap-16">
      <div>
        <p className="kicker">{u.propertyInformation}</p>
        <h2 className="section-heading mt-3">{u.propertyOverview}</h2>
        <p className="mt-5 max-w-[700px] whitespace-pre-line text-[15px] leading-8 text-[#536F76]">{property.description[locale]}</p>

        <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7 border-y border-[#DCE6E3] py-7 sm:grid-cols-3">
          <div>
            <dt className="text-xs text-[#607A7F]">{u.area}</dt>
            <dd className="mt-2 text-xl font-semibold text-[#102F38]">{property.areaSqm.toLocaleString("en-US")} <span className="text-[13px] font-normal">m²</span></dd>
          </div>
          <div>
            <dt className="text-xs text-[#607A7F]">{u.type}</dt>
            <dd className="mt-2 text-[17px] font-semibold text-[#102F38]">{t.types[property.type]}</dd>
          </div>
          {property.bedrooms!==undefined && <div>
            <dt className="text-xs text-[#607A7F]">{u.bedrooms}</dt>
            <dd className="mt-2 text-xl font-semibold text-[#102F38]">{property.bedrooms}</dd>
          </div>}
          {property.bathrooms!==undefined && <div>
            <dt className="text-xs text-[#607A7F]">{u.bathrooms}</dt>
            <dd className="mt-2 text-xl font-semibold text-[#102F38]">{property.bathrooms}</dd>
          </div>}
        </div>

        <div className="mt-9">
          <p className="kicker">{u.location}</p>
          <h3 className="mt-3 text-[21px] font-semibold">{property.location[locale]}</h3>
          <p className="mt-1 text-sm text-[#637D82]">{t.common.thailand}</p>
          {!property.coordinates && <p className="mt-3 text-[13px] leading-6 text-[#698084]">{u.locationUnknown}</p>}
        </div>

        {property.isDemo && <div className="mt-9 rounded-xl border border-[#D6E3DF] bg-[#EDF3EF] px-5 py-4 text-[13px] leading-7 text-[#43616A]">
          <span className="font-semibold">{u.example} · </span>{u.disclaimer}
        </div>}
      </div>

      <aside className="lg:sticky lg:top-[110px] lg:self-start">
        <div className="surface-panel overflow-hidden">
          <div className="border-b border-[#E0E9E5] px-6 py-6">
            <p className="kicker">{u.highlights}</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-.035em]">{formatTHB(property.priceTHB)}</p>
            <p className="mt-2 text-sm text-[#617A80]">{t.types[property.type]} · {property.location[locale]}</p>
          </div>
          <div className="px-6 py-6">
            <h3 className="text-[17px] font-semibold">{u.contactForProperty}</h3>
            <p className="mt-3 text-[13px] leading-7 text-[#607A7E]">{t.detail.inquiry}</p>
            <Link href={`/${locale}/contact`} className="button-primary mt-5 w-full">{u.openContact}<Arrow/></Link>
          </div>
        </div>
      </aside>
    </div>
  </article>;
}
