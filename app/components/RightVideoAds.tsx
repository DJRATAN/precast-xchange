'use client'

import React from 'react'

export default function RightVideoAds() {
    // Array of 5 video URLs (Replace placeholders with your actual facility operations or trench assembly loops)
    const adVideos = [
        "/video/Total_Tech.mp4",
        "/video/PrecastXchange_New.mp4",
        "/video/Mega_Industries.mp4"
    ]

    return (
        <div className="w-full h-full flex flex-col justify-between   p-1 gap-1">
            {adVideos.map((videoUrl, index) => (
                <div
                    key={`right-ad-${index}`}
                    className="relative w-full h-[116px]   overflow-hidden border border-[#1B79EE]/40 hover:border-[#004aad] transition-colors duration-300 group"
                >
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />

                    {/* <div className="absolute bottom-1 left-1 bg-[#1B79EE] text-white text-[8px] px-1 font-mono uppercase tracking-tighter">
                        Feed #{index + 6}
                    </div> */}
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#004aad] animate-pulse" />
                </div>
            ))}
        </div>
    )
}