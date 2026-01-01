import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'

export default function LibraryComponent({ img, title, artist, time }: { img: string, title: string, artist: string, time: string }) {
    return (
        <div className='flex items-center gap-50 w-full justify-between text-2xl'>
           <div className='flex items-center justify-end gap-3'>
           <Image src={img} alt="" width={60} height={60} className='w-9 h-12 object-cover rounded-sm' />
           <p>{title}</p>
           </div>
           <p className='text-neutral-100/40'>{artist}</p>
           <p className='text-neutral-100/40'>{time}</p>
           <div className='flex items-center gap-2 text-neutral-100/40'>
              <MdFavoriteBorder size={30}/>
              <BsThreeDotsVertical size={25}/>

           </div>

        </div>
    )
}
