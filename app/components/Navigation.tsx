import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, Globe } from "lucide-react"
import Image from 'next/image'

export default function Navigation() {
  return (
    <header className="w-full border-b border-slate-200">
      {/* Brand Header Row */}
      <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center bg-white gap-4">
        <div className="flex items-center gap-2">
          
          {/* Logo Container Wrapper: Keeps the image constrained and sharp */}
          <div className="relative w-[220px] h-[55px]">
            <Image 
              src="/PRECAST EXCHANGE LOGO.png" 
              alt="Precast Xchange Logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="hidden lg:block border-l-2 border-slate-300 h-8 mx-3" />
          <p className="hidden lg:block text-xs uppercase tracking-wider text-slate-500 font-semibold max-w-[180px]">
            The Global Marketplace for Concrete Products
          </p>
        </div>
        
        {/* Middle journal teaser text placeholder matching CPI */}
        <div className="hidden md:flex text-xs text-slate-500 border border-slate-200 rounded p-2 bg-slate-50 items-center gap-2">
          <span className="font-bold text-[#004aad]">MARKET INDEX:</span> 2,450+ Active Equipment Molds Listed
        </div>
      </div>

      {/* CPI-Inspired Dense Utility Navigation Ribbon */}
      <nav className="bg-[#004aad] text-white px-4 py-1 flex items-center justify-between text-sm font-medium">
        <div className="flex flex-wrap items-center">
          <button className="bg-[#1B79EE] px-4 py-2 flex items-center gap-1 uppercase text-xs font-bold tracking-wide hover:bg-blue-600 transition">
            Marketplace <ChevronDown className="w-3 h-3" />
          </button>
          <a href="#" className="px-3 py-2 text-xs uppercase hover:bg-white/10 transition">Molds & Forms</a>
          <a href="#" className="px-3 py-2 text-xs uppercase hover:bg-white/10 transition">Machinery</a>
          <a href="#" className="px-3 py-2 text-xs uppercase hover:bg-white/10 transition">Logistics</a>
          <a href="#" className="px-3 py-2 text-xs uppercase hover:bg-white/10 transition">Buyers' Guide</a>
          <a href="#" className="px-3 py-2 text-xs uppercase hover:bg-white/10 transition">Post Asset</a>
        </div>

        {/* Right Search Input */}
        <div className="hidden sm:flex items-center gap-2 bg-white/10 px-2 py-0.5 rounded border border-white/20">
          <input 
            type="text" 
            placeholder="Search equipment..." 
            className="bg-transparent border-none text-xs text-white placeholder-white/60 focus:outline-none w-40"
          />
          <Search className="w-3.5 h-3.5 text-white/80 cursor-pointer" />
        </div>
      </nav>
    </header>
  )
}