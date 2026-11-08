import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary, getUICopy } from "@/i18n/dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const ui = getUICopy(locale);
  // Legacy URL: retained for compatibility, not a primary navigation destination.
  return <div className="container-width pt-14 pb-20 md:pt-20">
    <p className="eyebrow">{t.about.eyebrow}</p>
    <h1 className="page-title mt-4 max-w-3xl">{t.about.title}</h1>
    <p className="body-copy mt-6 text-base">{t.about.text}</p>
    <div className="notice mt-7 max-w-2xl">{t.about.note}</div>
    <Link href={`/${locale}/properties`} className="button-primary mt-7">{ui.viewAll} <span aria-hidden="true">↗</span></Link>
  </div>;
}
