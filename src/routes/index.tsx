import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  ClipboardCheck,
  HardHat,
  Star,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  MapPin,
  Mail,
  Gauge,
  Building2,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { StickyCTA } from "@/components/StickyCTA";
import substation from "@/assets/substation.webp";
import controlPanel from "@/assets/control-panel.webp";
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
          url: "/",
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
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${substation})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="lg:col-span-7"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 border border-border backdrop-blur text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-[oklch(0.7_0.18_150)] animate-pulse" />
            Industrial Engineering Partners · Thoothukudi, Tamil Nadu
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground"
          >
            Reliable engineering that keeps your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              operations running
            </span>{" "}
            without failure.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            VECTREV delivers industrial electrical Testing & Commissioning,
            engineering consultancy and safety-compliant project execution —
            built for plants that can't afford downtime, defects or delays.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-3.5 rounded-md shadow-accent hover:opacity-95 transition"
            >
              Request Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-border bg-card/50 backdrop-blur px-6 py-3.5 rounded-md text-foreground hover:bg-card transition"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-foreground font-semibold">5.0</span>
              <span className="text-muted-foreground">verified client rating</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Safety-compliant execution
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4 text-primary" />
              CIN U71200TN2025PTC180169
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-glow">
            <img src={controlPanel} alt="Industrial control panel" className="w-full h-[460px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 bg-card/85 backdrop-blur border border-border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-primary flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">HV Testing · 70 kV AC / 80 kV DC</div>
                  <div className="text-xs text-muted-foreground">Certified, calibrated, traceable.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const problems = [
  { icon: Clock, title: "Project delays", desc: "Slipping commissioning dates that cascade into revenue loss." },
  { icon: AlertTriangle, title: "Safety risks", desc: "Non-compliant work that endangers people and equipment." },
  { icon: HardHat, title: "Low-quality vendors", desc: "Poor execution, missing documentation, costly rework." },
];

