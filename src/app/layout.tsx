import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "KESTA | Thailand Property", template: "%s | KESTA" },
  description: "Discover properties for sale and rent in Thailand. A dedicated owner property catalogue for Myanmar customers.",
  // Demo content must not be indexed until verified properties go live.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="my"><body>{children}</body></html>;
}
