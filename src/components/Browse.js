import React from 'react'
import Header from './Header'
import useMoviesList from '../hooks/useMoviesList'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcommingMovies from '../hooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


function Browse() {
  
 const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

  useMoviesList();
  usePopularMovies();
  useUpcommingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (<GptSearch />) : 
      ( <>  <MainContainer /> 
      <SecondaryContainer /> 
      </> )}
     
      
    </div>
  )
}


export default Browse