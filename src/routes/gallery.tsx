import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { images } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "Photos of Bakerz Bite cakes, pastries, cookies, pies and merchandise."),
  component: Gallery,
});

const pics = [
  { src: images.hero, label: "Our counter" },
  { src: images.cake, label: "Chocolate cake" },
  { src: images.pastry, label: "Pastries" },
  { src: images.cookie, label: "Cookies" },
  { src: images.pie, label: "Apple pie" },
  { src: images.merch, label: "Merchandise" },
];

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHeader title="Gallery" subtitle="A peek inside our ovens." />
      <div className="mx-auto max-w-7xl columns-1 gap-5 px-4 py-12 sm:columns-2 lg:columns-3">
        {pics.map((p, i) => (
          <button key={p.label} onClick={() => setOpen(i)} className="group mb-5 block w-full overflow-hidden rounded-2xl">
            <img src={p.src} alt={p.label} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4" onClick={() => setOpen(null)}>
          <button aria-label="Close" className="absolute right-6 top-6 rounded-full bg-card p-2"><X /></button>
          <figure className="animate-fade-up max-w-4xl">
            <img src={pics[open].src} alt={pics[open].label} className="max-h-[80vh] rounded-2xl" />
            <figcaption className="mt-3 text-center font-display text-xl text-primary-foreground">{pics[open].label}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
