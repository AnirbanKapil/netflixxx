import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <div className='w-36 p-2 m-2'>
      <img alt='img'
      src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}

export default MovieCard