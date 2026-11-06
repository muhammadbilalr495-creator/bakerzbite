import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Quote, Star, Truck, Wheat, Sparkles } from "lucide-react";
import { images, products, offers } from "@/lib/data";
import { ProductGrid, SectionHeading } from "@/components/ProductCard";
import { seo } from "@/lib/seo";
import bakeryVideo from "@/assets/bakerz-bite-bakery.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => seo("Home", "Bakerz Bite — freshly baked cakes, pastries, cookies and pies in Karachi."),
  component: Index,
});

const cats = [
  { name: "Cakes", img: images.cake, note: "Layered & celebratory" },
  { name: "Pastries", img: images.pastry, note: "Flaky & buttery" },
  { name: "Cookies", img: images.cookie, note: "Chewy & golden" },
  { name: "Pies", img: images.pie, note: "Fruity & rustic" },
] as const;

const perks = [
  { icon: Wheat, title: "Quality ingredients", text: "Real butter, fine flour and Belgian-style chocolate in every bake." },
  { icon: Heart, title: "Handmade daily", text: "Everything is shaped by hand and baked fresh each morning." },
  { icon: Truck, title: "Delivery in Karachi", text: "Free delivery on orders above Rs. 3,000 across the city." },
  { icon: Award, title: "Custom celebrations", text: "Birthday, wedding and party cakes designed just for you." },
];

const testimonials = [
  { name: "Ayesha K.", role: "Regular customer", text: "Best red velvet in Karachi! The frosting is light and not too sweet — our family orders it for every birthday." },
  { name: "Hamza R.", role: "Coffee lover", text: "The croissants are super flaky, just like the ones in Paris. I stop by every morning on my way to work." },
  { name: "Sana M.", role: "Event planner", text: "They made a three-tier cake for our client's wedding. Beautiful design and every guest asked where it came from." },
];

const marquee = ["Cakes", "Pastries", "Cookies", "Pies", "Baked fresh daily", "Custom orders", "Eggless options"];

