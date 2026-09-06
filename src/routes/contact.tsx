```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { captureLead } from "@/lib/leadCapture";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact VECTREV Engineering Solutions — Thoothukudi" },
      {
        name: "description",
        content:
          "Talk to a VECTREV engineer. Share your project scope and get a clear plan and a prompt quote.",
      },
      {
        property: "og:title",
        content: "Contact VECTREV Engineering Solutions",
      },
      {
        property: "og:description",
        content: "An engineer — not a salesperson — responds promptly.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState<null | {
    name: string;
    phone: string;
  }>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);

    const name = String(fd.get("name") || "")
      .trim()
      .slice(0, 100);

    const phone = String(fd.get("phone") || "")
      .trim()
      .slice(0, 20);

    const requirement = String(fd.get("requirement") || "")
      .trim()
      .slice(0, 1000);

    if (!name || !phone || !requirement) return;

    // Save lead to CRM without blocking the user experience
    void captureLead({
      name,
      phone,
      requirement,
      source: "contact_form",
      source_detail: "/contact",
    });

    // WhatsApp enquiry message
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
      `https://wa.me/916379608428?text=${encodeURIComponent(intake)}`,
      "_blank",
      "noopener"
    );

    setSubmitted({ name, phone });
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's discuss your{" "}
            <span className="text-accent-brand">project.</span>
          </>
        }
        subtitle="Share a few details about your site or scope. An engineer — not a salesperson — will respond promptly."
      />

      <section className="px-5 sm:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-4">

            {/* Phone */}
            <a
              href="tel:+916379608428"
              className="block rounded-2xl bg-card border border-border p-6 shadow-card-premium hover:-translate-y-0.5 transition group"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent-brand" />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Phone
                  </div>

                  <div className="mt-1 text-lg font-bold text-foreground leading-tight">
                    +91 63796 08428
                  </div>

                  <div className="text-sm text-muted-foreground">
                    +91 96004 49144
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:rotate-45 transition" />
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@vectrev.in"
              className="block rounded-2xl bg-card border border-border p-6 shadow-card-premium hover:-translate-y-0.5 transition group"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent-brand" />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Email
                  </div>

                  <div className="mt-1 text-lg font-bold text-foreground leading-tight">
                    info@vectrev.in
                  </div>

                  <div className="text-sm text-muted-foreground break-all">
                    revengineers.tuty@gmail.com
                  </div>
                </div>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:rotate-45 transition" />
              </div>
            </a>

            {/* Office Location */}
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card-premium">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent-brand" />
                </div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    Operating Office
                  </div>

                  <div className="mt-1 text-foreground font-semibold leading-snug">
                    61E/2D, TMC Colony, Polepettai
                    <br />
                    (Nanthagopalapuram)
                    <br />
                    Thoothukudi — 628002
                    <br />
                    Tamil Nadu, India
                  </div>

                  <div className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Hours:
                    </span>{" "}
                    Mon – Sat · 9:00 AM – 6:00 PM · Sun closed
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-5 rounded-xl overflow-hidden border border-border">
                <iframe
                  title="VECTREV Engineering Solutions — Thoothukudi office location"
                  src="https://www.google.com/maps?q=VECTREV+Engineering+Solutions+TMC+Colony+Polepettai+Thoothukudi+628002&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=VECTREV+Engineering+Solutions+TMC+Colony+Polepettai+Thoothukudi+628002"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-brand hover:underline"
              >
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Registered Office */}
              <div className="mt-5 pt-4 border-t border-border">
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Registered Office
                </div>

                <div className="mt-1.5 text-sm text-foreground/80 leading-snug">
                  111L/2, State Bank Colony, Polenaickenpettai,
                  <br />
                  Tuticorin, Thoothukkudi — 628002, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 rounded-[2rem] bg-dark text-dark-foreground p-8 md:p-10 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

            {!submitted ? (
              <>
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Lead Form
                  </div>

                  <h2 className="mt-3 text-2xl md:text-3xl font-extrabold">
                    Get a prompt quote
                  </h2>

                  <p className="mt-2 text-white/60 text-sm">
                    Share your project requirements with us and our engineering
                    team will get back to you promptly.
                  </p>
                </div>

                {/* Name and Phone */}
                <div className="relative grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-[11px] uppercase tracking-widest text-white/60">
                      Name
                    </span>

                    <input
                      required
                      name="name"
                      maxLength={100}
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition"
                      placeholder="Your full name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-[11px] uppercase tracking-widest text-white/60">
                      Phone
                    </span>

                    <input
                      required
                      type="tel"
                      name="phone"
                      maxLength={20}
                      pattern="[0-9+\-\s]{7,20}"
                      className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition"
                      placeholder="+91 ..."
                    />
                  </label>
                </div>

                {/* Requirement */}
                <label className="relative block">
                  <span className="text-[11px] uppercase tracking-widest text-white/60">
                    Requirement
                  </span>

                  <textarea
                    required
                    name="requirement"
                    maxLength={1000}
                    rows={6}
                    className="mt-2 w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent transition resize-none"
                    placeholder="Briefly describe your project or requirements."
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-full shadow-accent hover:opacity-95 transition group"
                >
                  Send Enquiry
                  <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
                </button>
              </>
            ) : (
              <div className="relative text-center py-10">
                <div className="mx-auto h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-accent-brand" />
                </div>

                <h2 className="mt-5 text-2xl md:text-3xl font-extrabold">
                  Thanks, {submitted.name}. Your enquiry is in.
                </h2>

                <p className="mt-3 text-white/70 max-w-md mx-auto">
                  Your enquiry has been shared with our team. An engineer will
                  review your requirements and get back to you promptly.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(null)}
                  className="mt-7 inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
                >
                  Send another enquiry
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
```
