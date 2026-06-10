'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {   Share2, Radio, PlayCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const SOCIAL_CHANNELS = [
    { id: 'INSTA', icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram Feed', color: '#00bbff' },
    { id: 'TIKTOK', icon: <Share2 className="w-5 h-5" />, label: 'TikTok Live', color: '#1B79EE' },
    { id: 'YOUTUBE', icon: <FaYoutube className="w-5 h-5" />, label: 'YouTube Shorts', color: '#004aad' },
];
//  const channels = [
//         { icon: <Instagram />, name: 'Instagram', color: 'hover:text-[#E1306C]' },
//         { icon: <Share2 />, name: 'TikTok', color: 'hover:text-[#000000]' },
//         { icon: <Youtube />, name: 'YouTube', color: 'hover:text-[#FF0000]' },
//         { icon: <Linkedin />, name: 'LinkedIn', color: 'hover:text-[#0077B5]' },
//         { icon: <MessageCircle />, name: 'WhatsApp', color: 'hover:text-[#25D366]' },
//         { icon: <Facebook />, name: 'Facebook', color: 'hover:text-[#1877F2]' },
//     ];
        // <div className="flex justify-center gap-6 py-8 bg-white border-t border-slate-200">
        //     {channels.map((ch) => (
        //         <a key={ch.name} href="#" className={`text-[#004aad] transition-all duration-300 ${ch.color} transform hover:scale-125`}>
        //             {React.cloneElement(ch.icon as React.ReactElement, { size: 32 })}
        //         </a>
        //     ))}
        // </div>
export default function PrecastCentralFooter() {
    const [activeChannel, setActiveChannel] = useState('INSTA');

    return (
        <section className="w-full bg-[#004aad] py-12 px-6 md:px-12 border-t-8 border-[#00bbff] rounded-none mt-20">
            <div className="max-w-7xl mx-auto space-y-10">
                
                {/* 1. SECTION HEADER: BIG & VISUAL */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#00bbff] p-4 rounded-none shadow-[4px_4px_0px_#1B79EE] animate-pulse">
                            <Radio className="text-white w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Precast Central</h2>
                            <p className="text-[#00bbff] font-mono text-xs font-bold tracking-[0.3em] uppercase mt-1">Live Global Industry Broadcast</p>
                        </div>
                    </div>

                    {/* CHANNEL SELECTOR: MASSIVE BUTTONS FOR ELDERLY ACCESSIBILITY */}
                    <div className="flex gap-2">
                        {SOCIAL_CHANNELS.map((channel) => (
                            <button
                                key={channel.id}
                                onClick={() => setActiveChannel(channel.id)}
                                className={`px-6 py-4 flex items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all duration-300 rounded-none border-2 outline-none
                                    ${activeChannel === channel.id 
                                        ? 'bg-white text-[#004aad] border-white shadow-[0_0_20px_#00bbff]' 
                                        : 'bg-transparent text-white border-white/20 hover:border-[#00bbff]'
                                    }`}
                            >
                                {channel.icon}
                                <span className="hidden sm:inline">{channel.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. THE LIVE LOOP GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="relative group overflow-hidden border-2 border-white/10 hover:border-[#00bbff] transition-all duration-500 rounded-none cursor-pointer">
                            {/* Auto-playing loop simulation */}
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                src={item % 2 === 0 ? "/video/mega mold 30-48 red.mp4" : "/video/6266672_River Traffic Drone Snow_By_Dominick_Anskis_Artlist_HD.mp4"}
                            />
                            
                            {/* Visual Action Indicator */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <PlayCircle className="w-12 h-12 text-[#00bbff] drop-shadow-[0_0_10px_#00bbff]" />
                            </div>

                            {/* Bottom Identity Bar */}
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-black/60 backdrop-blur-sm border-t border-white/20">
                                <p className="text-white text-[9px] font-black uppercase tracking-tighter">Live Transmission Node #{item}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. FINAL CTA: HUGE BUTTON FOR ILLITERATE/70+ TARGETING */}
                <div className="pt-4">
                    <button className="w-full bg-white text-[#004aad] border-4 border-[#00bbff] py-8 text-xl font-black uppercase tracking-[0.5em] hover:bg-[#00bbff] hover:text-white transition-all duration-500 rounded-none shadow-[8px_8px_0px_#1B79EE] flex items-center justify-center gap-6 group">
                        <span>OPEN FULL BROADCAST SCREEN</span>
                        <Radio className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}