function Index() {
  const deal = offers[0]!;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={images.hero} alt="Cakes, pastries, cookies and pies" width={1920} height={912} className="animate-ken-burns absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-[1.3fr_1fr]">
          <div className="text-cocoa-foreground">
            <p className="eyebrow animate-fade-up text-accent">Baked fresh daily in Karachi</p>
            <h1 className="animate-fade-up delay-1 mt-5 max-w-2xl text-5xl font-semibold leading-[1.02] md:text-7xl lg:text-8xl">
              Every bite, baked with <em className="text-gradient-gold not-italic">love.</em>
            </h1>
            <p className="animate-fade-up delay-2 mt-6 max-w-lg text-lg leading-relaxed opacity-90">
              Cakes, pastries, cookies and pies from the Bakerz Bite ovens to your table — handmade with real butter and a lot of heart.
            </p>
            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-3">
              <Link to="/menu" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-bold text-accent-foreground shadow-gold transition hover:-translate-y-0.5">
                Explore the Menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/offers" className="inline-flex items-center gap-2 rounded-full border border-cocoa-foreground/40 px-8 py-4 font-bold backdrop-blur transition hover:border-cocoa-foreground hover:bg-cocoa-foreground hover:text-cocoa">
                See Offers
              </Link>
            </div>
            <dl className="animate-fade-up delay-3 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-cocoa-foreground/20 pt-8">
              {[["16+", "Signature treats"], ["4.9★", "Customer rating"], ["Daily", "Fresh from the oven"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-3xl font-semibold text-accent">{v}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wider opacity-75">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden h-full min-h-[420px] lg:block">
            <div className="animate-float absolute right-0 top-10 w-72 overflow-hidden rounded-3xl bg-card shadow-lift">
              <img src={images.cake} alt="Triple chocolate cake" width={816} height={816} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bestseller</p>
                <p className="mt-1 font-display text-xl font-semibold">Triple Chocolate Cake</p>
                <div className="mt-2 flex items-center gap-1 text-accent">
                  {[1, 2, 3, 4, 5].map((n) => <Star key={n} className="h-4 w-4 fill-current" />)}
                  <span className="ml-1 text-xs text-muted-foreground">Loved by our regulars</span>
                </div>
              </div>
            </div>
            <Link to="/offers" className="animate-float absolute bottom-6 left-0 flex items-center gap-4 rounded-2xl bg-card p-4 pr-6 shadow-lift [animation-delay:1.5s]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold font-display text-lg font-bold text-accent-foreground">%</span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Today's deal</span>
                <span className="block font-display text-lg font-semibold">{deal.discount} · {deal.title}</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-gradient-gold py-4 text-accent-foreground" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-semibold">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-10">{m}<Sparkles className="h-5 w-5" /></span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Our sections" title="Something for every craving">
            Four ovens, four passions. Pick a section to explore its full range.
          </SectionHeading>
          <Link to="/menu" className="group inline-flex items-center gap-2 font-bold text-primary">
            Full menu <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {cats.map((c, i) => {
            const count = products.filter((p) => p.category === c.name).length;
            return (
              <Link key={c.name} to="/menu" className={`group relative overflow-hidden rounded-3xl shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift ${i % 2 ? "lg:mt-10" : ""}`}>
                <img src={c.img} alt={c.name} loading="lazy" width={816} height={816} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-fade-up" />
                <span className="absolute right-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary">{count} items</span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-cocoa-foreground">
                  <p className="text-xs uppercase tracking-widest opacity-80">{c.note}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <h3 className="text-3xl font-semibold">{c.name}</h3>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground transition group-hover:rotate-[-45deg]"><ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Perks */}
      <section className="relative bg-cream">
        <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: I, title, text }) => (
            <div key={title} className="group rounded-3xl border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-warm">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-gradient-gold group-hover:text-accent-foreground"><I className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="relative overflow-hidden bg-cocoa text-cocoa-foreground">
        <div className="absolute inset-0 bg-dots-light opacity-60" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-accent">Inside our kitchen</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">A little sweetness <span className="text-gradient-gold">in motion</span></h2>
            <p className="mt-5 text-lg leading-relaxed opacity-80">Peek behind the counter as our bakers whip, pipe and decorate. Every treat starts before sunrise and ends on your table.</p>
            <ul className="mt-8 space-y-3">
              {["Small-batch baking, every morning", "No shortcuts, no premixes", "Decorated by hand"].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">✓</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-accent/60" aria-hidden />
            <video
              className="relative aspect-video w-full rounded-[1.75rem] bg-primary object-cover shadow-lift"
              controls
              muted
              playsInline
              preload="metadata"
              poster={images.hero}
              aria-label="A baker preparing freshly baked cupcakes"
            >
              <source src={bakeryVideo.url} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading center eyebrow="Customer favourites" title="Our bestsellers">
          The treats that sell out first — tap any item for ingredients and details.
        </SectionHeading>
        <div className="mt-12">
          <ProductGrid items={products.filter((p) => p.tags.includes("Bestseller")).slice(0, 6)} />
        </div>
      </section>

      {/* Offer */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="relative grid items-center overflow-hidden rounded-[2rem] bg-gradient-cocoa text-cocoa-foreground shadow-lift md:grid-cols-2">
          <div className="absolute inset-0 bg-dots-light opacity-50" aria-hidden />
          <div className="relative p-10 md:p-14">
            <p className="eyebrow text-accent">Today's deal</p>
            <p className="mt-4 font-display text-7xl font-bold text-gradient-gold md:text-8xl">{deal.discount}</p>
            <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{deal.title}</h2>
            <p className="mt-3 max-w-md opacity-80">{deal.details} {deal.valid}.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/offers" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-bold text-accent-foreground shadow-gold transition hover:-translate-y-0.5">
                All offers <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="rounded-full border border-dashed border-accent px-5 py-3 font-mono text-sm">Code: <b className="text-accent">{deal.code}</b></span>
            </div>
          </div>
          <img src={images.cake} alt="Whole cake for the weekend offer" loading="lazy" width={816} height={816} className="relative h-full min-h-72 w-full object-cover" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <SectionHeading center eyebrow="Kind words" title="Loved across Karachi" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-3xl border bg-card p-8 shadow-soft transition hover:shadow-warm">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/30" />
              <div className="flex gap-1 text-accent">{[1, 2, 3, 4, 5].map((n) => <Star key={n} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 leading-relaxed text-foreground/85">“{t.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold font-display font-bold text-accent-foreground">{t.name[0]}</span>
                <span><span className="block font-semibold">{t.name}</span><span className="text-sm text-muted-foreground">{t.role}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/feedback" className="group inline-flex items-center gap-2 font-bold text-primary">Read all reviews or leave yours <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[images.pastry, images.cookie, images.pie, images.merch].map((src, i) => (
            <Link key={i} to="/gallery" className="group relative overflow-hidden rounded-3xl">
              <img src={src} alt="Bakerz Bite gallery" loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
              <span className="absolute inset-0 grid place-items-center bg-overlay font-display text-xl font-semibold text-primary-foreground opacity-0 transition group-hover:opacity-100">View gallery</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
