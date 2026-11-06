import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, CalendarClock, ArrowRight } from "lucide-react";
import { offers, images } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/offers")({
  head: () => seo("Offers", "Current Bakerz Bite deals, discounts and promo codes."),
  component: Offers,
});

function Offers() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (code: string) => {
    try { await navigator.clipboard.writeText(code); } catch { /* clipboard may be blocked */ }
    setCopied(code);
    setTimeout(() => setCopied((c) => (c === code ? null : c)), 1800);
  };
  return (
    <>
      <PageHeader eyebrow="Sweet deals" title="Store Offers" subtitle="Deals running at Bakerz Bite right now. Mention the code when you order." image={images.cookie} />
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => (
          <article key={o.title} style={{ animationDelay: `${i * 70}ms` }} className="group animate-fade-up flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
            <div className="relative overflow-hidden bg-gradient-cocoa p-7 text-cocoa-foreground">
              <div className="absolute inset-0 bg-dots-light opacity-60" aria-hidden />
              <p className="relative text-xs font-bold uppercase tracking-[0.25em] opacity-75">Offer {String(i + 1).padStart(2, "0")}</p>
              <p className="relative mt-2 font-display text-5xl font-bold text-gradient-gold">{o.discount}</p>
            </div>
            <div className="relative flex flex-1 flex-col p-7">
              <span className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-background" aria-hidden />
              <span className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-background" aria-hidden />
              <h3 className="text-2xl font-semibold">{o.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{o.details}</p>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary"><CalendarClock className="h-4 w-4 text-accent" />{o.valid}</p>
              <button onClick={() => copy(o.code)} className="mt-5 flex items-center justify-between rounded-2xl border-2 border-dashed border-accent bg-cream px-4 py-3 font-mono text-sm transition hover:bg-secondary" aria-label={`Copy code ${o.code}`}>
                <span>Code: <b className="text-base tracking-wider text-primary">{o.code}</b></span>
                <span className="flex items-center gap-1.5 font-sans text-xs font-bold text-primary">
                  {copied === o.code ? <><Check className="h-4 w-4" />Copied</> : <><Copy className="h-4 w-4" />Copy</>}
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-cream p-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-semibold">Ready to treat yourself?</h2>
            <p className="mt-2 text-muted-foreground">Offers can't be combined. Ask our team for full terms.</p>
          </div>
          <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">Browse the menu <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </>
  );
}
