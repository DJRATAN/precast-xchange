'use client'

import React, { useState } from 'react'
import { ArrowDown, ShieldCheck } from 'lucide-react'

interface MachineryNode {
  rank: string;
  name: string;
  category: 'MOLDS & FORMWORK' | 'PLANT MACHINERY' | 'AUTOMATION SYSTEMS' | 'HANDLING SYSTEMS';
  specification: string;
  status: string;
}

export default function PrecastSuppliers() {
  const initialMachinery: MachineryNode[] = [
    { rank: "01", name: "Modular Box Culvert Molds", category: "MOLDS & FORMWORK", specification: "Hydraulic Core Collapse / Variable Widths", status: "ASSET AVAILABLE" },
    { rank: "02", name: "Automated Mesh Welding Plants", category: "AUTOMATION SYSTEMS", specification: "High-Speed Structural Rebar Grid Matrices", status: "ASSET AVAILABLE" },
    { rank: "03", name: "Planetary Countercurrent Mixers", category: "PLANT MACHINERY", specification: "Zero-Defect Ultra High Performance Concrete", status: "ASSET AVAILABLE" },
    { rank: "04", name: "90-Ton Gantry Crane Systems", category: "HANDLING SYSTEMS", specification: "Dual-Hook Yard Stripping & Storage Lift Rails", status: "ASSET AVAILABLE" },
    { rank: "05", name: "Prestressed TT Beam Beds", category: "MOLDS & FORMWORK", specification: "Self-Stressing Steel Buttresses / Up to 120ft", status: "ASSET AVAILABLE" },
    { rank: "06", name: "Curing Chamber Vapor Systems", category: "PLANT MACHINERY", specification: "Accelerated Thermodynamic Hydration Control", status: "ASSET AVAILABLE" },
    { rank: "07", name: "CNC Plotter & Shuttering Robots", category: "AUTOMATION SYSTEMS", specification: "Precision Magnetic Form Placement Interface", status: "ASSET AVAILABLE" },
    { rank: "08", name: "Vacuum Lifting Crossbeams", category: "HANDLING SYSTEMS", specification: "Suction Pad Stripping For Architectural Panels", status: "ASSET AVAILABLE" },
    { rank: "09", name: "Battery Molds For Wall Panels", category: "MOLDS & FORMWORK", specification: "Vertical Multi-Pocket Form Layout / Smooth Finish", status: "ASSET AVAILABLE" },
    { rank: "10", name: "Aggregate Dosing Gate Systems", category: "PLANT MACHINERY", specification: "Pneumatic Sector Feed Control / Weight Precision", status: "ASSET AVAILABLE" },
    { rank: "11", name: "Concrete Distribution Shuttles", category: "AUTOMATION SYSTEMS", specification: "High-Speed Flying Buckets / Overhead Rail Tracks", status: "ASSET AVAILABLE" },
    { rank: "12", name: "Tilting Tables For Precast Panels", category: "MOLDS & FORMWORK", specification: "Hydraulic Actuated High-Frequency Vibrators", status: "ASSET AVAILABLE" },
  ]

  const secondaryMachinery: MachineryNode[] = [
    { rank: "13", name: "Hollowcore Extrusion Machinery", category: "PLANT MACHINERY", specification: "Multi-Size Shear Compaction / Fast Extraction", status: "ASSET AVAILABLE" },
    { rank: "14", name: "Strand Tensioning Jacks", category: "MOLDS & FORMWORK", specification: "Multi-Stress Hydraulic Cylinders With Digital Logs", status: "ASSET AVAILABLE" },
    { rank: "15", name: "Concrete Transport Buckets", category: "HANDLING SYSTEMS", specification: "Crane-Slung Bottom Discharge Fork Configuration", status: "ASSET AVAILABLE" },
    { rank: "16", name: "Automatic Concrete Distributor", category: "AUTOMATION SYSTEMS", specification: "Laser-Guided Spreading Screw Matrix Gates", status: "ASSET AVAILABLE" }
  ]

  const [visibleItems, setVisibleItems] = useState<MachineryNode[]>(initialMachinery)
  const [hasMore, setHasMore] = useState(true)

  const handleLoadMore = () => {
    setVisibleItems([...visibleItems, ...secondaryMachinery])
    setHasMore(false)
  }

  return (
    <section className="w-full py-16 px-8 md:px-10 bg-white text-left rounded-none">
      
      {/* Structural Registry Header */}
      <div className="w-full border-b-2 border-[#004aad] pb-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">
            Ecosystem Production Fleet
          </span>
          <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase mt-1 rounded-none">
            SUPPLIERS <span className="text-[#1B79EE]"></span>
          </h2>
        </div>
        <div className="text-[10px] font-mono font-bold text-white bg-[#004aad] px-4 py-2 rounded-none tracking-widest">
          ASSET MODULES: LOADED
        </div>
      </div>

      {/* Grid Network Container - Clean 4-in-a-row Layout Framework */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-none">
        {visibleItems.map((item) => (
          <div 
            key={item.rank}
            className="w-full border-2 border-[#004aad] bg-white p-4 flex flex-col justify-between transition-colors duration-300 hover:border-[#1B79EE] group rounded-none relative"
          >
            {/* Top Information Cluster */}
            <div className="space-y-3 rounded-none">
              <div className="flex justify-between items-center rounded-none">
                <span className="text-xl font-black text-[#1B79EE] tracking-tighter rounded-none">
                  #{item.rank}
                </span>
                <span className="text-[8px] font-mono font-bold border border-[#004aad] text-[#004aad] px-2 py-0.5 tracking-wider bg-white rounded-none whitespace-nowrap">
                  {item.category}
                </span>
              </div>

              <div className="space-y-1 rounded-none">
                <h3 className="text-sm font-black text-[#004aad] uppercase tracking-tight leading-tight rounded-none line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[#004aad]/80 font-light leading-snug rounded-none line-clamp-3">
                  {item.specification}
                </p>
              </div>
            </div>

            {/* Bottom Verification Node */}
            <div className="mt-4 pt-3 border-t border-[#004aad]/10 flex items-center justify-between rounded-none">
              <div className="flex items-center gap-1 text-[8px] font-bold text-[#1B79EE] tracking-wide uppercase rounded-none">
                <ShieldCheck className="w-3 h-3 text-[#1B79EE]" />
                {item.status}
              </div>
              <div className="text-[8px] font-mono font-bold text-[#004aad]/40 uppercase rounded-none">
                MACH-{item.rank}
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
            className="group border-2 border-[#004aad] bg-[#004aad] text-white hover:bg-[#1B79EE] hover:border-[#1B79EE] text-xs font-black uppercase tracking-[0.2em] py-4 px-10 flex items-center justify-center gap-3 transition-all rounded-none outline-none cursor-pointer shadow-[4px_4px_0px_#1B79EE]"
          >
            <span>Load More Plant Machinery</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

    </section>
  )
}