function Problem() {
  return (
    <Section id="problem" className="bg-background">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Eyebrow>The Reality on Indian Sites</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Most plant problems aren't equipment failures. They're execution failures.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            One missed test, one undocumented protocol, one shortcut on safety — and
            you're looking at a tripped substation, a regulator notice, or a six-figure
            outage. We've seen it. We fix it before it happens.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card-premium"
            >
              <p.icon className="h-7 w-7 text-accent" />
              <h3 className="mt-4 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Solution() {
  const outcomes = [
    "Zero-defect handover with full test reports",
    "Compliance with IS / IEC / CEA safety standards",
    "Predictable timelines, transparent communication",
    "Documentation auditors and OEMs accept first time",
  ];
  return (
    <Section id="solution" className="bg-surface text-surface-foreground">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl overflow-hidden shadow-card-premium"
        >
          <img src={technician} alt="VECTREV technician at work" className="w-full h-[480px] object-cover" />
        </motion.div>
        <div>
          <Eyebrow>The VECTREV Standard</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            An engineering partner that owns the outcome — not just the scope.
          </h2>
          <p className="mt-5 text-[oklch(0.4_0.04_258)] leading-relaxed">
            From pre-commissioning checks to final energisation, our engineers stay
            on site until your system runs the way it was designed to. Every test
            instrumented. Every protocol followed. Every reading documented.
          </p>
          <ul className="mt-8 space-y-3">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-[oklch(0.25_0.04_258)] font-medium">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

const services = [
  {
    icon: Zap,
    title: "Industrial Electrical Testing & Commissioning",
    solves: "Equipment failures at energisation, missed protection coordination, undocumented commissioning.",
    edge: "Calibrated HV kits up to 70 kV AC / 80 kV DC, relay testing for ABB / Schneider / Siemens, full test reports.",
    image: testKit,
  },
  {
    icon: ClipboardCheck,
    title: "Engineering Consultancy",
    solves: "Design gaps, vendor selection chaos, over-spec'd or under-spec'd systems.",
    edge: "Independent technical review, single-line diagrams, protection studies and cost-optimised BOQs.",
    image: relay,
  },
  {
    icon: HardHat,
    title: "Project Execution Support",
    solves: "Schedules slipping because contractors lack supervision and technical depth.",
    edge: "On-site engineers driving daily progress, OEM coordination, milestone-based delivery.",
    image: cables,
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance Solutions",
    solves: "Audit non-conformities, statutory holdups, unsafe legacy installations.",
    edge: "CEA / Electrical Inspectorate compliant work, earthing studies, thermography and PPE-first culture.",
    image: hvTest,
  },
];

function Services() {
  return (
    <Section id="services" className="bg-background">
      <div className="max-w-3xl">
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
          Four disciplines. One commitment to reliability.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          Every engagement is scoped, executed and documented to the same standard
          our clients expect from L&T, ABB and Schneider sub-contractors.
        </p>
      </div>
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="group rounded-2xl overflow-hidden border border-border bg-card shadow-card-premium hover:border-primary/50 transition"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute top-4 left-4 h-11 w-11 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-accent font-semibold">What it solves</div>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{s.solves}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-semibold">Why VECTREV</div>
                  <p className="mt-1 text-muted-foreground leading-relaxed">{s.edge}</p>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

const testimonials = [
  {
    name: "Sumathy S",
    text: "VECTREV delivered exactly what we needed — professional, knowledgeable, and easy to work with. Their team was responsive, detail-oriented, and got the job done right. Highly recommend them for engineering projects.",
  },
  {
    name: "Mosquito (verified client)",
    text: "VECTREV Engineering Solutions provided excellent service for our project. Their team was very competent and followed all safety protocols. Highly recommended for industrial electrical T&C works.",
  },
];

function SocialProof() {
  return (
    <Section id="proof" className="bg-background border-y border-border">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-4">
          <Eyebrow>Trusted by Industrial Clients</Eyebrow>
          <div className="mt-6 flex items-center gap-3">
            <div className="text-6xl font-bold text-foreground">5.0</div>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-1">Verified Google reviews</div>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Plant owners and project managers across Tamil Nadu choose VECTREV
            because we show up, we document, and we deliver.
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
              className="rounded-xl bg-card border border-border p-6 shadow-card-premium"
            >
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
              <footer className="mt-5 text-sm text-muted-foreground font-medium">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </Section>
  );
}

const whys = [
  { n: "01", title: "Experienced team", desc: "Engineers trained on ABB, Schneider, Siemens and L&T switchgear platforms." },
  { n: "02", title: "Safety-first culture", desc: "PTW discipline, LOTO, PPE-mandated sites. Zero shortcuts, ever." },
  { n: "03", title: "On-time delivery", desc: "Milestone-driven plans with weekly visibility — not surprises at handover." },
  { n: "04", title: "Detail-oriented execution", desc: "Every reading logged, every protocol signed, every drawing red-lined." },
];

function WhyUs() {
  return (
    <Section id="why" className="bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative">
        <div className="max-w-3xl">
          <Eyebrow>Why VECTREV</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
            The reasons clients call us back — and refer us.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whys.map((w, i) => (
            <motion.div
              key={w.n}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card-premium"
            >
              <div className="text-sm font-bold text-primary tracking-widest">{w.n}</div>
              <h3 className="mt-3 font-semibold text-foreground text-lg">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CTABanner() {
  return (
    <section className="px-5 sm:px-8 py-16">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-hero border border-border shadow-glow overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative p-10 md:p-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <Eyebrow>Let's discuss your project</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
              Avoid costly delays and safety risks. Talk to an engineer today.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
              Send us your scope. We'll come back within 24 hours with a clear plan,
              realistic timeline, and a no-nonsense quote.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-lg shadow-accent hover:opacity-95 transition"
            >
              Request Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+918879608428"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card/60 backdrop-blur px-6 py-4 rounded-lg text-foreground hover:bg-card transition"
            >
              <Phone className="h-4 w-4" /> +91 88796 08428
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">Get a quote in 24 hours.</h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details about your site or project. An engineer — not a
            salesperson — will respond.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd className="text-foreground font-semibold">+91 88796 08428</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="text-foreground font-semibold">contact@vectrev.in</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <dt className="text-muted-foreground">Operating Office</dt>
                <dd className="text-foreground font-semibold">
                  61E/2D, Olepettai, Thoothukudi — 628002, Tamil Nadu
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const text = `Hi VECTREV,%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ARequirement: ${fd.get("requirement")}`;
            window.open(`https://wa.me/918879608428?text=${text}`, "_blank");
          }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 shadow-card-premium space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Your full name"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
              <input
                required
                type="tel"
                name="phone"
                className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="+91 ..."
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Requirement</span>
            <textarea
              required
              name="requirement"
              rows={5}
              className="mt-2 w-full bg-background border border-input rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Briefly describe the project, site location, and timelines."
            />
          </label>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-md shadow-accent hover:opacity-95 transition"
          >
            Send Enquiry <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Submitting opens WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} VECTREV Engineering Solutions Pvt Ltd · CIN U71200TN2025PTC180169
        </div>
        <div>GSTIN 33AALCV0745P1ZU · Thoothukudi, Tamil Nadu</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <SocialProof />
        <WhyUs />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
