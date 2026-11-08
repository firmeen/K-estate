import type { Locale } from "@/i18n/config";
export type PropertyType = "condo" | "apartment" | "land" | "house";
export type ListingMode = "sale" | "rent";
export type PropertyStatus = "draft" | "available" | "reference" | "reserved" | "sold" | "rented" | "hidden";
export type Localized = Record<Locale, string>;
export interface PropertySource {
  /** External listings are market references, NOT inventory owned or sold by KESTA. */
  provider: string;
  url: string;
  checkedAt: string; // YYYY-MM-DD snapshot date
}
export interface Property {
  id: string;
  slug: string;
  title: Localized;
  description: Localized;
  location: Localized;
  provinceCode: string;
  type: PropertyType;
  listingMode: ListingMode;
  status: PropertyStatus;
  priceTHB: number;
  areaSqm: number;
  bedrooms?: number;
  bathrooms?: number;
  images: string[];
  coordinates?: { latitude: number; longitude: number };
  district?: Localized;
  floor?: number;
  landAreaSqm?: number;
  landAreaSquareWa?: number;
  /** Photos supplied by KESTA owner are actual property images. Otherwise illustrative. */
  imageIsIllustrative?: boolean;
  source?: PropertySource;
  /** Kept for compatibility with the initial starter data model. */
  isDemo?: boolean;
}
