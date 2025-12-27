import Image from 'next/image'
import React from 'react'

export default function PlaylistComponent({ img, title, subtitle, songsCount }: { img: string, title: string, subtitle: string, songsCount: number }) {
    console.log(img)
    return (
        <div className='flex items-center gap-3 '>
            <Image src={img} alt="" width={50} height={50} className='w-9 h-12 object-cover' />
            {/* <span className='bg-amber-100 p-5'></span> */}
            <div className='flex items-start flex-col'>
                <p className='font-medium text-sm text-white'>{title}</p>
                <p className='text-xs text-neutral-300' style={{ fontSize: '10px' }}>{subtitle ?? subtitle} {songsCount} songs</p>
            </div>

        </div>
    )
}
