import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Engineering Insights & Field Notes | VECTREV Blog" },
      {
        name: "description",
        content:
          "Practical articles on pre-commissioning, protection coordination, substation automation, ETAP studies, LV panel selection and statutory safety compliance.",
      },
      { property: "og:title", content: "VECTREV Engineering Insights" },
      { property: "og:description", content: "Field notes from Indian and overseas commissioning sites." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Field notes from <br />
            <span className="text-accent-brand">commissioning sites.</span>
          </>
        }
        subtitle="Practical engineering writing for plant electrical teams, EPC contractors and consultants — no fluff, no vendor pitch."
      />

      {lead && (
        <section className="px-5 sm:px-8">
          <Link
            to="/blog/$slug"
            params={{ slug: lead.slug }}
            className="group max-w-7xl mx-auto grid lg:grid-cols-12 rounded-[2rem] overflow-hidden bg-card border border-border shadow-card-premium"
          >
            <div className="lg:col-span-6 relative min-h-[280px]">
              <img
                src={lead.image}
                alt={lead.title}
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">
                Latest · {lead.tag}
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold heading-crisp text-foreground leading-tight">
                {lead.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{lead.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{new Date(lead.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {lead.readMins} min read
                </span>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-brand">
                Read article
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </span>
            </div>
          </Link>
        </section>
      )}

      <section className="px-5 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.05 * i }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block h-full rounded-3xl bg-card border border-border shadow-card-premium overflow-hidden hover:-translate-y-1 transition"
              >
                <div className="relative h-44">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={720}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-card/95 text-foreground px-3 py-1 rounded-full">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-foreground leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.readMins} min
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTAStrip
        eyebrow="Talk to an engineer"
        title="Got a problem this article didn't cover?"
        subtitle="Send us the details and we'll give you a straight technical answer."
      />
    </>
  );
}
