"use client"
import React from 'react'
import Chip from '../component/chip'
import { LuLibrary } from 'react-icons/lu'
import { MdSearch } from 'react-icons/md'
import LibraryComponent from '../component/library.component'
import PlaylistComponent from '../component/Playlist.component'
import { TiPlus } from 'react-icons/ti'

export default function Library() {
    return (
        <div className='bg-white/10
            backdrop-blur-xl
            rounded-2xl
            border border-white/10
            shadow-2xl
            p-4
            flex
            flex-col
            gap-3
            '
        >
            <div className='flex items-center justify-between text-neutral-400 '>
                <div className='flex items-center gap-2 '>
                    <LuLibrary />
                    <p>Your Library</p>
                </div>
                <MdSearch size={20} />
            </div>
            <div className='flex flex-col justify-between gap-5'>

                <div className='flex items-center gap-2 w-full'>
                    <Chip title='Playlist' />
                    <Chip title='Albums' />
                    <Chip title='Podcasts' />
                </div>
                <div className='flex flex-col gap-4'>
                    <PlaylistComponent
                        img='/profile_1.png'
                        title='Liked Songs'
                        subtitle='Playlist'
                        songsCount={49}
                    />
                    <PlaylistComponent
                        img='/profile_2.png'
                        title='Top Songs - Global'
                        subtitle='Playlist'
                        songsCount={49}
                    />
                    <PlaylistComponent
                        img='/profile_3.png'
                        title='Yah! The Fourth Album'
                        subtitle='Album'
                        songsCount={23}
                    />
                    <PlaylistComponent
                        img='/profile_4.png'
                        title='The First Playlist'
                        subtitle='Playlist'
                        songsCount={44}
                    />
                    
                </div>
                <div>
                    <button className='bg-white/10
                    backdrop-blur-xl
                    rounded-2xl
                    border border-white/10
                    shadow-2xl
                    w-full
                    flex
                    items-center
                    gap-1
                    py-3
                    px-2
                    justify-center
            ' type='button'><span><TiPlus /></span> Add Playlist</button>
                </div>
            </div>

        </div>
    )
}
