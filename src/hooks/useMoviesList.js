import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/auth'
import { useDispatch, useSelector } from 'react-redux'
import { addMovies } from '../utils/movieslice'



const useMoviesList = () => {

  const dispatch = useDispatch()
  const addMovie = useSelector((store)=> store.movies.moviesList)

  const getMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      const json = await data.json(); 
      dispatch(addMovies(json.results)) 
  }

  useEffect(()=>{
    !addMovie && getMovies();
  },[])
}

export default useMoviesList;