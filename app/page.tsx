import Image from "next/image";
import MarketplaceLayout from "./components/MarketplaceLayout";
 
export default function Home() {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">
      <MarketplaceLayout />
    </div>
  );
}
