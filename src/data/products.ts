import controlPanel from "@/assets/control-panel.webp";
import blogPanels from "@/assets/blog-panels.jpg";
import lcrCalibrator from "@/assets/product-catalog/lcr-calibrator.jpg";
import primaryTesting from "@/assets/product-catalog/primary-testing.jpg";
import digitalMultimeter from "@/assets/product-catalog/digital-multimeter.jpg.asset.json";
import professionalMultimeter from "@/assets/product-catalog/professional-multimeter.jpg.asset.json";
import digitalMicroOhmMeter from "@/assets/product-catalog/digital-micro-ohm-meter.jpg.asset.json";
import powerClampmeter from "@/assets/product-catalog/power-clampmeter.gif.asset.json";
import arcFlashSuit from "@/assets/product-catalog/arc-flash-suit.jpg.asset.json";
import insulatingMat from "@/assets/product-catalog/insulating-mat.jpg.asset.json";
import insulatingGloves from "@/assets/product-catalog/insulating-gloves.jpg.asset.json";

export type ProductGroup = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  items: string[];
};

export type CatalogProduct = {
  slug: string;
  title: string;
  category: string;
  image: string;
};

export const productGroups: ProductGroup[] = [
  {
    slug: "kusam-meco-test-measuring",
    title: "KUSAM-MECO Test & Measuring Instruments",
    blurb: "Professional test equipment supplied for dependable electrical measurement and commissioning work.",
    image: digitalMultimeter.url,
    items: ["Digital multimeters", "Insulation resistance testers", "Micro ohm meters", "Clampmeters", "Thermal imaging cameras"],
  },
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
    slug: "primary-testing-instruments",
    title: "Primary Testing Instruments",
    blurb: "Equipment for high-current injection, transformer checks and primary-side verification.",
    image: primaryTesting,
    items: ["Primary injection test sets", "CT-PT analyser systems", "High voltage measuring instruments", "Cable fault pre-locators"],
  },
  {
    slug: "secondary-testing-instruments",
    title: "Secondary Testing Instruments",
    blurb: "Portable instruments for protection, relay, control and secondary circuit testing.",
    image: lcrCalibrator,
    items: ["Calibrators", "Power measurement and control instruments", "Power transducers", "Relay and control test accessories"],
  },
  {
    slug: "basic-testing-instruments",
    title: "Basic Testing Instruments",
    blurb: "Practical everyday measurement tools for electrical maintenance and site teams.",
    image: professionalMultimeter.url,
    items: ["Basic digital multimeters", "LCR meters", "Infrared thermometers", "Power clampmeters"],
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

export const catalogProducts: CatalogProduct[] = [
  { slug: "professional-grade-digital-multimeters", title: "Professional Grade Digital Multimeters", category: "KUSAM-MECO Test & Measuring Instruments", image: professionalMultimeter.url },
  { slug: "basic-digital-multimeters", title: "Basic Digital Multimeters", category: "KUSAM-MECO Test & Measuring Instruments", image: digitalMultimeter.url },
  { slug: "lcr-meters", title: "LCR Meters", category: "Basic Testing Instruments", image: lcrCalibrator },
  { slug: "digital-insulation-resistance-testers", title: "Digital Insulation Resistance Testers", category: "KUSAM-MECO Test & Measuring Instruments", image: digitalMultimeter.url },
  { slug: "high-voltage-measuring-instruments", title: "High Voltage Measuring Instruments", category: "Primary Testing Instruments", image: primaryTesting },
  { slug: "discharge-rod", title: "Discharge Rod", category: "Electrical Safety Products", image: arcFlashSuit.url },
  { slug: "digital-micro-ohm-meter", title: "Digital Micro Ohm Meter", category: "KUSAM-MECO Test & Measuring Instruments", image: digitalMicroOhmMeter.url },
  { slug: "ct-pt-analyser", title: "CT-PT Analyser", category: "Primary Testing Instruments", image: primaryTesting },
  { slug: "infrared-thermometers", title: "Infrared Thermometers", category: "Basic Testing Instruments", image: lcrCalibrator },
  { slug: "cable-fault-pre-locator", title: "Cable Fault Pre-Locator", category: "Primary Testing Instruments", image: primaryTesting },
  { slug: "calibrators", title: "Calibrators", category: "Secondary Testing Instruments", image: lcrCalibrator },
  { slug: "portable-thermal-imaging-camera", title: "Portable Thermal Imaging Camera", category: "KUSAM-MECO Test & Measuring Instruments", image: lcrCalibrator },
  { slug: "power-clampmeters", title: "Power Clampmeters", category: "Basic Testing Instruments", image: powerClampmeter.url },
  { slug: "power-measurement-control", title: "Power Measurement & Control Instruments", category: "Secondary Testing Instruments", image: lcrCalibrator },
  { slug: "power-transducers", title: "Power Transducers", category: "Secondary Testing Instruments", image: lcrCalibrator },
];