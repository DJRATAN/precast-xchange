'use client'

import React, { useState } from 'react'
import { Layers, ArrowRight, Settings2, Sliders } from 'lucide-react'

export default function EquipmentCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  // Logically organizing your list into clean production sectors
  const equipmentData = [
    { name: "Ready Mix", type: "PRODUCTION & VEHICLES" },
    { name: "Aggregate Bins", type: "BATCHING & STORAGE" },
    { name: "Bagging Equipment", type: "BATCHING & STORAGE" },
    { name: "Batch Plants: Ready-Mix", type: "BATCHING & STORAGE" },
    { name: "Batch Plants: Volumetric", type: "BATCHING & STORAGE" },
    { name: "Batching Equipment", type: "BATCHING & STORAGE" },
    { name: "Boom and Pipe Unloaders", type: "MATERIAL HANDLING" },
    { name: "Concrete Pumps", type: "MATERIAL HANDLING" },
    { name: "Conveyors: Belt", type: "MATERIAL HANDLING" },
    { name: "Cranes", type: "MATERIAL HANDLING" },
    { name: "Crushers", type: "PRODUCTION & VEHICLES" },
    { name: "Curing Equipment", type: "PRODUCTION & VEHICLES" },
    { name: "Dust Collection", type: "ENVIRONMENTAL & QC" },
    { name: "Environmental Equipment", type: "ENVIRONMENTAL & QC" },
    { name: "Forklifts", type: "MATERIAL HANDLING" },
    { name: "Front End Loaders", type: "MATERIAL HANDLING" },
    { name: "Mixers: Other", type: "PRODUCTION & VEHICLES" },
    { name: "Quality Control", type: "ENVIRONMENTAL & QC" },
    { name: "Screw-Augers", type: "BATCHING & STORAGE" },
    { name: "Silo Accessories", type: "BATCHING & STORAGE" },
    { name: "Silos", type: "BATCHING & STORAGE" },
    { name: "Trucks: Boom", type: "PRODUCTION & VEHICLES" },
    { name: "Trucks: Other", type: "PRODUCTION & VEHICLES" },
    { name: "Trucks: Ready-Mix", type: "PRODUCTION & VEHICLES" },
    { name: "Miscellaneous Equipment", type: "PRODUCTION & VEHICLES" }
  ]

  const categories = ['ALL', 'BATCHING & STORAGE', 'PRODUCTION & VEHICLES', 'MATERIAL HANDLING', 'ENVIRONMENTAL & QC']

  const filteredEquipment = selectedCategory === 'ALL' 
    ? equipmentData 
    : equipmentData.filter(item => item.type === selectedCategory)

  return (
    <section className="w-full py-16 px-8 md:px-10 bg-white text-left rounded-none">
      
      {/* Blueprint Header */}
      <div className="w-full border-b-2 border-[#004aad] pb-6 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 rounded-none">
        <div>
          <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">
            Asset Index Classification
          </span>
          <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase mt-1 rounded-none">
            READY MIX & <span className="text-[#1B79EE]">EQUIPMENT REGISTRY</span>
          </h2>
        </div>
        <div className="text-xs font-bold text-[#004aad] border-2 border-[#004aad] px-4 py-2 bg-white rounded-none">
          TOTAL DIRECT VEGATORS: <span className="text-[#1B79EE] font-black">{equipmentData.length} ASSETS</span>
        </div>
      </div>

      {/* Category Tab Filter Selector - Strict 0px Corners */}
      <div className="flex flex-wrap gap-2 mb-8 rounded-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-[10px] font-black uppercase tracking-wider px-5 py-3 transition-colors rounded-none border-2 border-[#004aad] outline-none ${
              selectedCategory === cat
                ? 'bg-[#004aad] text-white'
                : 'bg-white text-[#004aad] hover:bg-[#1B79EE]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The Asset Showcase Grid: Crisp Row Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-none">
        {filteredEquipment.map((item, index) => (
          <div 
            key={index}
            className="group w-full bg-white border-2 border-[#004aad] p-4 flex items-center justify-between transition-all duration-300 hover:bg-[#004aad] rounded-none select-none"
          >
            <div className="space-y-1 rounded-none">
              <span className="text-[8px] font-mono font-bold text-[#1B79EE] tracking-widest block group-hover:text-white/80 transition-colors">
                {item.type}
              </span>
              <h3 className="text-sm font-black text-[#004aad] uppercase tracking-tight group-hover:text-white transition-colors rounded-none">
                {item.name}
              </h3>
            </div>

            {/* Action Hub Indicator inside the listing line */}
            <button className="bg-white border border-[#1B79EE] text-[#1B79EE] group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] group-hover:text-white p-2.5 transition-colors rounded-none outline-none">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Industrial Footer Note */}
      <div className="mt-12 flex items-center gap-3 rounded-none">
        <Settings2 className="w-4 h-4 text-[#1B79EE]" />
        <p className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-widest rounded-none">
          Clicking any registry sector opens corresponding active buyer requests, leasing matrices, or direct plant listings.
        </p>
      </div>

    </section>
  )
}