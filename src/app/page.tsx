import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import HomePage from "./[locale]/page";

// Render the Myanmar-language landing page at the GitHub Pages project root.
// A server-side redirect cannot be used with Next.js static export.
export default function RootPage() {
  return <>
    <SiteHeader locale="my"/>
    <main id="main-content"><HomePage params={Promise.resolve({ locale:"my" })}/></main>
    <SiteFooter locale="my"/>
  </>;
}
