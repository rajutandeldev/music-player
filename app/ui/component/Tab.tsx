'use client'
import React from 'react'

import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("playlist");

  const tabs = ["playlist", "artists", "albums", "streams"];

  return (
    <div className='p-4'>
      <div className="flex gap-6 border-b border-white/10 p-2">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 capitalize transition
              ${
                active === tab
                  ? "text-white border-b-2 border-purple-500"
                  : "text-white/60 hover:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 text-white">
        {active === "playlist" && <p>Playlist content</p>}
        {active === "artists" && <p>Artists content</p>}
        {active === "albums" && <p>Albums content</p>}
        {active === "streams" && <p>Streams content</p>}
      </div>
    </div>
  );
}
