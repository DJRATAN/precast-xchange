'use client'

import React, { useEffect, useState } from 'react'
import { RefreshCw, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";

interface TransactionCard {
  id: string;
  title: string;
  badge: string;
  frontDesc: string;
  videoSrc: string;
  backTitle: string;
  backDesc: string;
  ctaText: string;
  isLightVariant?: boolean;
}
// --- Dynamic Typing Logic ---
const words = [
  "BARTER",
  "BUY",
  "SELL",
  "TRADE",
  "LEASE",
  "RENT",
  "BORROW",
  "LOANERS",
  "SURPLUS",
  "REPAIRS",
  "DONATE",
  "FIND"
];


export default function CrossroadsFlippingHub() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500)
      return () => clearTimeout(timeout)
    }
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse])

  const hubs: TransactionCard[] = [
    {
      id: 'acquisition',
      title: "BUY • SELL • SURPLUS",
      badge: "Direct Asset Exchange",
      frontDesc: "Liquidate active inventory channels or acquire zero-lead-time structural form overstock immediately.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      backTitle: "Capital Exchange Terminal",
      backDesc: "Deploy capital routes directly for immediate outright structural acquisition or list overstock manufacturing assets onto the global precast index to recover yard square-footage instantly.",
      ctaText: "Execute Procurement",
    },
    {
      id: 'barter',
      title: "BARTER • TRADE IN",
      badge: "Asset Liquidity Pipeline",
      frontDesc: "Direct asset-for-asset trading mechanics. Swap unutilized elements for immediate forming patterns.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      backTitle: "Barter Matching Engine",
      backDesc: "Trade unutilized steel formwork profiles, aging wetcast tooling channels, or structural box culvert templates straight across for operational assets matching your current project specification matrix.",
      ctaText: "Initiate Asset Swap",
      isLightVariant: true,
    },
    {
      id: 'financing',
      title: "LEASE • RENT • BORROW • LOANERS",
      badge: "Utilization & Fleet Finance",
      frontDesc: "Access variable runtime logistics, emergency replacement loaners, and operational leasing structures.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      backTitle: "Fleet Deployment Desk",
      backDesc: "Maximize asset utility by routing unused inventory arrays into short-term rental channels, setting up structural seasonal leases, or requesting short-term backup machinery forms during peak pours.",
      ctaText: "Lock Deployment Rates",
    },
    {
      id: 'sustainability',
      title: "REPAIRS • DONATE",
      badge: "Asset Lifecycle Operations",
      frontDesc: "Recondition worn structural forming setups or route mis-pours clean into recycling networks.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      backTitle: "Refurbishment & Recovery",
      backDesc: "Connect straight with structural welding specialists to machine, blast, and patch forms to tolerance. Alternatively, route damaged forming steel arrays or surplus material into green credit setups.",
      ctaText: "Initialize Recovery Link",
      isLightVariant: true,
    }
  ]

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white relative">
      <div className="w-full mx-auto">

        {/* Section Header */}
        <div className="text-left mb-12 border-b-2 border-[#004aad] pb-4">
          <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase rounded-none">
            COMMERCIAL <span className="text-[#1B79EE]">CROSSROADS HUB</span>
          </h2>
        </div>
        <div className="max-w-7xl w-full pb-4 rounded-none text-center md:text-left">

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter flex flex-wrap items-center justify-center md:justify-start gap-x-6 leading-none select-none rounded-none">

            {/* STATIC: PORTAL (Solid Dark Blue) */}
            <span className="text-[#004aad] uppercase rounded-none">
              FOR
            </span>

            {/* DYNAMIC: CLEAN OUTLINE (Light Blue) */}
            <div className="relative inline-flex items-center rounded-none">
              <span
                className="uppercase rounded-none"
                style={{
                  // FIX: paint-order prevents the "A" lines from crossing/mismatching
                  paintOrder: "stroke fill",
                  WebkitTextStroke: "4px #1B79EE",
                  color: "white", // Using white fill instead of transparent fixes the "A" overlap
                  textShadow: "none"
                }}
              >
                {words[index].substring(0, subIndex)}
              </span>

              {/* The Solid Light Blue Dot */}
              <span className="text-[#1B79EE] rounded-none">.</span>

              {/* Sharp Industrial Cursor (Dark Blue) */}
              <span className="inline-block w-3 h-14 md:h-20 lg:h-24 bg-[#004aad] ml-4 animate-pulse rounded-none" />
            </div>

          </h1>

        </div>
        {/* Structural Grid Layout - Bound exactly to strict 290px dimensions */}
        <div className="flex flex-wrap justify-evenly items-start gap-6 [perspective:1200px]">
          {hubs.map((card) => {
            const isFlipped = flippedCard === card.id

            return (
              <div
                key={card.id}
                className="w-[290px] h-[500px] cursor-pointer relative rounded-none group"
                onMouseEnter={() => setFlippedCard(card.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : card.id)}
              >
                {/* Sharp Flashing Outline Base Layer (No Blur Effect) */}
                <div className={`absolute -inset-0.5 rounded-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${card.isLightVariant ? 'bg-[#1B79EE]' : 'bg-[#004aad]'
                  }`} />

                {/* 3D Flipping Core Framework */}
                <div className={`w-full h-full bg-white transition-transform duration-700 [transform-style:preserve-3d] relative rounded-none ${isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}>

                  {/* FRONT SIDE PANEL */}
                  <div className={`absolute inset-0 w-full h-full border-2 [backface-visibility:hidden] z-20 flex flex-col justify-between bg-white rounded-none ${card.isLightVariant ? 'border-[#1B79EE]' : 'border-[#004aad]'
                    }`}>
                    <div>
                      {/* Top Video Canvas Layer: Strictly 286px x 256px */}
                      <div className="relative w-[286px] h-[256px] mx-auto bg-black overflow-hidden rounded-none mt-[2px]">
                        <video
                          src={card.videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-none"
                        />
                        {/* Auto Flip Data Signal Overlay Indicator */}
                        <div className="absolute top-2 right-2 bg-[#004aad] px-2 py-0.5 flex items-center gap-1 text-[8px] font-mono text-white rounded-none border border-[#1B79EE]">
                          <RefreshCw className="w-2 h-2 animate-spin-[reverse]" /> ACTIVE
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-4 space-y-3 text-left rounded-none">
                        <div className={`text-[9px] font-black tracking-widest uppercase border px-2 py-0.5 inline-block rounded-none ${card.isLightVariant ? 'border-[#1B79EE] text-[#1B79EE]' : 'border-[#004aad] text-[#004aad]'
                          }`}>
                          {card.badge}
                        </div>
                        <h3 className="text-base font-black text-[#004aad] tracking-tight uppercase leading-tight rounded-none">
                          {card.title}
                        </h3>
                        <p className="text-xs text-[#004aad] font-light leading-relaxed rounded-none">
                          {card.frontDesc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Utility Indicator */}
                    <div className="p-4 bg-white border-t-2 border-[#1B79EE]/20 flex items-center justify-between text-[#1B79EE] text-[9px] font-black uppercase tracking-widest rounded-none">
                      Reveal Parameters <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* BACK SIDE PANEL (ROTATED 180 DEG) */}
                  <div className="absolute inset-0 w-full h-full p-6 border-2 [backface-visibility:hidden] [transform:rotateY(180deg)] z-10 flex flex-col justify-between bg-[#004aad] text-white rounded-none border-[#1B79EE]">
                    <div className="space-y-4 text-left rounded-none">
                      <div className="text-[9px] font-black text-white tracking-widest uppercase border border-white px-2.5 py-0.5 inline-block rounded-none">
                        System Configuration
                      </div>
                      <h4 className="text-white font-black text-lg tracking-tight uppercase rounded-none">
                        {card.backTitle}
                      </h4>
                      <p className="text-white/90 text-xs leading-relaxed font-light rounded-none">
                        {card.backDesc}
                      </p>
                    </div>

                    {/* Industrial Activation Interactive Row */}
                    <div className="space-y-3 rounded-none">
                      <div className="h-0.5 w-full bg-[#1B79EE]" />
                      <button className="w-full bg-[#1B79EE] hover:bg-white hover:text-[#004aad] text-white text-[10px] font-black uppercase tracking-widest py-4 px-4 flex items-center justify-center gap-2 transition-colors rounded-none border-none outline-none">
                        {card.ctaText}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}