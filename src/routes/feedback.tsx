import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/feedback")({
  head: () => seo("Feedback & Ratings", "Rate Bakerz Bite and share your feedback."),
  component: Feedback,
});

type Review = { name: string; rating: number; text: string; date: string };
const seed: Review[] = [
  { name: "Ayesha K.", rating: 5, text: "Best red velvet in Karachi!", date: "2026-10-12" },
  { name: "Hamza R.", rating: 4, text: "Croissants are super flaky. Love the tote bag too.", date: "2026-10-28" },
];
const KEY = "bakerz-reviews";

function Stars({ value, onChange }: { value: number; onChange?: (n: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} type="button" disabled={!onChange} onClick={() => onChange?.(n)} aria-label={`${n} stars`}>
          <Star className={`h-6 w-6 ${n <= value ? "fill-accent text-accent" : "text-border"}`} />
        </button>
      ))}
    </div>
  );
}

function Feedback() {
  const [reviews, setReviews] = useState<Review[]>(seed);
  const [form, setForm] = useState({ name: "", rating: 0, text: "" });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const s = localStorage.getItem(KEY);
    if (s) setReviews(JSON.parse(s));
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim() || !form.rating) return setMsg("Please add your name, a rating and a comment.");
    const next = [{ ...form, date: new Date().toISOString().slice(0, 10) }, ...reviews];
    setReviews(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    setForm({ name: "", rating: 0, text: "" });
    setMsg("Thank you for your feedback!");
  };

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / (reviews.length || 1);

  return (
    <>
      <PageHeader title="Feedback & Ratings" subtitle={`Average rating ${avg.toFixed(1)} / 5 from ${reviews.length} reviews`} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <form onSubmit={submit} className="space-y-4 rounded-2xl border bg-card p-6 shadow-warm">
          <h2 className="text-2xl font-semibold">Leave a review</h2>
          <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" maxLength={60} className="w-full rounded-xl border bg-background px-4 py-3" />
          <Stars value={form.rating} onChange={(rating) => setForm({ ...form, rating })} />
          <textarea value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} placeholder="Tell us what you loved…" rows={4} maxLength={500} className="w-full rounded-xl border bg-background px-4 py-3" />
          <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Submit feedback</button>
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
        </form>
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between"><b>{r.name}</b><span className="text-xs text-muted-foreground">{r.date}</span></div>
              <Stars value={r.rating} />
              <p className="mt-2 text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
