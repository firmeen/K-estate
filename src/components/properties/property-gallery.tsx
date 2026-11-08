"use client";

import { useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { getUICopy } from "@/i18n/dictionaries";
import { PropertyMedia } from "./property-media";

export function PropertyGallery({ images, title, locale }: {
  images: string[];
  title: string;
  locale: Locale;
}) {
  const ui = getUICopy(locale);
  const gallery = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const photos = images.filter(Boolean);

  if (!photos.length) return <div className="relative mt-7 aspect-[4/3] max-h-[520px] overflow-hidden rounded-[16px] bg-[var(--color-sea-mist)] sm:aspect-[16/9]">
    <PropertyMedia alt={title} placeholder={ui.noImageTitle} sizes="100vw"/>
  </div>;

  function select(next: number) {
    const index = Math.min(Math.max(next, 0), photos.length - 1);
    setActive(index);
    gallery.current?.scrollTo({ left: index * gallery.current.clientWidth, behavior:"smooth" });
  }
  function onScroll() {
    const node = gallery.current;
    if (node && node.clientWidth) setActive(Math.min(photos.length-1,Math.round(node.scrollLeft/node.clientWidth)));
  }

  return <section className="mt-7" aria-label={ui.galleryCount}>
    <div className="md:hidden">
      <div ref={gallery} onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={ui.galleryCount}>
        {photos.map((src,index) => <div key={`${src}-${index}`} className="relative aspect-[4/3] w-full shrink-0 snap-start">
          <PropertyMedia src={src} alt={`${title} — ${ui.galleryCount} ${index+1}`} placeholder={ui.noImage} priority={index===0} sizes="100vw"/>
        </div>)}
      </div>
    </div>

    <div className={`hidden gap-3 md:grid ${photos.length > 1 ? "md:grid-cols-[2fr_1fr]" : "md:grid-cols-1"}`}>
      <div className="relative aspect-[16/10] max-h-[510px] overflow-hidden rounded-[16px] bg-[var(--color-sea-mist)]">
        <PropertyMedia src={photos[active]} alt={`${title} — ${ui.galleryCount} ${active+1}`} placeholder={ui.noImage} priority sizes="(max-width: 1200px) 65vw, 850px"/>
      </div>
      {photos.length > 1 && <div className="grid grid-rows-2 gap-3">
        {photos.slice(1,3).map((src,index) => <button key={`${src}-${index}`} type="button" onClick={()=>select(index+1)}
          aria-label={`${ui.galleryCount} ${index+2}`}
          aria-pressed={active===index+1}
          className={`relative min-h-0 overflow-hidden rounded-[14px] bg-[var(--color-sea-mist)] focus-visible:outline-offset-[-3px] ${active === index+1 ? "ring-2 ring-[var(--color-focus)]" : ""}`}>
          <PropertyMedia src={src} alt={`${title} — ${ui.galleryCount} ${index+2}`} placeholder={ui.noImage} sizes="(max-width: 1200px) 30vw, 400px"/>
        </button>)}
        {photos.length===2 && <div className="grid place-items-center rounded-[14px] bg-[var(--color-surface-muted)] text-sm text-[var(--color-text-secondary)]">
          {ui.galleryCount} 2 / 2
        </div>}
      </div>}
    </div>

    <div className="mt-3 flex items-center justify-between gap-3">
      <p className="text-xs font-medium text-[var(--color-text-secondary)]">
        {ui.galleryCount} <span className="tabular-nums">{active+1} / {photos.length}</span>
      </p>
      {photos.length > 1 && <div className="flex gap-2">
        <button type="button" disabled={active===0} onClick={()=>select(active-1)} aria-label={ui.galleryPrevious}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface-muted)] disabled:opacity-40">←</button>
        <button type="button" disabled={active===photos.length-1} onClick={()=>select(active+1)} aria-label={ui.galleryNext}
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border)] transition-colors hover:bg-[var(--color-surface-muted)] disabled:opacity-40">→</button>
      </div>}
    </div>
  </section>;
}
