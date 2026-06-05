'use client'
import React, { useEffect, useState } from 'react'

interface TaglineConfig {
  id: string;
  type: 'DYNAMIC' | 'STATIC_STACKED' | 'BADGE_ALIGNED';
  topMicroText: string;
  mainPhrase: string[];
}

export default function TaglineShowcase() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  // Master asset tracking constant array for your precise marketing copy
  const taglinesData: TaglineConfig[] = [
    {
      id: "TAG-01",
      type: "DYNAMIC",
      topMicroText: "STRUCTURAL SCALE INTEGRATION",
      mainPhrase: ["PRECAST TOWERING", "THE SKIES"]
    },
    // {
    //   id: "TAG-02",
    //   type: "STATIC_STACKED",
    //   topMicroText: "FACILITY TRANSFORMATIONS • RE-ENGINEERED",
    //   mainPhrase: ["STOP AND VISIT US ON KING STREET", "FOR A TOTAL TRANSFORMATION"]
    // },
    // {
    //   id: "TAG-03",
    //   type: "BADGE_ALIGNED",
    //   topMicroText: "GLOBAL PLATFORM INFRASTRUCTURE",
    //   mainPhrase: ["CONCRETE BRIDGING &", "CONNECTING ALL PRECASTERS"]
    // }
  ]

 

 
  return (
    <div className="w-full flex flex-col bg-white rounded-none">
      
      {/* =========================================================================
          TAGLINE SECTION 01: PRECAST TOWERING THE SKIES (Left Aligned with Kinetic Engine)
          ========================================================================= */}
      <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0 bg-white rounded-none">
          <video autoPlay loop muted playsInline preload="auto" onCanPlayThrough={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 mix-blend-multiply rounded-none `}>
            <source src="/video/77245_Transportation Landscape Earth World_By_Oliver_&_Tabea_Scholz_Artlist_HD.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE06_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none rounded-none" />
        
        <div className="relative z-20 text-left w-full max-w-6xl py-12 rounded-none">
          <div className="inline-block bg-[#004aad] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 mb-6 rounded-none border border-[#1B79EE]">
            {taglinesData[0].topMicroText}
          </div>
          <div className="flex flex-col gap-y-2 rounded-none">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white rounded-none">
              {taglinesData[0].mainPhrase[0]}
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#1B79EE] rounded-none">
              {taglinesData[0].mainPhrase[1]}
            </h2>
 
          </div>
        </div>
      </section>


      {/* =========================================================================
          TAGLINE SECTION 02: KING STREET TRANSFORMATION (High-Density Blueprint Stack)
          ========================================================================= */}
      {/* <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0   rounded-none">
          <video autoPlay loop muted playsInline preload="auto"
            className="w-full h-full object-cover opacity-[0.12] mix-blend-multiply rounded-none">
            <source src="/video/6266672_River Traffic Drone Snow_By_Dominick_Anskis_Artlist_HD.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE04_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE04_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-none" />

        <div className="relative z-20 text-left w-full max-w-7xl py-12 rounded-none">
          <div className="text-[11px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.3em] mb-4 rounded-none block">
            {taglinesData[1].topMicroText}
          </div>
          <div className="space-y-4 rounded-none">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-[#004aad] max-w-5xl rounded-none">
              {taglinesData[1].mainPhrase[0]}
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white rounded-none"
                style={{ paintOrder: "stroke fill", WebkitTextStroke: "3px #004aad", color: "#1B79EE" }}>
              {taglinesData[1].mainPhrase[1]}
            </h2>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 rounded-none">
            <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
              View Location Map
            </button>
          </div>
        </div>
      </section> */}


      {/* =========================================================================
          TAGLINE SECTION 03: CONCRETE BRIDGING (Screenshot 2026-06-01 174051.png Alignment Archetype)
          ========================================================================= */}
      {/* <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 z-0 bg-white rounded-none">
          <video autoPlay loop muted playsInline preload="auto"
            className="w-full h-full object-cover opacity-[0.12] mix-blend-multiply rounded-none">
            <source src="/video/6266672_River Traffic Drone Snow_By_Dominick_Anskis_Artlist_HD.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE06_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none rounded-none" />

        <div className="relative z-20 text-left w-full max-w-6xl py-12 rounded-none">
          <div className="inline-flex items-center gap-2 bg-[#004aad] text-white text-[11px] font-black uppercase tracking-widest px-4 py-2 mb-8 rounded-none border border-[#1B79EE]">
            <span>{taglinesData[2].topMicroText}</span>
          </div>
          <div className="flex flex-col gap-y-3 rounded-none">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
              CONCRETE <span className="text-[#1B79EE]">BRIDGING</span>
            </h2>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
              & CONNECTING ALL <span className="text-[#1B79EE]">PRECASTERS</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start pt-12 rounded-none">
            <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
              Launch Ecosystem Network
            </button>
          </div>
        </div>
      </section> */}

    </div>
  )
}