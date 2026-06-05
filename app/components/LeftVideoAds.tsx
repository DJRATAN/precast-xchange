'use client'

import React from 'react'

export default function LeftVideoAds() {
    // Array updated to include the Vimeo link as the 4th asset token slot
    const adVideos = [
        "/video/Mega_Industries.mp4",
        "/video/PrecastXchange_New.mp4",
        "/video/Total_Tech.mp4",
        "https://player.vimeo.com/video/1188514719?h=582941b6fb&autoplay=1&loop=1&muted=1&background=1"
    ]

    return (
        <div className="w-full h-full flex flex-col justify-between p-1 gap-1 bg-white rounded-none">
            {adVideos.map((videoUrl, index) => {
                const isVimeo = videoUrl.includes('vimeo.com');

                return (
                    <div
                        key={`left-ad-${index}`}
                        className="relative w-full h-[116px] bg-white overflow-hidden border border-[#004aad]/40 hover:border-[#1B79EE] transition-colors duration-300 group rounded-none"
                    >
                        {isVimeo ? (
                            /* 4th Element: Optimized Vimeo Player Integration Pipeline */
                            <iframe
                                title={`vimeo-player-${index}`}
                                src={videoUrl}
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full object-contain pointer-events-none scale-105 opacity-80 group-hover:opacity-100 transition-opacity rounded-none"
                            />
                        ) : (
                            /* Local Native Streaming Core Engine Slots */
                            <video
                                src={videoUrl}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity rounded-none"
                            />
                        )}

                        {/* Interactive Data Signal Node - Strict 2-Color Palette Mapping */}
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-none bg-[#1B79EE] animate-pulse z-20" />
                    </div>
                );
            })}
        </div>
    )
}