'use client'

import React, { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  
  const taglines = [
    {
      line1: "BRIDGING",
      line2: "PRECAST CONCRETE",
      accent: "ENDLESSLY..."
    },
    {
      line1: "MILES & MILES",
      line2: "OF PRECAST",
      accent: "TRENCHING"
    },
    {
      line1: "THE MARVELS OF",
      line2: "PRECAST",
      accent: "CONCRETE"
    }
  ]

  // Apple-style timed rotation loop (switches taglines every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % taglines.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [taglines.length])

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      
      {/* 1. HIGH-PERFORMANCE BACKGROUND VIDEO LAYER */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          src="/video/6029794_Lofoten Drone Ocean Sea_By_Kristian_Ozer_Kettner_Artlist_HD.mp4" // Place your high-quality mp4 asset in your public folder
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        />
        {/* Deep, rich overlay to force contrast and readability */}
        <div className="absolute inset-0" />
      </div>

      {/* 2. KINETIC TEXT INTERACTIVE OVERLAY */}
      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[320px]">
          {taglines.map((tagline, index) => (
            <div
              key={index}
              className={`absolute flex flex-col items-center transition-all duration-1000 ease-in-out transform ${
                currentText === index
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
              }`}
            >
              {/* Line 1: Bold White Stark Text */}
              <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-wide drop-shadow-md">
                {tagline.line1}
              </h1>
              
              {/* Line 2: Heavy Solid Dark Blue Core */}
              <h2 className="text-white text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mt-2 drop-shadow-lg">
                {tagline.line2}
              </h2>
              
              {/* Line 3: High-Impact Glowing Light Blue Accent */}
              <span className="text-[#1B79EE] text-3xl md:text-5xl font-mono font-black uppercase tracking-widest mt-6 animate-pulse">
                {tagline.accent}
              </span>
            </div>
          ))}
        </div>

        {/* 3. PREMIUM INTERACTIVE WORKFLOW CALL-TO-ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <button className="bg-[#004aad] text-white font-black text-xs uppercase tracking-wider px-10 py-4 rounded-xl hover:bg-[#1B79EE] transition-all transform hover:scale-105 shadow-xl shadow-[#004aad]/30">
            Explore Exchange Hub
          </button>
          <button className="backdrop-blur-md bg-white/5 border border-white/20 text-white text-xs font-black uppercase tracking-wider px-10 py-4 rounded-xl hover:bg-white hover:text-[#004aad] transition-all">
            Join Precast Ecosystem
          </button>
        </div>
      </div>

      {/* 4. APPLE-STYLE PROGRESS DOTS INDICATOR */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {taglines.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentText(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentText === index ? 'w-8 bg-[#1B79EE]' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

    </section>
  )
}