import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/ProductCard";
import { ContactList } from "@/components/ContactList";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact Us", "Email, phone and address for Bakerz Bite, or send us a message."),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Orders, questions or just to say hi." />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Reach us</h2>
          <ContactList />
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); (e.target as HTMLFormElement).reset(); }} className="space-y-4 rounded-2xl border bg-card p-6 shadow-warm">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <input required placeholder="Name" className="w-full rounded-xl border bg-background px-4 py-3" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border bg-background px-4 py-3" />
          <textarea required rows={5} placeholder="Message" className="w-full rounded-xl border bg-background px-4 py-3" />
          <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Send</button>
          {sent && <p className="text-sm text-muted-foreground">Thanks! We'll get back to you soon.</p>}
        </form>
      </div>
    </>
  );
}
