import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Calendar, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="p-6">
      
 

      {/* CPI "ARTICLE OF THE DAY" HEADER SECTION STYLE */}
      <div className="flex items-center gap-2 mb-4 border-b pb-2">
        <span className="w-1 h-5 bg-[#004aad]" />
        <h2 className="text-lg font-bold uppercase tracking-wide text-slate-800">
          Featured Live Product Demo
        </h2>
      </div>

      {/* EXACT ASSET HERO GRID CONFIGURATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: THE EXACT CONTAINER SPEC FOR VIDEO CARD MATCHING CPI IMAGERY AREA */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <Card className="overflow-hidden border border-slate-200 relative group shadow-sm flex-1">
            
            {/* The exact sizing/aspect viewport constraint */}
            <div className="relative aspect-[4/3] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
              {/* Dynamic Video Placeholder Visuals */}
              <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80')" }} />
              
              {/* Color Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Play Trigger UI Icon Overlay */}
              <div className="absolute z-10 w-14 h-14 bg-[#1B79EE] hover:bg-[#004aad] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 cursor-pointer text-white">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
              
              {/* Live indicator or Category tag anchor top-left */}
              <Badge className="absolute top-3 left-3 bg-[#004aad] text-white border-none rounded-none font-mono uppercase text-[10px]">
                Featured Channel
              </Badge>
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN: TECHNICAL SPECIFICATIONS & METADATA ENTRY TEXT BLOCK */}
        <div className="lg:col-span-7 flex flex-col justify-between py-1">
          <div>
            <div className="flex gap-2 items-center text-xs text-slate-500 mb-2">
              <span className="flex items-center gap-1 font-semibold text-[#1B79EE]">
                <MapPin className="w-3 h-3" /> Central Europe
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Updated Today
              </span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 mb-3 hover:text-[#1B79EE] cursor-pointer transition">
              Research Project PrecastX: High-Capacity Concrete Culvert Mold Testing & Verification Limits
            </h1>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Since early 2026, automation consortia have engineered updated industrial tooling solutions tailored for automated wet-cast assemblies. The primary objective is optimization of deep-trench cable systems processing throughput up to structural integrity boundaries.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400 font-mono uppercase">Starting Configuration Bid</div>
              <div className="text-xl font-black text-[#004aad]">$48,500 <span className="text-xs text-slate-500 font-normal">FOB</span></div>
            </div>
            <button className="bg-[#004aad] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#1B79EE] transition shadow-sm">
              Inquire Technical Datasheet
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}