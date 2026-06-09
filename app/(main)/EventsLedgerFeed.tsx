'use client'

import React from 'react'
import { Calendar, MapPin, Ticket } from 'lucide-react'

export default function EventsLedgerFeed() {
  const corporateEvents = [
    { date: "JUL 14", year: "2026", title: "Annual Precast Golf Tournament", category: "NETWORKING", location: "Stonebridge Championship Course", description: "Executive client networking circuit followed by the annual structural honors banquet." },
    { date: "AUG 05", year: "2026", title: "Automated Facility Open House", category: "FACILITY SHOWCASE", location: "Main Plant Production Floor", description: "Public deployment reveal of our next-generation concrete batching and smart mold operations matrix." },
    { date: "AUG 06", year: "2026", title: "Industrial Plant Tours", category: "OPERATIONS", location: "North Segment Casting Yard", description: "Guided technical engineering walk-throughs focused on prestressed girder fabrication pipelines." },
    { date: "SEP 19", year: "2026", title: "Regional Public Works Meet", category: "GOVERNMENT INFRASTRUCTURE", location: "Ecosystem Terminal Hub", description: "Collaborative structural roundtable aligning municipal pipeline standards with local precaster capacity." }
  ]

  return (
    <div className="w-full bg-white border-b-4 border-[#004aad] py-12 px-6 md:px-12 rounded-none text-left">
      <div className="max-w-7xl mx-auto space-y-6 rounded-none">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b-2 border-[#004aad]/10 pb-4 gap-2 rounded-none">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#1B79EE] uppercase tracking-[0.2em]">Operational Schedule Grid</span>
            <h2 className="text-2xl font-black text-[#004aad] uppercase tracking-tight mt-1">Upcoming Corporate Events</h2>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#004aad]/60">REGISTERED SCHEDULE NODES: 04</span>
        </div>

        <div className="divide-y divide-[#004aad]/10 border border-[#004aad]/20 rounded-none">
          {corporateEvents.map((event, idx) => (
            <div key={idx} className="p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white hover:bg-[#1B79EE]/5 transition-colors rounded-none">
              
              {/* Left Column: Date Token Mapping */}
              <div className="flex items-center gap-5 rounded-none shrink-0">
                <div className="w-20 h-20 bg-[#004aad] text-white flex flex-col items-center justify-center rounded-none border border-[#1B79EE] font-mono shadow-[3px_3px_0px_#1B79EE]">
                  <span className="text-sm font-black tracking-tight leading-none">{event.date.split(' ')[1]}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest mt-0.5">{event.date.split(' ')[0]}</span>
                  <span className="text-[8px] opacity-60 mt-0.5">{event.year}</span>
                </div>
                <div className="space-y-1 rounded-none">
                  <span className="text-[9px] font-mono font-black text-[#1B79EE] bg-[#1B79EE]/10 px-2 py-0.5 uppercase tracking-wider rounded-none">
                    {event.category}
                  </span>
                  <h4 className="text-base font-black text-[#004aad] uppercase tracking-tight">{event.title}</h4>
                </div>
              </div>

              {/* Middle Column: Location and Technical Description */}
              <div className="flex-1 space-y-2 lg:max-w-xl rounded-none">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#004aad]/70">
                  <MapPin className="w-3.5 h-3.5 text-[#1B79EE]" />
                  <span className="uppercase tracking-tight">{event.location}</span>
                </div>
                <p className="text-xs text-[#004aad]/70 font-medium leading-relaxed">{event.description}</p>
              </div>

              {/* Right Column: Registry Action Router */}
              <div className="shrink-0 rounded-none">
                <button className="w-full lg:w-auto border-2 border-[#004aad] bg-white text-[#004aad] hover:bg-[#004aad] hover:text-white transition-all text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-none outline-none flex items-center justify-center gap-2">
                  <Ticket className="w-3.5 h-3.5" />
                  <span>SECURE NODE ENTRY</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}