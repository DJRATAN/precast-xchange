'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Newspaper, Clock, ShieldCheck, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { BlogPost, BLOG_DATABASE } from '@/app/(main)/blog/data';

export default function PrecastBlogWire() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-12 border-b-4 border-[#004aad] text-left rounded-none">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* HEADER BLOCK */}
        <div className="border-b-4 border-[#004aad] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 rounded-none">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Newspaper className="w-4 h-4 text-[#1b79ee]" />
              <span className="text-[10px] font-mono font-black text-[#1b79ee] uppercase tracking-[0.25em] block">
                Ecosystem Knowledge & Intelligence Network
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter leading-none">
              Precast Insights & Blogs
            </h2>
          </div>
          <span className="text-[10px] font-mono font-black text-white bg-[#004aad] px-3 py-1 rounded-none border border-[#00bbff]">
            CENTRAL ARTICLE STREAM
          </span>
        </div>

        {/* TTW REFERENCE LAYOUT: DISAPPEARING SLICE SLUG ENGINES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-none items-stretch min-h-[440px]">
          {BLOG_DATABASE.map((post, idx) => {
            const isAnyHovered = hoveredIndex !== null;
            const isThisHovered = hoveredIndex === idx;

            return (
              <Link 
                href={`/blogs/${post.slug}`} 
                key={post.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative flex flex-col justify-between border-4 border-[#004aad] bg-white transition-all duration-500 ease-out p-6 md:p-8 cursor-pointer rounded-none group/card
                  ${isThisHovered ? 'lg:scale-[1.02] shadow-[6px_6px_0px_#00bbff]' : 'shadow-[4px_4px_0px_#1b79ee]'}
                  ${isAnyHovered && !isThisHovered ? 'lg:opacity-30' : 'lg:opacity-100'}
                `}
              >
                {/* DYNAMIC DISAPPEARING IMAGE LAYER FRAME */}
                <div 
                  className={`relative w-full overflow-hidden border-2 border-[#004aad] bg-zinc-900 transition-all duration-500 ease-in-out mb-6 rounded-none
                    ${isAnyHovered && !isThisHovered ? 'h-0 opacity-0 mb-0 border-0' : 'h-48 opacity-100'}
                  `}
                >
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/card:scale-115 mix-blend-multiply opacity-90 rounded-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-none" />
                </div>

                {/* STRUCTURAL CONTENT COMPARTMENT */}
                <div className="space-y-3 flex-1 flex flex-col justify-start rounded-none">
                  <div className="flex justify-between items-center w-full font-mono text-[9px] font-black tracking-widest rounded-none text-[#1b79ee]">
                    <span>// {post.category}</span>
                    <span className="flex items-center gap-1 text-[#004aad]/60">
                      <Clock className="w-2.5 h-2.5" /> {post.timestamp}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-[#004aad] uppercase tracking-tight group-hover/card:text-[#1b79ee] transition-colors leading-tight rounded-none">
                    {post.title}
                  </h3>

                  {/* Context Summary Container (Reveals when hovered) */}
                  <p className={`text-slate-600 text-xs font-semibold leading-relaxed transition-all duration-500 rounded-none overflow-hidden
                    ${isThisHovered ? 'opacity-100 max-h-24 pt-1' : 'lg:opacity-0 lg:max-h-0'}
                  `}>
                    {post.summary}
                  </p>
                </div>

                {/* BOTTOM METRICS BAR */}
                <div className="pt-6 border-t border-slate-100 mt-4 flex items-center justify-between w-full rounded-none">
                  <div className="flex items-center gap-1.5 font-mono text-[9px] font-black text-[#004aad]">
                    <User2 className="w-3.5 h-3.5 text-[#1b79ee]" />
                    <span>BY {post.author}</span>
                  </div>
                  <div className="w-8 h-8 border-2 border-[#004aad] flex items-center justify-center bg-white text-[#004aad] group-hover/card:bg-[#004aad] group-hover/card:text-white group-hover/card:border-[#004aad] transition-all duration-200 rounded-none shadow-[2px_2px_0px_#1b79ee]">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}