'use client'

import React, { useState, MouseEvent } from 'react'
import { Box, PenTool, Layers, Factory, BookOpen } from 'lucide-react'

interface AvenueItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function AvenuesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  // Advanced Mouse Tracking for the 3D Apple Tilt & Glow Effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    setHoveredIndex(index)
    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left - box.width / 2
    const y = e.clientY - box.top - box.height / 2
    
    // Limits the tilt intensity to keep it elegant and subtle
    setRotateX(-y / 12)
    setRotateY(x / 12)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setRotateX(0)
    setRotateY(0)
  }

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
        
        {/* Title Block */}
        <div className="flex flex-col items-center mb-16 space-y-2">
          <h2 className="text-4xl font-black text-[#004aad] uppercase tracking-widest text-center">
            Avenues
          </h2>
          <div className="w-12 h-1 bg-[#1B79EE]" />
        </div>

        {/* 3D Perspective Grid Wrap */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 [perspective:1200px]">
          {avenues.map((item, index) => {
            const isBottomRow = index >= 3
            const isCurrentHovered = hoveredIndex === index

            return (
              <div
                key={item.id}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isCurrentHovered 
                    ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)` 
                    : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  transition: isCurrentHovered ? 'none' : 'all 0.5s ease-out'
                }}
                className={`relative group rounded-xl bg-[#004aad] p-8 border border-[#004aad] overflow-hidden shadow-md [transform-style:preserve-3d] ${
                  isBottomRow ? 'md:col-span-3' : 'md:col-span-2'
                } ${isCurrentHovered ? 'shadow-[0_25px_50px_-12px_rgba(0,74,173,0.35)]' : ''}`}
              >
                {/* 1. APPLE GLOW: Immersive inner radial gradient moving to Light Blue on hover */}
                <div 
                  className="absolute inset-0 bg-radial from-[#1B79EE]/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
                  style={{ transform: 'translateZ(1px)' }}
                />

                {/* Content Container (Forced above the background effects) */}
                <div className="relative z-10 flex flex-col h-full justify-between pointer-events-none">
                  <div>
                    {/* Icon Housing - Scale up on hover */}
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-[#1B79EE]/50 transition-all duration-300">
                      {item.icon}
                    </div>

                    {/* Title with extra tracked space */}
                    <h3 className="text-xl font-black tracking-wider text-white mb-4 uppercase group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Separation Line brightening up dynamically */}
                    <div className="w-full h-px bg-white/20 mb-4 group-hover:bg-[#1B79EE]/60 transition-colors duration-300" />
                  </div>

                  {/* High Readability Content Text */}
                  <p className="text-white/80 text-sm leading-relaxed font-light font-sans max-w-xl group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* 2. CHROME BORDER: Outer perimeter halo accent glowing Light Blue */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#1B79EE]/50 rounded-xl pointer-events-none transition-colors duration-500" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}