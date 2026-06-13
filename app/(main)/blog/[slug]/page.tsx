import React from 'react';
 import { Clock, User2, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BLOG_DATABASE } from '@/app/(main)/blog/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  // MATCH DYNAMIC SYSTEM SLUG PATH AGAINST DATABASE MATRIX
  const post = BLOG_DATABASE.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="w-full bg-white py-16 px-4 md:px-12 rounded-none text-left min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8 rounded-none">
        
        {/* BACK TO CONSOLE CONTROL ACTION BLOCK */}
        <Link href="/">
          <button className="flex items-center gap-2 border-2 border-[#004aad] text-[#004aad] py-2 px-4 text-[10px] font-black uppercase tracking-widest transition-all duration-200 bg-white rounded-none shadow-[3px_3px_0px_#1b79ee] hover:bg-[#004aad] hover:text-white outline-none cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Hub Console</span>
          </button>
        </Link>

        {/* METADATA TOP BANNER PLATE */}
        <div className="border-b-4 border-[#004aad] pb-6 space-y-4 rounded-none">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-none">
            <span className="text-[10px] font-mono font-black text-white bg-[#1b79ee] px-3 py-1 tracking-widest rounded-none">
              // {post.category}
            </span>
            <div className="flex items-center gap-4 font-mono text-[10px] font-black text-[#004aad]/70 rounded-none">
              <span className="flex items-center gap-1"><User2 className="w-3.5 h-3.5 text-[#1b79ee]" /> BY {post.author}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#1b79ee]" /> {post.timestamp}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-[#004aad] uppercase tracking-tighter leading-tight rounded-none">
            {post.title}
          </h1>
        </div>

        {/* HERO MEDIA EMBED CHASSIS */}
        <div className="relative w-full h-[300px] md:h-[450px] border-4 border-[#004aad] bg-zinc-900 shadow-[6px_6px_0px_#1b79ee] rounded-none overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover rounded-none"
            priority
          />
        </div>

        {/* DEPLOYED RICH TEXT SPECIFICATION LAYERS */}
        <div className="p-8 bg-[#004aad]/5 border-2 border-[#004aad] rounded-none space-y-6">
          <p className="text-base md:text-lg font-black text-[#004aad] uppercase tracking-wide leading-relaxed">
            {post.summary}
          </p>
          <div className="text-slate-700 text-sm md:text-base font-semibold leading-loose space-y-4 font-sans tracking-wide">
            <p>
              PrecastXchange engineering channels confirm that standard operations require structural compliance frameworks. Advanced processing metrics indicate validation loops minimize down-cycle operational layout times by maintaining clean surface line connections across all casting structures.
            </p>
            <p>
              By leveraging dynamic physical blueprint nodes alongside robust diagnostic interfaces, local operators and structural investor partners can inspect structural parameters seamlessly without parsing intensive alphanumeric catalogs or handling unverified documentation pipelines.
            </p>
          </div>
        </div>

        {/* COMPLIANCE SECURITY ANCHOR FOOTER CARD */}
        <div className="border-4 border-[#004aad] p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 rounded-none shadow-[4px_4px_0px_#00bbff]">
          <div className="flex items-center gap-3 rounded-none">
            <div className="p-2 bg-[#004aad] text-white rounded-none border border-[#00bbff]">
              <ShieldCheck className="w-5 h-5 text-[#00bbff]" />
            </div>
            <div className="rounded-none">
              <span className="text-[9px] font-mono font-black text-[#1b79ee] uppercase tracking-widest block">AUTHENTIC DATA NODE</span>
              <span className="text-xs font-black text-[#004aad] uppercase tracking-tight">Vetted Ben (Jr) & Grace Venture Network Asset</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#004aad]/50">DOCUMENT ID // PXG-ID-{post.id}</span>
        </div>

      </div>
    </main>
  );
}