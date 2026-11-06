import { createFileRoute } from "@tanstack/react-router";
import { ContactList } from "@/components/ContactList";
import { images } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "The story of Bakerz Bite, plus our email, address and phone number."),
  component: () => (
    <>
      <PageHeader title="About Us" subtitle="A small oven, a big dream." />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2">
        <img src={images.pastry} alt="Bakerz Bite pastries" loading="lazy" className="rounded-3xl shadow-warm" />
        <div>
          <h2 className="text-3xl font-semibold">Our story</h2>
          <p className="mt-4 text-muted-foreground">Bakerz Bite began as a family kitchen with one recipe book and a lot of butter. Today we bake cakes, pastries, cookies and pies fresh every morning using quality ingredients and no shortcuts.</p>
          <p className="mt-3 text-muted-foreground">Whether it's a birthday, a weekend treat or your morning coffee, we want every bite to feel like home.</p>
          <ContactList />
        </div>
      </div>
    </>
  ),
});

