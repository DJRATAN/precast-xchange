'use client'

import React from 'react'
import { Users, FileText, ArrowRight } from 'lucide-react'

export default function TalentExchangeDeck() {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 border-b-4 border-[#004aad] rounded-none text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-none">
        
        {/* Left Informational Structural Block */}
        <div className="lg:col-span-5 bg-[#004aad] text-white p-6 md:p-8 flex flex-col justify-between border-b-4 border-[#1B79EE] rounded-none">
          <div className="space-y-4 rounded-none">
            <div className="inline-flex items-center gap-2 bg-white text-[#004aad] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-none">
              <Users className="w-3 h-3 text-[#1B79EE]" />
              <span>CREW LOGISTICS GATEWAY</span>
            </div>
            <h4 className="text-xl font-black uppercase tracking-tight leading-tight">Optimizing Precast Talent Allocation</h4>
            <p className="text-xs font-light text-white/80 leading-relaxed">
              Encountering immediate operational bottlenecks or holding surplus stripping crews during mold reconfigurations? Use the secure talent ledger to request or reallocate certified concrete technicians.
            </p>
          </div>
          <div className="space-y-2 pt-6 rounded-none">
            <a 
              href="https://example.com/workforce/directory" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1B79EE] border-2 border-[#1B79EE] text-white font-black uppercase text-xs tracking-wider py-3 px-6 w-full transition-all rounded-none outline-none flex items-center justify-center gap-2 shadow-[4px_4px_0px_#ffffff] hover:bg-white hover:text-[#004aad] hover:border-white"
            >
              <span>ACCESS LABOR MATRIX DIRECTORY</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Verification Status Panel */}
        <div className="lg:col-span-7 border-2 border-[#004aad] p-6 md:p-8 bg-white rounded-none flex flex-col justify-between">
          <div className="space-y-4 rounded-none">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-wider block">Operational Verification Grid</span>
              <h3 className="text-xl font-black text-[#004aad] uppercase tracking-tight mt-0.5">Workforce Credentials Matrix</h3>
            </div>
            <p className="text-xs text-[#004aad]/80 leading-relaxed">
              All personnel deployed across verified system node locations hold structural certifications complying with national concrete manufacturing and civil infrastructure assembly regulations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 rounded-none">
              <div className="p-3 border border-[#004aad]/20 bg-[#f8f9fa] rounded-none font-mono text-[11px] font-bold text-[#004aad]">
                PCI CERTIFIED TECHNICIANS: <span className="text-[#1B79EE]">ONLINE</span>
              </div>
              <div className="p-3 border border-[#004aad]/20 bg-[#f8f9fa] rounded-none font-mono text-[11px] font-bold text-[#004aad]">
                HEAVY RIGGING OPERATORS: <span className="text-[#1B79EE]">AVAILABLE</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-3 rounded-none">
            <a 
              href="https://example.com/workforce/post-job" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-[#004aad] bg-white text-[#004aad] font-black uppercase text-[11px] tracking-wider py-3 px-4 rounded-none transition-colors hover:bg-[#004aad] hover:text-white"
            >
              Post Workforce Opening
            </a>
            <a 
              href="https://example.com/workforce/verify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-[#004aad] bg-[#004aad] text-white font-black uppercase text-[11px] tracking-wider py-3 px-4 rounded-none transition-colors hover:bg-[#1B79EE] hover:border-[#1B79EE]"
            >
              Verify Crew Certificates
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}