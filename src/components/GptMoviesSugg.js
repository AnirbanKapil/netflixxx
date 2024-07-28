import React from 'react'
import { useSelector } from 'react-redux'
import SearchedMovies from './SearchedMovies';


function GptMoviesSugg() {
  
  const searchMovies = useSelector((store) => store.gpt.searchMovies)
  if(!searchMovies) return null;

  return (
    <div className='flex flex-wrap'>
      {searchMovies.map((movies)=> <SearchedMovies key={movies.id} poster={movies.poster_path} 
      title={movies.title}/>)}
    </div>
  )
}

export default GptMoviesSugg