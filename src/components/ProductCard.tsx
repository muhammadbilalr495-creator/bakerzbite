import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, ChevronRight, Check } from "lucide-react";
import { formatPrice, images, type Product } from "@/lib/data";

export function ProductGrid({ items }: { items: Product[] }) {
  const [open, setOpen] = useState<Product | null>(null);
  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setOpen(p)}
            style={{ animationDelay: `${(i % 6) * 60}ms` }}
            className="group animate-fade-up flex flex-col overflow-hidden rounded-3xl border bg-card text-left shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-lift"
          >
            <div className="relative overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-fade-up opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-soft ${t === "Bestseller" ? "bg-gradient-gold text-accent-foreground" : "bg-card/95 text-primary"}`}>{t}</span>
                ))}
              </div>
              <span className="absolute bottom-4 right-4 rounded-full bg-card px-4 py-1.5 text-sm font-bold text-primary shadow-soft">{formatPrice(p.price)}</span>
              <span className="absolute bottom-4 left-4 flex translate-y-3 items-center gap-1.5 text-sm font-semibold text-cocoa-foreground opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View details <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent-foreground/70">{p.category}</p>
              <h3 className="mt-1.5 text-xl font-semibold transition group-hover:text-primary">{p.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </div>
          </button>
        ))}
      </div>
      {items.length === 0 && (
        <div className="rounded-3xl border border-dashed bg-card py-16 text-center">
          <p className="font-display text-2xl">No treats match your filters</p>
          <p className="mt-2 text-muted-foreground">Try a different search or raise the price limit.</p>
        </div>
      )}
      {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="animate-fade-up relative grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl bg-card shadow-lift md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-card text-primary shadow-soft transition hover:rotate-90 hover:bg-secondary"><X className="h-5 w-5" /></button>
        <div className="relative">
          <img src={product.image} alt={product.name} className="h-full min-h-72 w-full object-cover" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.tags.map((t) => <span key={t} className="rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground">{t}</span>)}
          </div>
        </div>
        <div className="p-7 md:p-8">
          <p className="eyebrow text-accent-foreground/70">{product.category}</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">{product.name}</h2>
          <p className="mt-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-xl font-bold text-primary">{formatPrice(product.price)}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{product.description}</p>
          <div className="mt-6 rounded-2xl bg-cream p-5">
            <h4 className="text-lg font-semibold">{product.category === "Merchandise" ? "Material" : "Ingredients"}</h4>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {product.ingredients.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-accent" />{i}</li>
              ))}
            </ul>
          </div>
          <h4 className="mt-6 text-lg font-semibold">Specifications</h4>
          <dl className="mt-3 divide-y overflow-hidden rounded-2xl border">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between px-4 py-3 text-sm"><dt className="text-muted-foreground">{s.label}</dt><dd className="font-semibold">{s.value}</dd></div>
            ))}
          </dl>
          <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm">
            Order this item <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle, image = images.hero, eyebrow = "Bakerz Bite" }: { title: string; subtitle?: string; image?: string; eyebrow?: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="" aria-hidden className="animate-ken-burns absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-dots-light opacity-50" />
      <div className="mx-auto max-w-7xl px-4 py-20 text-cocoa-foreground md:py-28">
        <nav aria-label="Breadcrumb" className="animate-fade-up flex items-center gap-1.5 text-sm opacity-80">
          <Link to="/" className="transition hover:text-accent">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">{title}</span>
        </nav>
        <p className="eyebrow animate-fade-up delay-1 mt-6 text-accent">{eyebrow}</p>
        <h1 className="animate-fade-up delay-1 mt-3 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-6xl">{title}</h1>
        {subtitle && <p className="animate-fade-up delay-2 mt-4 max-w-xl text-lg opacity-85">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, children, center = false }: { eyebrow: string; title: ReactNode; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow text-accent-foreground/70 ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{children}</p>}
    </div>
  );
}
