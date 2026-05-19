import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
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

function Contact() {
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
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const text = `Hi VECTREV,%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0ARequirement: ${fd.get("requirement")}`;
              window.open(`https://wa.me/918879608428?text=${text}`, "_blank");
            }}
            className="lg:col-span-7 rounded-[2rem] bg-dark text-dark-foreground p-8 md:p-10 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.22em] text-white/60">Lead form</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">Get a quote in 24 hours</h2>
            </div>
            <div className="relative grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-white/60">Name</span>
                <input required name="name" className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition" placeholder="Your full name" />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-white/60">Phone</span>
                <input required type="tel" name="phone" className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition" placeholder="+91 ..." />
              </label>
            </div>
            <label className="relative block">
              <span className="text-[11px] uppercase tracking-widest text-white/60">Requirement</span>
              <textarea required name="requirement" rows={5} className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition resize-none" placeholder="Briefly describe the project, site location, and timelines." />
            </label>
            <button type="submit" className="relative w-full inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-full shadow-accent hover:opacity-95 transition group">
              Send Enquiry
              <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
            </button>
            <p className="relative text-xs text-white/50 text-center">
              Submitting opens WhatsApp with your details pre-filled.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}