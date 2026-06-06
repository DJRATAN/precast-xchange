'use client';

import { partnerData } from '@/lib';
import Image from 'next/image';
import React from 'react';

type TabKey = keyof typeof partnerData;

export default function FourColumnMarquee() {
  const categories = partnerData ? (Object.keys(partnerData) as Array<TabKey>) : [];

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8 bg-white font-sans rounded-none text-left">

      {/* Header Section - Stripped of Serif and Red Highlights */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-[#004aad] pb-6 rounded-none">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter">
            Global Partners
          </h2>
          <p className="text-sm md:text-base text-[#1B79EE] font-bold uppercase tracking-wider mt-2">
            The network powering the future of precast concrete.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-[#1B79EE] pl-4 md:pl-0 md:pr-4 rounded-none">
          <h3 className="font-black text-sm text-[#004aad] mb-1 uppercase tracking-widest">Ecosystem</h3>
          <p className="text-xs font-mono font-bold text-[#004aad]/60 uppercase tracking-tight">Hover to inspect</p>
        </div>
      </div>

      {/* HORIZONTAL MARQUEE CONTAINER - Enforces Sharp Flat Border Framing */}
      <div className="w-full border-2 border-[#004aad] rounded-none bg-white flex flex-col overflow-hidden">

        {/* CSS Engine Matrix for Alternating Horizontal Marquee Paths */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          
          .animate-scroll-x {
            animation: scroll-x var(--marquee-duration) linear infinite;
            width: max-content;
          }
          
          .animate-scroll-x-reverse {
            animation: scroll-x var(--marquee-duration) linear infinite reverse;
            width: max-content;
          }

          .row-group:hover .animate-scroll-x,
          .row-group:hover .animate-scroll-x-reverse {
            animation-play-state: paused;
          }
        `}} />

        {/* Generate a Horizontal Row Matrix for each Asset Category */}
        {categories.map((category, idx) => {
          const list = partnerData[category] || [];

          if (list.length === 0) return null;

          const repeatCount = list.length < 8 ? 8 : 4;
          const combinedList = Array(repeatCount).fill(list).flat();

          // Speed Tracking Array Matrix
          const speeds = [200, 200, 200, 200];
          const currentSpeed = speeds[idx % speeds.length];
          const dynamicDuration = `${currentSpeed}s`;

          // Row Alternating Vectors
          const animationClass = idx % 2 === 0 ? 'animate-scroll-x' : 'animate-scroll-x-reverse';

          return (
            <div
              key={category}
              className="row-group flex flex-row w-full h-[140px] md:h-[160px] border-b-2 border-[#004aad]/10 last:border-b-0 relative bg-white rounded-none"
            >

              {/* Category Anchor Node Label */}
              <div className="w-28 md:w-52 shrink-0 bg-[#004aad] text-white flex items-center justify-center border-r-2 border-[#1B79EE] z-20 rounded-none">
                <h3 className="font-black uppercase tracking-widest text-[10px] md:text-xs text-center px-3 break-words">
                  {category}
                </h3>
              </div>

              {/* Scrolling Content Presentation Runway */}
              <div className="flex-1 overflow-hidden relative flex items-center bg-white rounded-none">

                {/* Removed opacity gradient feathers for clean industrial visibility cutlines */}
                <div className={`flex flex-row h-full items-center ${animationClass}`}
                     style={{ '--marquee-duration': dynamicDuration } as React.CSSProperties}>

                  {[1, 2].map((blockId) => (
                    <div key={blockId} className="flex flex-row gap-4 md:gap-6 pr-4 md:pr-6 items-center h-full px-4 md:px-6 rounded-none">
                      {combinedList.map((src, index) => (
                        <div
                          key={`${category}-${blockId}-${index}`}
                          className="w-28 md:w-44 aspect-video flex-shrink-0 flex items-center justify-center p-3 border border-[#004aad]/20 bg-white rounded-none transition-all duration-300
                                     hover:border-[#1B79EE] hover:shadow-[4px_4px_0px_0px_#004aad]"
                        >
                          <Image
                            width={120}
                            height={60}
                            loading='lazy'
                            src={src}
                            alt={`${category} Systems Logo`}
                            className="w-full h-full object-contain filter transition-all duration-200 mix-blend-multiply rounded-none"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  ))}

                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}