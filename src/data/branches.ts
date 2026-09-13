export type Branch = {
  name: string;
  type: string;
  address: string;
  phones: string[];
  email: string;
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    name: "Thoothukudi — Operating Office",
    type: "Head operations & testing base",
    address: "61E/2D, TMC Colony, Polepettai, Thoothukudi – 628 002, Tamil Nadu, India",
    phones: ["+91 63796 08428", "+91 96004 49144"],
    email: "info@vectrev.in",
    mapQuery: "61E/2D, Polepettai, Thoothukudi 628002, Tamil Nadu",
  },
  {
    name: "Thoothukudi — Registered Office",
    type: "Corporate & statutory",
    address:
      "111L/2, State Bank Colony, Polenaickenpettai, Thoothukudi – 628 002, Tamil Nadu, India",
    phones: ["+91 96004 49144"],
    email: "revengineers.tuty@gmail.com",
    mapQuery: "State Bank Colony, Polenaickenpettai, Thoothukudi 628002",
  },
  {
    name: "Chennai — Project Coordination",
    type: "North Tamil Nadu project desk",
    address: "Project coordination desk serving Chennai, Kancheepuram and Sriperumbudur corridors",
    phones: ["+91 63796 08428"],
    email: "info@vectrev.in",
    mapQuery: "Chennai, Tamil Nadu",
  },
  {
    name: "Pan-India Deployment",
    type: "Mobile commissioning teams",
    address:
      "Teams deployed to Karnataka, Maharashtra, Chhattisgarh, Gujarat and Andhra Pradesh project sites",
    phones: ["+91 96004 49144"],
    email: "info@vectrev.in",
    mapQuery: "India",
  },
  {
    name: "Kudankulam — Site Office",
    type: "Project site office",
    address:
      "New Complex, Kudankulam Main Road, Opposite Kudankulam Main Gate, Kudankulam – 627106, Tamil Nadu, India",
    phones: [],
    email: "info@vectrev.in",
    mapQuery: "Kudankulam Main Road, Kudankulam 627106, Tamil Nadu",
  },
  {
    name: "Dubai — VECTREV Contracting LLC",
    type: "Middle East operations",
    address: "201-452, King Shamsah Mohammed Ibrahim Al Suwaidi, Al Murar, Deira, Dubai, UAE",
    phones: ["+971-50-928-2314"],
    email: "info@vectrev.in",
    mapQuery: "Al Murar, Deira, Dubai, UAE",
  },
  {
    name: "Overseas — Middle East",
    type: "International T&C assignments",
    address: "International T&C assignments across the Middle East region",
    phones: ["+91 96004 49144"],
    email: "info@vectrev.in",
    mapQuery: "Dubai, UAE",
  },
];
