import Image from 'next/image'
import React from 'react'
import { MdMusicNote, MdSearch } from 'react-icons/md'
import { RiNeteaseCloudMusicLine } from 'react-icons/ri'
import { SiNeteasecloudmusic } from 'react-icons/si'

export default function Navbar() {
    return (
      <div className="flex items-center justify-between px-4 py-3">
  
        {/* Search box */}
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl 
                        rounded-2xl border border-white/10 shadow-2xl 
                        px-4 py-2 flex-1 max-w-xl">
          <MdSearch size={22} className="text-white/70" />
  
          <input
            type="text"
            placeholder="Search artist, songs or albums"
            className="bg-transparent outline-none text-white 
                       placeholder-white/60 w-full"
          />
        </div>
  
        {/* Right section */}
        <div className="flex items-center gap-4">
          <span className="p-2 rounded-full bg-white/10 backdrop-blur-md">
            <RiNeteaseCloudMusicLine size={28} className="text-white" />
          </span>
  
          <Image
            src="/profile_2.png"
            alt="profile"
            width={44}
            height={44}
            className="rounded-full object-cover border border-white/20"
          />
        </div>
      </div>
    );
  }
  