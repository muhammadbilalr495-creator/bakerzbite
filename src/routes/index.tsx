import { createFileRoute, Link } from "@tanstack/react-router";
import { images, products, offers } from "@/lib/data";
import { ProductGrid } from "@/components/ProductCard";
import { seo } from "@/lib/seo";
import bakeryVideo from "@/assets/bakerz-bite-bakery.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => seo("Home", "Bakerz Bite — freshly baked cakes, pastries, cookies and pies in Karachi."),
  component: Index,
});

const cats = [
  { name: "Cakes", img: images.cake },
  { name: "Pastries", img: images.pastry },
  { name: "Cookies", img: images.cookie },
  { name: "Pies", img: images.pie },
];

function Index() {
  return (
    <>
      <section className="relative h-[75vh] min-h-[480px] overflow-hidden">
        <img src={images.hero} alt="Cakes, pastries, cookies and pies" width={1920} height={912} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 text-primary-foreground">
          <p className="animate-fade-up uppercase tracking-[0.3em] text-accent">Freshly baked daily</p>
          <h1 className="animate-fade-up mt-3 max-w-2xl text-5xl font-semibold leading-tight md:text-7xl">Every bite, baked with love.</h1>
          <p className="mt-4 max-w-lg text-lg opacity-90">Cakes, pastries, cookies and pies from the Bakerz Bite ovens to your table.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/menu" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground transition hover:scale-105">View Menu</Link>
            <Link to="/offers" className="rounded-full border border-primary-foreground px-7 py-3 font-semibold transition hover:bg-primary-foreground hover:text-primary">See Offers</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14">
        <div className="mb-5">
          <p className="font-semibold text-accent-foreground">Made fresh with love</p>
          <h2 className="mt-2 text-4xl font-semibold">A little sweetness in motion</h2>
        </div>
        <video
          className="aspect-video w-full rounded-2xl bg-primary object-cover shadow-warm"
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
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-4xl font-semibold">Our Sections</h2>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {cats.map((c) => (
            <Link key={c.name} to="/menu" className="group relative overflow-hidden rounded-2xl shadow-warm">
              <img src={c.img} alt={c.name} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-x-0 bottom-0 bg-overlay py-3 text-center font-display text-xl text-primary-foreground">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-4xl font-semibold">Bestsellers</h2>
        <ProductGrid items={products.filter((p) => p.tags.includes("Bestseller")).slice(0, 6)} />
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4">
        <div className="grid items-center gap-8 rounded-3xl bg-secondary p-8 md:grid-cols-2">
          <div>
            <p className="font-semibold text-accent-foreground">Today's deal</p>
            <h2 className="mt-2 text-4xl font-semibold">{offers[0]!.title} — {offers[0]!.discount}</h2>
            <p className="mt-3 text-muted-foreground">{offers[0]!.details}</p>
            <Link to="/offers" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">All offers</Link>
          </div>
          <img src={images.merch} alt="Bakerz Bite merchandise" loading="lazy" width={816} height={816} className="aspect-video w-full rounded-2xl object-cover" />
        </div>
      </section>
    </>
  );
}
