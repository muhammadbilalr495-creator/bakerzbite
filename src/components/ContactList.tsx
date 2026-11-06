import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contact } from "@/lib/data";

export function ContactList() {
  const rows = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {rows.map(({ icon: I, label, value, href }) => {
        const body = (
          <>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition group-hover:bg-gradient-gold group-hover:text-accent-foreground"><I className="h-5 w-5" /></span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
              <span className="mt-1 block font-semibold leading-snug">{value}</span>
            </span>
          </>
        );
        const cls = "group flex items-start gap-4 rounded-3xl border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-warm";
        return href ? <a key={label} href={href} className={cls}>{body}</a> : <div key={label} className={cls}>{body}</div>;
      })}
    </div>
  );
}
