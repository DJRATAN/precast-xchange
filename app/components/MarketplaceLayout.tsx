import React from 'react'
import Navigation from './Navigation'
import HeroSection from './HeroSection'
import Hero from './Hero'

export default function MarketplaceLayout() {
    return (
        <div className="w-full bg-[#f8f9fa] min-h-screen font-sans">

            {/* 1. TOP AD BANNER CONTAINER */}
            <div className="w-full mx-auto h-[90px] bg-slate-200 my-2 flex items-center justify-center border border-slate-300 text-xs text-muted-foreground">
                <span>Advertisement Banner (Top: 1200x90)</span>
            </div>

            {/* 2. THREE-COLUMN WRAPPER (Left Ad - Main Content - Right Ad) */}
            <div className="w-full mx-auto flex justify-center items-start gap-4 px-4">

                {/* LEFT SKYSCRAPER AD */}
                <aside className="hidden xl:block w-[160px] sticky top-4 h-[600px] bg-slate-200 border border-slate-300 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
                    Left Skyscraper Ad<br />(160x600)
                </aside>

                {/* CORE CONTENT HUB */}
                <main className="w-full max-w-[1200px] bg-white border border-slate-200 shadow-sm min-h-screen">
                    <Navigation />
                    <Hero />
                    <HeroSection />
                </main>

                {/* RIGHT SKYSCRAPER AD */}
                <aside className="hidden xl:block w-[160px] sticky top-4 h-[600px] bg-slate-200 border border-slate-300 flex items-center justify-center text-xs text-muted-foreground text-center p-2">
                    Right Skyscraper Ad<br />(160x600)
                </aside>

            </div>
        </div>
    )
}