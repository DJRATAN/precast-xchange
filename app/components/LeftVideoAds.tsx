'use client'

import React from 'react'

export default function LeftVideoAds() {
    // Array of 5 video URLs (Replace placeholders with your actual precast machinery/molds mp4 clips)
    const adVideos = [
        "/video/Mega_Industries.mp4",
        "/video/PrecastXchange_New.mp4",
        "/video/Total_Tech.mp4"
    ]

    return (
        <div className="w-full h-full flex flex-col justify-between p-1 gap-1">
            {adVideos.map((videoUrl, index) => (
                <div
                    key={`left-ad-${index}`}
                    className="relative w-full h-[116px]  overflow-hidden border border-[#004aad]/40 hover:border-[#1B79EE] transition-colors duration-300 group"
                >
                    {/* Native High-Performance HTML5 Streaming Engine */}
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Minimalist 2-Color Overlays representing active data signals */}
                    {/* <div className="absolute bottom-1 left-1 bg-[#004aad] text-white text-[8px] px-1 font-mono uppercase tracking-tighter">
                        Live Stream {index + 1}
                    </div> */}
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#1B79EE] animate-pulse" />
                </div>
            ))}
        </div>
    )
}