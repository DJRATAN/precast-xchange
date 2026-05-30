export default function Hero() {
    return (
        <section className="relative w-full px-8 md:px-10 py-6 h-screen overflow-hidden flex items-center justify-center bg-black">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/ecosystem-bg.png"
                    alt="Ecosystem"
                    className="w-full h-full object-cover opacity-50 animate-subtle-zoom"
                />
                {/* Gradient Overlay for that 'Premium' feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </div>

            {/* Hero Text */}
            <div className="relative z-10 text-center text-white space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                    It is an <span className="text-[#1B79EE]">Exchange</span>
                </h1>
                <p className="text-xl md:text-2xl font-light tracking-wide text-slate-200">
                    And a complete Ecosystem For Precasters.
                </p>

                <div className="flex gap-4 justify-center pt-8">
                    <button className="bg-[#004aad] px-8 py-4 rounded-full font-bold hover:bg-[#1B79EE] transition-all">
                        Explore Exchange
                    </button>
                    <button className="border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#004aad] transition-all">
                        Join Ecosystem
                    </button>
                </div>
            </div>
        </section>
    )
}