import controlPanel from "@/assets/control-panel.webp";
import blogPanels from "@/assets/blog-panels.jpg";
import testKit from "@/assets/test-kit.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";

export type ProductGroup = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  items: string[];
};

export const productGroups: ProductGroup[] = [
  {
    slug: "lv-mv-panels",
    title: "LV & MV Electrical Panels",
    blurb:
      "Designed, built and routine-tested to IS/IEC standards for industrial, commercial and infrastructure projects.",
    image: blogPanels,
    items: [
      "PCC — Power Control Centre",
      "MCC — Motor Control Centre",
      "PMCC — Power & Motor Control Centre",
      "APFC — Automatic Power Factor Correction",
      "LDB — Lighting Distribution Board",
      "PDB — Power Distribution Board",
      "Custom-built panels to client SLD",
    ],
  },
  {
    slug: "metering-and-control",
    title: "Metering & Control Panels",
    blurb:
      "Energy metering, control and relay panels with configured IEDs and communication to SCADA.",
    image: controlPanel,
    items: [
      "Metering panels with energy meters",
      "Control & relay panels (C&R)",
      "Annunciation and interlock panels",
      "Substation automation and gateway panels",
      "AMF and synchronising panels",
    ],
  },
  {
    slug: "primary-test-instruments",
    title: "Primary Testing Instruments",
    blurb: "Calibrated primary injection and diagnostic instruments deployed on every HV assignment.",
    image: testKit,
    items: [
      "CPC 100 — Omicron",
      "CP TD1 — Omicron",
      "CT Analyzer — Omicron",
      "Sweep Frequency Response Analyzer — Omicron",
      "Circuit Breaker Analyzer EGIL 200 — Megger",
      "Winding resistance measurement kit",
      "High potential (HiPot) testing set",
    ],
  },
  {
    slug: "secondary-test-instruments",
    title: "Secondary Testing Instruments",
    blurb: "Relay and scheme proving instruments for protection commissioning and AMC.",
    image: relay,
    items: ["CPC 356 — Omicron", "Sverker 750 — Megger", "Secondary injection kit — Sudharsan"],
  },
  {
    slug: "basic-test-instruments",
    title: "Basic Testing Instruments",
    blurb: "Field measurement and diagnostic instruments carried by every commissioning team.",
    image: cables,
    items: [
      "Digital earth resistance tester",
      "Digital multimeter",
      "Digital current clamp meter",
      "Digital leakage current clamp meter",
      "Insulation tester 5 kV and 1 kV",
      "Oil bath (BDV) kit",
      "Multifunction process calibrator",
    ],
  },
];
