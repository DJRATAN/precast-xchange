'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Newspaper, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface NewsArticle {
  id: string;
  category: string;
  title: string;
  timestamp: string;
  imageUrl: string;
  summary: string;
}

const NEWS_DATABASE: NewsArticle[] = [
  {
    id: "NW-01",
    category: "MOLD INNOVATION",
    title: "Next-Gen Hydraulic Tilting Tables Accelerate Infrastructure Runways",
    timestamp: "2 HOURS AGO",
    imageUrl: "/assets/mold form/catch-01 (4).JPG",
    summary: "Automated magnetic side shuttering arrays reduce mold changeover cycles by 40% across modern smart factory nodes."
  },
  {
    id: "NW-02",
    category: "GLOBAL LOGISTICS",
    title: "US East Coast Precast Supply Chains Expand Corridor Logistics",
    timestamp: "5 HOURS AGO",
    imageUrl: "/assets/mold form/catch-01 (3).JPG",
    summary: "New deep-water casting facilities establish zero-mile marine transit lanes for massive box culvert delivery arrays."
  },
  {
    id: "NW-03",
    category: "COMPLIANCE & TIER",
    title: "Auditors Approve Standardized Carbon-Neutral Aggregate Castings",
    timestamp: "1 DAY AGO",
    imageUrl: "/assets/mold form/catch-01 (4).JPG",
    summary: "Financial matrix networks lock down raw industrial verification parameters to clear federal green construction mandates."
  }
];

export default function PrecastNewsTTW() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 border-b-4 border-[#004aad] text-left rounded-none">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="border-b-4 border-[#004aad] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 rounded-none">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#1b79ee]" />
              <span className="text-[10px] font-mono font-black text-[#1b79ee] uppercase tracking-[0.25em] block">
                Ecosystem Global Intelligence Hub
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter leading-none">
              Precast News Wire
            </h2>
          </div>
          <span className="text-[10px] font-mono font-black text-white bg-[#004aad] px-3 py-1 rounded-none border border-[#00bbff]">
            LIVE TRANSMISSION TERMINAL
          </span>
        </div>

        {/* TTW REFERENCE: DISAPPEARING SLICE NEWS ENGINE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-none items-stretch min-h-[420px]">
          {NEWS_DATABASE.map((article, idx) => {
            const isAnyHovered = hoveredIndex !== null;
            const isThisHovered = hoveredIndex === idx;

            return (
              <div
                key={article.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col justify-between border-4 border-[#004aad] bg-white transition-all duration-500 ease-out p-6 md:p-8 cursor-pointer rounded-none group/card
                  ${isThisHovered ? 'lg:scale-[1.02] shadow-[6px_6px_0px_#00bbff]' : 'shadow-[4px_4px_0px_#1b79ee]'}
                  ${isAnyHovered && !isThisHovered ? 'lg:opacity-40' : 'lg:opacity-100'}
                `}
              >
                {/* DYNAMIC DISAPPEARING IMAGE LAYER CORE */}
                <div 
                  className={`relative w-full overflow-hidden border-2 border-[#004aad]  transition-all duration-500 ease-in-out mb-6 rounded-none
                    ${isAnyHovered && !isThisHovered ? 'h-0 opacity-0 mb-0 border-0' : 'h-48 opacity-100'}
                  `}
                >
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-115 "
                  />
                 </div>

                {/* TEXT INFORMATION AREA */}
                <div className="space-y-3 flex-1 flex flex-col justify-start rounded-none">
                  <div className="flex justify-between items-center w-full font-mono text-[9px] font-black tracking-widest rounded-none text-[#1b79ee]">
                    <span>// {article.category}</span>
                    <span className="flex items-center gap-1 text-[#004aad]/60">
                      <Clock className="w-2.5 h-2.5" /> {article.timestamp}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#004aad] uppercase tracking-tight group-hover/card:text-[#1b79ee] transition-colors leading-tight rounded-none">
                    {article.title}
                  </h3>

                  {/* Dynamic reveal of summary description upon direct section interaction */}
                  <p className={`text-slate-600 text-xs font-semibold leading-relaxed transition-all duration-500 rounded-none overflow-hidden
                    ${isThisHovered ? 'opacity-100 max-h-24 pt-1' : 'lg:opacity-0 lg:max-h-0'}
                  `}>
                    {article.summary}
                  </p>
                </div>

                {/* BOTTOM ACTION PLATE LAYOUT ANCHOR */}
                <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between w-full rounded-none">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] font-black text-[#004aad]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00bbff]" />
                    <span>VERIFIED WIRE NODE</span>
                  </div>
                  <div className="w-8 h-8 border-2 border-[#004aad] flex items-center justify-center bg-white text-[#004aad] group-hover/card:bg-[#004aad] group-hover/card:text-white group-hover/card:border-[#004aad] transition-all duration-200 rounded-none shadow-[2px_2px_0px_#1b79ee]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}