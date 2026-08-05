import blogHv from "@/assets/blog-hv-testing.jpg";
import blogRelay from "@/assets/blog-relay-coordination.jpg";
import blogSas from "@/assets/blog-sas.jpg";
import blogPanels from "@/assets/blog-panels.jpg";
import blogStudies from "@/assets/blog-power-studies.jpg";
import blogEarthing from "@/assets/blog-earthing.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  tag: string;
  image: string;
  body: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "pre-commissioning-checklist-hv-substation",
    title: "The pre-commissioning checklist that prevents energisation failures",
    excerpt:
      "Most charging-day failures are traceable to five checks skipped weeks earlier. Here is the sequence our teams follow before a 33 kV or 132 kV bay is energised.",
    date: "2026-07-18",
    readMins: 6,
    tag: "Testing & Commissioning",
    image: blogHv,
    body: [
      {
        heading: "Why energisation day goes wrong",
        paragraphs: [
          "When a bay trips at first charge, the root cause is rarely the equipment. It is almost always a check that was deferred — a CT polarity never proven, an earth switch interlock never function-tested, a relay setting file loaded but never verified against the coordination study.",
          "A disciplined pre-commissioning sequence removes that risk. Every test is recorded, every deviation raised as a punch point, and nothing is energised on verbal confirmation.",
        ],
      },
      {
        heading: "The five checks that matter most",
        paragraphs: [],
        bullets: [
          "Insulation resistance and HV withstand on every primary component, recorded with ambient temperature and humidity",
          "CT ratio, polarity, magnetisation curve and burden verification with a CT analyser",
          "Circuit breaker timing, contact resistance and operating coil characteristics",
          "Protection settings loaded from the approved coordination study, then proven by secondary injection",
          "Point-to-point verification from field contact to SCADA HMI, including alarms and interlocks",
        ],
      },
      {
        heading: "Documentation is part of the test",
        paragraphs: [
          "A test that is not recorded did not happen — at least not as far as the consultant, the inspectorate or your insurer is concerned. Our reports carry instrument serial numbers, calibration validity, ambient conditions and the engineer's signature against every result.",
        ],
      },
    ],
  },
  {
    slug: "protection-coordination-common-mistakes",
    title: "Five protection coordination mistakes we keep finding on Indian plants",
    excerpt:
      "Selectivity failures shut down whole plants for a single downstream fault. These are the recurring coordination errors we correct during AMC visits.",
    date: "2026-06-30",
    readMins: 7,
    tag: "Protection",
    image: blogRelay,
    body: [
      {
        heading: "Selectivity is a design decision, not a default",
        paragraphs: [
          "Numerical relays ship with default curves. Plants that never revisit those defaults discover the problem the hard way: a motor feeder fault trips the incomer and the whole line stops.",
        ],
      },
      {
        heading: "What we find repeatedly",
        paragraphs: [],
        bullets: [
          "Upstream and downstream relays on identical curves with no time grading margin",
          "Earth fault settings copied from the phase fault setting sheet",
          "Settings changed at site during troubleshooting and never fed back to the study",
          "CT saturation ignored on high fault-level feeders",
          "Arc flash boundaries never recalculated after a transformer upgrade",
        ],
      },
      {
        heading: "The fix",
        paragraphs: [
          "Re-model the network in ETAP with the actual installed ratings, regenerate the coordination curves, apply the settings, and prove them by injection. Then keep a controlled settings register so site changes cannot drift silently.",
        ],
      },
    ],
  },
  {
    slug: "substation-automation-commissioning-guide",
    title: "Commissioning a substation automation system without surprises",
    excerpt:
      "SAS projects fail at the interfaces. A structured sequence from database build to load despatch communication keeps the schedule intact.",
    date: "2026-06-12",
    readMins: 8,
    tag: "Automation",
    image: blogSas,
    body: [
      {
        heading: "The interface problem",
        paragraphs: [
          "A substation automation system touches every discipline — protection, metering, telecom, civil and the utility's load despatch centre. Delay usually comes from an interface nobody owned, not from the software itself.",
        ],
      },
      {
        heading: "A sequence that works",
        paragraphs: [],
        bullets: [
          "Freeze the signal list early and build the database against it",
          "Configure Ethernet switches and VLANs before IEDs arrive on site",
          "Test BCU/BCPU and PMU on the bench, not in the bay",
          "Integrate IEDs, metering devices and GPS time sync, then verify time stamps",
          "Configure HMI and gateway mapping, then prove every point end to end",
          "Establish load control centre communication before the energisation window, not during it",
        ],
      },
      {
        heading: "Point-to-point testing is non-negotiable",
        paragraphs: [
          "Every digital and analogue point is driven from the field and confirmed at the HMI and at the remote master. It is slow work. It is also the only way to hand over a system the operator can trust at 2 a.m.",
        ],
      },
    ],
  },
  {
    slug: "load-flow-short-circuit-study-basics",
    title: "When does your plant actually need a load flow and short circuit study?",
    excerpt:
      "Adding a transformer, a captive solar plant or a large drive changes your fault levels. Here is when a study pays for itself.",
    date: "2026-05-27",
    readMins: 5,
    tag: "Power System Studies",
    image: blogStudies,
    body: [
      {
        heading: "Triggers for a fresh study",
        paragraphs: [],
        bullets: [
          "Any change in transformer rating or utility fault level",
          "Adding captive generation — solar, wind or DG",
          "Installing large motors or variable frequency drives",
          "Persistent harmonic distortion or power factor penalties",
          "Statutory or insurance requirement for arc flash labelling",
        ],
      },
      {
        heading: "What the study gives you",
        paragraphs: [
          "Correct equipment ratings, defendable cable sizes, coordinated protection settings, harmonic mitigation sizing and arc flash boundaries. Priced against one avoided switchgear failure, the study is inexpensive.",
        ],
      },
    ],
  },
  {
    slug: "choosing-lv-panels-pcc-mcc-apfc",
    title: "PCC, MCC, PMCC or APFC — choosing the right LV panel",
    excerpt:
      "Panel selection drives cost, footprint and maintainability for the next twenty years. A plain-language guide for plant teams.",
    date: "2026-05-09",
    readMins: 6,
    tag: "Products",
    image: blogPanels,
    body: [
      {
        heading: "Match the panel to the load profile",
        paragraphs: [],
        bullets: [
          "PCC — bulk power distribution from the transformer to major feeders",
          "MCC — grouped motor starters with protection and control per drive",
          "PMCC — combined power and motor control where space is limited",
          "APFC — automatic capacitor switching to hold power factor and avoid penalties",
          "LDB / PDB — final distribution for lighting and small power",
        ],
      },
      {
        heading: "What separates a good panel from a cheap one",
        paragraphs: [
          "Busbar sizing with real temperature rise margin, correct IP rating for the environment, cable entry planned for the actual site route, and routine tests done and documented per IS/IEC. The savings on a cheap panel disappear at the first hotspot.",
        ],
      },
    ],
  },
  {
    slug: "earthing-and-safety-compliance-audit",
    title: "Earthing, thermography and the audit trail inspectors expect",
    excerpt:
      "Statutory compliance is a documentation problem as much as an engineering one. What a defensible safety file looks like.",
    date: "2026-04-21",
    readMins: 6,
    tag: "Safety & Compliance",
    image: blogEarthing,
    body: [
      {
        heading: "Measure, do not assume",
        paragraphs: [
          "Earth resistance changes with soil moisture, corrosion and site modification. An annual measured value with the test method and instrument recorded is worth more than a design figure from a drawing issued five years ago.",
        ],
      },
      {
        heading: "Build the file before the inspection",
        paragraphs: [],
        bullets: [
          "Earth resistance and continuity records per electrode and per equipment body",
          "Thermography survey with images, load conditions and corrective actions closed out",
          "Protection settings register with revision history",
          "Calibration certificates for every instrument used",
          "Statutory drawings and approvals in one indexed pack",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
