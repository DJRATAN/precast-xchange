"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Power, Activity, HardHat, Hammer, Cpu } from 'lucide-react';

export default function EntrySystem() {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (progress < 100) {
            const timer = setTimeout(() => setProgress(prev => prev + 1), 25);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    useEffect(() => {
        audioRef.current = new Audio('/assets/audio/background.mpeg');
        audioRef.current.loop = true;
    }, []);

    const handleStart = () => {
        setIsInitialized(true);
        if (audioRef.current) {
            audioRef.current.play();
            audioRef.current.volume = 0.3;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <AnimatePresence>
                {!isInitialized && (
                    <motion.div
                        exit={{ 
                            opacity: 0, 
                            scale: 1.1, 
                            filter: "blur(20px)",
                            transition: { duration: 0.8, ease: "circOut" } 
                        }}
                        className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-4 md:p-6 overflow-hidden rounded-none"
                    >
                        {/* ARCHITECTURAL BACKGROUND GRID */}
                        <div className="" />

                        {/* MASTER INTERFACE CARD */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-2xl bg-[#004aad] border py-2 border-white/10 rounded-none overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative z-10"
                        >
                            {/* TOP SECTION: VISUAL RUNWAY (100% Full Opacity Viewport) */}
                            <div className="relative w-full h-48 md:h-64 overflow-hidden border-b-2 border-[#1B79EE]/30 bg-black rounded-none">
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-100 z-0 rounded-none"
                                >
                                    <source src="/video/6584801_Aerial Cityscape Architectural Landmark South Korea Songdo_By_Yeonmedia_Artlist_HD.mp4" type="video/mp4" />
                                </video> 
                                
                                {/* Overlay Identity Token Plate */}
                                <div className="absolute bottom-4 left-6 z-10 bg-[#004aad]/90 p-4 border border-white/10 rounded-none max-w-[calc(100%-3rem)]">
                                    <div className="flex items-center gap-2 mb-1 rounded-none">
                                        <Cpu className="w-3.5 h-3.5 text-[#1B79EE]" />
                                        <span className="text-[9px] font-mono font-bold text-white/60 tracking-[0.3em] uppercase">Ecosystem Gateway Node</span>
                                    </div>
                                    <h1 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-none rounded-none">
                                        PRECAST EXCHANGE <span className="text-[#1B79EE]">GROUP</span>
                                    </h1>
                                </div>
                            </div>

                            {/* BOTTOM SECTION: WELCOME & TELEMETRY */}
                            <div className="p-8 md:p-12 space-y-8 bg-[#004aad] rounded-none">
                                
                                {/* WELCOME MESSAGE BLOCK */}
                                <div className="space-y-4 rounded-none">
                                    <div className="flex items-center gap-3 rounded-none">
                                        <div className="h-[1px] w-8 bg-[#1B79EE] rounded-none" />
                                        <p className="text-[#1B79EE] font-mono text-[10px] tracking-[0.3em] uppercase font-black">Incoming Transmission</p>
                                    </div>
                                    <div className="space-y-3 rounded-none">
                                        <h2 className="text-white text-xl font-bold uppercase tracking-tight rounded-none">Dear Patron,</h2>
                                        <p className="text-white/70 text-sm leading-relaxed font-medium max-w-prose rounded-none">
                                            We are delighted that you have taken an opportunity to engage about the 
                                            <span className="text-white font-bold"> marvels of Precast Concrete</span>. 
                                            Find powerful resources at the snap of your fingers at 
                                            <span className="text-[#1B79EE] font-bold"> lightning speed</span>.
                                        </p>
                                    </div>
                                </div>

                                {/* DYNAMIC STATUS ROW */}
                                <div className="flex items-center justify-between border-y border-white/5 py-4 rounded-none">
                                    <div className="flex items-center gap-3 rounded-none">
                                        <Activity className="w-4 h-4 text-[#1B79EE] animate-pulse" />
                                        <p className="text-white font-mono text-[9px] tracking-[0.2em] uppercase font-bold rounded-none">
                                            {progress < 100 ? "Indexing Group Infrastructure..." : "Ecosystem Link Established"}
                                        </p>
                                    </div>
                                    <span className="text-[#1B79EE] font-mono text-[11px] font-black">{progress}%</span>
                                </div>

                                {/* PROGRESS SYSTEM */}
                                <div className="h-[2px] w-full bg-white/5 relative rounded-none">
                                    <motion.div 
                                        className="absolute top-0 left-0 h-full bg-[#1B79EE] rounded-none"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                    />
                                </div>

                                {/* ENTRY PROTOCOL BUTTON */}
                                <div className="h-16 flex items-center justify-center rounded-none">
                                    {progress === 100 ? (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            onClick={handleStart}
                                            className="group relative w-full py-5 bg-[#1B79EE] transition-all overflow-hidden rounded-none border border-[#1B79EE] outline-none"
                                        >
                                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-none" />
                                            <span className="relative z-10 flex items-center justify-center gap-4 text-white group-hover:text-[#004aad] font-black text-xs uppercase tracking-[0.5em] transition-colors rounded-none">
                                                <Power className="w-4 h-4" /> Initialize Group Portal
                                            </span>
                                        </motion.button>
                                    ) : (
                                        <div className="flex gap-8 opacity-40 rounded-none">
                                            <Hammer className="w-5 h-5 text-[#1B79EE] animate-bounce" />
                                            <HardHat className="w-5 h-5 text-white animate-bounce delay-150" />
                                            <Cpu className="w-5 h-5 text-[#1B79EE] animate-pulse delay-300" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FLOATING AUDIO CONTROLLER */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={isInitialized ? { opacity: 1 } : {}}
                className="fixed top-4 right-4 z-[100] rounded-none"
            >
                <button
                    onClick={toggleMute}
                    className="p-3 bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-[#1B79EE] transition-all rounded-none outline-none"
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
            </motion.div> */}
        </>
    );
}