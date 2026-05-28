import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap, ShieldCheck, Gauge, Factory, Sun } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import substation from "@/assets/substation.webp";
import controlPanel from "@/assets/control-panel.webp";
import hvTest from "@/assets/hv-test.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — VECTREV T&C and Safety Compliance Projects" },
      {
        name: "description",
        content:
          "Detailed T&C and safety-compliance project write-ups across substations, wind, textiles, cement and process plants in Tamil Nadu.",
      },
      { property: "og:title", content: "Case Studies — VECTREV Engineering Solutions" },
      { property: "og:description", content: "Real T&C and safety compliance outcomes from VECTREV." },
    ],
  }),
  component: CaseStudies,
});

type Study = {
  tag: string;
  icon: typeof Zap;
  title: string;
  client: string;
  location: string;
  scope: string;
  challenge: string;
  approach: string[];
  outcomes: { label: string; value: string }[];
  duration: string;
  image: string;
};

const studies: Study[] = [
  {
    tag: "33/11 kV Substation",
    icon: Zap,
    title: "Pre-commissioning & energisation of a 33/11 kV industrial substation",
    client: "Process plant — Thoothukudi cluster",
    location: "Thoothukudi, Tamil Nadu",
    scope:
      "Complete pre-commissioning testing, relay configuration, HV withstand, statutory liaison and energisation for a greenfield 33/11 kV indoor substation with 2 × 5 MVA transformers.",
    challenge:
      "Original EPC schedule had slipped by 5 weeks. Owner needed energisation before quarter close or face penalty clauses with the utility offtaker. Documentation was incomplete and protection settings had not been validated against the latest fault-level study.",
    approach: [
      "Re-ran short-circuit and grading study against the updated TANGEDCO feeder data",
      "Executed IR, HV (70 kV AC), TTR, magnetic balance and tan-delta on both transformers",
      "Primary and secondary current injection on all 50/51/87/64 protection elements",
      "Coordinated with Electrical Inspectorate for Form-E approval in a single visit",
      "Documented and handed over a complete test dossier within 48 hours of energisation",
    ],
    outcomes: [
      { label: "Energised", value: "11 days" },
      { label: "Re-work", value: "Zero" },
      { label: "CEIG visits", value: "1 (single-shot)" },
    ],
    duration: "11 days on site",
    image: substation,
  },
  {
    tag: "Wind farm O&M",
    icon: Gauge,
    title: "Annual statutory testing for an 18-turbine wind farm pooling station",
    client: "Independent Power Producer",
    location: "Tirunelveli district, Tamil Nadu",
    scope:
      "Annual statutory electrical testing of the 33 kV pooling station, individual WTG transformers, earth pits and lightning arresters with full compliance dossier for the State Electrical Inspectorate.",
    challenge:
      "Tight maintenance window (one calm-wind weekend) to complete all tests across 18 turbines and the pooling station without exceeding the planned generation loss of 0.4 GWh.",
    approach: [
      "Split the team into 3 crews running parallel test sequences",
      "Earth-pit and LA testing on energised turbines using clamp-on methodology",
      "Tan-delta on all 18 WTG transformer bushings and pool-station bushings",
      "Real-time test data uploaded to a shared dashboard for the O&M head",
      "Form-O compliance dossier submitted within 7 working days",
    ],
    outcomes: [
      { label: "Turbines tested", value: "18 / 18" },
      { label: "Generation lost", value: "0.31 GWh (22% under plan)" },
      { label: "Compliance gaps closed", value: "100%" },
    ],
    duration: "1 shutdown weekend + 7 days reporting",
    image: hvTest,
  },
  {
    tag: "Safety audit & compliance",
    icon: ShieldCheck,
    title: "Electrical safety audit & compliance roadmap for a textile cluster",
    client: "Composite textile mill — 4 units",
    location: "Tirupur, Tamil Nadu",
    scope:
      "Comprehensive electrical safety audit across four units (HT yard, transformer bay, MCC rooms, dye-house), gap analysis against Factories Act, IS/IEC and CEA regulations, and a 90-day prioritised closure roadmap.",
    challenge:
      "Recent surprise factory inspection flagged 27 observations. Management needed an independent audit, a defensible closure plan, and execution support before the next inspection window.",
    approach: [
      "Walk-down of every electrical room with photographic evidence",
      "Arc-flash incident energy calculation per IEEE 1584 across 36 MCC sections",
      "PPE matrix and panel-front warning labels designed and supplied",
      "Issued 64-page gap report with owners, severity, target dates",
      "Re-audit and inspector liaison on closure of all 27 original observations",
    ],
    outcomes: [
      { label: "Original observations closed", value: "27 / 27" },
      { label: "New gaps identified", value: "41" },
      { label: "Re-inspection result", value: "Cleared without observation" },
    ],
    duration: "3-week audit + 90-day closure window",
    image: relay,
  },
  {
    tag: "Solar evacuation",
    icon: Sun,
    title: "Testing & commissioning of a 5 MWp captive solar evacuation system",
    client: "Cement manufacturer",
    location: "Ariyalur, Tamil Nadu",
    scope:
      "Full T&C of LT to 11 kV captive solar evacuation including string-level testing, inverter commissioning, transformer testing, protection setting and synchronisation with the existing 11 kV captive bus.",
    challenge:
      "Two earlier integrators had failed to achieve stable synchronisation with the captive bus. Inverter trips during cement-mill startup spikes were causing daily generation loss of approximately 18%.",
    approach: [
      "Captured power-quality data over 72 hours to characterise mill-start transients",
      "Re-tuned inverter ride-through and protection-relay settings on the synchronising breaker",
      "Added a controlled soft-start sequence coordinated with the mill's MV drive",
      "Re-commissioned with witness testing by the customer's electrical head",
    ],
    outcomes: [
      { label: "Nuisance trips", value: "Eliminated" },
      { label: "Generation uplift", value: "+18% vs. baseline" },
      { label: "Payback on engagement", value: "≈ 3 months" },
    ],
    duration: "9 days site + 3 days reporting",
    image: controlPanel,
  },
  {
    tag: "Cable & motor health",
    icon: Factory,
    title: "Predictive electrical health check on an HT motor and cable network",
    client: "Foundry & forging unit",
    location: "Sivakasi, Tamil Nadu",
    scope:
      "IR, PI, surge comparison, tan-delta on 6 × 3.3 kV motors and full VLF testing on the underlying 3.3 kV XLPE cable network feeding the rolling-mill complex.",
    challenge:
      "Repeated unplanned trip-outs on one motor feeder were costing the plant ~₹2.4 lakh per incident. Root cause was suspected to be cable insulation degradation, but had never been quantified.",
    approach: [
      "Baseline IR/PI on all 6 motors and trend comparison with OEM acceptance values",
      "VLF 0.1 Hz withstand and tan-delta on each cable section to localise insulation weak points",
      "Surge comparison testing to detect inter-turn faults on rotors",
      "Issued a ranked replacement / monitoring plan with budgetary implications",
    ],
    outcomes: [
      { label: "Weak cable sections found", value: "3 (2 critical)" },
      { label: "Forecast trip events avoided", value: "≈ 11 / year" },
      { label: "Annual loss prevented", value: "≈ ₹26 lakh" },
    ],
    duration: "5 days on site",
    image: cables,
  },
];

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title={
          <>
            Proof, not <span className="text-accent-brand">promises.</span>
          </>
        }
        subtitle="Detailed write-ups of recent T&C and safety-compliance projects — the scope, the constraints, the engineering decisions, and the measurable outcomes."
      />

      <section className="px-5 sm:px-8 pb-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {studies.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] overflow-hidden border border-border bg-card shadow-card-premium"
            >
              <div className={`grid lg:grid-cols-12 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5 relative min-h-[260px]">
                  <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    <s.icon className="h-3.5 w-3.5 text-accent-brand" />
                    {s.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-[11px] uppercase tracking-[0.22em] opacity-80">Duration</div>
                    <div className="text-lg font-bold">{s.duration}</div>
                  </div>
                </div>
                <div className="lg:col-span-7 p-7 md:p-10">
                  <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">
                    {s.location} · {s.client}
                  </div>
                  <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                    {s.title}
                  </h2>

                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Scope</div>
                      <p className="mt-2 text-foreground/85 text-[15px] leading-relaxed">{s.scope}</p>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Challenge</div>
                      <p className="mt-2 text-foreground/85 text-[15px] leading-relaxed">{s.challenge}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">VECTREV approach</div>
                    <ul className="mt-3 space-y-2">
                      {s.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-accent-brand flex-shrink-0 mt-1" />
                          <span className="text-foreground/85 text-[15px] leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {s.outcomes.map((o) => (
                      <div key={o.label} className="rounded-2xl bg-secondary/70 p-4">
                        <div className="text-base sm:text-lg font-extrabold text-foreground leading-tight">{o.value}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-8 pt-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-secondary/60 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">Want the full report?</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">
              Request a detailed project dossier
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              We can share an anonymised end-to-end test report from a similar
              project so you can see exactly how VECTREV documents and delivers.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-7 py-4 rounded-full hover:bg-accent transition group whitespace-nowrap"
          >
            Request a dossier
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
          </Link>
        </div>
      </section>

      <CTAStrip
        eyebrow="Your project next"
        title="Add your site to the list."
        subtitle="Share your scope — we'll come back with a clear engineering plan, a realistic timeline, and a no-nonsense quote within 24 hours."
      />
    </>
  );
}