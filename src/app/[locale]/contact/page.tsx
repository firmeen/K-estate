import Link from "next/link";
import { notFound } from "next/navigation";
import { ownerContactChannels } from "@/content/owner-contact";
import { isLocale } from "@/i18n/config";
import { getUx } from "@/i18n/ux";

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4"><path d="M4 16 16 4M6 4h10v10"/></svg>;
}
function ChannelIcon({id}:{id:string}) {
  return id==="phone" ?
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><path d="M7 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-2l-5-2-2.5 2.5a13 13 0 0 1-7-7L9 8Z"/></svg> :
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><path d="M20 11.3a8 8 0 0 1-11.8 7L4 20l1.2-4.2A8 8 0 1 1 20 11.3Z"/><path d="M8.5 11.5h7"/></svg>;
}

export default async function ContactPage({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!isLocale(locale)) notFound();
  const u=getUx(locale);
  return <section className="container-width grid min-h-[55vh] gap-9 pb-12 pt-12 md:grid-cols-[1.1fr_.9fr] md:items-start md:gap-16 md:pb-20 md:pt-20">
    <div className="in-view-rise">
      <p className="kicker">{u.contactEyebrow}</p>
      <h1 className="page-heading mt-4 max-w-[660px]">{u.contactHeading}</h1>
      <p className="mt-5 max-w-[550px] text-[15px] leading-8 text-[#547078] md:text-[17px]">{u.contactCopy}</p>
      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#DFE7E2] pt-6 text-xs font-semibold tracking-[.1em] text-[#6B8587]">
        <span>KESTA</span><span aria-hidden="true">·</span><span>THAILAND</span><span aria-hidden="true">·</span><span>DIRECT OWNER</span>
      </div>
      <Link href={`/${locale}/properties`} className="soft-link mt-7">{u.discover}<Arrow/></Link>
    </div>
    <div className="surface-panel in-view-rise in-view-rise--delay-1 overflow-hidden">
      <div className="flex items-center gap-4 border-b border-[#E1E9E5] px-6 py-6 md:px-8">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F1EE] text-[#244D57]">
          <ChannelIcon id="message"/>
        </span>
        <div>
          <p className="text-[18px] font-semibold">{u.contactPanelTitle}</p>
          <p className="mt-1 text-xs text-[#5F7B80]">KESTA · CONTACT</p>
        </div>
      </div>
      {ownerContactChannels.length ?
        <div className="space-y-2 p-4 md:p-6">
          {ownerContactChannels.map(channel=><a key={channel.id} href={channel.href}
            target={channel.href.startsWith("http")?"_blank":undefined}
            rel={channel.href.startsWith("http")?"noopener noreferrer":undefined}
            className="group flex min-h-[66px] items-center gap-4 rounded-xl border border-[#E1E9E5] p-4 text-[#102F38] transition-colors hover:bg-[#EDF4F0]">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1EE]"><ChannelIcon id={channel.id}/></span>
            <span className="flex-1 text-[15px] font-semibold">{channel.label}</span><Arrow/>
          </a>)}
        </div> :
        <div className="px-6 py-9 md:px-8 md:py-11">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBDDD9] bg-[#F0F5F2]">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="#547C83" strokeWidth="1.6" className="h-5 w-5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
          </div>
          <h2 className="mt-5 text-[17px] font-semibold leading-7">{u.unavailable}</h2>
          <p className="mt-3 text-[14px] leading-7 text-[#617A80]">{u.unavailableDetail}</p>
        </div>
      }
    </div>
  </section>;
}
