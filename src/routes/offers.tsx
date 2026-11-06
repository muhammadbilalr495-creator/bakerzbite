import { createFileRoute } from "@tanstack/react-router";
import { offers } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/offers")({
  head: () => seo("Offers", "Current Bakerz Bite deals, discounts and promo codes."),
  component: () => (
    <>
      <PageHeader title="Store Offers" subtitle="Sweet deals running at Bakerz Bite right now." />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <div key={o.title} className="animate-fade-up rounded-2xl border bg-card p-6 shadow-warm">
            <span className="rounded-full bg-accent px-4 py-1 text-sm font-bold text-accent-foreground">{o.discount}</span>
            <h3 className="mt-4 text-2xl font-semibold">{o.title}</h3>
            <p className="mt-2 text-muted-foreground">{o.details}</p>
            <p className="mt-4 text-sm">{o.valid}</p>
            <p className="mt-3 rounded-lg border border-dashed px-3 py-2 text-center font-mono text-sm">Code: <b>{o.code}</b></p>
          </div>
        ))}
      </div>
    </>
  ),
});
