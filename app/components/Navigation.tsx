'use client'

import React, { useState } from 'react'
import { Search, ChevronDown, Globe } from "lucide-react"
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('USA')

  // The exact regions/countries you requested
  const regions = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada (Code)' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'ELI', name: 'ELI Region' },
    { code: 'USA', name: 'USA' },
    { code: 'Canada', name: 'Canada' },
    { code: 'Latin America', name: 'Latin America' },
    { code: 'North America', name: 'North America' },
    { code: 'Caribbean', name: 'Caribbean' },
    { code: 'Europe', name: 'Europe' }
  ]

  return (
    <header className="w-full border-b border-slate-200 bg-white relative">
      {/* Brand Row */}
      <div className="w-full px-8 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="relative w-[130px] h-[60px]">
            <Image 
              src="/PRECAST EXCHANGE LOGO.PNG" 
              alt="Precast Xchange"
              fill
              priority
              className="object-contain object-left" 
            />
          </div>

          <div className="hidden lg:block border-l border-slate-300 h-10 mx-2" />
          
          <div className="flex flex-col relative">
            <p className="hidden lg:block text-xl uppercase font-bold text-[#004aad]">
              The Precast Universe
            </p>
            
            {/* Interactive Country/Region Selector Dropdown */}
            <div className="relative mt-1">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 cursor-pointer group bg-transparent border-none outline-none"
              >
                <Globe className="w-3 h-3 text-[#1B79EE]" />
                <span className="text-[10px] font-black text-[#004aad] uppercase tracking-tight">
                  {selectedRegion}
                </span>
                <ChevronDown className={`w-2.5 h-2.5 text-[#1B79EE] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Pure 2-Color Dropdown Menu Overlay */}
              {isOpen && (
                <>
                  {/* Invisible backdrop click-handler to close dropdown */}
                  <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                  
                  <div className="absolute left-0 mt-2 w-56 max-h-60 overflow-y-auto bg-white border-2 border-[#004aad] rounded-xl shadow-xl z-55 scrollbar-thin">
                    <div className="p-1">
                      {regions.map((region) => (
                        <button
                          key={region.code}
                          onClick={() => {
                            setSelectedRegion(region.code)
                            setIsOpen(false)
                          }}
                          className={`w-full text-left px-3 py-2 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-between ${
                            selectedRegion === region.code
                              ? 'bg-[#004aad] text-white'
                              : 'text-[#004aad] hover:bg-[#1B79EE]/10 hover:text-[#1B79EE]'
                          }`}
                        >
                          <span className="uppercase">{region.code}</span>
                          <span className="text-[9px] font-light opacity-80">{region.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <div className="text-[11px] font-bold text-[#004aad] bg-slate-50 border border-slate-200 px-3 py-2 rounded">
            MARKET INDEX: <span className="text-slate-600 font-medium">2,450+ ASSETS</span>
          </div>
        </div>
      </div>

      {/* Blue Utility Ribbon */}
      <nav className="bg-[#004aad] text-white px-8 md:px-10 py-1 flex items-center justify-between text-sm z-30 relative">
        <div className="flex items-center">
          <button className="bg-[#1B79EE] px-5 py-2 flex items-center gap-2 uppercase text-[11px] font-black tracking-wider hover:bg-blue-600 transition">
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

      {/* Sponsor Ribbon (Header Bottom) */}
      <div className="w-full bg-slate-50 border-t border-slate-100 px-8 md:px-10 py-2 flex items-center justify-between overflow-hidden relative z-20">
        <div className="flex items-center gap-4">
          <span className="text-sm font-black text-[#004aad] uppercase tracking-tighter whitespace-nowrap">
            Proudly Supporting & Sponsoring:
          </span>
          <div className="flex items-center gap-2">
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
            <div className="h-8 w-20 relative"><Image src="/MEGA FOUNDRIES.png" alt="Sponsor" fill className="object-contain" /></div>
          </div>
        </div>
        
        <div className="hidden lg:block h-px flex-grow mx-8 bg-gradient-to-r from-transparent via-[#1B79EE]/20 to-transparent" />
      </div>
    </header>
  )
}