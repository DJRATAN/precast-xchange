'use client'
import { useEffect, useState } from "react";

 

export default function TaglineHero() { 
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
 
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">
            
            {/* Background Video Layer - Balanced at 12% Opacity over Pure White */}
            <div className="absolute inset-0 z-0 rounded-none bg-white">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlayThrough={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-1000 mix-blend-multiply rounded-none`}
                >
                    <source 
                        src="/video/6610313_Scenic Serene Snowy Mountains Bridges_By_Andriy_Stefanyshyn_Artlist_HD.mp4" 
                        type="video/mp4" 
                    />
                </video>
            </div>

            {/* Background Industrial Grid Lines */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE06_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none rounded-none" />

            {/* Content Stack - Strong Left Alignment */}
            <div className="relative z-20 text-left w-full max-w-5xl py-12 rounded-none">
                
                {/* 1. TOP MICRO BADGE (Replicating the exact style from Screenshot 2026-06-01 174051.png) */}
                <div className="inline-flex items-center gap-2 bg-[#004aad] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-4 py-2 mb-8 rounded-none border border-[#1B79EE]">
                    <span>GLOBAL PLATFORM</span>
                    <span className="text-[#1B79EE]">• CONNECTING THE INDUSTRY</span>
                </div>

                {/* 2. MAIN TAGLINE BLOCK */}
                <div className="flex flex-col gap-y-3 rounded-none">
                    
                    {/* First Line of Tagline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
                        CONCRETE <span className="text-white">BRIDGING</span>
                    </h1>

                    {/* Second Line of Tagline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
                        & CONNECTING ALL <span className="text-white">PRECASTERS</span>
                    </h1>
 

                </div>

                {/* 4. CALL TO ACTION ACTION ROUTERS */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start pt-12 rounded-none">
                    <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
                        Explore Global Index
                    </button>
                    <button className="border-2 border-[#004aad] bg-white text-[#004aad] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition-colors rounded-none outline-none">
                        Register Facility Node
                    </button>
                </div>

            </div>
        </section>
    )
}