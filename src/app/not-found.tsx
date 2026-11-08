import Link from "next/link";
export default function NotFound() {
  return <main className="container-width py-20 text-center md:py-28">
    <p className="eyebrow">404 · NOT FOUND</p>
    <h1 className="page-title mx-auto mt-4 max-w-2xl">This page isn’t available.</h1>
    <p className="body-copy mx-auto mt-3 text-sm">Return to the property collection.</p>
    <Link href="/my/properties" className="button-primary mt-7">Explore properties <span aria-hidden="true">↗</span></Link>
  </main>;
}
