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
import TaglineHero from "../components/TaglineHero";
import { FullWidthShowcase } from "../components/FullWidthShowcase";
import TaglineShowcase from "../components/TaglineShowcase";

export default function Home() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      <div className="w-full mx-auto flex justify-center items-start gap-4 px-4">

        <aside className="hidden xl:block w-[160px] sticky top-4 h-[600px] border border-slate-300 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
          <LeftVideoAds />
        </aside>

        <main className="w-full bg-white border border-slate-200 shadow-sm min-h-screen">
          <Hero />
          <CrossroadsHub />
          <HeroSection />
          <PrecastEquipmentGrid />
          <RegionalPrecastersGrid />
          <CrossroadsFlippingHub />
          <PrecastCasting />
          {/* <FullWidthShowcase /> */}
          {/* <TaglineShowcase /> */}
          <WhyPrecastExchange />
          <TaglineHero />
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
