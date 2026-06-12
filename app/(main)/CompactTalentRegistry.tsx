'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function CompactTalentRegistry() {
  const talentRegistry = [
    { code: "LAB-CRN", sector: "OVERHEAD CRANE CREW", status: "08 RECORDS INDEXED", url: "https://example.com/talents/crane" },
    { code: "LAB-Mld", sector: "STEEL FORM SETTING CARPENTERS", status: "14 RECORDS INDEXED", url: "https://example.com/talents/forms" },
    { code: "LAB-BCH", sector: "CHEMICAL AGGREGATE MIX ENGINEERS", status: "03 RECORDS INDEXED", url: "https://example.com/talents/engineers" },
    { code: "LAB-ENG", sector: "PRESTRESSED TENSIONING OPERATORS", status: "09 RECORDS INDEXED", url: "https://example.com/talents/tensioning" }
  ]

  return (
    <div className="w-full bg-white py-12 px-6 md:px-12 border-b-4 border-[#004aad] rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-4 rounded-none">
        <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em] block">Active Manpower Pool Node</span>
        
        <div className="w-full border border-[#004aad]/20 rounded-none divide-y divide-[#004aad]/10">
          {talentRegistry.map((row, index) => (
            <div key={index} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white hover:bg-[#1B79EE]/5 transition-colors rounded-none">
              <div className="flex items-center gap-4 rounded-none">
                <span className="font-mono text-xs font-black text-[#1B79EE]">{row.code}</span>
                <span className="text-sm font-black text-[#004aad] uppercase tracking-tight">{row.sector}</span>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 rounded-none">
                <span className="font-mono text-[10px] font-bold text-[#004aad]/50 uppercase tracking-tight">{row.status}</span>
                <a 
                  href={row.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#004aad] bg-white text-[#004aad] hover:bg-[#004aad] hover:text-white transition-colors text-[9px] font-black uppercase tracking-widest py-1.5 px-4 rounded-none outline-none inline-flex items-center gap-1.5"
                >
                  <span>Query Pool</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}