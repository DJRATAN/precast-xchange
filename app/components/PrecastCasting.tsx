'use client'

import React, { useState } from 'react'
import { ArrowDown, ShieldCheck } from 'lucide-react'

interface ReadyMixNode {
    rank: string;
    name: string;
    region: 'USA' | 'CANADA' | 'CARIBBEAN' | 'EUROPE';
    fleetCapacity: string;
    status: string;
}

export default function PrecastCasting() {
    const initialProducers: ReadyMixNode[] = [
        { rank: "01", name: "Round Frames & Grates", region: "USA", fleetCapacity: "Massive Logistics Fleet Array", status: "VERIFIED SUPPLY NODE" },
        { rank: "02", name: "Round Frames & Grates", region: "USA", fleetCapacity: "High-Volume Infrastructure Plant Network", status: "VERIFIED SUPPLY NODE" },
        {
            rank: "03",
            name: "Vulcan Materials Company",
            region: "USA",
            fleetCapacity: "Regional Strategic Batching Network",
            status: "VERIFIED SUPPLY NODE"
        },
        { rank: "04", name: "Round Frames & Grates", region: "USA", fleetCapacity: "Heavy Industrial High-Pour Logistics", status: "VERIFIED SUPPLY NODE" },
        { rank: "05", name: "Round Frames & Grates", region: "CANADA", fleetCapacity: "Cross-Provincial Multi-Silo Logistics", status: "VERIFIED SUPPLY NODE" },
        { rank: "06", name: "PIPE GRATES", region: "CANADA", fleetCapacity: "ECO-Pour Low Carbon Distribution Trucks", status: "VERIFIED SUPPLY NODE" },
        { rank: "07", name: "Trench Grates", region: "CANADA", fleetCapacity: "High-Output Urban Batch Matrix", status: "VERIFIED SUPPLY NODE" },
        { rank: "08", name: "Paving Risers", region: "CANADA", fleetCapacity: "Automated Precision Volumetric Dispatch", status: "VERIFIED SUPPLY NODE" },
        { rank: "09", name: "Valve Lids", region: "CARIBBEAN", fleetCapacity: "Coastal Infrastructure Transport Network", status: "VERIFIED SUPPLY NODE" },
        { rank: "10", name: "Marine Products", region: "CARIBBEAN", fleetCapacity: "Specialized High-Heat Pumping Logistics", status: "VERIFIED SUPPLY NODE" },
        { rank: "11", name: "Curb Boxes", region: "EUROPE", fleetCapacity: "Continental High-Output Production Hubs", status: "VERIFIED SUPPLY NODE" },
        { rank: "12", name: "Holcim Group Europe", region: "EUROPE", fleetCapacity: "Smart-Mix Decarbonized Transit Core", status: "VERIFIED SUPPLY NODE" },
    ]

    const secondaryProducers: ReadyMixNode[] = [
        { rank: "13", name: "Argos USA", region: "USA", fleetCapacity: "Commercial Infrastructure Fleet Module", status: "VERIFIED SUPPLY NODE" },
        { rank: "14", name: "McInnis Cement", region: "CANADA", fleetCapacity: "Deep-Water Port Batch Logistics", status: "VERIFIED SUPPLY NODE" },
        { rank: "15", name: "Trinidad Cement Limited (TCL)", region: "CARIBBEAN", fleetCapacity: "Inter-Island Aggregate Supply Routing", status: "VERIFIED SUPPLY NODE" },
        { rank: "16", name: "Vicat Group", region: "EUROPE", fleetCapacity: "Automated Volumetric Truck Matrix", status: "VERIFIED SUPPLY NODE" }
    ]

    const [visibleItems, setVisibleItems] = useState<ReadyMixNode[]>(initialProducers)
    const [hasMore, setHasMore] = useState(true)

    const handleLoadMore = () => {
        setVisibleItems([...visibleItems, ...secondaryProducers])
        setHasMore(false)
    }

    return (
        <section className="w-full py-16 px-8 md:px-10 bg-white text-left rounded-none">

            {/* Structural Registry Header */}
            <div className="w-full border-b-2 border-[#004aad] pb-6 mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 rounded-none">
                <div>
                    <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">
                        Logistics & Batching Matrix
                    </span>
                    <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase mt-1 rounded-none">
                        PRECAST <span className="text-[#1B79EE]">CASTING</span>
                    </h2>
                </div>
                <div className="text-[10px] font-mono font-bold text-white bg-[#004aad] px-4 py-2 rounded-none tracking-widest">
                    DISPATCH CORE: ACTIVE LOGS
                </div>
            </div>

            {/* Grid Network Container - Locked to standard 4-in-a-row on desktop layouts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-none">
                {visibleItems.map((producer) => (
                    <div
                        key={producer.rank}
                        className="w-full border-2 border-[#004aad] bg-white p-4 flex flex-col justify-between transition-colors duration-300 hover:border-[#1B79EE] group rounded-none relative"
                    >
                        {/* Top Row Segment */}
                        <div className="space-y-3 rounded-none">
                            <div className="flex justify-between items-center rounded-none">
                                <span className="text-xl font-black text-[#1B79EE] tracking-tighter rounded-none">
                                    #{producer.rank}
                                </span>
                                <span className="text-[8px] font-mono font-bold border border-[#004aad] text-[#004aad] px-2 py-0.5 tracking-wider bg-white rounded-none">
                                    {producer.region}
                                </span>
                            </div>

                            <div className="space-y-1 rounded-none">
                                <h3 className="text-sm font-black text-[#004aad] uppercase tracking-tight leading-tight rounded-none line-clamp-2">
                                    {producer.name}
                                </h3>
                                <p className="text-[11px] text-[#004aad]/80 font-light leading-snug rounded-none line-clamp-3">
                                    {producer.fleetCapacity}
                                </p>
                            </div>
                        </div>

                        {/* Bottom Verification Node Row */}
                        <div className="mt-4 pt-3 border-t border-[#004aad]/10 flex items-center justify-between rounded-none">
                            <div className="flex items-center gap-1 text-[8px] font-bold text-[#1B79EE] tracking-wide uppercase rounded-none">
                                <ShieldCheck className="w-3 h-3 text-[#1B79EE]" />
                                {producer.status}
                            </div>
                            <div className="text-[8px] font-mono font-bold text-[#004aad]/40 uppercase rounded-none">
                                RM-{producer.rank}
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
                        <span>Load More Ready-Mix Nodes</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </button>
                </div>
            )}

        </section>
    )
}