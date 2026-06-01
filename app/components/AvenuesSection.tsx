'use client'

import React from 'react'
import { Box, PenTool, Layers, Factory, BookOpen } from 'lucide-react'

interface AvenueItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AvenuesSection() {
  const avenues: AvenueItem[] = [
    {
      id: 1,
      title: "PRODUCTS",
      description: "Precast concrete products, structural elements, utility box culverts, and infrastructure system components.",
      icon: <Box className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      title: "ENGINEERING",
      description: "BIM data models, structural drawings, FEA calculations, municipal compliance standards, and production methodologies.",
      icon: <PenTool className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      title: "MATERIALS",
      description: "Custom concrete mixes, reinforcing steel configurations, high-stress inserts, handling hardware, and specialty consumables.",
      icon: <Layers className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      title: "PLANTS & MACHINERY",
      description: "Production factories, wetcast/drycast molds, automated curing equipment, batching production lines, and material handling systems.",
      icon: <Factory className="w-5 h-5 text-white" />
    },
    {
      id: 5,
      title: "KNOWLEDGE & MEDIA",
      description: "Technical whitepapers, educational training videos, manufacturer catalogs, academic research, and aggregate industry references.",
      icon: <BookOpen className="w-5 h-5 text-white" />
    }
  ]

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header Block */}
        <div className="flex flex-col items-center mb-16 space-y-2">
          <h2 className="text-4xl font-black text-[#004aad] uppercase tracking-widest text-center rounded-none">
            Avenues
          </h2>
          <div className="w-12 h-1 bg-[#1B79EE] rounded-none" />
        </div>

        {/* Static Asymmetric Grid Layout - 0px Corners everywhere */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {avenues.map((item, index) => {
            const isBottomRow = index >= 3

            return (
              <div
                key={item.id}
                className={`relative bg-[#004aad] p-8 border-2 border-[#004aad] rounded-none overflow-hidden transition-colors duration-200 ${
                  isBottomRow ? 'md:col-span-3' : 'md:col-span-2'
                } hover:border-[#1B79EE]`}
              >
                {/* Content Container (Static and Flat) */}
                <div className="relative z-10 flex flex-col h-full justify-between rounded-none">
                  <div>
                    {/* Flat Vector Icon Base Housing */}
                    <div className="w-6 h-6 flex items-center justify-center mb-6 rounded-none">
                      {item.icon}
                    </div>

                    <h3 className="text-xl font-black tracking-wider text-white mb-4 uppercase rounded-none">
                      {item.title}
                    </h3>
                    
                    {/* Clean Linear Accent Partition Line */}
                    <div className="w-full h-px bg-white/20 mb-4 rounded-none group-hover:bg-[#1B79EE]" />
                  </div>

                  {/* High Contrast Technical Typography */}
                  <p className="text-white/90 text-sm leading-relaxed font-light font-sans max-w-xl rounded-none">
                    {item.description}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}