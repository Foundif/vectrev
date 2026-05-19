import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, ClipboardCheck, HardHat, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import testKit from "@/assets/test-kit.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";
import hvTest from "@/assets/hv-test.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Industrial T&C, Consultancy & Safety | VECTREV" },
      { name: "description", content: "Industrial electrical Testing & Commissioning, engineering consultancy, project execution and safety compliance for plants and contractors across Tamil Nadu." },
      { property: "og:title", content: "VECTREV Services — Industrial Engineering" },
      { property: "og:description", content: "Four disciplines. One commitment to reliability." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Zap,
    title: "Industrial Electrical Testing & Commissioning",
    solves: "Equipment failures at energisation, missed protection coordination, undocumented commissioning.",
    edge: "Calibrated HV kits up to 70 kV AC / 80 kV DC, relay testing for ABB / Schneider / Siemens, full traceable test reports.",
    deliverables: ["Pre-commissioning checks", "HV / IR / continuity tests", "Relay configuration & secondary injection", "Energisation & load trials"],
    image: testKit,
  },
  {
    icon: ClipboardCheck,
    title: "Engineering Consultancy",
    solves: "Design gaps, vendor selection chaos, over-spec'd or under-spec'd systems.",
    edge: "Independent technical review, single-line diagrams, protection coordination studies and cost-optimised BOQs.",
    deliverables: ["Concept & detailed design", "Protection studies", "Vendor & OEM evaluation", "Cost-optimised BOQs"],
    image: relay,
  },
  {
    icon: HardHat,
    title: "Project Execution Support",
    solves: "Schedules slipping because contractors lack on-ground supervision and technical depth.",
    edge: "On-site engineers driving daily progress, OEM coordination and milestone-based delivery.",
    deliverables: ["Daily site supervision", "OEM coordination", "Quality plans & ITPs", "Milestone tracking"],
    image: cables,
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance Solutions",
    solves: "Audit non-conformities, statutory holdups, unsafe legacy installations.",
    edge: "CEA / Electrical Inspectorate compliant work, earthing studies, thermography and a PPE-first culture.",
    deliverables: ["Statutory documentation", "Earthing studies", "Thermography surveys", "Safety audits & gap reports"],
    image: hvTest,
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Four disciplines. <br />
            <span className="text-accent-brand">One commitment to reliability.</span>
          </>
        }
        subtitle="Every engagement is scoped, executed and documented to the standard that auditors, OEMs and statutory bodies expect — first time."
      />

      <section className="px-5 sm:px-8 py-12 space-y-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.04 * i }}
            className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 items-stretch rounded-[2rem] bg-card border border-border shadow-card-premium overflow-hidden"
          >
            <div className={`lg:col-span-5 relative min-h-[300px] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-5 left-5 h-11 w-11 rounded-xl bg-white/95 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-accent-brand" />
              </div>
            </div>
            <div className="lg:col-span-7 p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">0{i + 1}</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-foreground leading-tight">{s.title}</h2>
              <div className="mt-5 grid md:grid-cols-2 gap-5 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-accent-brand font-semibold">What it solves</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.solves}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground font-semibold">Why VECTREV</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.edge}</p>
                </div>
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent-brand mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </section>

      <CTAStrip
        eyebrow="Scope your project"
        title="Tell us what you need. We'll come back with a plan."
        subtitle="Pre-commissioning, full T&C, consultancy, or just a second opinion — share the scope and we'll respond within 24 hours."
      />
    </>
  );
}