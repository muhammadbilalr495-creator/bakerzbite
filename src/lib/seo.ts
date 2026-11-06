export const seo = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Bakerz Bite` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Bakerz Bite` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
