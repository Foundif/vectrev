import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTAStrip } from "@/components/CTAStrip";
import controlPanel from "@/assets/control-panel.webp";
import substation from "@/assets/substation.webp";
import technician from "@/assets/technician.webp";
import testKit from "@/assets/test-kit.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";
import hvTest from "@/assets/hv-test.webp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Field Work & Commissioning | VECTREV" },
      { name: "description", content: "Real photos from VECTREV's field work: control panels, HV testing, substations, relays and on-site engineering." },
      { property: "og:title", content: "VECTREV Gallery" },
      { property: "og:description", content: "Field work, on-site engineering and commissioning, captured honestly." },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: controlPanel, label: "Control & Protection Panel", span: "md:col-span-2 md:row-span-2" },
  { src: substation, label: "EHV Substation · Commissioning", span: "" },
  { src: relay, label: "ABB REF601 Feeder Relay", span: "" },
  { src: testKit, label: "HV Test Kit · 70 kV AC / 80 kV DC", span: "md:col-span-2" },
  { src: technician, label: "Workshop · Pre-commissioning", span: "" },
  { src: cables, label: "HV Cable Terminations", span: "" },
  { src: hvTest, label: "Field Test Setup", span: "md:col-span-2" },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Real work. Real plants. <br />
            <span className="text-accent-brand">No stock photos.</span>
          </>
        }
        subtitle="A look at our engineers on site — control panels, HV testing, substations and the equipment we energise every week."
      />

      <section className="px-5 sm:px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {shots.map((s, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-card border border-border group ${s.span}`}
            >
              <img src={s.src} alt={s.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTAStrip eyebrow="Want this on your site?" title="Let's plan your next commissioning." />
    </>
  );
}