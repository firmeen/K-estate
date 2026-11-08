import type { Locale } from "@/i18n/config";

export type PropertyType = "condo" | "apartment" | "land" | "house";
export type ListingMode = "sale" | "rent";
export type PropertyStatus = "draft" | "available" | "reserved" | "sold" | "rented" | "hidden";
export type Localized = Record<Locale, string>;

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
  isDemo: boolean;
}
