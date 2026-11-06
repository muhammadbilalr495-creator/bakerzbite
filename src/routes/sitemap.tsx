import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/ProductCard";
import { navLinks } from "@/components/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  head: () => seo("Site Map", "All pages on the Bakerz Bite website."),
  component: () => (
    <>
      <PageHeader title="Site Map" />
      <ul className="mx-auto grid max-w-3xl gap-3 px-4 py-12 sm:grid-cols-2">
        {navLinks.map((l) => (
          <li key={l.to}><Link to={l.to} className="block rounded-xl border bg-card p-4 font-semibold transition hover:bg-secondary">{l.label}</Link></li>
        ))}
      </ul>
    </>
  ),
});
