export const locales = ["my", "th", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "my";
export const isLocale = (value: string): value is Locale =>
  locales.some((locale) => locale === value);
