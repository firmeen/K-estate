import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <div className="container-width py-20 md:py-28">
    <p className="eyebrow">{t.contact.eyebrow}</p>
    <h1 className="page-heading mt-5 max-w-3xl">{t.contact.title}</h1>
    <p className="mt-8 max-w-2xl text-lg leading-9 text-[#65796b]">{t.contact.text}</p>
    <div className="notice mt-10 max-w-2xl">{t.contact.note}</div>
  </div>;
}
