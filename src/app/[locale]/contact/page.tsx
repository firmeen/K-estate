import { notFound } from "next/navigation";
import { ownerContactChannels } from "@/content/owner-contact";
import { isLocale } from "@/i18n/config";
import { getUICopy } from "@/i18n/dictionaries";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ui = getUICopy(locale);

  return <div className="container-width pt-12 pb-20 md:pt-20 md:pb-28">
    <div className="grid gap-9 md:grid-cols-[1fr_.95fr] md:items-start md:gap-16">
      <header className="sea-reveal">
        <p className="eyebrow">{ui.contactTag}</p>
        <h1 className="page-title mt-4 max-w-xl">{ui.contactTitle}</h1>
        <p className="body-copy mt-5 text-base">
          {ownerContactChannels.length ? ui.contactDesc : ui.contactEmptyDesc}
        </p>
      </header>
      <section aria-label={ui.contactLink} className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 md:px-8 md:py-6">
        {ownerContactChannels.length
          ? <ul>
            {ownerContactChannels.map(channel => <li key={channel.id}>
              <a className="contact-row group" href={channel.href}
                target={channel.href.startsWith("https://") ? "_blank" : undefined}
                rel={channel.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                aria-label={`${ui.contactVia} ${channel.label}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-surface-muted)] text-[var(--color-deep-sea)]" aria-hidden="true">
                  {channel.id === "phone" ? "☎" : channel.id === "email" ? "@" : "↗"}
                </span>
                <span className="min-w-0 flex-1 font-medium">{channel.label}</span>
                <span className="contact-row__arrow" aria-hidden="true">↗</span>
              </a>
            </li>)}
          </ul>
          : <div className="py-3">
              <div aria-hidden="true" className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-surface-muted)] text-[var(--color-deep-sea)]">
                <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M4 4h16v12H8l-4 4V4Z"/><path d="M8 10h8"/>
                </svg>
              </div>
              <h2 className="text-xl font-medium leading-relaxed">{ui.contactEmptyTitle}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">{ui.detailContactUnavailable}</p>
            </div>}
      </section>
    </div>
  </div>;
}
