import React from 'react'
import { MdHome } from 'react-icons/md'

const MenuItems = [
    {
        title:"Home",
        path:"/",
        icons:<MdHome/>
    }
]
export default function Sidebar() {
    return (
        <div className='
          bg-white/10
            backdrop-blur-xl
            rounded-2xl
            border border-white/10
            shadow-2xl
            p-2
            m-2
            flex-1
            '
        >  
          <ul>
          {MenuItems.map(data=>(
                <li className="flex items-center gap-1 " key={data.title}><span>{data.icons}</span>{data.title}</li>
            ))}
          </ul>
           
        </div>
    )
}
