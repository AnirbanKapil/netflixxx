import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-36 mx-6'>
      <h1 className='font-extrabold text-6xl'>{title}</h1>
      <p className='pt-6 text-lg w-1/2'>{overview}</p>
      <div>
        <button className='px-6 py-2 m-2 bg-gray-400 rounded-xl'>▶️ Play</button>
        <button className='px-6 py-2 m-2 bg-gray-400 rounded-xl'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle