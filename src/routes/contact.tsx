import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VECTREV Engineering Solutions — Thoothukudi" },
      { name: "description", content: "Talk to a VECTREV engineer. Share your project scope and get a clear plan and quote within 24 hours." },
      { property: "og:title", content: "Contact VECTREV Engineering Solutions" },
      { property: "og:description", content: "An engineer — not a salesperson — responds within 24 hours." },
    ],
  }),
  component: Contact,
});

const CHECKLIST = [
  "Site location (city / plant)",
  "Voltage level (LT / 11 kV / 33 kV / HV)",
  "Equipment / scope (transformer, switchgear, relay, cable, audit…)",
  "Target energisation or completion date",
  "Single Line Diagram availability (yes / no)",
  "Statutory status (CEIG drawing approval done / pending)",
  "Site access window and any shutdown constraints",
];

function Contact() {
  const [submitted, setSubmitted] = useState<null | {
    name: string;
    phone: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const phone = String(fd.get("phone") || "").trim().slice(0, 20);
    const requirement = String(fd.get("requirement") || "").trim().slice(0, 1000);

    if (!name || !phone || !requirement) return;

    // 1) Structured intake message to VECTREV
    const intake = [
      "Hi VECTREV — new enquiry from your website.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      "",
      "Requirement:",
      requirement,
    ].join("\n");
    window.open(
      `https://wa.me/918879608428?text=${encodeURIComponent(intake)}`,
      "_blank",
      "noopener",
    );

    // 2) Automated follow-up — checklist of what VECTREV needs next.
    //    Open the same WhatsApp chat with the required-info checklist
    //    pre-loaded so the lead can complete it in one tap.
    setTimeout(() => {
      const followUp = [
        `Hi VECTREV, this is ${name} again.`,
        "Here is the project info you need to send a clear plan and quote:",
        "",
        ...CHECKLIST.map((q, i) => `${i + 1}. ${q}:`),
        "",
        "(Reply against each line so an engineer can come back within 24 hours.)",
      ].join("\n");
      window.open(
        `https://wa.me/918879608428?text=${encodeURIComponent(followUp)}`,
        "_blank",
        "noopener",
      );
    }, 800);

    setSubmitted({ name, phone });
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's discuss your <span className="text-accent-brand">project.</span>
          </>
        }
        subtitle="Share a few details about your site or scope. An engineer — not a salesperson — will respond within 24 hours."
      />

      <section className="px-5 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <a href="tel:+918879608428" className="block rounded-2xl bg-card border border-border p-6 shadow-card-premium hover:-translate-y-0.5 transition group">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent-brand" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Phone</div>
                  <div className="mt-1 text-lg font-bold text-foreground">+91 88796 08428</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:rotate-45 transition" />
              </div>
            </a>
            <a href="mailto:contact@vectrev.in" className="block rounded-2xl bg-card border border-border p-6 shadow-card-premium hover:-translate-y-0.5 transition group">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent-brand" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                  <div className="mt-1 text-lg font-bold text-foreground">contact@vectrev.in</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:rotate-45 transition" />
              </div>
            </a>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card-premium">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent-brand" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Office</div>
                  <div className="mt-1 text-foreground font-semibold leading-snug">
                    61E/2D, Olepettai<br />
                    Thoothukudi — 628002<br />
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-[2rem] bg-dark text-dark-foreground p-8 md:p-10 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            {!submitted ? (
              <>
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/60">Lead form</div>
                  <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">Get a quote in 24 hours</h2>
                  <p className="mt-2 text-white/60 text-sm">
                    Submitting sends an intake message to our engineers on WhatsApp,
                    then automatically follows up with the project checklist they need from you.
                  </p>
                </div>
                <div className="relative grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-widest text-white/60">Name</span>
                    <input required name="name" maxLength={100} className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition" placeholder="Your full name" />
                  </label>
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-widest text-white/60">Phone</span>
                    <input required type="tel" name="phone" maxLength={20} pattern="[0-9+\-\s]{7,20}" className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition" placeholder="+91 ..." />
                  </label>
                </div>
                <label className="relative block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">Requirement</span>
                  <textarea required name="requirement" maxLength={1000} rows={5} className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition resize-none" placeholder="Briefly describe the project, site location, and timelines." />
                </label>
                <button type="submit" className="relative w-full inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-full shadow-accent hover:opacity-95 transition group">
                  Send Enquiry
                  <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
                </button>
                <div className="relative rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="text-[11px] uppercase tracking-widest text-white/60">
                    Automated WhatsApp follow-up — required info
                  </div>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {CHECKLIST.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-white/85">
                        <CheckCircle2 className="h-4 w-4 text-accent-brand flex-shrink-0 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div className="relative text-center py-6">
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-accent-brand" />
                </div>
                <h2 className="mt-5 text-2xl md:text-3xl font-extrabold">
                  Thanks, {submitted.name}. Your enquiry is in.
                </h2>
                <p className="mt-3 text-white/70 max-w-md mx-auto">
                  We've opened WhatsApp twice — once with your intake message, and once with
                  the required-info checklist our engineers need to come back with a clear plan.
                  Reply against each line and an engineer will respond within 24 hours.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918879608428?text=${encodeURIComponent(
                      [
                        `Hi VECTREV, this is ${submitted.name} again.`,
                        "Here is the project info you need:",
                        "",
                        ...CHECKLIST.map((q, i) => `${i + 1}. ${q}:`),
                      ].join("\n"),
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-3 rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> Re-open checklist
                  </a>
                  <button
                    onClick={() => setSubmitted(null)}
                    className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}