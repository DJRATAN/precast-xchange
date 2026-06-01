'use client'

import React, { useState } from 'react'
import { Search, ChevronDown, Globe, LogIn, UserPlus } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('USA')

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
    <header className="w-full border-b-2 border-[#004aad] bg-white relative rounded-none">

      {/* Brand & Authentication Row */}
      <div className="w-full px-8 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4 rounded-none">
        <div className="flex items-center gap-4 rounded-none">
          {/* Logo */}
          <div className="relative w-[130px] h-[60px] rounded-none">
            <Image
              src="/PRECAST EXCHANGE LOGO.PNG"
              alt="Precast Xchange"
              fill
              priority
              className="object-contain object-left rounded-none"
            />
          </div>

          <div className="hidden lg:block border-l-2 border-[#004aad]/20 h-10 mx-2 rounded-none" />

          <div className="flex flex-col relative rounded-none">
            <p className="hidden lg:block text-xl uppercase font-black text-[#004aad] tracking-tight rounded-none">
              The Precast Universe
            </p>

            {/* Interactive Country/Region Selector Dropdown */}
            <div className="relative mt-1 rounded-none">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1.5 cursor-pointer group bg-transparent border-none outline-none rounded-none"
              >
                <Globe className="w-3 h-3 text-[#1B79EE]" />
                <span className="text-[10px] font-black text-[#004aad] uppercase tracking-tight rounded-none">
                  {selectedRegion}
                </span>
                <ChevronDown className={`w-2.5 h-2.5 text-[#1B79EE] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Pure 2-Color Dropdown Menu Overlay - 0px Rounded Edge Forced */}
              {isOpen && (
                <>
                  <div className="fixed inset-0 z-40 rounded-none" onClick={() => setIsOpen(false)} />

                  <div className="absolute left-0 mt-2 w-56 max-h-60 overflow-y-auto bg-white border-2 border-[#004aad] shadow-md z-55 scrollbar-thin rounded-none">
                    <div className="p-1 rounded-none">
                      {regions.map((region) => (
                        <button
                          key={region.code}
                          onClick={() => {
                            setSelectedRegion(region.code)
                            setIsOpen(false)
                          }}
                          className={`w-full text-left px-3 py-2 text-[11px] font-black transition-colors flex items-center justify-between rounded-none ${selectedRegion === region.code
                            ? 'bg-[#004aad] text-white'
                            : 'text-[#004aad] hover:bg-[#1B79EE]/10 hover:text-[#1B79EE]'
                            }`}
                        >
                          <span className="uppercase rounded-none">{region.code}</span>
                          <span className={`text-[9px] font-light rounded-none ${selectedRegion === region.code ? 'text-white/80' : 'text-[#004aad]/70'
                            }`}>{region.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Market Tracker & Authentication Router Actions */}
        <div className="flex items-center gap-4 rounded-none">
          {/* Marketplace Index Tracker Counter */}
          <div className="hidden lg:block text-[11px] font-black text-[#004aad] bg-white border-2 border-[#004aad] px-3 py-2 rounded-none">
            MARKET INDEX: <span className="text-[#1B79EE]">2,450+ ASSETS</span>
          </div>

          {/* Secure Portal Entry Actions Hub */}
          <div className="flex items-center gap-2 rounded-none">
            {/* Login Action Toggle */}
            <Link href={'/login'}>
              <button className="border-2 border-[#004aad] text-[#004aad] hover:bg-[#004aad] hover:text-white text-[10px] font-black uppercase tracking-widest py-2.5 px-4 flex items-center gap-2 transition-all rounded-none bg-transparent outline-none cursor-pointer">
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </button></Link>

            {/* Registration Action Toggle */}
            {/* <Link href={'register'}>
              <button className="bg-[#1B79EE] border-2 border-[#1B79EE] text-white hover:bg-[#004aad] hover:border-[#004aad] text-[10px] font-black uppercase tracking-widest py-2.5 cursor-pointer px-4 flex items-center gap-2 transition-all rounded-none outline-none">
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </button></Link> */}
          </div>
        </div>

      </div>

      {/* Blue Utility Ribbon - 0px Rounded Edge Forced */}
      <nav className="bg-[#004aad] text-white px-8 md:px-10 py-1 flex items-center justify-between text-sm z-30 relative rounded-none">
        <div className="flex items-center rounded-none">
          <button className="bg-[#1B79EE] px-5 py-2 flex items-center gap-2 uppercase text-[11px] font-black tracking-wider hover:bg-[#1B79EE]/90 transition-colors border-none outline-none rounded-none">
            Marketplace <ChevronDown className="w-3 h-3" />
          </button>
          <div className="hidden sm:flex gap-1 ml-2 rounded-none">
            {['Molds', 'Machinery', 'Logistics', 'Guide'].map((item) => (
              <a key={item} href="#" className="px-4 py-2 text-[11px] uppercase font-black tracking-wide hover:bg-white/10 transition-colors rounded-none">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Input Text Box Framework Group */}
        <div className="flex items-center gap-3 bg-white/10 px-3 py-1 border border-white/20 rounded-none">
          <input
            type="text"
            placeholder="Search Ecosystem..."
            className="bg-transparent border-none text-xs text-white placeholder-white/50 focus:outline-none w-32 md:w-48 uppercase font-bold rounded-none"
          />
          <Search className="w-4 h-4 text-white/70 cursor-pointer" />
        </div>
      </nav>

      {/* Sponsor Ribbon (Header Bottom Area) */}
      <div className="w-full bg-white border-t-2 border-[#004aad]/10 px-8 md:px-10 py-2 flex items-center justify-between overflow-hidden relative z-20 rounded-none">
        <div className="flex items-center gap-4 rounded-none">
          <span className="text-xs font-black text-[#004aad] uppercase tracking-wider whitespace-nowrap rounded-none">
            Sponsoring Systems:
          </span>
          <div className="flex items-center gap-4 rounded-none">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="h-8 w-20 relative border border-[#004aad]/10 p-0.5 rounded-none">
                <Image
                  src="/MEGA FOUNDRIES.png"
                  alt="Sponsor Ledger Node"
                  fill
                  className="object-contain rounded-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block h-0.5 flex-grow mx-8 bg-gradient-to-r from-transparent via-[#1B79EE]/30 to-transparent rounded-none" />
      </div>
    </header>
  )
}