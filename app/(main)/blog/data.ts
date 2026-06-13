export interface BlogPost {
  id: string;
  slug: string; // Dynamic path locator
  category: string;
  title: string;
  author: string;
  timestamp: string;
  imageUrl: string;
  summary: string;
}

// STABLE INDUSTRIAL NEWS ARCHIVE SOURCE
export const BLOG_DATABASE: BlogPost[] = [
  {
    id: "BLG-01",
    slug: "next-gen-hydraulic-tilting-molds",
    category: "MOLD INNOVATION",
    title: "Next-Gen Hydraulic Tilting Tables Accelerate Infrastructure Runways",
    author: "BEN MEGA (JR)",
    timestamp: "JUNE 13, 2026",
    imageUrl: "/assets/mold form/catch-01 (4).JPG",
    summary: "Automated magnetic side shuttering arrays reduce mold changeover cycles by 40% across modern smart factory nodes globally."
  },
  {
    id: "BLG-02",
    slug: "us-east-coast-supply-chains",
    category: "GLOBAL LOGISTICS",
    title: "US East Coast Precast Supply Chains Expand Corridor Logistics",
    author: "GRACE VENTURE",
    timestamp: "JUNE 11, 2026",
    imageUrl: "/assets/mold form/catch-01 (3).JPG",
    summary: "New deep-water casting facilities establish zero-mile marine transit lanes for massive box culvert delivery arrays."
  },
  {
    id: "BLG-03",
    slug: "auditors-approve-carbon-neutral-castings",
    category: "COMPLIANCE TIER",
    title: "Auditors Approve Standardized Carbon-Neutral Aggregate Castings",
    author: "AUDIT TEAM DELTA",
    timestamp: "JUNE 09, 2026",
    imageUrl: "/assets/mold form/catch-01 (4).JPG",
    summary: "Financial matrix networks lock down raw industrial verification parameters to clear federal green construction mandates."
  }
];
