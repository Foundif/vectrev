import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import { productGroups } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LV & MV Panels and Testing Instruments | VECTREV" },
      {
        name: "description",
        content:
          "PCC, MCC, PMCC, APFC, LDB and PDB panels built to IS/IEC standards, metering and C&R panels, plus our Omicron and Megger primary, secondary and basic testing instrument fleet.",
      },
      { property: "og:title", content: "VECTREV Products — Panels & Test Instruments" },
      {
        property: "og:description",
        content: "Electrical panel solutions and a calibrated testing instrument fleet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Panels we build. <br />
            <span className="text-accent-brand">Instruments we test with.</span>
          </>
        }
        subtitle="End-to-end design and supply of LV and MV electrical panels for industrial, commercial and infrastructure projects — backed by a calibrated Omicron and Megger instrument fleet."
      />

      <section className="px-5 sm:px-8 pb-8 space-y-6">
        {productGroups.map((g, i) => (
          <motion.article
            key={g.slug}
            id={g.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.04 * i }}
            className="max-w-7xl mx-auto grid lg:grid-cols-12 rounded-[2rem] bg-card border border-border shadow-card-premium overflow-hidden"
          >
            <div className={`lg:col-span-5 relative min-h-[260px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={g.image}
                alt={g.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
            <div className="lg:col-span-7 p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                0{i + 1}
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold heading-crisp text-foreground">
                {g.title}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{g.blurb}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent-brand mt-0.5 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-brand group"
              >
                Enquire about this range
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      <CTAStrip
        eyebrow="Panel enquiry"
        title="Share your SLD and load list."
        subtitle="We'll engineer, build and routine-test a panel to your exact requirement, with IS/IEC compliance documentation."
      />
    </>
  );
}
