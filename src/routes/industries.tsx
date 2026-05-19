import { createFileRoute } from "@tanstack/react-router";
import { Factory, Wind, Sun, Cog, Building2, Zap } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served — Power, Process, Wind, Solar | VECTREV" },
      { name: "description", content: "VECTREV delivers electrical T&C, consultancy and safety compliance across utility, wind, solar, cement, steel, textile and process plants." },
      { property: "og:title", content: "Industries Served by VECTREV" },
      { property: "og:description", content: "Power, process and renewables across Tamil Nadu and beyond." },
    ],
  }),
  component: Industries,
});

const items = [
  { icon: Zap, title: "Utility & Substations", desc: "AIS / GIS substations, distribution networks, EHV switchyards up to 66 kV class." },
  { icon: Wind, title: "Wind Power", desc: "WTG energisation, MV / HV switchgear testing, evacuation infrastructure." },
  { icon: Sun, title: "Solar Power", desc: "Inverter rooms, MV switchgear, transformer commissioning, plant energisation." },
  { icon: Factory, title: "Cement & Steel", desc: "Heavy electrical infrastructure, MCC / PCC panels, drives & protection systems." },
  { icon: Cog, title: "Textile & Process", desc: "Plant electrical upgrades, condition monitoring, statutory compliance." },
  { icon: Building2, title: "EPC & Contractors", desc: "T&C as a service for EPCs needing certified, documented commissioning support." },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title={
          <>
            Built for plants that <span className="text-accent-brand">can't afford downtime.</span>
          </>
        }
        subtitle="From utility substations to wind farms and process plants — wherever the cost of failure is high, our engineers fit in."
      />

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-7 shadow-card-premium hover:-translate-y-1 transition">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <it.icon className="h-6 w-6 text-accent-brand" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip eyebrow="Your sector, our specialty" title="Need a partner who already knows your kind of plant?" />
    </>
  );
}