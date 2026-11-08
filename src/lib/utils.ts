import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

export function formatTHB(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "THB", maximumFractionDigits: 0,
  }).format(amount);
}

/** Next/Image in unoptimized static export does not automatically rewrite root-local image src. */
export function propertyImageSrc(src: string): string {
  if (!src.startsWith("/") || src.startsWith("//")) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
}
