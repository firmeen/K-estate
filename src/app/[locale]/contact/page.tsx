import { notFound } from "next/navigation";
import { ownerContactChannels } from "@/content/owner-contact";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return <div className="container-width py-14 md:py-24">
    <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:gap-16">
      <div>
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1 className="page-heading mt-5 max-w-3xl">{t.contact.title}</h1>
        <p className="mt-7 max-w-xl text-lg leading-9 text-[#65796b]">{t.contact.text}</p>
      </div>
      <div className="h-fit rounded-2xl border border-[#dfe8dd] bg-white p-6 shadow-[0_18px_50px_#17342d0a] md:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f1e8] text-[#275742]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <path d="M20 11.3c0 4.7-3.6 8.2-8.3 8.2-1.3 0-2.5-.2-3.5-.7L4 20l1.2-4.1A8.2 8.2 0 1 1 20 11.3Z"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">{t.nav.contact}</h2>
        </div>
        {ownerContactChannels.length ? <div className="mt-7 space-y-3">
          {ownerContactChannels.map(channel => (
            <a key={channel.id} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex min-h-[58px] items-center justify-between gap-3 rounded-xl border border-[#d9e5db] px-5 font-semibold text-[#18442f] transition-colors hover:bg-[#eff5ee]">
              <span>{channel.label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div> : <div className="notice mt-6 leading-7">{t.contact.note}</div>}
      </div>
    </div>
  </div>;
}
