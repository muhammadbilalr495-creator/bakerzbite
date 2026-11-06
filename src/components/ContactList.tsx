import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { contact } from "@/lib/data";

export function ContactList() {
  const rows = [
    { icon: Mail, label: "Email", value: contact.email },
    { icon: Phone, label: "Phone", value: contact.phone },
    { icon: MapPin, label: "Address", value: contact.address },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];
  return (
    <div className="mt-6 space-y-3">
      {rows.map(({ icon: I, label, value }) => (
        <div key={label} className="flex items-center gap-4 rounded-xl bg-secondary p-4">
          <I className="h-5 w-5 text-primary" />
          <div><p className="text-xs text-muted-foreground">{label}</p><p className="font-semibold">{value}</p></div>
        </div>
      ))}
    </div>
  );
}
