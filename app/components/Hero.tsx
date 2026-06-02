'use client'
import { useEffect, useState } from "react";

const words = [
    "PRECAST EXCHANGE",
    "BARTER",
    "BUY",
    "SELL",
    "TRADE IN",
    "LEASE",
    "RENT",
    "BORROW",
    "LOANERS",
    "SURPLUS",
    "REPAIRS",
    "DONATE"
];

export default function Hero() {
    const [index, setIndex] = useState(0)
    const [subIndex, setSubIndex] = useState(0)
    const [reverse, setReverse] = useState(false)

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
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-white rounded-none border-b-4 border-[#004aad]">
            
            {/* Background Image Layer: Balanced opacity over white to maintain clean legibility */}
            <div className="absolute inset-0 z-0 rounded-none">
                <img
                    src="/ecosystem-bg.png"
                    alt="Ecosystem Ledger Structure"
                    className="w-full h-full object-cover opacity-[0.12] mix-blend-multiply rounded-none"
                />
            </div>

            {/* Background Industrial Grid Lines Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1B79EE08_1px,transparent_1px),linear-gradient(to_bottom,#1B79EE08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-none" />

            {/* Hero Text Stack */}
            <div className="relative z-20 text-center w-full max-w-7xl px-6 py-12 rounded-none">
                <div className="flex flex-col items-center justify-center rounded-none">
                    
                    {/* FIXED LINE: Locked absolutely in position (Dark Blue) */}
                    <div className="h-[50px] sm:h-[80px] md:h-[90px] lg:h-[100px] flex items-center justify-center rounded-none">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase whitespace-nowrap leading-none text-[#004aad] rounded-none">
                            IT IS A TOTAL
                        </h1>
                    </div>

                    {/* ANIMATED LINE: Strictly 1 line, light blue fill with dark blue sharp outline over white */}
                    <div className="h-[60px] sm:h-[90px] md:h-[110px] lg:h-[130px] flex items-center justify-center rounded-none relative mt-4">
                        <span
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none whitespace-nowrap rounded-none"
                            style={{
                                paintOrder: "stroke fill",
                                WebkitTextStroke: "3px #004aad", // Sharp Dark Blue Outline
                                color: "#1B79EE",                // Light Blue Solid Fill
                                textShadow: "none"
                            }}
                        >
                            {words[index].substring(0, subIndex)}
                        </span>

                        {/* Industrial Cursor (Dark Blue) */}
                        <span className="inline-block w-2 md:w-3 h-8 sm:h-14 md:h-16 lg:h-20 bg-[#004aad] ml-4 animate-pulse rounded-none shrink-0" />
                    </div>
                </div>

                <p className="mt-16 text-xs md:text-sm font-black tracking-[0.5em] text-[#1B79EE] uppercase rounded-none">
                    The Complete Precast Business Ecosystem
                </p>

                {/* Call to Action Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10 rounded-none">
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