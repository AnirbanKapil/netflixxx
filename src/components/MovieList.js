import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  
  
 return (
    <div>
         <h1 className='p-2 m-2 font-extrabold'>{title}</h1> 
        <div className='flex overflow-x-scroll'>
        
          <div className='flex '> 
            {movies && movies.map((movie)=>
               <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
          </div> 
        </div>
    </div>
  )
}

export default MovieList