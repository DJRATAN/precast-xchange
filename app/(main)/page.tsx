import dynamic from "next/dynamic";

// ── Above-the-fold: load immediately ─────────────────────────────────────────
import PrecastPlayground from "./PrecastPlayground";
import LeftVideoAds from "../components/LeftVideoAds";
import RightVideoAds from "../components/RightVideoAds";
import HeroSection from "../components/HeroSection";
import PrecastSuppliesGrid from "./PrecastSuppliesGrid";
import CategoryPlayground from "./CategoryPlayground";

// ── Below-the-fold: lazy-loaded only when needed ─────────────────────────────
const PrecastEquipmentGrid = dynamic(() => import("../components/PrecastEquipmentGrid"));
const PrecastMolds = dynamic(() => import("../components/PrecastMolds"));
const PrecastCement = dynamic(() => import("../components/PrecastCement"));
const PrecastEngineering = dynamic(() => import("../components/PrecastEngineering"));
const PrecastSuppliers = dynamic(() => import("../components/PrecastSuppliers"));
const PrecastFoundries = dynamic(() => import("../components/PrecastFoundries"));
const MarketActionHub = dynamic(() => import("../components/MarketActionHub"));
const TaglineHeros = dynamic(() => import("../components/TaglineHeros"));
const RegionalPrecastersGrid = dynamic(() => import("../components/RegionalPrecastersGrid"));
const OpenMindSection = dynamic(() => import("./OpenMindSection"));
const PrecastExchangeTerminal = dynamic(() => import("./PrecastExchangeTerminal"));
const PrecastIdeaHub = dynamic(() => import("./PrecastIdeaHub"));
const YourPrivateDesk = dynamic(() => import("./YourPrivateDesk"));
const CrossroadsFlippingHub = dynamic(() => import("../components/CrossroadsFlippingHub"));
const FourColumnMarquee = dynamic(() => import("./FourColumnMarquee"));
const PrecastCasting = dynamic(() => import("../components/PrecastCasting"));
const TaglineHero = dynamic(() => import("../components/TaglineHero"));
const WhyPrecastExchange = dynamic(() => import("../components/WhyPrecastExchange"));
const RegionalReadyMixGrid = dynamic(() => import("../components/RegionalReadyMixGrid"));
const AvenuesSection = dynamic(() => import("../components/AvenuesSection"));
const FormsAndMoldsGrid = dynamic(() => import("../components/FormsAndMoldsGrid"));
const EquipmentCatalog = dynamic(() => import("../components/EquipmentCatalog"));

// Define the type locally here to resolve the error instantly
interface TaglineProps {
  topMicroText: string;
  videoSrc: string;
  ctaText?: string;
  lineOneText: string;
  lineOneHighlightText?: string;
  lineOneDefaultColor: 'darkBlue' | 'lightBlue' | 'white';
  lineOneHighlightColor?: 'darkBlue' | 'lightBlue' | 'white';
  lineTwoText: string;
  lineTwoHighlightText?: string;
  lineTwoDefaultColor: 'darkBlue' | 'lightBlue' | 'white';
  lineTwoHighlightColor?: 'darkBlue' | 'lightBlue' | 'white';
}

