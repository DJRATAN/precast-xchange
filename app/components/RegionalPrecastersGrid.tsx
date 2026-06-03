'use client'

import React, { useState } from 'react'
import { MapPin, Building2, ArrowDown, ShieldCheck } from 'lucide-react'

interface PrecasterNode {
  rank: string;
  name: string;
  region: 'USA' | 'CANADA' | 'CARIBBEAN' | 'EUROPE';
  specialty: string;
  status: string;
}

export default function RegionalPrecastersGrid() {
  // Master array containing the premier structural precasters across regions
  const initialPrecasters: PrecasterNode[] = [
    { rank: "01", name: "Wells Concrete Systems", region: "USA", specialty: "Structural & Architectural Precast", status: "VERIFIED SOURCE" },
    { rank: "02", name: "High Concrete Group", region: "USA", specialty: "Mega Parking Structures & Decking", status: "VERIFIED SOURCE" },
    { rank: "03", name: "Gate Precast Company", region: "USA", specialty: "Hollowcore & Premium Wetcast Forms", status: "VERIFIED SOURCE" },
    { rank: "04", name: "Enterprise Precast Concrete", region: "USA", specialty: "Architectural Wall Panels", status: "VERIFIED SOURCE" },
    { rank: "05", name: "Strescon Limited", region: "CANADA", specialty: "Heavy Civil Infrastructure Elements", status: "VERIFIED SOURCE" },
    { rank: "06", name: "LafargeHolcim Canada", region: "CANADA", specialty: "Bridge Girders & Segmental Boxes", status: "VERIFIED SOURCE" },
    { rank: "07", name: "Armtec Infrastructure", region: "CANADA", specialty: "Drainage Systems & Box Culverts", status: "VERIFIED SOURCE" },
    { rank: "08", name: "Pre-Con Products", region: "CANADA", specialty: "Custom Engineered Earth Retaining", status: "VERIFIED SOURCE" },
    { rank: "09", name: "Caribbean Precast Products", region: "CARIBBEAN", specialty: "Hurricane-Resistant Piling Arrays", status: "VERIFIED SOURCE" },
    { rank: "10", name: "Tank-Weld Concrete", region: "CARIBBEAN", specialty: "Prestressed Post-Tensioned Beams", status: "VERIFIED SOURCE" },
    { rank: "11", name: "Consolis Group", region: "EUROPE", specialty: "Industrialized Modular Building Blocks", status: "VERIFIED SOURCE" },
    { rank: "12", name: "Burdens Precast", region: "EUROPE", specialty: "Rail Infrastructure & Trench Systems", status: "VERIFIED SOURCE" },
  ]

  // Mock extended database inventory to simulate the "Load More" action trigger
  const secondaryPrecasters: PrecasterNode[] = [
    { rank: "13", name: "Metromont Corporation", region: "USA", specialty: "Total Precast Building Structures", status: "VERIFIED SOURCE" },
    { rank: "14", name: "Stubbe's Precast", region: "CANADA", specialty: "Agricultural & Structural Precast", status: "VERIFIED SOURCE" },
    { rank: "15", name: "Precast Caribbean Ltd", region: "CARIBBEAN", specialty: "Civil Drainage & Retaining Walls", status: "VERIFIED SOURCE" },
    { rank: "16", name: "FP McCann", region: "EUROPE", specialty: "Tunnels, Shafts & Precast Walling", status: "VERIFIED SOURCE" }
  ]

  const [visibleItems, setVisibleItems] = useState<PrecasterNode[]>(initialPrecasters)
  const [hasMore, setHasMore] = useState(true)

  const handleLoadMore = () => {
    setVisibleItems([...visibleItems, ...secondaryPrecasters])
    setHasMore(false) // Safe state simulation for mock pipeline ceiling limits
  }

  return (
    <section className="w-full py-16 px-8 md:px-10 bg-white text-left rounded-none">
      
      {/* Structural Registry Header */}
      <div className="w-full border-b-2 border-[#004aad] pb-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">
            Global Operations Directory
          </span>
          <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase mt-1 rounded-none">
            TOP TWELVE <span className="text-[#1B79EE]">PRECASTERS BY REGION</span>
          </h2>
        </div>
        <div className="text-[10px] font-mono font-bold text-white bg-[#004aad] px-4 py-2 rounded-none tracking-widest">
          INDEX STATE: ACTIVE LISTINGS
        </div>
      </div>

      {/* Grid Network Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-none">
        {visibleItems.map((precaster) => (
          <div 
            key={precaster.rank}
            className="w-full border-2 border-[#004aad] bg-white p-5 flex flex-col justify-between transition-colors duration-300 hover:border-[#1B79EE] group rounded-none relative"
          >
            {/* Top Row Segment */}
            <div className="space-y-3 rounded-none">
              <div className="flex justify-between items-center rounded-none">
                <span className="text-2xl font-black text-[#1B79EE] tracking-tighter rounded-none">
                  #{precaster.rank}
                </span>
                <span className="text-[8px] font-mono font-bold border border-[#004aad] text-[#004aad] px-2 py-0.5 tracking-wider bg-white rounded-none">
                  {precaster.region}
                </span>
              </div>

              <div className="space-y-1 rounded-none">
                <h3 className="text-base font-black text-[#004aad] uppercase tracking-tight rounded-none">
                  {precaster.name}
                </h3>
                <p className="text-xs text-[#004aad]/80 font-light leading-relaxed rounded-none">
                  {precaster.specialty}
                </p>
              </div>
            </div>

            {/* Bottom Verification Node Row */}
            <div className="mt-6 pt-3 border-t-2 border-[#004aad]/10 flex items-center justify-between rounded-none">
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#1B79EE] tracking-wide uppercase rounded-none">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B79EE]" />
                {precaster.status}
              </div>
              <div className="text-[9px] font-mono font-bold text-[#004aad]/40 uppercase rounded-none">
                ID: {precaster.region}-{precaster.rank}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE INTERACTIVE TRIGGER COMPONENT */}
      {hasMore && (
        <div className="w-full flex justify-center pt-12 rounded-none">
          <button 
            onClick={handleLoadMore}
            className="group border-2 border-[#004aad] bg-[#004aad] text-white hover:bg-[#1B79EE] hover:border-[#1B79EE] text-xs font-black uppercase tracking-[0.2em] py-5 px-12 flex items-center justify-center gap-3 transition-all rounded-none outline-none cursor-pointer shadow-[4px_4px_0px_#1B79EE] hover:shadow-[4px_4px_0px_#004aad]"
          >
            <span>Load More Regional Nodes</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

    </section>
  )
}