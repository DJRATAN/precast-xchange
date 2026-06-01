'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

interface OperationCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  videoSrc: string;
  ctaText: string;
  isLightVariant?: boolean;
}

export default function FormsMoldsVideoGrid() {
  const operations: OperationCard[] = [
    {
      id: 'new',
      title: "NEW MOLDS & FORMS",
      badge: "Procurement",
      description: "Deploy precision-engineered modern wetcast profiles, deep structural steel jackets, and high-tolerance modular infrastructure castings built for heavy automation.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Browse Factory Catalog"
    },
    {
      id: 'old',
      title: "PRE-OWNED ASSETS",
      badge: "Secondary Market",
      description: "Sourcing verified pre-owned casting inventories. Acquire structurally integral, factory-inspected steel molds and casting tables at optimized cost tiers.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Inspect Secondary Ledger",
    },
    {
      id: 'repairs',
      title: "MAINTENANCE & REPAIRS",
      badge: "Refurbishment",
      description: "Connect with certified fabrication specialists to machine, clean, repair, and recalibrate worn steel formwork back to original structural spec limits.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Schedule Engineering Audit"
    },
    {
      id: 'trade',
      title: "ASSET TRADE PORTAL",
      badge: "Liquidity Exchange",
      description: "Direct asset-for-asset trading infrastructure. Swap unutilized steel panels, box culvert configurations, or trench systems for active project formwork templates.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Initiate Trade Inquiry",
    },
    {
      id: 'surplus',
      title: "SURPLUS INVENTORY",
      badge: "Overstock Liquidation",
      description: "Immediate acquisition of liquidated manufacturer overstock. Zero-lead-time structural form assemblies available directly for immediate shipment pipelines.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Acquire Liquidation Lots"
    },
    {
      id: 'donate',
      title: "MATERIAL DONATE PATH",
      badge: "Sustainability Loop",
      description: "Route decommissioned casting frameworks, overstock mix materials, or retired forming arrays directly into secondary educational or recycling pipelines.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Route Donation Package",
    },
    {
      id: 'catalogs',
      title: "TECHNICAL CATALOGS",
      badge: "Documentation Index",
      description: "Access complete structural manufacturing specification libraries, exact dimensional clearance schemas, CAD design limits, and operational manuals.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Download Data Blueprints"
    },
    {
      id: 'expert',
      title: "CONNECT WITH EXPERT",
      badge: "Technical Consultation",
      description: "Direct engineering terminal line. Interface with senior industrial precast specialists for custom structural mold configurations and dimensional blueprints.",
      videoSrc: "/video/mega mold 30-48 red.mp4",
      ctaText: "Open Secure Consultation Pipeline"
    }
  ]

  return (
    <section className="w-full py-20 px-4 md:px-10 bg-white relative">
      <div className="w-full mx-auto">

        {/* Section Header Block */}
        <div className="text-left mb-12 border-b-2 border-[#004aad] pb-4">
          <h2 className="text-3xl font-black text-[#004aad] tracking-tight uppercase rounded-none">
            FORMS & MOLDS <span className="text-[#1B79EE]">CENTRAL HUB</span>
          </h2>
        </div>

        {/* Standardized 290px Card Grid Array */}
        <div className="flex flex-wrap justify-evenly items-start gap-6">
          {operations.map((card) => (
            /* Card Bounds: Exactly 290px x 580px, completely flat corners (0px) */
            <div
              key={card.id}
              className={`w-[290px] h-[580px] rounded-none border-2 flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
                card.isLightVariant
                  ? 'bg-white border-[#1B79EE]/40 hover:bg-[#1B79EE] hover:border-[#1B79EE]'
                  : 'bg-white border-[#004aad] hover:bg-[#004aad] hover:border-[#004aad]'
              }`}
            >

              {/* Top Block */}
              <div>
                {/* Native HTML5 High-Performance Video Player: Exactly 286px x 256px */}
                <div className="relative w-[286px] h-[256px] mx-auto bg-black overflow-hidden rounded-none mt-[2px]">
                  <video
                    src={card.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-none"
                  />
                  {/* Decorative Color Stripe on top edge of frame */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${
                    card.isLightVariant ? 'bg-[#1B79EE]' : 'bg-[#004aad]'
                  }`} />
                </div>

                {/* Information Content Area */}
                <div className="p-4 space-y-3 text-left">
                  {/* Badge Component */}
                  <div className={`text-[9px] font-black tracking-widest uppercase border px-2 py-0.5 inline-block rounded-none transition-colors duration-300 ${
                    card.isLightVariant
                      ? 'border-[#1B79EE] text-[#1B79EE] group-hover:border-white group-hover:text-white'
                      : 'border-[#004aad] text-[#004aad] group-hover:border-white group-hover:text-white'
                  }`}>
                    {card.badge}
                  </div>

                  {/* Title Header */}
                  <h3 className={`text-base font-black tracking-tight leading-tight uppercase rounded-none transition-colors duration-300 ${
                    card.isLightVariant ? 'text-[#004aad] group-hover:text-white' : 'text-[#004aad] group-hover:text-white'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className={`text-xs font-light leading-relaxed rounded-none transition-colors duration-300 ${
                    card.isLightVariant ? 'text-slate-700 group-hover:text-white/90' : 'text-slate-700 group-hover:text-white/90'
                  }`}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Interactive Layer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-none transition-colors duration-300 group-hover:bg-transparent group-hover:border-white/10">
                <button className={`w-full text-white text-[10px] font-black uppercase tracking-widest py-4 px-4 flex items-center justify-center gap-2 transition-colors rounded-none ${
                  card.isLightVariant
                    ? 'bg-[#1B79EE] group-hover:bg-white group-hover:text-[#1B79EE]'
                    : 'bg-[#004aad] group-hover:bg-white group-hover:text-[#004aad]'
                }`}>
                  {card.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}