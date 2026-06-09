'use client';

import React, { useState, useRef } from 'react';
import { Plus, X, ArrowRight, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// --- TYPES ---
type MediaType = 'IMAGE' | 'VIDEO';

interface Story {
  id: string;
  vendorName: string;
  vendorAvatar: string;
  mediaUrl: string;
  mediaType: MediaType;
  isViewed: boolean;
}

// --- CATEGORY MATRIX DATA (MOLD / FORM TIER) ---
const INITIAL_STORIES: Story[] = [
  {
    id: '1',
    vendorName: 'Adjustable Box Culvert Steel Mold',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/4. MJ x FE 11.25 Degree.968.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '2',
    vendorName: 'Self-Stressing Prestressed Beam Form',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/5. MJ x FE 180 Degree.969.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '3',
    vendorName: 'Heavy Duty Modular Retaining Wall Matrix',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image3.jpeg',
    mediaType: 'IMAGE',
    isViewed: true,
  },
  {
    id: '4',
    vendorName: 'Magnetic Shuttering Side Profile Edge',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/Fire Dumper Mega.470.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '5',
    vendorName: 'Battery Mold System For Structural Wall Panels',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER D-BOXES.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '6',
    vendorName: 'Architectural Textured Formliner Array',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image6.jpg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  {
    id: '7',
    vendorName: 'Tapered Utility Vault Core Steel Form',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image7.jpg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  {
    id: '8',
    vendorName: 'Automated Hydraulic Tilting Casting Table',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER D-BOXES.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  }
];

export default function MoldFormStories() {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white py-6 border-b-4 border-[#004aad] relative group rounded-none">
      
      {/* Category Section Label Header */}
      <div className="px-4 md:px-12 mb-4">
        <span className="text-[10px] font-mono font-black text-[#1b79ee] uppercase tracking-[0.25em] block">Ecosystem Category Inventory Tier</span>
        <h2 className="text-xl font-black text-[#004aad] uppercase tracking-tight">Molds & Forms Showcase</h2>
      </div>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="flex w-full overflow-x-auto gap-3 px-4 md:px-12 no-scrollbar scroll-smooth rounded-none"
      >

        {/* === CREATE / UPLOAD HUB CARD === */}
        <div
          onClick={() => setIsUploading(true)}
          className="flex-none w-28 h-48 md:w-36 md:h-60 relative border-2 border-[#004aad] bg-white cursor-pointer group/create transition-all duration-300 rounded-none shadow-[3px_3px_0px_#1b79ee] hover:shadow-[0_0_15px_rgba(0,187,255,0.6),4px_4px_0px_#00bbff]"
        >
          <div className="h-[65%] w-full bg-[#004aad]/5 border-b-2 border-[#004aad] relative overflow-hidden rounded-none">
            <Image
              width={600}
              height={400}
              src="/assets/marine_castings/marine_castings2.jpeg"
              alt="Upload Mold Blueprint"
              className="w-full h-full object-cover group-hover/create:scale-105 transition-transform duration-500 rounded-none mix-blend-multiply opacity-90"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-white flex flex-col items-center justify-end pb-3 rounded-none">
            <span className="text-[10px] font-black text-[#004aad] uppercase tracking-widest text-center px-1 rounded-none">
              Add Mold Form
            </span>
          </div>

          <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#004aad] border-2 border-white p-1.5 rounded-none shadow-md transition-colors group-hover/create:bg-[#1b79ee]">
            <Plus className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* === MOLD/FORM DISCOVERY VIDEO FEED CARDS === */}
        {stories.map((story, index) => (
          <div
            key={story.id}
            onClick={() => setActiveStoryIndex(index)}
            className="flex-none w-28 h-48 md:w-36 md:h-60 relative border-2 border-[#004aad] bg-black cursor-pointer group/story transition-all duration-300 rounded-none shadow-[3px_3px_0px_#1b79ee] hover:shadow-[0_0_15px_rgba(0,187,255,0.7),4px_4px_0px_#00bbff]"
          >
            {/* Background Media Viewport */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-none z-0">
              {story.mediaType === 'VIDEO' ? (
                <video src={story.mediaUrl} className="w-full h-full object-cover opacity-80 group-hover/story:scale-105 transition-transform duration-700 rounded-none" />
              ) : (
                <Image width={600} height={400} src={story.mediaUrl} alt={story.vendorName} className="w-full h-full object-cover opacity-80 group-hover/story:scale-105 transition-transform duration-700 rounded-none" />
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40 pointer-events-none z-10 rounded-none" />

            {/* Verification Status Ring Node (Top Left) */}
            <div className={`
                absolute top-2 left-2 p-[2px] z-20 rounded-none border-2
                ${story.isViewed ? 'border-[#1b79ee] bg-[#004aad]' : 'border-[#00bbff] bg-[#1b79ee] animate-pulse'}
            `}>
              <Avatar className="w-7 h-7 md:w-8 md:h-8 rounded-none border border-white">
                <AvatarImage src={story.vendorAvatar} className="rounded-none object-cover" />
                <AvatarFallback className="rounded-none font-mono text-[9px] bg-[#004aad] text-white">PE</AvatarFallback>
              </Avatar>
            </div>

            {/* Structural Form Name Label (Bottom Left) */}
            <div className="absolute bottom-2 left-2 right-2 z-20 rounded-none">
              <p className="text-white font-black text-[9px] md:text-[10px] uppercase tracking-wider leading-tight line-clamp-2 drop-shadow-md rounded-none">
                {story.vendorName}
              </p>
            </div>
          </div>
        ))}

        <div className="w-4 flex-none" />
      </div>

      {/* HORIZONTAL TRAVEL CONTROLLER BUTTON */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30 hidden md:group-hover:block">
        <button
          onClick={scrollRight}
          className="bg-white text-[#004aad] border-2 border-[#004aad] p-2.5 rounded-none shadow-[3px_3px_0px_#1b79ee] hover:bg-[#004aad] hover:text-white hover:shadow-[0_0_10px_#00bbff,3px_3px_0px_#00bbff] transition-all duration-200 outline-none"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* --- LIGHTBOX DISPLAY ENGINE --- */}
      {activeStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}

      {/* --- INGESTION MODAL WIDGET --- */}
      {isUploading && (
        <UploadStoryModal onClose={() => setIsUploading(false)} />
      )}

    </div>
  );
}

function StoryViewer({ stories, initialIndex, onClose }: { stories: Story[], initialIndex: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentStory = stories[currentIndex];

  const handleNext = () => {
    if (currentIndex < stories.length - 1) setCurrentIndex(prev => prev + 1);
    else onClose();
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#004aad]/95 backdrop-blur-md flex items-center justify-center p-0 rounded-none">
      
      <button onClick={onClose} className="absolute top-4 right-4 text-white p-3 bg-[#004aad] border-2 border-[#00bbff] hover:bg-[#1b79ee] transition-colors z-50 rounded-none shadow-[0_0_15px_#00bbff]">
        <X className="w-5 h-5" />
      </button>

      <div className="relative h-full w-full md:max-w-lg bg-black md:h-[85vh] border-0 md:border-4 md:border-[#004aad] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col justify-between rounded-none">

        {/* Dynamic Verification Header Grid Overlay */}
        <div className="absolute top-0 left-0 right-0 p-4 z-20 bg-gradient-to-b from-black via-black/70 to-transparent rounded-none">
          <div className="flex gap-1 mb-4 rounded-none">
            {stories.map((_, idx) => (
              <div key={idx} className="h-1 flex-1 bg-white/20 rounded-none overflow-hidden">
                <div className={`h-full transition-all duration-300 rounded-none ${idx <= currentIndex ? 'bg-[#00bbff]' : 'w-0'}`} style={{ width: idx <= currentIndex ? '100%' : '0%' }} />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between rounded-none">
            <div className="flex items-center gap-3 rounded-none">
              <Avatar className="w-9 h-9 border-2 border-[#1b79ee] rounded-none">
                <AvatarImage src={currentStory.vendorAvatar} className="rounded-none object-cover" />
                <AvatarFallback className="rounded-none bg-[#004aad] text-white font-mono text-xs">PE</AvatarFallback>
              </Avatar>
              <span className="text-white font-black text-xs uppercase tracking-wider drop-shadow-md rounded-none">{currentStory.vendorName}</span>
            </div>

            <div className="bg-[#004aad] text-white border border-[#00bbff] px-2 py-1 text-[8px] font-mono font-black tracking-widest rounded-none flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#00bbff]" />
              <span>FORM VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Cinematic Main Viewport Area */}
        <div className="h-full w-full flex items-center justify-center bg-zinc-950 rounded-none">
          {currentStory.mediaType === 'VIDEO' ? (
            <video src={currentStory.mediaUrl} className="w-full h-full object-contain rounded-none" autoPlay playsInline />
          ) : (
            <Image width={1200} height={800} src={currentStory.mediaUrl} alt="Ecosystem File" className="w-full h-full object-contain rounded-none" />
          )}
        </div>

        {/* Structural Navigation Dividing Zones */}
        <div className="absolute inset-y-0 left-0 w-1/4 z-10 cursor-pointer rounded-none" onClick={handlePrev} />
        <div className="absolute inset-y-0 right-0 w-1/4 z-10 cursor-pointer rounded-none" onClick={handleNext} />

        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 pointer-events-none z-20 rounded-none">
          {currentIndex > 0 ? (
            <div className="bg-[#004aad]/80 border border-[#1b79ee] p-2 text-white rounded-none"><ChevronLeft className="w-5 h-5" /></div>
          ) : <div />}
          {currentIndex < stories.length - 1 ? (
            <div className="bg-[#004aad]/80 border border-[#1b79ee] p-2 text-white rounded-none"><ChevronRight className="w-5 h-5" /></div>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: UPLOAD ARCHITECTURE MODAL
// ==========================================
function UploadStoryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#004aad]/40 flex items-center justify-center backdrop-blur-sm p-4 rounded-none">
      <div className="bg-white border-4 border-[#004aad] p-6 w-full max-w-sm rounded-none shadow-[8px_8px_0px_#1b79ee]">
        
        <div className="border-b-2 border-[#004aad]/10 pb-3 mb-4 rounded-none">
          <span className="text-[9px] font-mono font-bold text-[#1b79ee] uppercase tracking-widest block">FORM ENGINEERING REGISTER</span>
          <h3 className="font-black text-lg text-[#004aad] uppercase tracking-tight">Upload Mold Assets</h3>
        </div>

        <div className="h-44 bg-white border-2 border-dashed border-[#004aad]/40 hover:border-[#00bbff] transition-colors cursor-pointer flex flex-col items-center justify-center text-slate-400 group/drop rounded-none">
          <div className="bg-[#004aad]/5 p-3 border border-[#004aad]/20 group-hover/drop:bg-[#004aad] group-hover/drop:text-white transition-all rounded-none mb-2">
            <Plus className="w-5 h-5 text-[#004aad] group-hover/drop:text-white" />
          </div>
          <span className="text-xs font-black text-[#004aad] uppercase tracking-wider">Select Media File</span>
          <span className="text-[9px] font-mono mt-1 text-slate-400">MP4, JPEG, PNG (MAX 50MB)</span>
        </div>

        <div className="flex gap-3 mt-6 rounded-none">
          <Button 
            variant="outline" 
            className="flex-1 rounded-none border-2 border-[#004aad] text-[#004aad] font-black uppercase text-xs tracking-wider h-11 hover:bg-[#004aad]/5"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            className="flex-1 rounded-none bg-[#004aad] border-2 border-[#004aad] text-white font-black uppercase text-xs tracking-wider h-11 shadow-[2px_2px_0px_#1b79ee] hover:bg-[#1b79ee] hover:border-[#1b79ee] hover:shadow-[0_0_10px_#00bbff,2px_2px_0px_#00bbff] transition-all"
          >
            Deploy
          </Button>
        </div>

      </div>
    </div>
  );
}