'use client'

import React, { useState } from 'react'
import { Upload, HelpCircle, Heart, ArrowRight, RefreshCw } from "lucide-react"
import Image from 'next/image';

interface ActionCard {
  id: 'post' | 'request' | 'donate';
  title: string;
  tagline: string;
  frontDesc: string;
  backDesc: string;
  cta: string;
  colorClass: string;
  icon: React.ReactNode;
}
interface OperationCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  isLightVariant?: boolean;
}  const operations: OperationCard[] = [
  {
    id: 'new',
    title: "NEW MOLDS & FORMS",
    badge: "Procurement",
    description: "Deploy precision-engineered modern wetcast profiles, deep structural steel jackets, and high-tolerance modular infrastructure castings built for heavy automation.",
    imageSrc: "/assets/mold form/precast-mold-01 (10).jpeg",
    ctaText: "Browse Factory Catalog"
  },
  {
    id: 'old',
    title: "PRE-OWNED ASSETS",
    badge: "Secondary Market",
    description: "Sourcing verified pre-owned casting inventories. Acquire structurally integral, factory-inspected steel molds and casting tables at optimized cost tiers.",
    imageSrc: "/assets/mold form/catch-01 (2).jpeg",
    ctaText: "Inspect Secondary Ledger",
  },
  {
    id: 'repairs',
    title: "MAINTENANCE & REPAIRS",
    badge: "Refurbishment",
    description: "Connect with certified fabrication specialists to machine, clean, repair, and recalibrate worn steel formwork back to original structural spec limits.",
    imageSrc: "/assets/mold form/catch-01 (2).JPG",
    ctaText: "Schedule Engineering Audit"
  },
  {
    id: 'trade',
    title: "ASSET TRADE PORTAL",
    badge: "Liquidity Exchange",
    description: "Direct asset-for-asset trading infrastructure. Swap unutilized steel panels, box culvert configurations, or trench systems for active project formwork templates.",
    imageSrc: "/assets/mold form/catch-01 (3).JPG",
    ctaText: "Initiate Trade Inquiry",
  },
  {
    id: 'surplus',
    title: "SURPLUS INVENTORY",
    badge: "Overstock Liquidation",
    description: "Immediate acquisition of liquidated manufacturer overstock. Zero-lead-time structural form assemblies available directly for immediate shipment pipelines.",
    imageSrc: "/assets/mold form/catch-01 (4).JPG",
    ctaText: "Acquire Liquidation Lots"
  },
  {
    id: 'donate',
    title: "MATERIAL DONATE PATH",
    badge: "Sustainability Loop",
    description: "Route decommissioned casting frameworks, overstock mix materials, or retired forming arrays directly into secondary educational or recycling pipelines.",
    imageSrc: "/assets/mold form/catch-01 (6).jpg",
    ctaText: "Route Donation Package",
  },
  {
    id: 'catalogs',
    title: "TECHNICAL CATALOGS",
    badge: "Documentation Index",
    description: "Access complete structural manufacturing specification libraries, exact dimensional clearance schemas, CAD design limits, and operational manuals.",
    imageSrc: "/assets/mold form/catch-01 (8).jpg",
    ctaText: "Download Data Blueprints"
  },
  {
    id: 'expert',
    title: "CONNECT WITH EXPERT",
    badge: "Technical Consultation",
    description: "Direct engineering terminal line. Interface with senior industrial precast specialists for custom structural mold configurations and dimensional blueprints.",
    imageSrc: "/assets/mold form/catch-01 (9).jpg",
    ctaText: "Open Secure Consultation Pipeline"
  },
  {
    id: 'rentals',
    title: "RENTAL DEPLOYMENT",
    badge: "Rental Fleet",
    description: "Secure flexible short and long-term rental agreements for specialized high-volume precast modular form panels and concrete casting systems.",
    imageSrc: "/assets/mold form/catch-01 (1).JPG",
    ctaText: "Rent Formwork Systems"
  },
  {
    id: 'logistics',
    title: "LOGISTICS & FREIGHT",
    badge: "Transport Routing",
    description: "Request optimized freight forwarding, custom heavy-haul routing, and site mobilization planning for oversized structural precast mold logistics.",
    imageSrc: "/assets/mold form/precast-mold-01 (11).jpeg",
    ctaText: "Request Freight Quote"
  }
]
export default function CrossroadsHub() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  const cards: ActionCard[] = [
    {
      id: 'post',
      title: "POST AN ASSET",
      tagline: "Vendor Dashboard",
      frontDesc: "List your concrete molds, cement mixes, drainage pipes, and other precast inventory directly on our marketplace.",
      backDesc: "Connect with buyers looking for high-quality precast materials. Add photos, dimensions, and pricing to turn your idle concrete products into active sales.",
      cta: "Post a Listing",
      colorClass: "bg-[#004aad]",
      icon: <Upload className="w-6 h-6 text-[#004aad] group-hover:text-white transition-colors duration-300" />
    },
    {
      id: 'request',
      title: "REQUEST A FABRICATION",
      tagline: "Custom Orders",
      frontDesc: "Need a specific concrete mold or specialized drainage solution? Request custom precast products from our verified fabricators.",
      backDesc: "Submit your exact specifications, blueprints, and load requirements. Receive competitive bids from experienced precast manufacturers.",
      cta: "Request a Quote",
      colorClass: "bg-[#004aad]",
      icon: <HelpCircle className="w-6 h-6 text-[#004aad] group-hover:text-white transition-colors duration-300" />
    },
    {
      id: 'donate',
      title: "DONATE SURPLUS",
      tagline: "Sustainability",
      frontDesc: "Have leftover cement, unused forms, or excess drainage pipes? Donate your surplus precast materials to local projects.",
      backDesc: "Coordinate material recovery and reduce yard waste. Connect with community initiatives looking for durable concrete and precast products.",
      cta: "Donate Materials",
      colorClass: "bg-[#004aad]",
      icon: <Heart className="w-6 h-6 text-[#004aad] group-hover:text-white transition-colors duration-300" />
    }
  ]

  return (
    <section className="w-full px-8 md:px-10 bg-white py-16 border-t border-slate-100 relative overflow-hidden">

      {/* Background Matrix Crosshair Visuals representing the "Crossroads" */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 rounded-none" />

      <div className="w-full  relative z-10">



        {/* Standardized 290px Card Grid Array */}
        <div className="flex flex-row flex-nowrap mb-12 justify-start items-start gap-6 overflow-x-auto w-full pb-8 pt-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:bg-[#004aad] [&::-webkit-scrollbar-thumb]:hover:bg-[#1B79EE] [scrollbar-width:thin] [scrollbar-color:#004aad_#f1f5f9]">
          {operations.map((card) => (
            /* Card Bounds: Exactly 290px x 580px, completely flat corners (0px) */
            <div
              key={card.id}
              className={`w-[290px] h-[580px] flex-shrink-0 rounded-none border-2 flex flex-col justify-between overflow-hidden transition-all duration-300 group ${card.isLightVariant
                ? 'bg-white border-[#1B79EE]/40 hover:bg-[#1B79EE] hover:border-[#1B79EE]'
                : 'bg-white border-[#004aad] hover:bg-[#004aad] hover:border-[#004aad]'
                }`}
            >

              {/* Top Block */}
              <div>
                {/* Native HTML5 High-Performance Video Player: Exactly 286px x 256px */}
                <div className="relative w-[286px] h-[256px] mx-auto bg-black overflow-hidden rounded-none mt-[2px]">
                  {/* <video
                    src={card.imageSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-none"
                  /> */}
                  <Image
                    src={card.imageSrc}
                    alt='mold image'
                    fill
                    className="w-full h-full object-cover rounded-none"
                  />
                  {/* Decorative Color Stripe on top edge of frame */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${card.isLightVariant ? 'bg-[#1B79EE]' : 'bg-[#004aad]'
                    }`} />
                </div>

                {/* Information Content Area */}
                <div className="p-4 space-y-3 text-left">
                  {/* Badge Component */}
                  <div className={`text-[9px] font-black tracking-widest uppercase border px-2 py-0.5 inline-block rounded-none transition-colors duration-300 ${card.isLightVariant
                    ? 'border-[#1B79EE] text-[#1B79EE] group-hover:border-white group-hover:text-white'
                    : 'border-[#004aad] text-[#004aad] group-hover:border-white group-hover:text-white'
                    }`}>
                    {card.badge}
                  </div>

                  {/* Title Header */}
                  <h3 className={`text-base font-black tracking-tight leading-tight uppercase rounded-none transition-colors duration-300 ${card.isLightVariant ? 'text-[#004aad] group-hover:text-white' : 'text-[#004aad] group-hover:text-white'
                    }`}>
                    {card.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className={`text-xs font-light leading-relaxed rounded-none transition-colors duration-300 ${card.isLightVariant ? 'text-slate-700 group-hover:text-white/90' : 'text-slate-700 group-hover:text-white/90'
                    }`}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Interactive Layer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-none transition-colors duration-300 group-hover:bg-transparent group-hover:border-white/10">
                <button className={`w-full text-white text-[10px] font-black uppercase tracking-widest py-4 px-4 flex items-center justify-center gap-2 transition-colors rounded-none ${card.isLightVariant
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
        <div className="flex flex-wrap mb-16 justify-evenly items-start gap-8 perspective-1000">
          {cards.map((card) => {
            const isFlipped = flippedCard === card.id

            return (
              /* CARD BOUNDS WRAPPER: Forced strictly to 290px x 580px with 0px corners */
              <div
                key={card.id}
                className="w-[290px] h-[330px] cursor-pointer group relative rounded-none"
                onMouseEnter={() => setFlippedCard(card.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : card.id)}
              >

                {/* Actual Card Body with 3D Flips */}
                <div className={`w-full h-full transition-all duration-700 preserve-3d relative rounded-none ${isFlipped ? 'rotate-y-180' : ''
                  }`}>

                  {/* FRONT SIDE (Strictly 290px x 580px framework boundaries) */}
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between backface-hidden bg-white border-2 border-[#004aad] rounded-none z-20 transition-all duration-300 group-hover:bg-[#004aad]">
                    <div>
                      <div className="flex items-center justify-between mb-6 rounded-none">
                        <div className="p-3 bg-slate-50 border border-slate-200 transition-colors duration-300 group-hover:bg-[#1B79EE] group-hover:border-[#1B79EE] rounded-none">
                          {card.icon}
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-[#1B79EE] uppercase tracking-wider block mb-1 rounded-none group-hover:text-white/90 transition-colors duration-300">
                        {card.tagline}
                      </span>
                      <h3 className="text-xl font-black text-[#004aad] tracking-wide mb-4 rounded-none group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-[#1B79EE] text-sm leading-relaxed font-light rounded-none group-hover:text-white/90 transition-colors duration-300">
                        {card.frontDesc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#004aad] font-mono text-xs font-bold uppercase tracking-widest pt-4 border-t border-slate-100 rounded-none group-hover:text-white group-hover:border-white/10 transition-colors duration-300">
                      Reveal Terminal Specs <ArrowRight className="w-4 h-4 text-[#1B79EE] group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>

                  {/* BACK SIDE (ROTATED 180 DEG) */}
                  <div className="absolute inset-0 w-full h-full p-6 flex flex-col justify-between backface-hidden rotate-y-180 bg-[#004aad] border-2 border-[#004aad] rounded-none z-10">
                    <div>
                      <span className="text-[10px] font-mono font-black text-white/70 uppercase tracking-widest block mb-2 rounded-none">
                        {card.title} DETAILS
                      </span>
                      <p className="text-white text-xs md:text-sm leading-relaxed font-light rounded-none">
                        {card.backDesc}
                      </p>
                    </div>

                    <button
                      className="w-full bg-white text-[#004aad] hover:bg-[#1B79EE] hover:text-white text-xs font-black uppercase tracking-wider py-4 px-4 flex items-center justify-center gap-2 transition-colors rounded-none outline-none border-none"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(`Proceeding to: ${card.cta}`);
                      }}
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
        {/* Header Text Block */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 bg-[#004aad]/10 border border-[#1B79EE]/30 px-4 py-1.5 text-xs font-mono font-black text-[#1B79EE] uppercase tracking-widest mb-4 rounded-none">
            Industrial Trading Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#004aad] uppercase rounded-none">
            The Crossroads of Everything <span className="text-[#1B79EE]">Precast</span>
          </h2>
          <p className="text-[#1B79EE] mt-4 max-w-2xl mx-auto text-sm md:text-base font-light rounded-none">
            Every pipeline converging in one environment. Hover or select an operational target path to interact with the global ledger ecosystem.
          </p>
        </div>
      </div>
    </section>
  )
}