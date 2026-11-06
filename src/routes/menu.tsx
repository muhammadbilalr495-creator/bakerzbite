import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/data";
import { PageHeader } from "@/components/ProductCard";
import { FilterableProducts } from "@/components/Filters";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/menu")({
  head: () => seo("Menu", "Browse Bakerz Bite cakes, pastries, cookies and pies with ingredients and details."),
  component: () => (
    <>
      <PageHeader title="Our Menu" subtitle="Tap any item to see its photos, ingredients and specifications." />
      <FilterableProducts items={products.filter((p) => p.category !== "Merchandise")} categories={["Cakes", "Pastries", "Cookies", "Pies"]} />
    </>
  ),
});
