import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import { Button } from "@/components/ui/button";
import { catalogProducts, productGroups } from "@/data/products";

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


export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Kusam-Meco Products | VECTREV Engineering Solutions" },
      { name: "description", content: "VECTREV is an authorised Kusam-Meco dealer supplying precision electrical measurement and control products across the globe." },
      { property: "og:title", content: "Authorised Kusam-Meco Dealer | VECTREV" },
      { property: "og:description", content: "Explore Kusam-Meco measurement, testing and control product categories supplied by VECTREV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  const [paused, setPaused] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || paused) return;
    const timer = window.setInterval(() => {
      if (rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2) {
        rail.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        rail.scrollBy({ left: 2, behavior: "auto" });
      }
    }, 30);
    return () => window.clearInterval(timer);
  }, [paused]);

  const moveRail = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * 360, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Products we supply. <br /><span className="text-accent-brand">Built for dependable work.</span></>}
        subtitle="Authorised KUSAM-MECO dealer and electrical panel supplier for industrial, commercial and infrastructure projects."
      />

      <section aria-labelledby="product-categories" className="border-y border-border bg-secondary/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-brand">Our range</p>
          <h2 id="product-categories" className="mt-3 text-3xl font-extrabold text-foreground">Electrical products for every stage of the job</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {productGroups.map((group) => (
              <article key={group.slug} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card-premium">
                <div className="h-40 bg-background p-4"><img src={group.image} alt={group.title} loading="lazy" className="h-full w-full object-contain" /></div>
                <div className="p-5"><h3 className="text-lg font-bold text-foreground">{group.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="product-catalog" className="w-full overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-brand">Product catalogue</p><h2 id="product-catalog" className="mt-3 text-3xl font-extrabold text-foreground">KUSAM-MECO and VECTREV supply</h2></div>
            <div className="flex items-center gap-2">
              <Button type="button" variant="outline" size="icon" onClick={() => moveRail(-1)} aria-label="Scroll products left"><ChevronLeft /></Button>
              <Button type="button" variant="outline" size="icon" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Play product carousel" : "Pause product carousel"}>{paused ? <Play /> : <Pause />}</Button>
              <Button type="button" variant="outline" size="icon" onClick={() => moveRail(1)} aria-label="Scroll products right"><ChevronRight /></Button>
            </div>
          </div>
          <div ref={railRef} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {catalogProducts.map((product) => (
              <article key={product.slug} className="w-[min(78vw,300px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-card-premium">
                <div className="flex h-56 items-center justify-center bg-background p-5"><img src={product.image} alt={product.title} loading="lazy" className="h-full w-full object-contain" /></div>
                <div className="min-h-32 p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-brand">{product.category}</p><h3 className="mt-2 text-base font-bold leading-snug text-foreground">{product.title}</h3></div>
              </article>
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Swipe or drag to browse the complete range.</p>
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
