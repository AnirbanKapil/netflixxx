import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSugg from './GptMoviesSugg'



function GptSearch() {
  return (
    <div className='bg-slate-200'>
     <GptSearchBar />
     <GptMoviesSugg />
    </div>
  )
}

export default GptSearch