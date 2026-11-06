import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Sparkles, Users } from "lucide-react";
import { ContactList } from "@/components/ContactList";
import { images } from "@/lib/data";
import { PageHeader, SectionHeading } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "The story of Bakerz Bite, plus our email, address and phone number."),
  component: About,
});

const values = [
  { icon: Leaf, title: "Honest ingredients", text: "Real butter, fresh fruit and no artificial shortcuts." },
  { icon: Heart, title: "Made with love", text: "Family recipes, baked by hand every single morning." },
  { icon: Users, title: "Community first", text: "A neighbourhood bakery where everyone is a regular." },
  { icon: Sparkles, title: "Always creative", text: "New seasonal flavours and custom designs all year." },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="Our story" title="About Us" subtitle="A small oven, a big dream — and a lot of butter." image={images.pastry} />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 lg:grid-cols-2">
        <div className="relative">
          <img src={images.pastry} alt="Bakerz Bite pastries" loading="lazy" width={816} height={816} className="aspect-[4/5] w-4/5 rounded-[2rem] object-cover shadow-lift" />
          <img src={images.cake} alt="Bakerz Bite cake" loading="lazy" width={816} height={816} className="absolute -bottom-10 right-0 aspect-square w-1/2 rounded-[2rem] border-8 border-background object-cover shadow-lift" />
          <div className="animate-float absolute left-[60%] top-8 rounded-2xl bg-gradient-gold px-5 py-4 text-accent-foreground shadow-gold">
            <p className="font-display text-3xl font-bold">100%</p>
            <p className="text-xs font-bold uppercase tracking-wider">Handmade</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Who we are" title="From a family kitchen to your favourite bakery" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Bakerz Bite began as a family kitchen with one recipe book and a lot of butter. Today we bake cakes, pastries, cookies and pies fresh every morning using quality ingredients and no shortcuts.</p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Whether it's a birthday, a weekend treat or your morning coffee, we want every bite to feel like home.</p>
          <Link to="/menu" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">See what we bake <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="relative bg-cocoa text-cocoa-foreground">
        <div className="absolute inset-0 bg-dots-light opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <p className="eyebrow justify-center text-accent">What we believe</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Baked on four simple values</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: I, title, text }) => (
              <div key={title} className="rounded-3xl border border-cocoa-foreground/15 bg-cocoa-foreground/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-accent/60">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-accent-foreground"><I className="h-6 w-6" /></span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-75">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading eyebrow="Get in touch" title="Come say hello">
          Drop by the shop, give us a call or send an email — we'd love to bake for you.
        </SectionHeading>
        <ContactList />
      </section>
    </>
  );
}
