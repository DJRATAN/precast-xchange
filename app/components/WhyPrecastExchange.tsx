'use client'

import React from 'react'
import { Globe, Shield, Ruler, Handshake, Landmark, CheckCircle, Briefcase } from 'lucide-react'

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

export default function WhyPrecastExchange() {
  const features: FeatureCard[] = [
    {
      id: 1,
      title: "A COMPLETE ECOSYSTEM",
      description: "An all-encompassing network uniting vendors, suppliers, and manufacturers. Fully integrated with our Knowledge Center, Charity Initiatives, Precastpedia, and total tech solutions.",
      icon: <Globe className="w-6 h-6 text-[#004aad] group-hover:text-white transition-colors" />,
      isFeatured: true
    },
    {
      id: 2,
      title: "EXCLUSIVE MEMBERSHIP",
      description: "Join an elite network of industry professionals and gain immediate access to proprietary tools.",
      icon: <Shield className="w-6 h-6 text-[#1B79EE]" />
    },
    {
      id: 3,
      title: "10 FREE ENGINEERING DRAWINGS",
      description: "Members receive ten complimentary, high-precision engineering drawings to accelerate project timelines.",
      icon: <Ruler className="w-6 h-6 text-[#1B79EE]" />
    },
    {
      id: 4,
      title: "GLOBAL COLLABORATION",
      description: "Seamlessly connect and collaborate with global partners to drive infrastructure development forward.",
      icon: <Handshake className="w-6 h-6 text-[#1B79EE]" />
    },
    {
      id: 5,
      title: "GOV & STATE STANDARDS",
      description: "Strict adherence and seamless integration with Federal, State, and Municipal compliance standards.",
      icon: <Landmark className="w-6 h-6 text-[#1B79EE]" />
    },
    {
      id: 6,
      title: "UNCOMPROMISING QUALITY",
      description: "Rigorous quality control and assurance protocols to guarantee precast engineering excellence.",
      icon: <CheckCircle className="w-6 h-6 text-[#1B79EE]" />
    },
    {
      id: 7,
      title: "CONSULTANCY SERVICES",
      description: "Expert advisory and consultancy services to guide your projects from initial blueprint to final deployment.",
      icon: <Briefcase className="w-6 h-6 text-[#1B79EE]" />
    }
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full px-8 md:px-10">
        
        {/* Header Block Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-0.5 w-8 bg-[#1B79EE]" />
            <span className="text-xs font-black tracking-widest text-[#1B79EE] uppercase">The Precast Advantage</span>
            <div className="h-0.5 w-8 bg-[#1B79EE]" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter">
            Why Precast Exchange?
          </h2>
          
          <p className="max-w-3xl mx-auto text-sm md:text-base font-medium text-[#004aad]/80 leading-relaxed">
            We don't just connect buyers and sellers. We provide the total technological and operational foundation required to build the future of infrastructure.
          </p>
        </div>

        {/* Dynamic Structural Grid from image_4a36c6.png */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.map((card) => (
            <div
              key={card.id}
              className={`group relative p-8 rounded-none shadow-md border transition-all duration-300 flex flex-col justify-start text-left ${
                card.isFeatured
                  ? 'bg-[#004aad] border-[#004aad] text-white lg:col-span-1 lg:row-span-1 shadow-[0_10px_30px_rgba(0,74,173,0.2)]'
                  : 'bg-white border-slate-100 text-[#004aad] hover:border-[#1B79EE]/40'
              }`}
            >
              {/* Icon Circular Housing */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm border ${
                card.isFeatured 
                  ? 'bg-white border-white' 
                  : 'bg-white border-[#1B79EE]/10'
              }`}>
                {card.isFeatured ? (
                  <Globe className="w-6 h-6 text-[#004aad]" />
                ) : (
                  card.icon
                )}
              </div>

              {/* Text Layout Hierarchy */}
              <h3 className={`text-lg font-black tracking-wide mb-4 uppercase ${
                card.isFeatured ? 'text-white' : 'text-[#004aad]'
              }`}>
                {card.title}
              </h3>
              
              <p className={`text-sm leading-relaxed font-light ${
                card.isFeatured ? 'text-white/90' : 'text-[#004aad]/80'
              }`}>
                {card.description}
              </p>

              {/* Solid Two-Color Decorative Bottom Line Accent */}
              {!card.isFeatured && (
                <div className="mt-6 h-0.5 w-6 bg-[#1B79EE] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}