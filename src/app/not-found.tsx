import Link from "next/link";
export default function NotFound() {
  return <div className="container-width py-28 text-center">
    <p className="eyebrow">404 · NOT FOUND</p>
    <h1 className="mt-5 text-4xl font-semibold">This page is not available.</h1>
    <Link className="button-primary mt-8" href="/my">Back to KESTA</Link>
  </div>;
}
