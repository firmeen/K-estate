import Image from "next/image";
import { propertyImageSrc, cn } from "@/lib/utils";

export function PropertyMedia({ src, alt, placeholder, priority = false, sizes, className }: {
  src?: string;
  alt: string;
  placeholder: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return <div className={cn("relative h-full w-full overflow-hidden", className)}>
    {src
      ? <Image src={propertyImageSrc(src)} alt={alt} fill priority={priority} unoptimized
          sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          className="property-card__image object-cover"/>
      : <div className="property-placeholder absolute inset-0" role="img" aria-label={placeholder}>
          <div className="property-placeholder__content">
            <svg aria-hidden="true" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.1">
              <rect x="4" y="6" width="24" height="20" rx="2"/>
              <circle cx="11" cy="12" r="2"/>
              <path d="m5 23 7-7 5 5 4-4 6 6"/>
            </svg>
            <span>{placeholder}</span>
          </div>
        </div>}
  </div>;
}
