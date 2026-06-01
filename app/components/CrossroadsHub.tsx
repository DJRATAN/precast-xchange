'use client'

import React, { useState } from 'react'
import { Upload, HelpCircle, Heart, ArrowRight, RefreshCw } from "lucide-react"

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
      
      <div className="w-full relative z-10">
        
        {/* Header Text Block */}
        <div className="text-center mb-16">
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

        {/* 3D Flipping Grid Mechanism - Arranged nicely with flexible spacing */}
        <div className="flex flex-wrap justify-evenly items-start gap-8 perspective-1000">
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
                <div className={`w-full h-full transition-all duration-700 preserve-3d relative rounded-none ${
                  isFlipped ? 'rotate-y-180' : ''
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

      </div>
    </section>
  )
}