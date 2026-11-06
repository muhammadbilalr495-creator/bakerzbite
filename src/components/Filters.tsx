import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, RotateCcw } from "lucide-react";
import { ProductGrid } from "./ProductCard";
import type { Product } from "@/lib/data";

const field = "w-full rounded-full border bg-background px-4 py-2.5 text-sm font-medium outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

export function FilterableProducts({ items, categories }: { items: Product[]; categories: string[] }) {
  const top = Math.max(...items.map((i) => i.price));
  const [cat, setCat] = useState("All");
  const [tag, setTag] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("default");
  const [max, setMax] = useState(top);
  const tags = ["All", ...new Set(items.flatMap((i) => i.tags))];

  const shown = useMemo(() => {
    const r = items.filter(
      (i) =>
        (cat === "All" || i.category === cat) &&
        (tag === "All" || i.tags.includes(tag)) &&
        i.price <= max &&
        i.name.toLowerCase().includes(q.toLowerCase()),
    );
    if (sort === "low") r.sort((a, b) => a.price - b.price);
    if (sort === "high") r.sort((a, b) => b.price - a.price);
    return r;
  }, [items, cat, tag, q, max, sort]);

  const reset = () => { setCat("All"); setTag("All"); setQ(""); setSort("default"); setMax(top); };
  const chip = (active: boolean) =>
    `rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground hover:bg-accent/40"}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <div className="relative z-10 -mt-24 mb-12 space-y-5 rounded-3xl border bg-card p-6 shadow-lift md:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 font-display text-xl font-semibold"><SlidersHorizontal className="h-5 w-5 text-accent" />Find your treat</p>
          <button onClick={reset} className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition hover:text-primary"><RotateCcw className="h-4 w-4" />Reset filters</button>
        </div>
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => <button key={c} onClick={() => setCat(c)} className={chip(cat === c)}>{c}</button>)}
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Search</span>
            <span className="relative block">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. croissant" className={`${field} pl-10`} />
            </span>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Type</span>
            <select value={tag} onChange={(e) => setTag(e.target.value)} className={field} aria-label="Type">
              {tags.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">Sort by</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className={field} aria-label="Sort">
              <option value="default">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">Max price <b className="text-primary">Rs. {max.toLocaleString()}</b></span>
            <input type="range" min={0} max={top} step={50} value={max} onChange={(e) => setMax(+e.target.value)} className="mt-3 w-full accent-primary" />
          </label>
        </div>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">Showing <b className="text-foreground">{shown.length}</b> of {items.length} items</p>
      <ProductGrid items={shown} />
    </div>
  );
}
