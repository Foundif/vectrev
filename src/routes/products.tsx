import { createFileRoute } from "@tanstack/react-router";
import { type PointerEvent, useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import { KUSAM_MECO, productGroups } from "@/data/products";

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
  const [isInteracting, setIsInteracting] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; scrollLeft: number } | null>(null);

  const moveRail = useCallback((direction: 1 | -1) => {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>("[data-product-card]");
    if (!rail || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(rail).gap) || 0;
    const step = card.offsetWidth + gap;
    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    const isAtStart = rail.scrollLeft <= 1;
    const isAtEnd = rail.scrollLeft >= maxScrollLeft - 1;

    const left = direction === 1
      ? (isAtEnd ? 0 : Math.min(rail.scrollLeft + step, maxScrollLeft))
      : (isAtStart ? maxScrollLeft : Math.max(rail.scrollLeft - step, 0));

    rail.scrollTo({ left, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isInteracting) return;
    const timer = window.setInterval(() => moveRail(1), 4500);
    return () => window.clearInterval(timer);
  }, [isInteracting, moveRail]);

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    dragRef.current = { startX: event.clientX, scrollLeft: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsInteracting(true);
  };

  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragRef.current;
    if (!dragState) return;
    event.currentTarget.scrollLeft = dragState.scrollLeft - (event.clientX - dragState.startX);
  };

  const endDrag = () => {
    dragRef.current = null;
    setIsInteracting(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Products we supply. <br /><span className="text-accent-brand">Built for dependable work.</span></>}
        subtitle="We specialise in clampmeters, power measurement & control instruments, and power transducers. VECTREV is an authorised Kusam-Meco dealer serving project teams across the globe."
      />

      <section aria-labelledby="kusam-meco-heading" className="bg-background px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#061426] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-500">
              <BadgeCheck className="size-4" aria-hidden="true" />
              {KUSAM_MECO.title}
            </p>
            <h2 id="kusam-meco-heading" className="mt-6 max-w-xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Kusam-Meco products, <span className="text-accent-brand">supplied with confidence.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              From selection to delivery, we help you choose the right product category for testing, measurement and control work.
            </p>
            <ul className="mt-8 grid gap-4 text-sm font-medium text-white sm:grid-cols-2 sm:text-base">
              {[
                "Authorised Kusam-Meco dealership",
                "Product guidance for project needs",
                "Prompt response for enquiries",
                "Supply support across the globe",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="flex min-h-72 items-center justify-center bg-[#f5f1eb] p-6 sm:p-8">
            <img
              src={KUSAM_MECO.certificate}
              alt={KUSAM_MECO.certificateNote}
              className="h-auto max-h-72 w-auto max-w-full object-contain sm:max-h-80 lg:max-h-96"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      <section aria-label="Product categories" className="w-full overflow-hidden py-12 sm:py-16">
        <div
          ref={railRef}
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={endDrag}
          onPointerDown={startDrag}
          onPointerMove={drag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onTouchStart={() => setIsInteracting(true)}
          onTouchEnd={endDrag}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-5 pr-5 select-none [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {productGroups.map((group) => (
            <article data-product-card key={group.slug} className="w-[min(84vw,360px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card shadow-card-premium">
              <div className="flex h-52 items-center justify-center bg-background p-5"><img src={group.image} alt={group.title} loading="lazy" draggable="false" className="h-full w-full object-contain" /></div>
              <div className="min-h-40 p-5"><h2 className="text-lg font-bold text-foreground">{group.title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.blurb}</p></div>
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
