import React from 'react'

export default function Chip({ title }: { title: string }) {
    return (
        <div className='
         p-2   
         text-xs
       bg-white/2
        backdrop-blur-xl
        rounded-xl
        text-neutral-300
        w-full
        text-center
    '>
            <p>{title}</p>
        </div>
    )
}
