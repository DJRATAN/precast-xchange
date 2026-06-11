"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/data";

const logos = [
    { src: "/assets/footer_logo/peg.jpeg", alt: "Partner 01" },
    { src: "/assets/footer_logo/precasteng.jpeg", alt: "Partner 02" },
    { src: "/assets/footer_logo/pxchange.jpeg", alt: "Partner 03" },
    { src: "/assets/footer_logo/totaltech.jpeg", alt: "Partner 04" },
    { src: "/assets/footer_logo/trench-unlimited.jpeg", alt: "Partner 05" },
];
const socialLinks = [
    { icon: FaFacebook, href: "#" },
    { icon: BsTwitter, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
];
export default function ExtraordinaryFooter() {
    return (

        <footer className="relative w-full bg-[#004aad] text-white border-t-2 border-slate-100 overflow-hidden select-none">

            {/* 32-INCH FULL WIDTH CONTAINER */}
            <div className="w-full px-8 md:px-10 py-4">
                <div className="w-full bg-[#004aad] text-white pb-10 overflow-hidden">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">



                        {/* 1. LEFT: LOGO + ABOUT */}

                        <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-8">

                            {/* BIG LOGO CONTAINER: White Background, Rounded, Increased Size */}

                            <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-[280px] flex items-center justify-center">

                                <Image

                                    src="/pxgfooter.png"

                                    alt="PrecastXchange"

                                    width={280} // Increased width for "Big Logo"

                                    height={100}

                                    className="object-contain"

                                    priority

                                />

                            </div>



                            <p className="text-white/80 font-medium text-sm leading-relaxed text-center lg:text-left max-w-xs">

                                <strong className="text-white">PrecastXchange</strong> is the global authority dedicated to advancing structural precast technology, engineering, and manufacturing.

                            </p>

                        </div>



                        {/* 2. MIDDLE: HEADLINE + MARQUEE (Spans 6 Columns) */}

                        <div className="lg:col-span-5 flex flex-col items-center ">



                            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 text-center">

                                Our Group Dedicated to Precast

                            </h3>



                            <div className="relative w-full h-24 flex items-center justify-center">

                                <motion.div className="flex items-center justify-center gap-4 h-full">

                                    {logos.map((logo, i) => (

                                        <div

                                            key={i}

                                            className="flex items-center justify-center shrink-0"

                                        >

                                            {/* FIXED WHITE CONTAINER: Same size for every logo */}

                                            <div className="relative w-20 h-12 bg-white rounded-xl flex items-center justify-center  p-1 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-300">

                                                <div className="relative w-full h-full">

                                                    <Image

                                                        src={logo.src}

                                                        alt={logo.alt}

                                                        fill

                                                        className="object-contain p-1"

                                                    />

                                                </div>

                                            </div>

                                        </div>

                                    ))}

                                </motion.div>

                            </div>

                        </div>



                        {/* 3. RIGHT: SOCIAL ICONS */}

                        {/* 5. RIGHT SECTION: SOCIALS TIER & CORPORATE GEOGRAPHIC ADDRESSES (Spans 4 Columns) */}
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6 w-full text-center lg:text-right rounded-none">

                            {/* ROW 1: SOCIAL TIER (flex-row for perfect alignment) */}
                            <div className="flex flex-row gap-3 rounded-none justify-center lg:justify-end">
                                {socialLinks.map((social, i) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            whileHover={{ y: -4 }}
                                            className="group relative rounded-none outline-none"
                                        >
                                            {/* 
                        FIXED GEOMETRIC CONTAINER: 
                        - White background, sharp 0px hard edges
                        - Hover turns background to deep blue, icon white, and adds a neon bloom glow
                    */}
                                            <div className="w-12 h-12 bg-white border-2 border-[#004aad] flex items-center justify-center shadow-[3px_3px_0px_#1B79EE] transition-all duration-300 rounded-none
                                    group-hover:bg-[#004aad] group-hover:text-white group-hover:border-[#004aad]
                                    group-hover:shadow-[0_0_15px_rgba(0,187,255,0.85),3px_3px_0px_#00bbff]">
                                                <Icon className="w-5 h-5 text-[#004aad] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* ROW 2: CORPORATE OFFICE ADDRESSES (USA & Canada side-by-side) */}
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 rounded-none justify-items-center lg:justify-items-end text-center lg:text-right">

                                {/* USA OFFICE */}
                                <div className="flex flex-col items-center lg:items-end gap-1 font-mono rounded-none">
                                    <span className="text-lg font-black text-[#00bbff] uppercase tracking-[0.2em]">
                                        USA OFFICE
                                    </span>
                                    <div className="text-white text-[11px] font-bold leading-normal uppercase tracking-wide rounded-none">
                                        <p className="text-white font-black">105 Maxess Road</p>
                                        <p className="text-white/80">Melville, NY 11747</p>
                                        <p className="text-[#00bbff] mt-1 font-black tracking-widest">(631) 452-1111</p>
                                    </div>
                                </div>

                                {/* CANADA OFFICE */}
                                <div className="flex flex-col items-center lg:items-end gap-1 font-mono rounded-none">
                                    <span className="text-lg font-black text-[#00bbff] uppercase tracking-[0.2em]">
                                        CANADA OFFICE
                                    </span>
                                    <div className="text-white text-[11px] font-bold leading-normal uppercase tracking-wide rounded-none">
                                        <p className="text-white font-black">One Yonge Street</p>
                                        <p className="text-white/80">Toronto, Ontario</p>
                                        <p className="text-white/60">M5E 1R4, Canada</p>
                                        <p className="text-[#00bbff] mt-1 font-black tracking-widest">+1 (438) 805-9990</p>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-1 border-b mb-4 border-slate-100 pb-12 ">
                    {footerData.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                            <h3 className="text-white text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#1B79EE]" />
                                {section.title}
                            </h3>

                            <ul className="flex flex-col gap-3">
                                {section.links.map((link, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="group flex items-center gap-2 cursor-pointer"
                                    >
                                        <Plus className="w-3 h-3 text-white opacity-40 group-hover:opacity-100 group-hover:rotate-90 transition-all" />
                                        <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider group-hover:text-white transition-colors">
                                            {link}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* BOTTOM BAR: LEGAL & STATUS */}
                <div className=" flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-mono text-[9px] text-white/80 font-bold tracking-widest flex items-center gap-8   ">
                        <span>© 2026 PRECASTXCHANGE</span>
                        <span className="hidden md:block w-[1px] h-3 bg-slate-200" />
                        <span className="hover:text-white cursor-pointer transition-colors uppercase">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition-colors uppercase">Terms of Service</span>
                    </div>

                </div>

            </div>

        </footer>
    );
}
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <Link
        href="#"
        className="p-2 border border-white/40 hover:border-white hover:bg-white/10 transition-all text-white"
    >
        {icon}
    </Link>
);