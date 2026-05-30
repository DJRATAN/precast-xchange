import Image from "next/image";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">

      <Hero />
      <HeroSection />
    </div>
  );
}
