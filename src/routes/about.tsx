import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Award, Wrench, Building2, Globe2, MapPinned } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import aboutRegisteredBanner from "@/assets/about-registered-banner.jpg";
import { useSiteContent } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About VECTREV — Engineering Solutions Pvt Ltd | Thoothukudi" },
      {
        name: "description",
        content:
          "An independent industrial engineering company built on safety-first culture, technical depth and zero-shortcut execution.",
      },
      { property: "og:title", content: "About VECTREV Engineering Solutions" },
      { property: "og:description", content: "Safety-first engineering for Indian industry." },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "PTW, LOTO, PPE — non-negotiable on every site we touch.",
  },
  {
    icon: Target,
    title: "Outcome Owned",
    desc: "We're done when your system runs reliably, not when the PO closes.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    desc: "Daily updates, transparent issues, no end-of-project surprises.",
  },
  {
    icon: Award,
    title: "Documented Quality",
    desc: "Every reading, drawing and protocol — audit-ready from day one.",
  },
];

const milestones = [
  {
    icon: Wrench,
    title: "Hands-on foundations",
    desc: "Built by engineers with direct field experience in switchgear, protection and HV testing — not a paper-only outfit.",
  },
  {
    icon: Building2,
    title: "Incorporated as a Pvt Ltd company",
    desc: "Registered as VECTREV Engineering Solutions Private Limited (CIN U71200TN2025PTC180169), formalising a decade of field practice.",
  },
  {
    icon: Globe2,
    title: "Crossed into overseas work",
    desc: "Delivered 225 kV switching station and substation testing on international assignments, including projects in Cameroon.",
  },
  {
    icon: Target,
    title: "50+ sites commissioned",
    desc: "A growing track record of testing, commissioning and consultancy assignments across Tamil Nadu and beyond, with a 100% safety record.",
  },
  {
    icon: MapPinned,
    title: "Expanding footprint",
    desc: "New site presence in Kudankulam and a Middle East branch in Dubai, UAE — taking the same standards to more sites, further from home.",
  },
];

function About() {
  const { t, img } = useSiteContent();
  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={
          <>
            {t("about.hero.title")}{" "}
            <span className="text-accent-brand">{t("about.hero.accent")}</span>
          </>
        }
        subtitle={t("about.hero.subtitle")}
      />

      {/* Registered highlight — CIN & GSTIN prominent */}
      <section className="px-5 sm:px-8 -mt-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            ["MCA Registered Pvt Ltd", "CIN · U71200TN2025PTC180169"],
            ["GST Compliant", "GSTIN · 33AALCV0745P1ZU"],
            ["Registered Office", "Thoothukudi · Tamil Nadu"],
            ["Statutory Ready", "CEA · IS/IEC · Factories Act"],
          ].map(([label, val]) => (
            <div
              key={label}
              className="rounded-2xl border border-border bg-card px-5 py-4 shadow-card-premium"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent-brand">
                {label}
              </div>
              <div className="mt-1.5 font-semibold text-foreground text-sm tabular-nums">{val}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden shadow-soft"
          >
            <img
              src={img("about.intro.image", "/site/vectrev-technician-ppe.jpg")}
              alt="VECTREV engineer at work"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">
              {t("about.intro.eyebrow")}
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              {t("about.intro.title")}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t("about.intro.body")}</p>
            <p className="mt-4 text-foreground font-semibold leading-relaxed">
              {t("about.intro.body2")}
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["50+", "Sites commissioned"],
                ["5.0", "Client rating"],
                ["100%", "Safety record"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="text-3xl font-extrabold text-foreground">{n}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">
            What we stand for
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground max-w-2xl">
            {t("about.values.title")}
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-card border border-border p-6 shadow-card-premium"
              >
                <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <v.icon className="h-5 w-5 text-accent-brand" />
                </div>
                <h3 className="mt-5 font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-20 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">
            Our journey
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground max-w-2xl">
            From field engineers to a growing engineering company
          </h2>
          <div className="mt-12 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.title} className="relative flex gap-5 items-start">
                  <div className="relative z-10 h-11 w-11 shrink-0 rounded-xl bg-accent/10 border border-border flex items-center justify-center">
                    <m.icon className="h-5 w-5 text-accent-brand" />
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-bold text-foreground">{m.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 py-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden relative h-72 md:h-96">
          <img
            src={aboutRegisteredBanner}
            alt="Substation and renewable energy site"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
            <div className="text-xs uppercase tracking-[0.22em] text-accent-brand font-semibold">
              Registered
            </div>
            <p className="mt-2 text-xl md:text-3xl font-extrabold max-w-3xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              VECTREV Engineering Solutions Private Limited · CIN U71200TN2025PTC180169 · GSTIN
              33AALCV0745P1ZU
            </p>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
