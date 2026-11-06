import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { contact } from "@/lib/data";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/merchandise", label: "Merchandise" },
  { to: "/offers", label: "Offers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/feedback", label: "Feedback" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bakerz Bite logo" width={48} height={48} className="h-12 w-12" />
          <span className="font-display text-2xl font-semibold text-primary">Bakerz Bite</span>
        </Link>
        <nav className="hidden gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="rounded-full px-3 py-2 text-sm font-medium transition hover:bg-secondary" activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col border-t px-4 py-2 lg:hidden">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-2 font-medium" activeOptions={{ exact: true }} activeProps={{ className: "text-accent" }}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3"><img src={logo} alt="" width={40} height={40} className="h-10 w-10" /><span className="font-display text-2xl">Bakerz Bite</span></div>
          <p className="mt-3 text-sm opacity-80">Freshly baked happiness, every single day.</p>
        </div>
        <div>
          <h4 className="mb-3 text-lg">Quick links</h4>
          <div className="grid grid-cols-2 gap-1 text-sm opacity-90">
            {navLinks.map((l) => <Link key={l.to} to={l.to} className="hover:text-accent">{l.label}</Link>)}
            <Link to="/sitemap" className="hover:text-accent">Site Map</Link>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="mb-3 text-lg">Get in touch</h4>
          <p className="flex gap-2"><Mail className="h-4 w-4 text-accent" />{contact.email}</p>
          <p className="flex gap-2"><Phone className="h-4 w-4 text-accent" />{contact.phone}</p>
          <p className="flex gap-2"><MapPin className="h-4 w-4 text-accent" />{contact.address}</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/20 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Bakerz Bite. All rights reserved.</p>
    </footer>
  );
}
