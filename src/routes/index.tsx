import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  Zap,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Star,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Gauge,
} from "lucide-react";
import { CTAStrip } from "@/components/CTAStrip";
import controlPanel from "@/assets/control-panel.webp";
import substation from "@/assets/substation.webp";
import technician from "@/assets/technician.webp";
import testKit from "@/assets/test-kit.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";
import hvTest from "@/assets/hv-test.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VECTREV Engineering Solutions — Industrial T&C & Consulting | Tamil Nadu" },
      {
        name: "description",
        content:
          "Industrial electrical Testing & Commissioning, engineering consultancy and safety-compliant project execution. Trusted by plants and contractors across Tamil Nadu.",
      },
      { property: "og:title", content: "VECTREV Engineering Solutions — Industrial T&C & Consulting" },
      { property: "og:description", content: "Reliable engineering solutions that keep your operations running without failure." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VECTREV Engineering Solutions Private Limited",
          telephone: "+91-88796-08428",
          address: {
            "@type": "PostalAddress",
            streetAddress: "61E/2D, Olepettai",
            addressLocality: "Thoothukudi",
            addressRegion: "Tamil Nadu",
            postalCode: "628002",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "2" },
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const clients = [
  "TANGEDCO",
  "Wind Power IPPs",
  "Cement & Process Plants",
  "Textile Mills",
  "Steel & Foundry",
  "EPC Contractors",
  "Solar Developers",
  "Substation Projects",
];

function Hero() {
  return (
    <section className="relative px-5 sm:px-8 pt-6 md:pt-10 pb-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-7"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-brand text-xs font-semibold tracking-wider uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Thoothukudi · Est. 2025
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 text-[2.2rem] leading-[1.05] sm:text-5xl lg:text-[4.5rem] font-extrabold tracking-tight text-foreground"
          >
            Engineering <br />
            <span className="text-accent-brand">Reliability</span> Into <br />
            Every Plant.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Industrial T&C, engineering consultancy and safety-compliant
            execution — for operations that can't afford downtime.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold px-5 sm:px-7 py-3.5 sm:py-4 rounded-full hover:bg-accent transition group text-sm sm:text-base"
            >
              Get a Quote
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-5 sm:px-7 py-3.5 sm:py-4 rounded-full text-foreground hover:bg-secondary transition text-sm sm:text-base"
            >
              Our Services
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-3 max-w-lg gap-6">
            {[
              ["50+", "Sites Commissioned"],
              ["5.0", "Client Rating"],
              ["24h", "Response Time"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden bg-dark aspect-[4/3] lg:aspect-[4/5] max-h-[62vh] lg:max-h-none shadow-soft">
            <img src={controlPanel} alt="Industrial control panel" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 bg-white/95 text-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              <Gauge className="h-3.5 w-3.5 text-accent-brand" />
              Control & Protection · LV / MV
            </div>
            <div className="absolute top-5 right-5 bg-gradient-accent text-accent-foreground rounded-2xl px-4 py-3 text-right shadow-accent">
              <div className="text-[10px] uppercase tracking-widest opacity-80">HV Testing</div>
              <div className="text-lg font-extrabold leading-none mt-1">70 kV AC</div>
              <div className="text-[10px] opacity-80">80 kV DC</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-4 sm:left-6 bg-card border border-border rounded-2xl p-4 shadow-card-premium max-w-[260px]"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm font-medium text-foreground mt-2 leading-snug">
              "Professional, knowledgeable and easy to work with."
            </p>
            <p className="text-xs text-muted-foreground mt-1">— Verified Google review</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ClientsMarquee() {
  const row = [...clients, ...clients];
  return (
    <section className="mt-24 py-14 border-y border-border bg-secondary/50">
      <div className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
        Trusted across
      </div>
      <h2 className="mt-2 text-center text-3xl md:text-4xl font-extrabold text-foreground">
        Industries & Project Owners
      </h2>
      <div className="mt-10 overflow-hidden relative">
        <div className="flex gap-12 whitespace-nowrap marquee w-max">
          {row.map((c, i) => (
            <span key={i} className="text-2xl md:text-3xl font-bold text-foreground/30 hover:text-accent-brand transition">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const problems = [
  { icon: Clock, title: "Project delays", desc: "Slipping commissioning dates that cascade into revenue loss.", image: substation },
  { icon: AlertTriangle, title: "Safety risks", desc: "Non-compliant work that endangers people and equipment.", image: hvTest },
  { icon: HardHat, title: "Low-quality vendors", desc: "Poor execution, missing documents, costly rework.", image: cables },
];

function Problem() {
  return (
    <section className="px-5 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">The reality on site</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            Most plant problems aren't equipment failures.<br />
            <span className="text-accent-brand">They're execution failures.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
            One missed test, one undocumented protocol, one safety shortcut —
            and you're staring at a tripped substation, a regulator notice,
            or a six-figure outage.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card-premium hover:-translate-y-1 transition"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 h-10 w-10 rounded-xl bg-white/95 flex items-center justify-center">
                  <p.icon className="h-5 w-5 text-accent-brand" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const outcomes = [
    "Zero-defect handover with full test reports",
    "Compliance with IS / IEC / CEA standards",
    "Predictable timelines, transparent updates",
    "Documentation auditors accept first time",
  ];
  return (
    <section className="px-5 sm:px-8 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden shadow-soft"
        >
          <img src={technician} alt="VECTREV technician on site" className="w-full h-[500px] object-cover" />
        </motion.div>
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">The VECTREV standard</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
            An engineering partner that owns the outcome — not just the scope.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            From pre-commissioning checks to final energisation, our engineers
            stay on site until your system runs the way it was designed to.
            Every test instrumented. Every protocol followed. Every reading
            documented.
          </p>
          <ul className="mt-8 space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-brand flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Zap, title: "Electrical T&C", desc: "Pre-commissioning, relay & HV testing.", image: testKit },
  { icon: ClipboardCheck, title: "Consultancy", desc: "Protection studies, SLDs, BOQs.", image: relay },
  { icon: HardHat, title: "Project Execution", desc: "On-site supervision & OEM coordination.", image: cables },
  { icon: ShieldCheck, title: "Safety Compliance", desc: "CEA / Electrical Inspectorate ready.", image: hvTest },
];

function FeaturedServices() {
  return (
    <section className="px-5 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">Our expertise</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-foreground">
              Featured Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Four engineering disciplines built around one promise: reliable
              power, every shift.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent-brand transition group"
          >
            View all services
            <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
          </Link>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className="h-full"
            >
              <Link
                to="/services"
                className="group flex h-full flex-col rounded-3xl overflow-hidden bg-card border border-border shadow-card-premium hover:-translate-y-1 transition"
              >
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <div className="absolute top-4 left-4 h-10 w-10 rounded-full bg-white/95 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-accent-brand" />
                  </div>
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/95 flex items-center justify-center">
                    <ArrowUpRight className="h-4 w-4 text-foreground group-hover:rotate-45 transition" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Sumathy S",
    text: "VECTREV delivered exactly what we needed — professional, knowledgeable, and easy to work with. Their team was responsive, detail-oriented, and got the job done right.",
  },
  {
    name: "Verified Client",
    text: "VECTREV Engineering Solutions provided excellent service for our project. Very competent team, followed all safety protocols. Highly recommended for industrial electrical T&C.",
  },
];

function SocialProof() {
  return (
    <section className="px-5 sm:px-8 py-20">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-secondary/60 p-10 md:p-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.22em] text-accent-brand">Social proof</div>
            <div className="mt-5 flex items-end gap-3">
              <div className="text-6xl font-extrabold text-foreground leading-none">5.0</div>
              <div className="pb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-1">Google reviews</div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Plant owners and project managers choose VECTREV because we show
              up, document, and deliver.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-card border border-border p-6 shadow-card-premium"
              >
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed text-[15px]">"{t.text}"</p>
                <footer className="mt-5 text-sm text-muted-foreground font-medium">— {t.name}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Problem />
      <div className="relative">
        <img src={substation} alt="" aria-hidden="true" className="absolute -z-10 inset-0 w-full h-full object-cover opacity-[0.04]" />
        <Solution />
      </div>
      <FeaturedServices />
      <SocialProof />
      <CTAStrip />
    </>
  );
}