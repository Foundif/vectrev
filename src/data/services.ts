import testKit from "@/assets/test-kit.webp";
import relay from "@/assets/relay.webp";
import cables from "@/assets/cables.webp";
import hvTest from "@/assets/hv-test.webp";
import substation from "@/assets/substation.webp";
import controlPanel from "@/assets/control-panel.webp";
import blogSas from "@/assets/blog-sas.jpg";
import blogStudies from "@/assets/blog-power-studies.jpg";

export type Outcome = {
  text: string;
  bold?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  category:
    | "Testing & Commissioning"
    | "Engineering & Studies"
    | "Products & Support";
  image: string;
  intro: string;
  scope: string[];
  outcomes: Outcome[];
  faqs?: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "hv-lv-testing-commissioning",
    title: "Testing & Commissioning of HV & LV Equipment",
    short:
      "Pre-commissioning and commissioning of switchgear, switchyard, GIS and DC systems.",
    category: "Testing & Commissioning",
    image: testKit,
    intro:
      "We specialise in pre-commissioning testing and commissioning of electrical systems — from LV distribution boards right up to high-voltage switchyards. Every test is performed using calibrated instruments.",
    scope: [
      "Testing and commissioning of switchgear equipment (LV / MV / HV)",
      "Testing and commissioning of AIS switchyard primary components",
      "Testing and commissioning of GIS equipment",
      "Testing and commissioning of DC systems, battery banks and UPS",
      "Energisation support, load trials and punch-list closure",
    ],
    outcomes: [
      {
        text: "Confident Energization. Verified Performance. Complete Assurance.",
        bold: true,
      },
      {
        text: "Ready for Energization - Tested and prepared for a smooth start up.",
      },
      {
        text: "Complete Test Records - Structured documentation for easy review and approval.",
      },
      {
        text: "Proven Performance - Systems verified for safe and reliable operation.",
      },
    ],
  },

  {
    slug: "protection-relays-and-cr-panels",
    title: "Protection Relays, Control & Relay Panels",
    short:
      "Relay configuration, secondary injection, scheme checking and function testing.",
    category: "Testing & Commissioning",
    image: relay,
    intro:
      "We bring the precision to protection commissioning - verifying every scheme, validating every function, and providing every trip and interlock for reliable operation.",
    scope: [
      "BOM verification of the panels",
      "Scheme checking against approved drawings",
      "Configuration and testing of protection devices",
      "Secondary injection and stability checks",
      "Function check of the complete panel",
    ],
    outcomes: [
      {
        text: "Verified protection settings and coordination",
      },
      {
        text: "Every trip path proven end to end",
      },
      {
        text: "Signed function-test records per bay",
      },
    ],
  },

  {
    slug: "retrofitting-and-refurbishment",
    title: "Retrofitting & Refurbishment",
    short:
      "Upgrade legacy protection and control schemes with minimum outage time.",
    category: "Testing & Commissioning",
    image: cables,
    intro:
      "Ageing electromechanical protection can be modernised without replacing the whole panel. We engineer the upgraded scheme, swap the device and re-commission the bay inside a planned shutdown window.",
    scope: [
      "Upgradation of scheme for the proposed new device",
      "Dismantling of existing device and installation of new device",
      "Upgraded scheme checking",
      "New device configuration",
      "New device testing and commissioning",
    ],
    outcomes: [
      {
        text: "Modern numerical protection on existing panels",
      },
      {
        text: "Outage windows respected",
      },
      {
        text: "As-built drawings updated and handed over",
      },
    ],
  },

  {
    slug: "substation-automation-systems",
    title: "Substation Automation System (SAS) Commissioning",
    short:
      "Database, IED integration, HMI, gateway and load despatch communication.",
    category: "Testing & Commissioning",
    image: blogSas,
    intro:
      "We commission substation automation systems end to end — from database creation and Ethernet switch configuration to establishing communication with the load control centre and third-party systems.",
    scope: [
      "Database creation",
      "Ethernet switch configuration",
      "Testing of BCU / BCPU and PMU",
      "Integration of IEDs, metering devices and GPS",
      "HMI and gateway configuration",
      "Communication establishing to load control centres",
      "Integration to third-party systems",
      "FTP configuration",
      "Point-to-point testing",
    ],
    outcomes: [
      {
        text: "Every point verified point-to-point from field to HMI",
      },
      {
        text: "Time-synchronised, reliable SCADA data",
      },
      {
        text: "Clean handover to O&M teams",
      },
    ],
  },

  {
    slug: "power-system-studies",
    title: "Design & Power System Studies",
    short:
      "Load flow, short circuit, harmonics, coordination and arc flash using ETAP.",
    category: "Engineering & Studies",
    image: blogStudies,
    intro:
      "Design decisions become expensive once steel is in the ground. Our studies team models the network in ETAP and gives you defendable numbers before procurement and after commissioning.",
    scope: [
      "Load flow, short circuit and power analysis",
      "Harmonic analysis and report generation using power analyzer",
      "Motor starting and generator stability studies",
      "Protection coordination and arc flash analysis",
      "Ground grid and switching transient studies",
      "Design software tools — ETAP Power Station",
    ],
    outcomes: [
      {
        text: "Correctly rated equipment and cable sizes",
      },
      {
        text: "Coordinated, selective protection settings",
      },
      {
        text: "Arc flash labels and safe working boundaries",
      },
    ],
  },

  {
    slug: "engineering-documentation",
    title: "Engineering Document Preparation",
    short:
      "Sizing calculations, cable schedules, layouts and SLDs.",
    category: "Engineering & Studies",
    image: hvTest,
    intro:
      "Documentation is a deliverable, not an afterthought. We prepare the calculations and drawings that consultants, OEMs and statutory authorities need to approve your installation.",
    scope: [
      "Design and sizing calculation of CT and PT",
      "Power and auxiliary transformer sizing calculations",
      "Power and control cable sizing calculations",
      "Power and control cable schedule preparations",
      "Layout drawings and SLD preparations",
    ],
    outcomes: [
      {
        text: "Approval-ready calculation sets",
      },
      {
        text: "Consistent, drawing-controlled documentation",
      },
      {
        text: "Faster consultant and inspectorate sign-off",
      },
    ],
  },

  {
    slug: "electrical-panel-solutions",
    title: "Electrical Panel Solutions",
    short:
      "Design and supply of LV & MV panels — PCC, MCC, PMCC, APFC, LDB, PDB.",
    category: "Products & Support",
    image: controlPanel,
    intro:
      "We provide end-to-end design and supply of electrical panels tailored for industrial, commercial and infrastructure projects, built and tested to IS/IEC standards.",
    scope: [
      "Design and supply of LV and MV panels",
      "Supply of PCC, MCC, PMCC, APFC, LDB, PDB and custom-built panels",
      "Metering panels equipped with energy meters",
      "Panel upgrades, retrofitting and diagnostics",
      "Quality checks and compliance as per IS/IEC standards",
    ],
    outcomes: [
      {
        text: "Panels that pass routine tests first time",
      },
      {
        text: "Documented compliance to IS/IEC",
      },
      {
        text: "Single point of responsibility from design to commissioning",
      },
    ],
  },

  {
    slug: "annual-maintenance-and-testing",
    title: "Annual Maintenance & Testing",
    short:
      "Planned preventive testing contracts for substations and plants.",
    category: "Products & Support",
    image: substation,
    intro:
      "Scheduled testing keeps protection dependable and insurers satisfied. We run annual maintenance testing contracts covering relays, transformers, breakers, earthing and DC systems.",
    scope: [
      "Annual protection relay maintenance testing",
      "Transformer and breaker condition testing",
      "Earth resistance and continuity testing",
      "Battery bank and DC system health checks",
      "Thermography surveys and defect reporting",
    ],
    outcomes: [
      {
        text: "Fewer unplanned trips and outages",
      },
      {
        text: "Year-on-year trend data on asset condition",
      },
      {
        text: "Compliance evidence for audits and insurance",
      },
    ],
  },

  {
    slug: "consultancy-and-site-supervision",
    title: "Consultancy & Site Supervision",
    short:
      "Independent technical review and daily on-ground engineering supervision.",
    category: "Products & Support",
    image: "/site/vectrev-technician-ppe.jpg",
    intro:
      "Where projects need technical depth on the ground, our engineers supervise installation and commissioning activities, coordinate OEMs and keep the schedule honest.",
    scope: [
      "Independent design and vendor review",
      "Site supervision of electrical and instrumentation works",
      "OEM and contractor coordination",
      "Quality plans, ITPs and milestone tracking",
      "Statutory liaison and compliance support",
    ],
    outcomes: [
      {
        text: "Progress visibility with daily reporting",
      },
      {
        text: "Fewer interface gaps between contractors",
      },
      {
        text: "Statutory approvals achieved without rework",
      },
    ],
  },
];

export const serviceCategories = [
  "Testing & Commissioning",
  "Engineering & Studies",
  "Products & Support",
] as const;

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
