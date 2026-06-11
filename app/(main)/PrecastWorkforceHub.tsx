'use client'

import React from 'react'
import { Users, Briefcase, ExternalLink, ShieldCheck } from 'lucide-react'

export default function PrecastWorkforceHub() {
  const openPositions = [
    { id: "HR-901", role: "Quality Control Lead Inspector", type: "Full-Time Node", plant: "East Casting Yard", link: "https://example.com/careers/qc-lead" },
    { id: "HR-902", role: "Automated Batch Plant Operator", type: "Shift Array B", plant: "Main Batch Facility", link: "https://example.com/careers/batch-operator" },
    { id: "HR-903", role: "Industrial Structural Welder / Fitter", type: "Full-Time Node", plant: "Forming Fabrication Bay", link: "https://example.com/careers/structural-welder" },
    { id: "HR-904", role: "BIM Precast Engineering Draftsman", type: "Remote Desk Matrix", plant: "Technical Design HQ", link: "https://example.com/careers/precast-draftsman" }
  ]

  return (
    <div className="w-full bg-white border-b-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-6 rounded-none">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-[#004aad]/10 pb-4 gap-2 rounded-none">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Personnel Deployment Registry</span>
            <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Precast Work Force & Talent Hub</h2>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#004aad]/60">ACTIVE TALENT QUOTA: 04 OPENINGS</span>
        </div>

        <div className="divide-y divide-[#004aad]/10 border border-[#004aad]/20 rounded-none">
          {openPositions.map((position) => (
            <div key={position.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white hover:bg-[#1B79EE]/5 transition-colors rounded-none">
              <div className="flex items-start gap-4 rounded-none">
                <div className="p-2 border border-[#004aad]/20 inline-block bg-white rounded-none mt-1 shrink-0">
                  <Briefcase className="w-5 h-5 text-[#1B79EE]" />
                </div>
                <div className="space-y-1 rounded-none">
                  <div className="flex items-center gap-2 flex-wrap rounded-none">
                    <span className="text-sm font-black text-[#004aad] uppercase tracking-tight">{position.role}</span>
                    <span className="text-[9px] font-mono font-black bg-[#1B79EE]/10 text-[#1B79EE] px-2 py-0.5 rounded-none">{position.type}</span>
                  </div>
                  <p className="text-xs font-mono font-bold text-[#004aad]/60 uppercase">FACILITY NODE: {position.plant} // ID: {position.id}</p>
                </div>
              </div>

              <div className="shrink-0 rounded-none">
                <a 
                  href={position.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#004aad] bg-white text-[#004aad] hover:bg-[#004aad] hover:text-white transition-all text-[10px] font-black uppercase tracking-widest py-2.5 px-5 rounded-none outline-none w-full md:w-auto shadow-[3px_3px_0px_#1B79EE]/10 hover:shadow-none"
                >
                  <span>Transmit Application</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}