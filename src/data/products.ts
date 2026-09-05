import controlPanel from "@/assets/control-panel.webp";
import blogPanels from "@/assets/blog-panels.jpg";

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
      "Designed, built and routine-tested for industrial, commercial and infrastructure projects.",
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
      "Energy metering, control and relay panels configured for clear operation and dependable plant communication.",
    image: controlPanel,
    items: [
      "Metering panels with energy meters",
      "Control & relay panels",
      "Annunciation and interlock panels",
      "Substation automation and gateway panels",
      "AMF and synchronising panels",
    ],
  },
  {
    slug: "electrical-safety-products",
    title: "Electrical Safety Products",
    blurb:
      "Personal protective equipment and insulation products for switching operations and electrical work.",
    image: "/site/safety-gloves.jpg",
    items: [
      "Electrical insulating gloves",
      "Electrical insulating matting",
      "Arc flash protection suits",
      "Discharge rods and earthing sets",
      "Panel-front safety signage and PPE kits",
    ],
  },
];