import Image from "next/image";
import Hero from "./components/Hero";
import CrossroadsHub from "./components/CrossroadsHub";

export default function Home() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">

      <Hero />
      <CrossroadsHub />
    </div>
  );
}
