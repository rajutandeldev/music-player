import React from 'react'
import PlaylistComponent from '../sidebar/component/Playlist.component'
import { MdFavoriteBorder } from 'react-icons/md'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'

export default function Rightbar() {
  return (
    <div className='
          bg-white/10
            backdrop-blur-xl
            rounded-2xl
            border border-white/10
            shadow-2xl
            p-2
            flex-1
            '>
      <div className='flex items-center justify-between p-3'>
        <p className='text-md'>Recent Played</p>
        <p className='text-neutral-100/40'>See all</p>
      </div>

      <div className='flex flex-col gap-4 h-[400px] p-2 justify-between'>
        <div>


          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/brett-jordan-x3wDxZJx9qs-unsplash.jpg'
              title='Liked Songs'
              subtitle='Playlist'
              songsCount={49}
            />
            <MdFavoriteBorder size={30} />
          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/klim-musalimov-YkvjGqSeUGQ-unsplash.jpg'
              title='Top Songs - Global'
              subtitle='Playlist'
              songsCount={49}
            />
            <MdFavoriteBorder size={30} />

          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/seyi-ariyo-6YgYRcyQK_s-unsplash.jpg'
              title='Yah! The Fourth Album'
              subtitle='Album'
              songsCount={23}
            />
            <MdFavoriteBorder size={30} />


          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/klim-musalimov-YkvjGqSeUGQ-unsplash.jpg'
              title='The First Playlist'
              subtitle='Playlist'
              songsCount={44}
            />
            <MdFavoriteBorder size={30} />

          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/brett-jordan-x3wDxZJx9qs-unsplash.jpg'
              title='Liked Songs'
              subtitle='Playlist'
              songsCount={49}
            />
            <MdFavoriteBorder size={30} />
          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/klim-musalimov-YkvjGqSeUGQ-unsplash.jpg'
              title='Top Songs - Global'
              subtitle='Playlist'
              songsCount={49}
            />
            <MdFavoriteBorder size={30} />

          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/seyi-ariyo-6YgYRcyQK_s-unsplash.jpg'
              title='Yah! The Fourth Album'
              subtitle='Album'
              songsCount={23}
            />
            <MdFavoriteBorder size={30} />


          </div>
          <div className='flex items-center justify-between'>
            <PlaylistComponent
              img='/klim-musalimov-YkvjGqSeUGQ-unsplash.jpg'
              title='The First Playlist'
              subtitle='Playlist'
              songsCount={44}
            />
            <MdFavoriteBorder size={30} />

          </div>
        </div>
        <div className='flex flex-col gap-3 bg-pink-600 p-3 rounded-2xl'>
          <div className='flex items-center justify-between '>
            <div className='flex items-center gap-2'>
              <BsFillLightningChargeFill size={30} className='text-black bg-white rounded-full p-2'/>
              <p className='text-white/80'>Listen music offline</p>
            </div>
            <IoClose size={30} className='bg-neutral-100/40 text-white rounded-full p-2'/>

          </div>

          <p className='text-wrap'>
            Experience listening to music offline with the best quality
          </p>
          <button className='rounded-3xl text-lg bg-white p-3 text-black text-bold'>Upgrade No</button>
        </div>


      </div>


    </div>
  )
}
