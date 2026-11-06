import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ", "Answers to common questions about Bakerz Bite orders, delivery and ingredients."),
  component: () => (
    <>
      <PageHeader title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl space-y-3 px-4 py-12">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-2xl border bg-card p-5 open:shadow-warm">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold">{q}</summary>
            <p className="mt-3 text-muted-foreground">{a}</p>
          </details>
        ))}
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
