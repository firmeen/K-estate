"use client";

import { useEffect,useRef,useState } from "react";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getUx } from "@/i18n/ux";
import type { PropertyType } from "@/types/property";
import { PropertyArtwork } from "./property-artwork";

export function PropertyGallery({images,type,title,locale}: {
  images:string[]; type:PropertyType; title:string; locale:Locale;
}) {
  const u=getUx(locale);
  const [index,setIndex]=useState(0);
  const [expanded,setExpanded]=useState(false);
  const touchStart=useRef<number | null>(null);
  const count=images.length;

  useEffect(()=>{
    if(!expanded) return;
    function onKey(event:KeyboardEvent) {
      if(event.key==="Escape") setExpanded(false);
      if(count>1 && event.key==="ArrowLeft") setIndex(prev=>(prev-1+count)%count);
      if(count>1 && event.key==="ArrowRight") setIndex(prev=>(prev+1)%count);
    }
    document.addEventListener("keydown",onKey);
    return ()=>document.removeEventListener("keydown",onKey);
  },[expanded,count]);

  function next(){setIndex(prev=>(prev+1)%count)}
  function previous(){setIndex(prev=>(prev-1+count)%count)}
  function startTouch(event:React.TouchEvent){touchStart.current=event.touches[0]?.clientX ?? null}
  function endTouch(event:React.TouchEvent){
    if(touchStart.current===null || count<2) return;
    const delta=(event.changedTouches[0]?.clientX ?? touchStart.current)-touchStart.current;
    if(Math.abs(delta)>55) {if(delta<0) next();else previous()}
    touchStart.current=null;
  }

  if(count===0) return <div className="relative aspect-[1.37] overflow-hidden rounded-[20px] md:aspect-[2.05]">
    <PropertyArtwork type={type} className="h-full w-full"/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#102F38]/48 via-transparent to-transparent"/>
    <div className="absolute left-4 top-4 rounded-full bg-[#F7F6F2]/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#244D57]">{u.example}</div>
    <p className="absolute bottom-5 left-5 right-5 max-w-lg text-sm leading-6 text-white md:bottom-7 md:left-7">{u.illustration}</p>
  </div>;

  return <>
    <div className="relative overflow-hidden rounded-[20px] bg-[#DCE6E3]" onTouchStart={startTouch} onTouchEnd={endTouch}>
      <button type="button" onClick={()=>setExpanded(true)} aria-label={`${title} · ${index+1}/${count}`}
        className="relative block aspect-[1.37] w-full cursor-zoom-in md:aspect-[2.05]">
        <Image src={images[index]} alt={`${title} — ${index+1}/${count}`} fill priority sizes="(max-width: 767px) 100vw, 1200px" className="object-cover"/>
      </button>
      {count>1 && <>
        <div className="absolute bottom-4 left-4 rounded-full bg-[#102F38]/75 px-3 py-1.5 text-xs font-semibold text-white">{index+1} / {count}</div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button aria-label={u.galleryPrevious} type="button" onClick={previous} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#102F38] hover:bg-white">←</button>
          <button aria-label={u.galleryNext} type="button" onClick={next} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#102F38] hover:bg-white">→</button>
        </div>
      </>}
    </div>
    {count>1 && <div className="mt-3 flex gap-2 overflow-x-auto pb-1" aria-label="Property photos">
      {images.map((src,i)=><button type="button" key={`${src}-${i}`} onClick={()=>setIndex(i)} aria-current={i===index?"true":undefined}
        aria-label={`${u.photoCount} ${i+1}`}
        className={`relative h-[74px] w-[106px] shrink-0 overflow-hidden rounded-lg border-2 ${i===index?"border-[#244D57]":"border-transparent opacity-70 hover:opacity-100"}`}>
        <Image src={src} alt="" fill sizes="106px" className="object-cover"/>
      </button>)}
    </div>}
    {expanded && <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[90] flex items-center justify-center bg-[#071C22]/95 p-4">
      <button type="button" onClick={()=>setExpanded(false)} aria-label="Close" className="absolute right-5 top-5 z-10 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white">×</button>
      <div className="relative h-[80vh] w-full max-w-[1180px]" onTouchStart={startTouch} onTouchEnd={endTouch}>
        <Image src={images[index]} alt={`${title} — ${index+1}/${count}`} fill sizes="100vw" className="object-contain"/>
      </div>
      {count>1 && <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-6 text-white">
        <button type="button" aria-label={u.galleryPrevious} onClick={previous} className="min-h-11 rounded-full px-3">←</button>
        <span className="text-sm">{index+1} / {count}</span>
        <button type="button" aria-label={u.galleryNext} onClick={next} className="min-h-11 rounded-full px-3">→</button>
      </div>}
    </div>}
  </>;
}
