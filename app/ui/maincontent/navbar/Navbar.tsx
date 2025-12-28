import Image from 'next/image'
import React from 'react'
import { MdMusicNote, MdSearch } from 'react-icons/md'
import { RiNeteaseCloudMusicLine } from 'react-icons/ri'
import { SiNeteasecloudmusic } from 'react-icons/si'
import Chip from '../../sidebar/component/chip'

export default function Navbar() {
    return (
        <div className="flex px-4 py-3 flex-col gap-6">
           <div className='flex items-center justify-between'>

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
            <div className="flex items-center gap-4 mr-3">
                <span className="p-2 rounded-full bg-white/10 backdrop-blur-md">
                    <RiNeteaseCloudMusicLine size={28} className="text-white" />
                </span>
                <span className="w-12 h-12 rounded-full overflow-hidden 
                 border border-white/1 bg-white/10 
                 backdrop-blur-md shadow-lg border-3 -m-6"
                >
                    <Image
                        src="/profile_3.png"
                        alt="profile"
                        width={44}
                        height={44}
                        style={{ borderRadius: 50 }}
                        className='object-cover'
                         />
                </span>
                {/* <Image
            src="/profile_2.png"
            alt="profile"
            width={50}
            height={20}
            className="rounded-full p-2 object-contain border border-white -m-6"
          />  */}
            </div>
           </div>
           <div className='flex items-center gap-2'>
                <Chip title='Energize'/>
                <Chip title='Feel good'/>
                <Chip title='Relax'/>
                <Chip title='Workout'/>
                <Chip title='Sad'/>
                <Chip title='Party'/>
                <Chip title='Focus'/>
                <Chip title='Romance'/>
                <Chip title='Sleep'/>

            </div>
        </div>
    );
}
