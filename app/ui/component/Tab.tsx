'use client'
import React from 'react'

import { useState } from "react";
import LibraryComponent from '../sidebar/component/library.component';

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
        {active === "playlist" && 
           <div className='flex flex-col gap-5'>
              <LibraryComponent img='/arvind-pillai-Yl4Y7COttGo-unsplash.jpg' artist='Annee Lenox' title='Havana song' time='2:50'/>
              <LibraryComponent img='/black-man-posing-with-headphones.jpg' artist='John Lennon' title='Love Stories' time='2:50'/>
              <LibraryComponent img='/medium-shot-man-playing-guitar-studio.jpg' artist='Ruby Rivers' title='Morning star' time='2:50'/>
              <LibraryComponent img='/portrait-person-playing-music-saxophone.jpg' artist='Finn Ocean' title='Acoustic doe' time='2:50'/>
              <LibraryComponent img='/woman-stage-with-acoustic-guitar.jpg' artist='Tems Ocean' title='Free minds' time='2:50'/>

          </div>
         }
        {active === "artists" && <p>Artists content</p>}
        {active === "albums" && <p>Albums content</p>}
        {active === "streams" && <p>Streams content</p>}
      </div>
    </div>
  );
}
