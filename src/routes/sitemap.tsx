import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/ProductCard";
import { navLinks } from "@/components/Layout";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  head: () => seo("Site Map", "All pages on the Bakerz Bite website."),
  component: Sitemap,
});

const notes: Record<string, string> = {
  "/": "Welcome, bestsellers and today's deal",
  "/menu": "Cakes, pastries, cookies and pies",
  "/merchandise": "Mugs, bags, glasses and trays",
  "/offers": "Current deals and promo codes",
  "/gallery": "Photos from our ovens",
  "/feedback": "Ratings and customer reviews",
  "/about": "Our story and values",
  "/faq": "Answers to common questions",
  "/contact": "Email, phone, address and form",
};

function Sitemap() {
  return (
    <>
      <PageHeader eyebrow="Find your way" title="Site Map" subtitle="Every page on the Bakerz Bite website, in one place." />
      <ul className="mx-auto grid max-w-5xl gap-5 px-4 py-24 sm:grid-cols-2 lg:grid-cols-3">
        {navLinks.map((l, i) => (
          <li key={l.to}>
            <Link to={l.to} className="group flex h-full flex-col rounded-3xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-warm">
              <span className="flex items-center justify-between">
                <span className="font-sans text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary" />
              </span>
              <span className="mt-4 font-display text-2xl font-semibold">{l.label}</span>
              <span className="mt-1 text-sm text-muted-foreground">{notes[l.to]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
