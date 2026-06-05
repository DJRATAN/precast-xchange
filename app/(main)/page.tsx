import Image from "next/image";
import Hero from "../components/Hero";
import CrossroadsHub from "../components/CrossroadsHub";
import WhyPrecastExchange from "../components/WhyPrecastExchange";
import LeftVideoAds from "../components/LeftVideoAds";
import RightVideoAds from "../components/RightVideoAds";
import AvenuesSection from "../components/AvenuesSection";
import HeroSection from "../components/HeroSection";
import FormsAndMoldsGrid from "../components/FormsAndMoldsGrid";
import CrossroadsFlippingHub from "../components/CrossroadsFlippingHub";
import EquipmentCatalog from "../components/EquipmentCatalog";
import RegionalPrecastersGrid from "../components/RegionalPrecastersGrid";
import RegionalReadyMixGrid from "../components/RegionalReadyMixGrid";
import PrecastEquipmentGrid from "../components/PrecastEquipmentGrid";
import PrecastCasting from "../components/PrecastCasting";
import TaglineHeros from "../components/TaglineHeros";
import TaglineHero from "../components/TaglineHero";
import { FullWidthShowcase } from "../components/FullWidthShowcase";
import TaglineShowcase from "../components/TaglineShowcase";
import TaglineSection from "../components/TaglineSection";
import MarketActionHub from "../components/MarketActionHub";
// Define the type locally here to resolve the error instantly
interface TaglineProps {
  topMicroText: string;
  videoSrc: string;
  ctaText?: string;
  // Line 1 breakdown configuration
  lineOneText: string;
  lineOneHighlightText?: string;
  lineOneDefaultColor: 'darkBlue' | 'lightBlue' | 'white';
  lineOneHighlightColor?: 'darkBlue' | 'lightBlue' | 'white';
  // Line 2 breakdown configuration
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
      // "PRECAST" is dark blue, "TOWERING THE SKIES" is light blue
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
      // White text layout with dark blue accent
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
      // Classic layout: Dark Blue base with Light Blue focus words
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
    }
  ]
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      <div className="w-full mx-auto flex justify-center items-start gap-4 px-4">

        <aside className="hidden xl:block w-[160px] sticky top-4 h-[600px] border border-slate-300 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
          <LeftVideoAds />
        </aside>

        <main className="w-full bg-white border border-slate-200 shadow-sm min-h-screen">
          {/* <MarketActionHub /> */}
          <CrossroadsHub />
          <HeroSection />
          <PrecastEquipmentGrid />
          <TaglineHeros {...customTaglines[0]} />
          <RegionalPrecastersGrid />
          <TaglineHeros {...customTaglines[1]} />
          <CrossroadsFlippingHub />
          <PrecastCasting />
          {/* <FullWidthShowcase /> */}
          <TaglineHero />
          {/* <TaglineShowcase /> */}
          <WhyPrecastExchange />
          <TaglineHeros {...customTaglines[3]} />
          <RegionalReadyMixGrid />
          <AvenuesSection />
          <FormsAndMoldsGrid />
          <EquipmentCatalog />
        </main>

        {/* RIGHT SKYSCRAPER AD */}
        <aside className="hidden xl:block w-[160px] sticky top-4 h-[600px] border border-slate-300 overflow-hidden shadow-2xl">
          <RightVideoAds />
        </aside>

      </div>
    </div>
  );
}
