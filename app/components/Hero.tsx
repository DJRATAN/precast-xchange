'use client'
import { useEffect, useState } from "react";

const words = [
    "BARTER",
    "BUY",
    "SELL",
    "TRADE",
    "LEASE",
    "RENT",
    "BORROW",
    "LOANERS",
    "SURPLUS",
    "REPAIRS",
    "DONATE",
    "FIND"
];

export default function Hero() {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 1500)
            return () => clearTimeout(timeout)
        }
        if (subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % words.length)
            return
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1))
        }, reverse ? 40 : 80)
        return () => clearTimeout(timeout)
    }, [subIndex, index, reverse])

    // Defined targets mapping out your ecosystem nodes
    const quickLinks = [
        { label: "Exchange Terminal", href: "#terminal", marker: "LN-01" },
        { label: "Market Hub Input", href: "#market-hub", marker: "LN-02" },
        { label: "Supplies & Castings", href: "#supplies", marker: "LN-03" },
        { label: "Talent & Workforce", href: "#talent", marker: "LN-04" },
        { label: "Valuation Appraisals", href: "#appraisals", marker: "LN-05" },
        { label: "Open Mind Forum", href: "#open-mind", marker: "LN-06" },
        { label: "Events Schedule Grid", href: "#events", marker: "LN-07" },
        { label: "Workforce Talent Pool", href: "#workforce-hub", marker: "LN-08" },
        { label: "Blueprints Partner Marquee", href: "#partners", marker: "LN-09" },
        { label: "Portal System Entry", href: "#portal-boot", marker: "LN-10" }
    ];

    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad]">

            {/* Optimized Background Video Layer */}
            <div className="absolute inset-0 z-0 rounded-none bg-white">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/video-placeholder-frame.png"
                    onCanPlayThrough={() => setIsVideoLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-1000 mix-blend-multiply rounded-none ${isVideoLoaded ? 'opacity-[0.8]' : 'opacity-0'
                        }`}
                >
                    <source
                        src="/video/6266672_River Traffic Drone Snow_By_Dominick_Anskis_Artlist_HD.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            {/* Background Industrial Grid Lines Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE08_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-none" />

            {/* TWO-COLUMN LAYOUT MATRIX CONTROLLER */}
            <div className="relative z-20 w-full px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-none text-left">

                {/* LEFT COLUMN: PRIMARY IDENTITY & TYPEWRITER ENGINE */}
                <div className="lg:col-span-8 flex flex-col justify-center rounded-none w-full">
                    <div className="flex flex-col items-start justify-center gap-x-4 md:gap-x-6 rounded-none w-full whitespace-nowrap">

                        {/* FIXED HEADER SEGMENT */}
                        <div className="h-[50px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center rounded-none">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white rounded-none">
                                IT IS A TOTAL PRECAST EXCHANGE
                            </h1>
                        </div>

                        {/* TYPEWRITER LOOP SEGMENT */}
                        <div className="h-[50px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center rounded-none relative">
                            <span
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none whitespace-nowrap rounded-none"
                                style={{
                                    paintOrder: "stroke fill",
                                    WebkitTextStroke: "3px #004aad",
                                    color: "#ffffff",
                                    textShadow: "none"
                                }}
                            >
                                {words[index].substring(0, subIndex)}
                            </span>

                            {/* Industrial Blinking Cursor */}
                            <span className="inline-block w-2 md:w-3 h-8 sm:h-14 md:h-16 lg:h-20 bg-[#ffffff] ml-4 animate-pulse rounded-none shrink-0" />
                        </div>
                    </div>

                    <p className="mt-16 text-xs md:text-sm font-black tracking-[0.5em] text-white uppercase rounded-none">
                        The Complete Precast Business Ecosystem
                    </p>

                    {/* Action Execution Triggers */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-start pt-10 rounded-none">
                        <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none shadow-[4px_4px_0px_#1B79EE]">
                            Explore Exchange
                        </button>
                        <button className="border-2 border-[#004aad] bg-white text-[#004aad] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition-colors rounded-none outline-none">
                            Join Network
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: RECTANGULAR NAVIGATION LINK GRID (Bounded inside Hero Section) */}
                <div className="lg:col-span-4 w-full flex flex-wrap lg:flex-col justify-start lg:items-end gap-3 z-30 rounded-none">
                    {quickLinks.map((link) => (
                        <a
                            key={link.marker}
                            href={link.href}
                            className="group flex items-center outline-none"
                        >
                            {/* Pure text block: White background, Blue text. Flips layout colors dynamically on hover. */}
                            <span className="bg-white text-[#004aad] border-2 border-[#004aad] px-2 py-1 text-[10px] font-black uppercase tracking-widest transition-all duration-200 rounded-none shadow-[3px_3px_0px_#1B79EE] group-hover:bg-[#004aad] group-hover:text-white group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5">
                                {link.label.split(' ')[0]}
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )
}