'use client'
import React, { useRef, useEffect } from 'react'

export interface TaglineProps {
  topMicroText: string;
  videoSrc: string;
  ctaText?: string;
  lineOneText: string;
  lineOneHighlightText?: string;
  lineOneDefaultColor: 'darkBlue' | 'lightBlue' | 'white';
  lineOneHighlightColor?: 'darkBlue' | 'lightBlue' | 'white';
  lineTwoText: string;
  lineTwoHighlightText?: string;
  lineTwoDefaultColor: 'darkBlue' | 'lightBlue' | 'white';
  lineTwoHighlightColor?: 'darkBlue' | 'lightBlue' | 'white';
}

export default function TaglineHero(props: TaglineProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Directly observe the video element — no state, no timing race
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
          observer.disconnect() // fire once, then stop
        }
      },
      { threshold: 0 } // fires as soon as 1 pixel is visible
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const getColorClass = (colorType: 'darkBlue' | 'lightBlue' | 'white') => {
    switch (colorType) {
      case 'darkBlue': return 'text-[#004aad]';
      case 'lightBlue': return 'text-[#1B79EE]';
      case 'white': return 'text-white';
      default: return 'text-[#004aad]';
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad] px-8 md:px-16 lg:px-24">

      {/* Background video — in DOM always, plays only when scrolled into view */}
      <div className="absolute inset-0 z-0 bg-white rounded-none">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover transition-opacity duration-1000 mix-blend-multiply rounded-none"
        >
          <source src={props.videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE06_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE06_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none rounded-none" />

      {/* Layout Content Frame */}
      <div className="relative z-20 text-left w-full max-w-7xl py-12 rounded-none">

        <div className="inline-block bg-[#004aad] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-widest px-4 py-2 mb-8 rounded-none border border-[#1B79EE]">
          {props.topMicroText}
        </div>

        <div className="flex flex-col gap-y-3 rounded-none">
          <h2 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none rounded-none ${getColorClass(props.lineOneDefaultColor)}`}>
            {props.lineOneText}
            {props.lineOneHighlightText && props.lineOneHighlightColor && (
              <span className={getColorClass(props.lineOneHighlightColor)}>{props.lineOneHighlightText}</span>
            )}
          </h2>

          <h2 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none rounded-none ${getColorClass(props.lineTwoDefaultColor)}`}>
            {props.lineTwoText}
            {props.lineTwoHighlightText && props.lineTwoHighlightColor && (
              <span className={getColorClass(props.lineTwoHighlightColor)}>{props.lineTwoHighlightText}</span>
            )}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-start pt-12 rounded-none">
          <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
            {props.ctaText || "Explore Global Index"}
          </button>
        </div>

      </div>
    </section>
  )
}