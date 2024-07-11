import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';


function Browse() {
   
  useMoviesList();
  usePopularMovies();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}


export default Browse