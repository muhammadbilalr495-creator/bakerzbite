import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { images } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "Photos of Bakerz Bite cakes, pastries, cookies, pies and merchandise."),
  component: Gallery,
});

const pics = [
  { src: images.hero, label: "Our counter", tag: "Bakery", span: "md:col-span-2 md:row-span-2" },
  { src: images.cake, label: "Chocolate cake", tag: "Cakes", span: "" },
  { src: images.pastry, label: "Pastries", tag: "Pastries", span: "" },
  { src: images.cookie, label: "Cookies", tag: "Cookies", span: "" },
  { src: images.pie, label: "Apple pie", tag: "Pies", span: "md:row-span-2" },
  { src: images.merch, label: "Merchandise", tag: "Merch", span: "" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const go = (d: number) => setOpen((o) => (o === null ? o : (o + d + pics.length) % pics.length));

  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);

  return (
    <>
      <PageHeader eyebrow="A peek inside" title="Gallery" subtitle="Fresh from our ovens — tap any photo to view it full size." image={images.pastry} />
      <div className="mx-auto grid max-w-7xl auto-rows-[240px] grid-cols-1 gap-5 px-4 py-24 sm:grid-cols-2 md:grid-cols-4">
        {pics.map((p, i) => (
          <button key={p.label} onClick={() => setOpen(i)} className={`group relative overflow-hidden rounded-3xl shadow-soft transition hover:shadow-lift ${p.span}`}>
            <img src={p.src} alt={p.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-fade-up opacity-70 transition group-hover:opacity-100" />
            <span className="absolute right-4 top-4 grid h-10 w-10 scale-75 place-items-center rounded-full bg-card text-primary opacity-0 transition group-hover:scale-100 group-hover:opacity-100"><Expand className="h-4 w-4" /></span>
            <span className="absolute bottom-5 left-5 text-left text-cocoa-foreground">
              <span className="block text-xs font-bold uppercase tracking-widest text-accent">{p.tag}</span>
              <span className="block font-display text-2xl font-semibold">{p.label}</span>
            </span>
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur-md" onClick={() => setOpen(null)} role="dialog" aria-modal="true" aria-label={pics[open]!.label}>
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-card text-primary shadow-lift transition hover:rotate-90"><X /></button>
          <button aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-card text-primary shadow-lift transition hover:scale-110 md:left-8"><ChevronLeft /></button>
          <button aria-label="Next photo" onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-card text-primary shadow-lift transition hover:scale-110 md:right-8"><ChevronRight /></button>
          <figure key={open} className="animate-fade-up max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={pics[open]!.src} alt={pics[open]!.label} className="max-h-[78vh] rounded-3xl shadow-lift" />
            <figcaption className="mt-4 text-center font-display text-2xl text-primary-foreground">{pics[open]!.label} <span className="font-sans text-sm opacity-70">· {open + 1} / {pics.length}</span></figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
