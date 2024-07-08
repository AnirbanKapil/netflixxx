import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'


function Browse() {
   
  useMoviesList();

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse