import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { FilterableProducts } from "@/components/Filters";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/merchandise")({
  head: () => seo("Merchandise", "Bakerz Bite branded mugs, bags, glasses and trays."),
  component: () => (
    <>
      <PageHeader title="Merchandise" subtitle="Take a little Bakerz Bite home — mugs, bags, glasses and trays." />
      <FilterableProducts items={products.filter((p) => p.category === "Merchandise")} categories={[]} />
    </>
  ),
});
