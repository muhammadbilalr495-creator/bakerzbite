import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/ProductCard";
import { ContactList } from "@/components/ContactList";
import { images } from "@/lib/data";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Email, phone and address for Bakerz Bite, or send us a message."),
  component: Contact,
});

const input = "w-full rounded-2xl border bg-background px-4 py-3.5 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";
const lbl = "mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="We'd love to hear from you" title="Contact Us" subtitle="Orders, custom cakes, questions — or just to say hi." image={images.pie} />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Reach us" title="Visit, call or write">
            Our team replies to every message within one working day.
          </SectionHeading>
          <div className="mt-8"><ContactList /></div>
          <div className="mt-6 overflow-hidden rounded-3xl border shadow-soft">
            <iframe
              title="Bakerz Bite location map"
              src="https://maps.google.com/maps?q=Clifton%2C%20Karachi&z=14&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); (e.target as HTMLFormElement).reset(); }}
          className="h-fit space-y-5 rounded-[2rem] border bg-card p-8 shadow-lift md:p-10"
        >
          <div>
            <h2 className="text-3xl font-semibold">Send a message</h2>
            <p className="mt-1 text-muted-foreground">Tell us what you need and we'll get back to you.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block"><span className={lbl}>Your name</span><input required placeholder="Ayesha Khan" className={input} /></label>
            <label className="block"><span className={lbl}>Email</span><input required type="email" placeholder="you@example.com" className={input} /></label>
          </div>
          <label className="block">
            <span className={lbl}>Subject</span>
            <select className={input} defaultValue="General question">
              <option>General question</option>
              <option>Custom cake order</option>
              <option>Bulk / event order</option>
              <option>Feedback</option>
            </select>
          </label>
          <label className="block"><span className={lbl}>Message</span><textarea required rows={5} placeholder="Hi Bakerz Bite…" className={input} /></label>
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && (
            <p className="animate-fade-up flex items-center gap-2 rounded-2xl bg-secondary p-4 text-sm font-semibold text-primary">
              <CheckCircle2 className="h-5 w-5 text-accent" /> Thanks! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
