'use client'
import React, { useState } from 'react'

export interface TaglineConfig {
  id: string;
  type: 'DYNAMIC' | 'STATIC_STACKED' | 'BADGE_ALIGNED' | 'ANIMATION';
  topMicroText: string;
  mainPhrase: string[];
  videoSrc: string;
  ctaText?: string;
}

interface TaglineSectionProps {
  data: TaglineConfig;
  // If this section contains your layout typing logic engine, pass the current slice string state
  dynamicText?: string;
}

export default function TaglineSection({ data, dynamicText }: TaglineSectionProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">
      
      {/* Background Video Layer Core */}
      <div className="absolute inset-0 z-0 bg-white rounded-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto" 
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 mix-blend-multiply rounded-none ${
            isVideoLoaded ? 'opacity-[0.12]' : 'opacity-0'
          }`}
        >
          <source src={data.videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Industrial Structural Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE06_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none rounded-none" />
      
      {/* Content Stack Layout (Left-Aligned Structure) */}
      <div className="relative z-20 text-left w-full max-w-7xl py-12 rounded-none">
        
        {/* Render Type 1: Badge Pill Block Variant */}
        {(data.type === 'DYNAMIC' || data.type === 'BADGE_ALIGNED') ? (
          <div className="inline-block bg-[#004aad] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-4 py-2 mb-8 rounded-none border border-[#1B79EE]">
            {data.topMicroText}
          </div>
        ) : (
          /* Render Type 2: Standard Clean Text Header Variant */
          <div className="text-[11px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.3em] mb-4 rounded-none block">
            {data.topMicroText}
          </div>
        )}

        {/* Content Processing Matrix */}
        <div className="flex flex-col gap-y-3 rounded-none">
          {data.type === 'BADGE_ALIGNED' ? (
            <>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
                CONCRETE <span className="text-[#1B79EE]">BRIDGING</span>
              </h2>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
                & CONNECTING ALL <span className="text-[#1B79EE]">PRECASTERS</span>
              </h2>
            </>
          ) : data.type === 'DYNAMIC' ? (
            <>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#004aad] rounded-none">
                {data.mainPhrase[0]}
              </h2>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-[#1B79EE] rounded-none">
                {data.mainPhrase[1]}
              </h2>
              {dynamicText && (
                <div className="h-[50px] sm:h-[70px] md:h-[90px] lg:h-[110px] flex items-center justify-start rounded-none mt-4 whitespace-nowrap">
                  <span 
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
                    style={{ paintOrder: "stroke fill", WebkitTextStroke: "2.5px #004aad", color: "#1B79EE", textShadow: "none" }}
                  >
                    {dynamicText}
                  </span>
                  <span className="inline-block w-2.5 h-6 sm:h-10 md:h-14 lg:h-16 bg-[#004aad] ml-4 animate-pulse rounded-none shrink-0" />
                </div>
              )}
            </>
          ) : (
            /* STATIC STACKED & ANIMATION Variants */
            <div className="space-y-4 rounded-none">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-none text-[#004aad] max-w-5xl rounded-none">
                {data.mainPhrase[0]}
              </h2>
              <h2 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none rounded-none"
                style={{ paintOrder: "stroke fill", WebkitTextStroke: "3px #004aad", color: "#1B79EE" }}
              >
                {data.mainPhrase[1]}
              </h2>
            </div>
          )}
        </div>

        {/* Action Button Trigger Layer */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start pt-12 rounded-none">
          <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
            {data.ctaText || "Explore Global Index"}
          </button>
        </div>

      </div>
    </section>
  )
}