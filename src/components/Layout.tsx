import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, ArrowUpRight, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";
import { contact, offers } from "@/lib/data";

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

function TopBar() {
  return (
    <div className="bg-cocoa text-cocoa-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-accent" />{contact.phone}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-accent" />{contact.hours}</span>
        </div>
        <Link to="/offers" className="mx-auto flex items-center gap-2 font-semibold tracking-wide md:mx-0">
          <span className="rounded-full bg-gradient-gold px-2 py-0.5 text-[10px] font-bold uppercase text-accent-foreground">Offer</span>
          {offers[0]!.title}: {offers[0]!.discount} — code {offers[0]!.code}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${scrolled ? "bg-background/95 shadow-soft backdrop-blur-md" : "bg-background/80 backdrop-blur"}`}>
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3.5"}`}>
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-cream ring-2 ring-accent/50 transition group-hover:ring-accent">
              <img src={logo} alt="Bakerz Bite logo" width={48} height={48} className="h-10 w-10" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl font-semibold text-primary">Bakerz Bite</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Artisan Bakery</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="relative rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition hover:text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform hover:after:scale-x-100"
                activeProps={{ className: "text-primary after:scale-x-100" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/menu" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:shadow-warm sm:inline-flex">
              <ShoppingBag className="h-4 w-4" /> Order Now
            </Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-full border bg-card text-primary transition hover:bg-secondary xl:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="animate-fade-up border-t bg-background px-4 py-4 xl:hidden" aria-label="Mobile">
            <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold transition hover:bg-secondary"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="relative mt-24 bg-cocoa text-cocoa-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative -translate-y-1/2 overflow-hidden rounded-3xl bg-gradient-gold p-8 text-accent-foreground shadow-lift md:flex md:items-center md:justify-between md:gap-8 md:p-10">
          <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
          <div className="relative">
            <p className="eyebrow">Sweet news</p>
            <h3 className="mt-2 text-3xl font-semibold md:text-4xl">Get fresh deals in your inbox</h3>
            <p className="mt-1 text-sm opacity-80">New flavours, weekly offers and festive specials — no spam.</p>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubscribed(true); (e.target as HTMLFormElement).reset(); }}
            className="relative mt-6 flex w-full max-w-md gap-2 md:mt-0"
          >
            <label htmlFor="newsletter" className="sr-only">Email address</label>
            <input id="newsletter" required type="email" placeholder="you@example.com" className="min-w-0 flex-1 rounded-full border-0 bg-card px-5 py-3 text-sm text-foreground shadow-soft outline-none focus-visible:ring-2 focus-visible:ring-primary" />
            <button className="shrink-0 rounded-full bg-cocoa px-6 py-3 text-sm font-bold text-cocoa-foreground transition hover:bg-primary">
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto -mt-6 grid max-w-7xl gap-10 px-4 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-cream"><img src={logo} alt="" width={40} height={40} className="h-10 w-10" /></span>
            <span className="font-display text-2xl">Bakerz Bite</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed opacity-75">Freshly baked happiness, every single day. Handmade cakes, pastries, cookies and pies from our Karachi kitchen.</p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-cocoa-foreground/20 transition hover:border-accent hover:bg-accent hover:text-accent-foreground">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-accent">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(0, 5).map((l) => <li key={l.to}><Link to={l.to} className="opacity-80 transition hover:text-accent hover:opacity-100">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-lg text-accent">Help</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(5).map((l) => <li key={l.to}><Link to={l.to} className="opacity-80 transition hover:text-accent hover:opacity-100">{l.label}</Link></li>)}
            <li><Link to="/sitemap" className="opacity-80 transition hover:text-accent hover:opacity-100">Site Map</Link></li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="mb-4 text-lg text-accent">Visit us</h4>
          <p className="flex gap-3 opacity-85"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{contact.address}</p>
          <p className="flex gap-3 opacity-85"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{contact.phone}</p>
          <p className="flex gap-3 opacity-85"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{contact.email}</p>
          <p className="flex gap-3 opacity-85"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{contact.hours}</p>
        </div>
      </div>
      <div className="border-t border-cocoa-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-70 sm:flex-row">
          <p>© {new Date().getFullYear()} Bakerz Bite. All rights reserved.</p>
          <p>Baked fresh daily in Karachi</p>
        </div>
      </div>
    </footer>
  );
}
