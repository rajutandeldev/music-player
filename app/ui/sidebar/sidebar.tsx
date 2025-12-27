import React from 'react'
import { MdAppsOutage, MdHome, MdSearch } from 'react-icons/md'
import Library from './library/library'

const MenuItems = [
    {
        title: "Home",
        path: "/",
        icons: <MdHome />
    },
    {
        title: "Search",
        path: '/',
        icons: <MdSearch />
    },
    {
        title: "Explore",
        path: "/",
        icons: <MdAppsOutage />
    }
]
export default function Sidebar() {
    return (
        <div className='flex-1 flex flex-col gap-4'>

            <div className='
          bg-white/10
            backdrop-blur-xl
            rounded-2xl
            border border-white/10
            shadow-2xl
            '
            >
                <ul className='p-4'>
                    {MenuItems.map(data => (
                        <li className="flex items-center gap-2 text-neutral-400 p-3 rounded-3xl hover:text-stone-50 cursor-pointer" key={data.title}><span>{data.icons}</span>{data.title}</li>
                    ))}
                </ul>

            </div>
            <div>
             <Library/>
            </div>
        </div>

    )
}
