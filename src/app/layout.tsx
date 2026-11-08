import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "KESTA | Thailand Property", template: "%s | KESTA" },
  description: "Browse sourced Thailand property information in Myanmar, Thai and English. External references are attributed to their original publishers.",
  // Demo content must not be indexed until verified properties go live.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="my"><body>{children}</body></html>;
}
