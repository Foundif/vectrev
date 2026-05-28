import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, FileText, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Free Engineering Resources — VECTREV T&C Checklist & Safety Overview" },
      {
        name: "description",
        content:
          "Download VECTREV's field-ready Electrical T&C Checklist and Industrial Safety Compliance Overview — free PDFs, gated by a 30-second form.",
      },
      { property: "og:title", content: "Free Engineering Resources — VECTREV" },
      { property: "og:description", content: "Field-ready PDFs from VECTREV engineers." },
    ],
  }),
  component: Resources,
});

type Resource = {
  id: "tc" | "safety";
  icon: typeof FileText;
  title: string;
  blurb: string;
  bullets: string[];
  file: string;
  fileLabel: string;
};

const resources: Resource[] = [
  {
    id: "tc",
    icon: FileText,
    title: "Electrical T&C Checklist",
    blurb:
      "A 7-section, field-tested checklist VECTREV engineers use on every LV/MV/HV commissioning — from documentation pack to handover sign-off.",
    bullets: [
      "Pre-commissioning documentation pack",
      "Visual, mechanical & electrical test sequence",
      "Protection, control, auxiliaries & energisation readiness",
      "Handover dossier structure auditors accept first time",
    ],
    file: "/resources/vectrev-electrical-tc-checklist.pdf",
    fileLabel: "vectrev-electrical-tc-checklist.pdf",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety & Compliance Overview",
    blurb:
      "The statutes, standards, on-site protocols and documentation that plant auditors look for — written for owners, EHS heads and project managers in India.",
    bullets: [
      "CEA, Factories Act and IS/IEC framework mapped",
      "Statutory approvals VECTREV handles end-to-end",
      "On-site protocols, PPE matrix and audit documentation",
      "Engagement models for projects, retainers and shutdowns",
    ],
    file: "/resources/vectrev-safety-compliance-overview.pdf",
    fileLabel: "vectrev-safety-compliance-overview.pdf",
  },
];

function Resources() {
  const [active, setActive] = useState<Resource | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            Field-ready PDFs <span className="text-accent-brand">our engineers actually use.</span>
          </>
        }
        subtitle="Two free, working documents you can bring straight to site. Share a few details so we know who's downloading — and so we can help if you get stuck."
      />

      <section className="px-5 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="rounded-[2rem] border border-border bg-card shadow-card-premium overflow-hidden flex flex-col"
            >
              <div className="p-7 md:p-9 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <r.icon className="h-6 w-6 text-accent-brand" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    <Lock className="h-3 w-3" /> Gated PDF
                  </span>
                </div>
                <h2 className="mt-6 text-2xl md:text-3xl font-extrabold text-foreground leading-tight">
                  {r.title}
                </h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{r.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent-brand flex-shrink-0 mt-1" />
                      <span className="text-foreground/85 text-[15px]">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setActive(r)}
                className="group flex items-center justify-between gap-3 px-7 md:px-9 py-5 bg-foreground text-background hover:bg-accent transition"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <Download className="h-4 w-4" /> Unlock & download
                </span>
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {active && <LeadGate resource={active} onClose={() => setActive(null)} />}
    </>
  );
}

function LeadGate({ resource, onClose }: { resource: Resource; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const phone = String(fd.get("phone") || "").trim().slice(0, 20);
    const email = String(fd.get("email") || "").trim().slice(0, 120);
    const company = String(fd.get("company") || "").trim().slice(0, 120);
    const role = String(fd.get("role") || "").trim().slice(0, 80);

    // Trigger download
    const a = document.createElement("a");
    a.href = resource.file;
    a.download = resource.fileLabel;
    document.body.appendChild(a);
    a.click();
    a.remove();

    // Notify VECTREV via WhatsApp (intake)
    const lines = [
      `Hi VECTREV, I just downloaded: ${resource.title}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      company ? `Company: ${company}` : "",
      role ? `Role: ${role}` : "",
    ].filter(Boolean).join("\n");
    window.open(
      `https://wa.me/918879608428?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener",
    );

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-lg rounded-[2rem] bg-dark text-dark-foreground p-8 md:p-10 overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <div className="relative text-xs uppercase tracking-[0.22em] text-white/60">
              Unlock resource
            </div>
            <h3 className="relative mt-3 text-2xl font-extrabold leading-tight">
              {resource.title}
            </h3>
            <p className="relative mt-2 text-white/70 text-sm">
              30 seconds. We'll send you the PDF and only follow up if you want help applying it.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Name *</span>
                  <input required name="name" maxLength={100} className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Phone *</span>
                  <input required type="tel" name="phone" maxLength={20} pattern="[0-9+\-\s]{7,20}" className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent" placeholder="+91 ..." />
                </label>
              </div>
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-white/60">Work email</span>
                <input type="email" name="email" maxLength={120} className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent" placeholder="you@company.com" />
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Company</span>
                  <input name="company" maxLength={120} className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent" placeholder="Plant / EPC name" />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Role</span>
                  <input name="role" maxLength={80} className="mt-1.5 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent" placeholder="Project manager, EHS, …" />
                </label>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-full shadow-accent hover:opacity-95 transition group">
                <Download className="h-4 w-4" /> Download PDF
              </button>
              <p className="text-xs text-white/50 text-center">
                Your download starts immediately. We'll also open WhatsApp so a VECTREV engineer can follow up if needed.
              </p>
            </form>
          </>
        ) : (
          <div className="relative text-center py-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-accent-brand" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold">Your download has started.</h3>
            <p className="mt-2 text-white/70 text-sm">
              If it didn't open, use the direct link below. A VECTREV engineer will follow up on WhatsApp if you'd like help applying it.
            </p>
            <a
              href={resource.file}
              download={resource.fileLabel}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-3 rounded-full"
            >
              <Download className="h-4 w-4" /> Download again
            </a>
            <button
              onClick={onClose}
              className="block mx-auto mt-4 text-xs text-white/60 hover:text-white"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}