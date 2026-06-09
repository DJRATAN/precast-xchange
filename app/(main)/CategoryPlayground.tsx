"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, SkipForward, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface CategoryVideoNode {
    id: string;
    title: string;
    subText: string;
    videoUrl: string;
}

interface CategoryPlaygroundProps {
    categoryTitle: string;
    systemIndexCode?: string; // e.g., "LN-10" — auto-derived from categoryTitle if omitted
    nodes?: CategoryVideoNode[];  // auto-generated placeholder nodes if omitted
}

/** Derive a short code like "PM-1000" from a title like "Precast Mold" */
function deriveCode(title: string): string {
    const words = title.trim().split(/\s+/);
    const initials = words.map((w) => w[0]?.toUpperCase() ?? '').join('');
    const num = (title.length * 97) % 9000 + 1000; // deterministic 4-digit number
    return `${initials}-${num}`;
}

/** Generate simple placeholder nodes when none are provided */
function defaultNodes(categoryTitle: string): CategoryVideoNode[] {
    const slugs = [
        { title: `${categoryTitle} Overview`,      subText: 'Introduction to the category range' },
        { title: `${categoryTitle} Systems`,        subText: 'Core product lines & configurations' },
        { title: `${categoryTitle} Applications`,   subText: 'Real-world use cases & installations' },
        { title: `${categoryTitle} Specifications`, subText: 'Technical data & compliance standards' },
    ];
    return slugs.map((s, i) => ({
        id: String(i + 1),
        title: s.title,
        subText: s.subText,
        videoUrl: '',
    }));
}

export default function CategoryPlayground({
    categoryTitle,
    systemIndexCode,
    nodes,
}: CategoryPlaygroundProps) {
    const resolvedCode  = systemIndexCode ?? deriveCode(categoryTitle);
    const resolvedNodes = (nodes && nodes.length > 0) ? nodes : defaultNodes(categoryTitle);

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!resolvedNodes || resolvedNodes.length === 0) return null;
    const activeNode = resolvedNodes[currentIndex];

    const handleNextNode = () => {
        setCurrentIndex((prev) => (prev + 1) % resolvedNodes.length);
    };

    return (
        <section className="w-full bg-white py-12 px-4 md:px-12 border-b-4 border-[#004aad] rounded-none text-left">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-none">
                
                {/* LEFT SIDE: THE TIKTOK 9:16 VISUAL TRACK */}
                <div className="lg:col-span-5 flex flex-col justify-center items-center bg-black border-4 border-[#004aad] relative overflow-hidden h-[580px] rounded-none shadow-[6px_6px_0px_#1b79ee]">
                    
                    <AnimatePresence mode="wait">
                        {activeNode.videoUrl ? (
                            <motion.video
                                key={activeNode.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-0 rounded-none"
                                src={activeNode.videoUrl}
                            />
                        ) : (
                            <motion.div
                                key={activeNode.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-gradient-to-br from-[#001f5b] to-[#004aad]"
                            >
                                <span className="text-[#00bbff] font-mono text-xs font-black uppercase tracking-widest opacity-50">NO VIDEO</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    -- Visual Verification Badge (Instantly tells users it is real/good without deep reading)
                    <div className="absolute top-4 left-4 z-10 bg-[#004aad] text-white px-4 py-2 border-2 border-[#00bbff] rounded-none font-mono text-[10px] font-black tracking-widest flex items-center gap-2 shadow-[0_0_10px_#00bbff]">
                        <CheckCircle2 className="w-4 h-4 text-[#00bbff]" />
                        <span>VERIFIED APPROVED</span>
                    </div>

                    -- Bottom Large Text Title Block Overlay
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6 z-10 text-white flex flex-col gap-1 rounded-none">
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-none text-white">
                            {activeNode.title}
                        </h3>
                        <p className="text-[#00bbff] font-mono text-xs font-bold uppercase tracking-wider">
                            {activeNode.subText}
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE: SIMPLIFIED ULTRA-LARGE DISCOVERY CONTROLS */}
                <div className="lg:col-span-7 flex flex-col justify-between border-4 border-[#004aad] p-6 md:p-10 bg-white rounded-none shadow-[6px_6px_0px_#1b79ee]">
                    
                    <div className="space-y-6 rounded-none">
                        <div className="flex items-center justify-between border-b-4 border-[#004aad] pb-4 rounded-none">
                            <div>
                                <span className="text-[11px] font-mono font-black text-[#1b79ee] uppercase tracking-[0.3em] block">CATEGORY MODULE // {resolvedCode}</span>
                                <h2 className="text-3xl md:text-4xl font-black text-[#004aad] uppercase tracking-tighter mt-1">{categoryTitle}</h2>
                            </div>
                        </div>

                        {/* Large Simplified Explainer Box */}
                        <div className="p-6 bg-[#004aad]/5 border-2 border-[#004aad] rounded-none">
                            <p className="text-[#004aad] text-lg font-black uppercase tracking-wide leading-snug">
                                Watch the video demonstration on the left. Click the large action triggers below to navigate this inventory tier.
                            </p>
                        </div>
                    </div>

                    {/* TWO GIANT BUTTONS FOR ELDERLY/ACCESSIBILITY SIZE FOCUS */}
                    <div className="pt-8 flex flex-col sm:flex-row gap-6 rounded-none">
                        <button 
                            onClick={handleNextNode}
                            className="flex-1 border-4 border-[#004aad] bg-white text-[#004aad] py-6 px-8 text-sm font-black uppercase tracking-widest transition-all duration-200 rounded-none outline-none flex items-center justify-center gap-3 hover:bg-[#1b79ee] hover:text-white hover:border-[#1b79ee]"
                        >
                            <SkipForward className="w-5 h-5 shrink-0" />
                            <span>See Next Video</span>
                        </button>
                        
                        <button className="flex-1 bg-[#004aad] border-4 border-[#004aad] text-white py-6 px-8 text-sm font-black uppercase tracking-widest transition-all duration-300 rounded-none outline-none flex items-center justify-center gap-3 shadow-[4px_4px_0px_#1b79ee] hover:bg-[#1b79ee] hover:border-[#1b79ee] hover:shadow-[0_0_20px_rgba(0,187,255,0.8),4px_4px_0px_#00bbff]">
                            <span>Select This</span>
                            <ArrowUpRight className="w-5 h-5 shrink-0" />
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}