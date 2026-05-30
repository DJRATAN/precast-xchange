import React from 'react'
import { Search, ChevronDown } from "lucide-react"
import Image from 'next/image'

export default function Navigation() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      {/* Brand Row: Using px-4 to keep it near the edge but professional */}
      <div className="w-full px-8 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="relative w-[240px] h-[60px]">
            <Image 
              src="/PRECAST EXCHANGE LOGO.PNG" 
              alt="Precast Xchange"
              fill
              priority
              className="object-contain object-left" 
            />
          </div>
          <div className="hidden lg:block border-l border-slate-300 h-10 mx-2" />
          <p className="hidden lg:block text-[10px] uppercase tracking-widest text-slate-400 font-bold max-w-[150px]">
            The Global Precast Ecosystem
          </p>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <div className="text-[11px] font-bold text-h2o-dark bg-slate-50 border border-slate-200 px-3 py-2 rounded">
            MARKET INDEX: <span className="text-slate-600 font-medium">2,450+ ASSETS</span>
          </div>
        </div>
      </div>

      {/* Blue Utility Ribbon */}
      <nav className="bg-h2o-dark text-white px-8 md:px-10 py-1 flex items-center justify-between text-sm">
        <div className="flex items-center">
          <button className="bg-h2o-light px-5 py-2 flex items-center gap-2 uppercase text-[11px] font-black tracking-wider hover:bg-blue-600 transition">
            Marketplace <ChevronDown className="w-3 h-3" />
          </button>
          <div className="hidden sm:flex gap-1 ml-2">
            {['Molds', 'Machinery', 'Logistics', 'Guide'].map((item) => (
              <a key={item} href="#" className="px-4 py-2 text-[11px] uppercase font-bold hover:bg-white/10 transition">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/10 px-3 py-1 rounded border border-white/20">
          <input 
            type="text" 
            placeholder="Search Ecosystem..." 
            className="bg-transparent border-none text-xs text-white placeholder-white/50 focus:outline-none w-32 md:w-48"
          />
          <Search className="w-4 h-4 text-white/70 cursor-pointer" />
        </div>
      </nav>
    </header>
  )
}