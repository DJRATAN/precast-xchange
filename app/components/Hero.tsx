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

    return (
        <section className="relative w-full min-h-screen px-8 overflow-hidden flex items-center justify-start bg-white rounded-none border-b-4 border-[#004aad]">

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

            {/* Hero Text Stack */}
            <div className="relative z-20 text-start w-full max-w-7xl px-12 py-12 rounded-none">
                <div className="flex flex-col items-start justify-center gap-x-4 md:gap-x-6 rounded-none w-full whitespace-nowrap">

                    {/* FIXED LINE - Placed directly on the row layout */}
                    <div className="h-[50px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center rounded-none">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase whitespace-nowrap leading-none text-white rounded-none">
                            IT IS A TOTAL PRECAST EXCHANGE
                        </h1>
                    </div>

                    {/* ANIMATED LINE - Sits perfectly next to it on the same line */}
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

                        {/* Industrial Cursor */}
                        <span className="inline-block w-2 md:w-3 h-8 sm:h-14 md:h-16 lg:h-20 bg-[#ffffff] ml-4 animate-pulse rounded-none shrink-0" />
                    </div>
                </div>

                <p className="mt-16 text-xs md:text-sm font-black tracking-[0.5em] text-white uppercase rounded-none">
                    The Complete Precast Business Ecosystem
                </p>

                {/* Call to Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start pt-10 rounded-none">
                    <button className="bg-[#004aad] border-2 border-[#004aad] text-white px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#1B79EE] hover:border-[#1B79EE] transition-colors rounded-none outline-none">
                        Explore Exchange
                    </button>
                    <button className="border-2 border-[#004aad] bg-white text-[#004aad] px-10 py-4 text-xs font-black uppercase tracking-widest hover:bg-[#004aad] hover:text-white transition-colors rounded-none outline-none">
                        Join Network
                    </button>
                </div>
            </div>
        </section>
    )
}