export default function Home() {
  const customTaglines: TaglineProps[] = [
    {
      topMicroText: "STRUCTURAL SCALE INTEGRATION",
      videoSrc: "/video/77245_Transportation Landscape Earth World_By_Oliver_&_Tabea_Scholz_Artlist_HD.mp4",
      ctaText: "Explore Projects",
      lineOneText: "PRECAST ",
      lineOneDefaultColor: "white",
      lineOneHighlightText: "TOWERING",
      lineOneHighlightColor: "lightBlue",
      lineTwoText: "THE SKIES",
      lineTwoDefaultColor: "lightBlue"
    },
    {
      topMicroText: "FACILITY TRANSFORMATIONS • RE-ENGINEERED",
      videoSrc: "/video/6133943_Traffic Light Canada Toronto City_By_Adrian_Vidak_Artlist_HD.mp4",
      ctaText: "View Location Map",
      lineOneText: "STOP AND VISIT US ON KING STREET",
      lineOneDefaultColor: "darkBlue",
      lineTwoText: "FOR A TOTAL ",
      lineTwoDefaultColor: "white",
      lineTwoHighlightText: "TRANSFORMATION",
      lineTwoHighlightColor: "lightBlue"
    },
    {
      topMicroText: "GLOBAL PLATFORM INFRASTRUCTURE",
      videoSrc: "/video/6584801_Aerial Cityscape Architectural Landmark South Korea Songdo_By_Yeonmedia_Artlist_HD.mp4",
      ctaText: "Join Ecosystem Network",
      lineOneText: "CONCRETE ",
      lineOneDefaultColor: "darkBlue",
      lineOneHighlightText: "BRIDGING &",
      lineOneHighlightColor: "lightBlue",
      lineTwoText: "CONNECTING ALL ",
      lineTwoDefaultColor: "darkBlue",
      lineTwoHighlightText: "PRECASTERS",
      lineTwoHighlightColor: "lightBlue"
    },
    {
      topMicroText: "PRECAST ARCHITECTURAL SYSTEMS",
      videoSrc: "/video/6584801_Aerial Cityscape Architectural Landmark South Korea Songdo_By_Yeonmedia_Artlist_HD.mp4",
      ctaText: "Play Presentation Sequence",
      lineOneText: "THE PRECAST ARCHITECTURE ",
      lineOneDefaultColor: "darkBlue",
      lineTwoText: "",
      lineTwoDefaultColor: "darkBlue",
      lineTwoHighlightText: "ANIMATION",
      lineTwoHighlightColor: "lightBlue"
    },
    {
      topMicroText: "KNOWLEDGE & RE-EDUCATION SYSTEMS",
      videoSrc: "/video/6304898_City Building Window Cityscape_By_Videophilia_Artlist_HD.mp4",
      ctaText: "Access Terminal",
      lineOneText: "UNDERSTANDING ",
      lineOneDefaultColor: "darkBlue",
      lineOneHighlightText: "PRECAST ",
      lineOneHighlightColor: "white",
      lineTwoText: "TO THE ",
      lineTwoDefaultColor: "darkBlue",
      lineTwoHighlightText: "NEXT LEVEL",
      lineTwoHighlightColor: "white"
    }
  ]

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      <div className="w-full mx-auto flex justify-center items-start gap-4 px-4">

        <aside className="hidden xl:block w-[160px] shrink-0 sticky top-4 h-[600px] border border-slate-300 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
          <LeftVideoAds />
        </aside>

        <main className="flex-1 min-w-0 bg-white border border-slate-200 shadow-sm min-h-screen">

          <PrecastPlayground />
          <HeroSection />
          <PrecastEquipmentGrid />
          <PrecastMolds />
          <CategoryPlayground
            categoryTitle="Precast Mold"
          />
          <PrecastCement />
          <CategoryPlayground
            categoryTitle="Precast Cement"
          />
          <PrecastEngineering />
          <PrecastSuppliers />
          <PrecastFoundries />
          <MarketActionHub />
          <PrecastSuppliesGrid />
          <CategoryPlayground
            categoryTitle="Precast Supplies"
            systemIndexCode="PS-4000"
            nodes={[
              { id: '1', title: 'Concrete Forming Systems', subText: 'Universal Steel-Polycarbonate Panel Molds (Flat & Reversible)', videoUrl: '/video/form-steel-poly.mp4' },
              { id: '2', title: 'Magnetic Systems', subText: 'On-Form Magnetic Weld-On Inserts', videoUrl: '/video/magnetic-system.mp4' },
              { id: '3', title: 'Chamfers & Accessories', subText: 'Reusable Chamfer Strips & Edge Forms', videoUrl: '/video/chamfers-edge.mp4' },
              { id: '4', title: 'Release Agents', subText: 'Non-Toxic, High-Performance Form Release Agents', videoUrl: '/video/release-agents.mp4' },
              { id: '5', title: 'Curing Compounds', subText: 'Water-Based Curing Agents for Concrete Strength', videoUrl: '/video/curing-compounds.mp4' },
              { id: '6', title: 'Sealers & Protectants', subText: 'Architectural Concrete Surface Sealers', videoUrl: '/video/sealers.mp4' }
            ]}
          />

          <TaglineHeros {...customTaglines[0]} />
          <RegionalPrecastersGrid />
          <OpenMindSection />
          <PrecastExchangeTerminal />
          <PrecastIdeaHub />
          <YourPrivateDesk />
          <TaglineHeros {...customTaglines[1]} />
          <CrossroadsFlippingHub />
          <FourColumnMarquee />
          <PrecastCasting />
          <TaglineHero />
          <WhyPrecastExchange />
          <TaglineHeros {...customTaglines[3]} />
          <RegionalReadyMixGrid />
          <AvenuesSection />
          <FormsAndMoldsGrid />
          <EquipmentCatalog />
        </main>

        {/* RIGHT SKYSCRAPER AD */}
        <aside className="hidden xl:block w-[160px] shrink-0 sticky top-4 h-[600px] border border-slate-300 overflow-hidden shadow-2xl">
          <RightVideoAds />
        </aside>

      </div>
    </div>
  );
}
