import React from 'react'
import {IMG_CDN_URL} from "../utils/constants"



function SearchedMovies({poster,title}) {
  return (
   <div className='ml-2 m-1 p-2 w-36 text-center hover:bg-slate-300'>
    <img className='rounded-md' alt='poster' src={IMG_CDN_URL+poster}/>
    <h2>{title}</h2>
   </div>    
)
}

export default SearchedMovies