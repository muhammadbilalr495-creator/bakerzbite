import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ProductGrid } from "./ProductCard";
import type { Product } from "@/lib/data";

export function FilterableProducts({ items, categories }: { items: Product[]; categories: string[] }) {
  const [cat, setCat] = useState("All");
  const [tag, setTag] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("default");
  const [max, setMax] = useState(Math.max(...items.map((i) => i.price)));
  const top = Math.max(...items.map((i) => i.price));
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

  const chip = (active: boolean) => `rounded-full px-4 py-2 text-sm font-medium transition ${active ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-accent/40"}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 space-y-4 rounded-2xl border bg-card p-5">
        {categories.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {["All", ...categories].map((c) => <button key={c} onClick={() => setCat(c)} className={chip(cat === c)}>{c}</button>)}
          </div>
        )}
        <div className="grid gap-4 md:grid-cols-4">
          <label className="relative md:col-span-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="w-full rounded-full border bg-background py-2 pl-9 pr-4 text-sm" />
          </label>
          <select value={tag} onChange={(e) => setTag(e.target.value)} className="rounded-full border bg-background px-4 py-2 text-sm" aria-label="Type">
            {tags.map((t) => <option key={t}>{t}</option>)}
          </select>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border bg-background px-4 py-2 text-sm" aria-label="Sort">
            <option value="default">Sort: Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
          <label className="text-sm">
            Max price: <b>Rs. {max.toLocaleString()}</b>
            <input type="range" min={0} max={top} step={50} value={max} onChange={(e) => setMax(+e.target.value)} className="w-full accent-primary" />
          </label>
        </div>
      </div>
      <ProductGrid items={shown} />
    </div>
  );
}
