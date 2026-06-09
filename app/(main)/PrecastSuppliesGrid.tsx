'use client'

import React from 'react'
import { Layers, Disc, Droplet, Activity, Box } from 'lucide-react'

export default function PrecastSuppliesGrid() {
    const supplyCategories = [
        { icon: <Layers className="w-5 h-5 text-[#1B79EE]" />, title: "Precast Supplies", items: "Molds, magnetic shims, chamfers, form release agents" },
        { icon: <Disc className="w-5 h-5 text-[#1B79EE]" />, title: "Industrial Valves", items: "Gate, butterfly, check, and high-pressure flow valves" },
        { icon: <Droplet className="w-5 h-5 text-[#1B79EE]" />, title: "Heavy Duty Pumps", items: "Slurry pumps, concrete placement pumps, submersibles" },
        { icon: <Activity className="w-5 h-5 text-[#1B79EE]" />, title: "Reinforced Pipe", items: "Concrete pressure pipes, culverts, structural conduit" },
        { icon: <Box className="w-5 h-5 text-[#1B79EE]" />, title: "Precision Castings", items: "Manhole rings, catch basins, custom municipal castings" },
        { icon: <Layers className="w-5 h-5 text-[#1B79EE]" />, title: "Precast Supplies", items: "Molds, magnetic shims, chamfers, form release agents" },
        { icon: <Disc className="w-5 h-5 text-[#1B79EE]" />, title: "Industrial Valves", items: "Gate, butterfly, check, and high-pressure flow valves" },
        { icon: <Droplet className="w-5 h-5 text-[#1B79EE]" />, title: "Heavy Duty Pumps", items: "Slurry pumps, concrete placement pumps, submersibles" },
        { icon: <Activity className="w-5 h-5 text-[#1B79EE]" />, title: "Reinforced Pipe", items: "Concrete pressure pipes, culverts, structural conduit" },
        { icon: <Box className="w-5 h-5 text-[#1B79EE]" />, title: "Precision Castings", items: "Manhole rings, catch basins, custom municipal castings" }, { icon: <Layers className="w-5 h-5 text-[#1B79EE]" />, title: "Precast Supplies", items: "Molds, magnetic shims, chamfers, form release agents" },
        { icon: <Disc className="w-5 h-5 text-[#1B79EE]" />, title: "Industrial Valves", items: "Gate, butterfly, check, and high-pressure flow valves" },
        { icon: <Droplet className="w-5 h-5 text-[#1B79EE]" />, title: "Heavy Duty Pumps", items: "Slurry pumps, concrete placement pumps, submersibles" },
        { icon: <Activity className="w-5 h-5 text-[#1B79EE]" />, title: "Reinforced Pipe", items: "Concrete pressure pipes, culverts, structural conduit" },
        { icon: <Box className="w-5 h-5 text-[#1B79EE]" />, title: "Precision Castings", items: "Manhole rings, catch basins, custom municipal castings" }

    ]

    return (
        <div className="w-full bg-white border-b-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
            <div className="space-y-8 rounded-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 rounded-none">
                    <div>
                        <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Verified Logistics Node</span>
                        <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Core Equipment & Supplies Index</h2>
                    </div>
                    <span className="text-[10px] font-mono text-[#004aad]/60">TOTAL SECURED CATEGORIES: 15</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 rounded-none">
                    {supplyCategories.map((category, index) => (
                        <div key={index} className="border-2 border-[#004aad]/20 bg-white p-5 flex flex-col justify-between hover:border-[#1B79EE] transition-all duration-200 rounded-none shadow-[4px_4px_0px_#004aad]/5 hover:shadow-[4px_4px_0px_#1B79EE]">
                            <div className="space-y-3 rounded-none">
                                <div className="p-2 border border-[#004aad]/20 inline-block rounded-none bg-white">
                                    {category.icon}
                                </div>
                                <h4 className="text-sm font-black text-[#004aad] uppercase tracking-tight">{category.title}</h4>
                                <p className="text-[11px] text-[#004aad]/70 font-medium leading-relaxed">{category.items}</p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-[#004aad]/10 text-[9px] font-mono font-bold text-[#1B79EE] flex justify-between items-center">
                                <span>CAT NODE // 0{index + 1}</span>
                                <span className="hover:underline cursor-pointer">BROWSE →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}