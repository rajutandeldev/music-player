import Image from 'next/image'
import React from 'react'

export default function LibraryComponent({ img, title, subtitle }: { img: string, title: string, subtitle: string }) {
    return (
        <div className='flex items-center justify-between gap-1'>
            {/* <Image src={img} alt="" className='w-5 h-5'/> */}
            <span className='bg-amber-50'></span>
            <div className='flex items-center flex-col'>
                <p>{title}</p>
                <p className='text-xs'>{subtitle ?? subtitle}</p>
            </div>

        </div>
    )
}
