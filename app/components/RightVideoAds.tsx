'use client'

import React, { useRef, useEffect, useState } from 'react'

const adVideos = [
  "/video/Mega_Industries.mp4",
  "/video/PrecastXchange_New.mp4",
  "/video/Total_Tech.mp4",
  "https://player.vimeo.com/video/1188514719?h=582941b6fb&autoplay=1&loop=1&muted=1&background=1"
]

export default function RightVideoAds() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col justify-between p-1 gap-1 bg-white rounded-none"
    >
      {adVideos.map((videoUrl, index) => {
        const isVimeo = videoUrl.includes('vimeo.com')

        return (
          <div
            key={`right-ad-${index}`}
            className="relative w-full h-[116px] bg-white overflow-hidden border border-[#004aad]/40 hover:border-[#1B79EE] transition-colors duration-300 group rounded-none"
          >
            {isInView ? (
              isVimeo ? (
                <iframe
                  title={`vimeo-player-right-${index}`}
                  src={videoUrl}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full pointer-events-none scale-105 opacity-80 group-hover:opacity-100 transition-opacity rounded-none"
                />
              ) : (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity rounded-none"
                />
              )
            ) : (
              // Placeholder while not in view
              <div className="w-full h-full bg-[#004aad]/5 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#004aad]/20 rounded-none" />
              </div>
            )}

            <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-none bg-[#1B79EE] animate-pulse z-20" />
          </div>
        )
      })}
    </div>
  )
}