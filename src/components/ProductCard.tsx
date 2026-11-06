import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { formatPrice, type Product } from "@/lib/data";

export function ProductGrid({ items }: { items: Product[] }) {
  const [open, setOpen] = useState<Product | null>(null);
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <button
            key={p.id}
            onClick={() => setOpen(p)}
            className="group animate-fade-up overflow-hidden rounded-2xl border bg-card text-left shadow-warm transition hover:-translate-y-1"
          >
            <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <span className="font-bold text-primary">{formatPrice(p.price)}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs">{p.category}</span>
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-accent/30 px-3 py-1 text-xs">{t}</span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {items.length === 0 && <p className="py-12 text-center text-muted-foreground">No products match your filters.</p>}
      {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="animate-fade-up grid max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-card md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className="h-full min-h-64 w-full object-cover" />
        <div className="relative p-6">
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-secondary p-2"><X className="h-4 w-4" /></button>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
          <h2 className="mt-1 text-3xl font-semibold">{product.name}</h2>
          <p className="mt-2 text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
          <p className="mt-3 text-muted-foreground">{product.description}</p>
          <h4 className="mt-5 font-semibold">{product.category === "Merchandise" ? "Material" : "Ingredients"}</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.ingredients.map((i) => <span key={i} className="rounded-full border px-3 py-1 text-sm">{i}</span>)}
          </div>
          <h4 className="mt-5 font-semibold">Specifications</h4>
          <dl className="mt-2 divide-y rounded-xl border">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between px-4 py-2 text-sm"><dt className="text-muted-foreground">{s.label}</dt><dd className="font-medium">{s.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-primary px-4 py-16 text-center text-primary-foreground">
      <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
      {subtitle && <p className="mx-auto mt-3 max-w-xl opacity-80">{subtitle}</p>}
    </section>
  );
}
