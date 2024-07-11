import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector((store)=> store.movies)
  
  return (
    <div className='p-2 text-white -mt-52 relative z-10 bg-black'>
      <MovieList title={"Now Playing"} movies={movies.moviesList}/>
      
    </div>
  )
}

export default SecondaryContainer