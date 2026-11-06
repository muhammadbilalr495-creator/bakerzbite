import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/ProductCard";
import { contact, images } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers to common questions about Bakerz Bite orders, delivery and ingredients."),
  component: () => (
    <>
      <PageHeader eyebrow="Help centre" title="Frequently Asked Questions" subtitle="Everything you need to know about ordering from Bakerz Bite." image={images.cake} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          {faqs.map(([q, a], i) => (
            <details key={q} className="group rounded-3xl border bg-card p-6 shadow-soft transition open:border-accent/60 open:shadow-warm" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-4"><span className="font-sans text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>{q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary transition group-open:rotate-45 group-open:bg-gradient-gold group-open:text-accent-foreground"><Plus className="h-4 w-4" /></span>
              </summary>
              <p className="mt-4 pl-10 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <aside className="relative h-fit overflow-hidden rounded-[2rem] bg-gradient-cocoa p-8 text-cocoa-foreground shadow-lift lg:sticky lg:top-28">
          <div className="absolute inset-0 bg-dots-light opacity-60" aria-hidden />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground"><MessageCircle className="h-6 w-6" /></span>
            <h2 className="mt-5 text-3xl font-semibold">Still have questions?</h2>
            <p className="mt-2 opacity-80">Our team is happy to help with orders, allergies and custom designs.</p>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-6 flex items-center gap-3 font-semibold"><Phone className="h-4 w-4 text-accent" />{contact.phone}</a>
            <Link to="/contact" className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-gold px-6 py-3.5 font-bold text-accent-foreground shadow-gold transition hover:-translate-y-0.5">Contact us</Link>
          </div>
        </aside>
      </div>
    </>
  ),
});

const faqs = [
  ["Do you offer home delivery?", "Yes, we deliver across Karachi. Delivery is free on orders above Rs. 3,000."],
  ["Can I order a custom cake?", "Absolutely. Contact us at least 2 days in advance with your design and size."],
  ["Do you have eggless options?", "Yes — look for the 'Eggless' filter on our Menu page."],
  ["How do I use an offer code?", "Mention the code when ordering in store, by phone or by email."],
  ["Are your products nut-free?", "Some items contain nuts. Each product's ingredient list is shown when you click it."],
  ["Can I buy merchandise in store?", "Yes, all Bakerz Bite mugs, bags, glasses and trays are available at our counter."],
];
