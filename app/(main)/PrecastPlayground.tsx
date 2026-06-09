'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Flame, Layers, Box, Cpu, AlertTriangle, ArrowUpRight } from 'lucide-react'

interface PlaygroundNode {
  id: string;
  class: 'PLANT_TOUR' | 'PRODUCT_SHOWCASE' | 'INVENTION_REVEAL';
  title: string;
  facility: string;
  videoSrc: string;
  metrics: string;
  verifiedBy: string;
}

export default function PrecastPlayground() {
  const [activeIndex, setActiveIndex] = useState(0)

  const feedNodes: PlaygroundNode[] = [
    {
      id: "PLAY-001",
      class: "INVENTION_REVEAL",
      title: "Self-Demolding Magnetic Shuttering Array",
      facility: "Matrix Engineering Labs",
      videoSrc: "/video/6584801_Aerial Cityscape Architectural Landmark South Korea Songdo_By_Yeonmedia_Artlist_HD.mp4",
      metrics: "Cycles: +12,000 // Steel Grade: Custom Neodymium",
      verifiedBy: "PCI Node #09"
    },
    {
      id: "PLAY-002",
      class: "PLANT_TOUR",
      title: "Automated Concrete Extruder Line Tour",
      facility: "Apex Precast Facilities Group",
      videoSrc: "/video/6133943_Traffic Light Canada Toronto City_By_Adrian_Vidak_Artlist_HD.mp4",
      metrics: "Daily Volume: 4500 LFT // Automation Factor: 94%",
      verifiedBy: "Ecosystem Audit Core"
    },
    {
      id: "PLAY-003",
      class: "PRODUCT_SHOWCASE",
      title: "Prestressed High-Load Bridge Girder",
      facility: "Titan Structural Castings",
      videoSrc: "/video/6266672_River Traffic Drone Snow_By_Dominick_Anskis_Artlist_HD.mp4",
      metrics: "Max Span Constraint: 145ft // Tensioning Array: Active",
      verifiedBy: "Civil Infrastructure Board"
    }
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedNodes.length)
  }

  const activeNode = feedNodes[activeIndex]

  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 border-b-4 border-[#004aad] rounded-none text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-none">
        
        {/* LEFT COLUMN: INTERACTIVE STREAM RUNWAY (Cinematic 9:16 Container) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center bg-[#f8f9fa] border-2 border-[#004aad] relative overflow-hidden h-[620px] rounded-none shadow-[6px_6px_0px_#004aad]">
          
          <AnimatePresence mode="wait">
            <motion.video
              key={activeNode.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-none mix-blend-multiply opacity-90"
              src={activeNode.videoSrc}
            />
          </AnimatePresence>

          {/* Verification Watermark Stamp */}
          <div className="absolute top-4 left-4 z-10 bg-[#004aad] text-white px-3 py-1.5 border border-[#1B79EE] rounded-none font-mono text-[9px] font-black tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1B79EE]" />
            <span>VERIFIED PORTAL NODE</span>
          </div>

          {/* Lower Dynamic Tracking Metadata Sheet */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 z-10 text-white flex flex-col gap-2 rounded-none">
            <span className="text-[#1B79EE] font-mono text-[10px] font-black tracking-widest uppercase">
              // {activeNode.class}
            </span>
            <h3 className="text-lg font-black uppercase tracking-tight leading-tight max-w-[85%]">
              {activeNode.title}
            </h3>
            <p className="text-white/60 text-xs font-mono font-bold">
              ORIGIN: {activeNode.facility.toUpperCase()}
            </p>
          </div>

          {/* Right Action Menu Strips */}
          <div className="absolute right-4 bottom-24 z-20 flex flex-col gap-4 text-center">
            <button className="p-3 bg-white border border-[#004aad] text-[#004aad] hover:bg-[#1B79EE] hover:text-white transition-colors rounded-none outline-none shadow-[2px_2px_0px_#004aad]">
              <Flame className="w-4 h-4 animate-pulse" />
            </button>
            <span className="text-[10px] font-mono font-black text-white drop-shadow">INDEX</span>
          </div>

        </div>

        {/* RIGHT COLUMN: CORE TELEMETRY & SUBMISSION MATRIX CONTROLS */}
        <div className="lg:col-span-7 flex flex-col justify-between border-2 border-[#004aad]/20 p-6 md:p-8 bg-white rounded-none">
          
          <div className="space-y-6 rounded-none">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em] block">Algorithmic Discovery Node</span>
              <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Precast Playground</h2>
            </div>

            {/* Live Node Analytics Card */}
            <div className="border border-[#004aad]/20 p-4 bg-[#f8f9fa] rounded-none space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] font-black text-[#004aad] border-b border-[#004aad]/10 pb-2">
                <span>METRIC VECTOR TRACKING</span>
                <span className="text-[#1B79EE]">ACTIVE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold text-[#004aad]/80">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1B79EE]" />
                  <span>{activeNode.metrics}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#1B79EE]" />
                  <span>Auditor: {activeNode.verifiedBy}</span>
                </div>
              </div>
            </div>

            {/* Information Notice Panel */}
            <div className="p-4 border-l-4 border-[#1B79EE] bg-[#1B79EE]/5 flex gap-3 rounded-none">
              <AlertTriangle className="w-5 h-5 text-[#1B79EE] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-black text-[#004aad] uppercase">Verification Protocol Required</h4>
                <p className="text-[11px] text-[#004aad]/70 leading-relaxed font-medium">
                  To keep the network verified, all videos uploaded by custom manufacturing facilities undergo rigorous QA asset logging to confirm engineering claims before visibility flags switch to active.
                </p>
              </div>
            </div>
          </div>

          {/* Action Trigger Row Mapping */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 rounded-none">
            <button 
              onClick={handleNext}
              className="flex-1 border-2 border-[#004aad] bg-white text-[#004aad] py-4 px-6 text-xs font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition-all rounded-none outline-none"
            >
              Skip to Next Node
            </button>
            <button className="flex-1 bg-[#004aad] border-2 border-[#004aad] text-white py-4 px-6 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-all rounded-none outline-none shadow-[4px_4px_0px_#1B79EE] flex items-center justify-center gap-2">
              <span>Upload Your Innovation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
