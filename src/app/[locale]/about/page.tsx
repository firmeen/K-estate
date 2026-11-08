import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <div className="container-width py-20 md:py-28">
    <p className="eyebrow">{t.about.eyebrow}</p>
    <h1 className="page-heading mt-5 max-w-3xl">{t.about.title}</h1>
    <p className="mt-8 max-w-2xl text-lg leading-9 text-[#65796b]">{t.about.text}</p>
    <div className="notice mt-10 max-w-2xl">{t.about.note}</div>
    <Link href={`/${locale}/properties`} className="button-primary mt-10">{t.common.viewAll} ↗</Link>
  </div>;
}
