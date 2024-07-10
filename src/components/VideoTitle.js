import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='w-screen aspect-video pt-52 pl-6 absolute text-white bg-gradient-to-r from-black opacity-100'>
      <h1 className='font-extrabold text-6xl'>{title}</h1>
      <p className='pt-6 text-sm w-1/4'>{overview}</p>
      <div>
        <button className='px-6 py-2 m-2 bg-gray-800 rounded-xl hover:bg-opacity-60'>▶️ Play</button>
        <button className='px-6 py-2 m-2 bg-slate-800 rounded-xl hover:bg-opacity-60'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle