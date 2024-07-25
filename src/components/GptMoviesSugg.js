import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function GptMoviesSugg({title,img,release}) {
  return (
    <div className='flex'>
      <div className='w-36 text-center m-4 bg-slate-100 rounded-lg hover:bg-slate-300'>
        <img
        className='w-36 p-2' 
        alt='poster' 
        src={IMG_CDN_URL+img} />
        <h3>{title}</h3>
        <h6>{release}</h6>
      </div>
    </div>
  )
}

export default GptMoviesSugg