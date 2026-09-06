import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import { productGroups } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Electrical Panels & Safety Solutions | VECTREV" },
      {
        name: "description",
        content:
          "LV and MV electrical panels, metering and control panels, and electrical safety products for industrial, commercial and infrastructure projects.",
      },
      { property: "og:title", content: "VECTREV Products — Panels & Safety Solutions" },
      {
        property: "og:description",
        content: "Electrical panel solutions and practical safety products for project execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  const marqueeGroups = [...productGroups, ...productGroups];

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Panels we build. <br />
            <span className="text-accent-brand">Safety products we supply.</span>
          </>
        }
        subtitle="End-to-end design and supply of LV and MV electrical panels, metering and control panels, and electrical safety products for industrial, commercial and infrastructure projects."
      />

      <section aria-label="Product range" className="w-full overflow-hidden border-y border-border bg-secondary/40 py-8 sm:py-10">
        <div className="flex w-max gap-5 marquee-slow px-5 sm:px-8">
          {marqueeGroups.map((group, index) => (
            <article
              key={`${group.slug}-${index}`}
              className="w-[min(82vw,420px)] shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card-premium"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={group.image} alt={group.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-lg font-extrabold text-white">
                  {group.title}
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{group.blurb}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTAStrip
        eyebrow="Panel enquiry"
        title="Share your SLD and load list."
        subtitle="We'll engineer, build and routine-test a panel to your exact requirement, with IS/IEC compliance documentation."
      />
    </>
  );
}